import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import MainMenu from "./components/MainMenu/MainMenu";
import QuotesList from "./containers/QuotesList/QuotesList";
import AddQuote from "./containers/AddQuote/AddQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainMenu />
          <Container>
              <Switch>
                  <Route path="/" exact component={QuotesList}/>
                  <Route path="/quotes" exact component={QuotesList}/>
                  <Route path="/add-quote" exact component={AddQuote} />
                  <Route path="/quotes/:categoryId/edit" exact component={EditQuote} />
                  <Route path="/quotes/:categoryId"  component={QuotesList} />
                  <Route render={() => <h1>Not Found</h1>}/>
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
