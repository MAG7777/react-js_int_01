import React from "react";

export default class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      rate: 480,
    };
  }

  handleChange = () => {
    let { price, rate } = this.state;
    let sign = price[price.length - 1];
    if (sign === "$") {
      price = parseFloat(price) * rate + "Դ";
    } else if (sign === "Դ") {
      price = parseFloat(price) / rate + "$";
    }

    this.setState({
      price: price,
    });
  };
  render() {
    let { price } = this.state;
    return (
      <p>
        Price: {price}
        <button
          onClick={this.handleChange}
          style={{ width: "20vw", height: "10vh" }}
        >
          Change rate
        </button>
      </p>
    );
  }
}
