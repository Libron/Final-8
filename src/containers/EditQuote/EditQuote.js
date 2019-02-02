import React, {Component, Fragment} from 'react';
import axios from '../../axios-instance';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import {Spinner} from "reactstrap";

class EditQuote extends Component {
    state = {
        quote: null
    };

    getQuoteUrl = () => {
        const id = this.props.match.params.categoryId;
        return 'quotes/' + id + '.json';
    };

    componentDidMount() {
        axios.get(this.getQuoteUrl()).then(response => {
            this.setState({quote: response.data});
        });
    }

    editQuote = quote => {
        axios.put(this.getQuoteUrl(), quote).then(() => {
            alert('Внесено изменение!');
            this.props.history.replace('/');
        });
    };

    render() {
        let form = <Spinner />;

        if (this.state.quote) {
            form = <QuoteForm
                submit={this.editQuote}
                quote={this.state.quote}
            />;
        }

        return (
            <Fragment>
                <h1>Edit quote page</h1>
                {form}
            </Fragment>
        );
    }
}

export default EditQuote;