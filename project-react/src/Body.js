import React from "react";
class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      body: "This my body component",
      subsBody: "This my SubBody",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.body}</p>
        <p>{this.state.subsBody}</p>
      </div>
    );
  }
}
export default Body;
