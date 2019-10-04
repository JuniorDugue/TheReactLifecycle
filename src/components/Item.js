import React, { Component } from "react";

class Item extends Component {
  render() {
    //you can define
    // const {onClick, item} = this.props
    
    return (
      <div
        onClick={this.props.onClick}
        className={`item${this.props.item.purchased ? " purchased" : ""}`}
      >
        <p>{this.props.item.name}</p>
      </div>
    );
  }
}

export default Item;

//add this dot to the props dot codes since its no longer a functional 
//component, its now a class component
