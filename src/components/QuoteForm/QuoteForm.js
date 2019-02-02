import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

import {CATEGORIES} from "../../global";

class QuoteForm extends Component {
    constructor(props) {
        super(props);

        if (props.quote) {
            this.state = {...props.quote};
        } else {
            this.state = {
                author: '',
                category: Object.keys(CATEGORIES)[0],
                text: '',
            };
        }
    }

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.submit({...this.state});
    };


    render() {
        return (
            <Form className="QuoteForm" onSubmit={this.submitHandler}>
                <FormGroup row>
                    <Label for="category" sm={2}>Category</Label>
                    <Col sm={10}>
                        <Input
                            type="select"
                            name="category"
                            id="category"
                            value={this.state.category}
                            onChange={this.valueChanged}
                        >
                            {Object.keys(CATEGORIES).map(key => (
                                <option  key={key} value={key}>{CATEGORIES[key]}</option>
                            ))}
                        </Input>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="name" sm={2}>Author</Label>
                    <Col sm={10}>
                        <Input type="text" name="author" id="author" value={this.state.author} onChange={this.valueChanged} />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="category" sm={2}>Quote text</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text"
                               value={this.state.text} onChange={this.valueChanged}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{size: 10, offset: 2}} >
                        <Button type="submit">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default QuoteForm;