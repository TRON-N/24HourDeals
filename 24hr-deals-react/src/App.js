import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppLayout from "./Components/Layout/Layout";
import Deals from "./Views/Deals";
import Cart from "./Views/Cart";
import DealDetails from "./Views/DealDetails";
import axios from 'axios';
import Profile from "./Components/Profile/Profile";
import categories from "./Services/Categories"

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
        title: "More Shoes",
        desc: "Distint World",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhIVnfYQHFIx5utaNEnDgdtlcvIQRYKufVwiKPx3k3Nff3tt1",
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
        title: "Man Purse",
        desc: "Fisher man's greatest love",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphUAAQgwd9bZCexXJC6YHJXDTO_LQHK9n2htgt-RXl_NB_Jsn",
        price: 100
      },
      {
        id: 5,
        title: "Burger",
        desc: "Best in the city",
        avatar:
          "https://amp.businessinsider.com/images/5c420211b492cb5cdb1d88d4-750-501.jpg",
        price: 100
      }
    ],
    cart: [],
    categories: [
      { id: 1, name: "Shoes" },
      { id: 2, name: "Cellphones" },
      { id: 3, name: "Bags" },
      { id: 4, name: "Jackets" },
      { id: 5, name: "Laptops" }
    ],
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

  customDelete = async(endpoint) => {
    axios.delete(`http://localhost:8080/${endpoint}/`, {
    })
    .then((deals) => {
      this.setState({
        deals
      })
    }).catch((e) => {
      console.log("err", e);
    });
  };
  customGet = async(endpoint, id="") => {// pass null id for get all
    axios.get(`http://localhost:8080/${endpoint}/${id}`, {
    })
    .then((deals) => {
      this.setState({
        deals
      })
    }).catch((e) => {
      console.log("err", e);
    });
  };
  customPost = async(endpoint, body = {}) => {
    axios.post(`http://localhost:8080/${endpoint}/`, 
    body,{
    })
    .then((deals) => {
      this.setState({
        deals
      })
    }).catch((e) => {
      console.log("err", e);
    });
  };
  customPut = async(endpoint, id="") => {
    axios.put(`http://localhost:8080/${endpoint}/${id}`, {
    })
    .then((deals) => {
      this.setState({
        deals
      })
    }).catch((e) => {
      console.log("err", e);
    });
  };
  componentWillMount() {
    categories.getCategories(() => {});
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
