import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLayout from "./Components/Layout/Layout";
import Deals from "./Views/Deals";
import Cart from "./Views/Cart";
import DealDetails from "./Views/DealDetails";

export default class App extends Component {
  state = {
    currentRoute: 0,
    deals: [
      {
        id: 1,
        title: "hello",
        desc: "Worlds apart",
        avatar:
          "https://revoguewatch.com/wp-content/uploads/2018/07/2Q4A0750-min.jpg",
        price: 100
      },
      {
        id: 2,
        title: "there",
        desc: "Distint World",
        avatar:
          "https://revoguewatch.com/wp-content/uploads/2018/07/2Q4A0750-min.jpg",
        price: 100
      },
      {
        id: 3,
        title: "test",
        desc: "Fisher man's greatest love",
        avatar:
          "https://revoguewatch.com/wp-content/uploads/2018/07/2Q4A0750-min.jpg",
        price: 100
      },
      {
        id: 4,
        title: "test",
        desc: "Fisher man's greatest love",
        avatar:
          "https://revoguewatch.com/wp-content/uploads/2018/07/2Q4A0750-min.jpg",
        price: 100
      },
      {
        id: 5,
        title: "test",
        desc: "Fisher man's greatest love",
        avatar:
          "https://revoguewatch.com/wp-content/uploads/2018/07/2Q4A0750-min.jpg",
        price: 100
      }
    ],
    cart: []
  };

  addToCart = (deal, done, fail) => {
    if (this.state.cart.find(item => item.id === deal.id) === undefined) {
      const cart = [...this.state.cart, deal];
      this.setState({ cart: cart }, done);
    } else {
      fail();
    }
  };
  removeFromCart = id => {
    const cart = this.state.cart.filter(item => item.id !== id);
    this.setState({ cart: cart });
  };

  render() {
    return (
      <Router>
        <AppLayout>
          <Route
            path="/"
            exact
            render={props => (
              <Deals
                {...props}
                deals={this.state.deals}
                addToCart={this.addToCart}
              />
            )}
          />

          <Route path="/:id(\d+)" exact component={DealDetails} />

          <Route
            path="/cart"
            render={props => (
              <Cart
                {...props}
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
              />
            )}
          />
        </AppLayout>
      </Router>
    );
  }
}
