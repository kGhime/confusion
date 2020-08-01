import React, { Component } from "react";

import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

//class based component
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />{" "}
        {/* just obtain in the dish id */}
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />{" "}
        {/* go to DISHES array, sleect dish item and pass to dish detail component
        filter function will give sub-array of the dishes which matches the
        dish id //item in index zero (even though there will be one item) */}
        <Footer />
      </div>
    );
  }
}

export default Main;
