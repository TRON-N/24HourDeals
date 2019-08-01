import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLayout from "./Components/Layout/Layout";
import Deals from "./Views/Deals";
import CDeals from "./Views/CDeals";
import Cart from "./Views/Cart";
import DealDetails from "./Views/DealDetails";
import Profile from "./Components/Profile/Profile";
import categories from "./Services/CategoriesService";
import deal from "./Services/DealsService";

export default class App extends Component {
  state = {
    currentRoute: 0,
    deals: [],
    cart: [],
    categories: [],
    profile: {
      id: 1,
      title: "Ash Ketchum",
      avatar: "https://pbs.twimg.com/media/CXt6TRMWkAAYtlB.jpg",
      desc: "Trainer from Pallet Town"
    },
    history: [
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
        title: "More Shoes",
        desc: "Distint World",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhIVnfYQHFIx5utaNEnDgdtlcvIQRYKufVwiKPx3k3Nff3tt1",
        price: 100
      }
    ]
  };

  addToCart = (deal, done, fail) => {
    if (
      this.state.cart.find(item => item.DealId === deal.DealId) === undefined
    ) {
      const cart = [...this.state.cart, deal];
      this.setState({ cart: cart }, done);
    } else {
      fail();
    }
  };
  removeFromCart = id => {
    const cart = this.state.cart.filter(item => item.DealId !== id);
    this.setState({ cart: cart });
  };

  componentWillMount() {
    categories.getCategories(data => this.setState({ categories: data }));
    deal.getAllDeals(data => this.setState({ deals: data }));
  }

  render() {
    return (
      <Router>
        <AppLayout categories={this.state.categories}>
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
          <Route
            path="/category/:name"
            render={props => (
              <CDeals
                {...props}
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

          <Route
            path="/profile"
            render={props => (
              <Profile
                {...props}
                profile={this.state.profile}
                history={this.state.history}
              />
            )}
          />
        </AppLayout>
      </Router>
    );
  }
}
