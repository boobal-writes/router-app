import React, { Component } from "react";
import withRouter from "../utils/routeComponenetHelper";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  render() {
    console.log(this.params);
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default withRouter(ProductDetails);
