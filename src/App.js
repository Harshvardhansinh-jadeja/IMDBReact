import "./App.css";
import React, {Component} from "react";
import {Route, Redirect,Switch} from "react-router-dom";
import Customers from "./Component/Customers";
import Movies from "./Component/movies";
import Rentals from "./Component/Rentals";
import NotFound from "./Component/Not-found";
import NavBar from "./Component/NavBar";
import MovieForm from "./Component/MovieForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/movies/:id" component={MovieForm}/>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals} ></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" component={Movies} />
          <Redirect to="/not-found"/>
          <Redirect from="/not-found" to='/'/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
