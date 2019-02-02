import React, {Component, Fragment} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import axios from "../../axios-instance";


class AddQuote extends Component {

    addQuote = quote => {
        axios.post('quotes.json', quote).then(() => {
            this.props.history.replace('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h1>Add New Product</h1>
                <QuoteForm submit={this.addQuote}/>
            </Fragment>
        );
    }
}

export default AddQuote;