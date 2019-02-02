import React, {Component} from 'react';
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";

import {CATEGORIES} from "../../global";
import axios from '../../axios-instance';

import Spinner from "../../components/Spinner/Spinner";
import CategoriesList from "../../components/CategoriesList/CategoriesList";

class QuotesList extends Component {
    state = {
        quotes: null,
        title: ''
    };

    componentDidMount() {
        this.getQuotes();
    };

    componentDidUpdate(prevProps) {
        if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
            this.getQuotes();
        }
    };

    getQuotes() {
        let url = 'quotes.json';

        const categoryId = this.props.match.params.categoryId;
        if (categoryId) {
            url += `?orderBy="category"&equalTo="${categoryId}"`;
        }

        axios.get(url).then(response => {
            const quotes = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });

            this.setState({quotes, title: CATEGORIES[this.props.match.params.categoryId]});
        });
    };

    deleteHandler = id => {
        if (window.confirm('Do you really want to remove this quote ?')) {
            axios.delete('quotes/' + id + '.json').then(()=>{
                this.props.history.replace('/');
                alert('Цитата удалена !');
            });
        }
    };

    render() {
        let quotes = <Spinner />;

        if (this.state.quotes) {
            quotes = this.state.quotes.map(quote => (
                <Card key={quote.id} body inverse style={{backgroundColor: '#333', borderColor: '#333', marginBottom: '20px'}}>
                    <CardTitle>{quote.author}</CardTitle>
                    <CardText>{quote.text}</CardText>
                    <Button color="warning" className="danger" onClick={() => {this.props.history.push('/quotes/' + quote.id + '/edit')}}>Edit</Button>
                    <Button color="danger" onClick={() => this.deleteHandler(quote.id)}>Delete</Button>
                </Card>
            ));
        }

        return (
            <Row>
                <Col sm={3}>
                    <CategoriesList />
                </Col>
                <Col sm={9}>
                    <h1>{this.state.title}</h1>
                    {quotes}
                </Col>

            </Row>
        );
    }
}

export default QuotesList;