import React from "react";
class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "This my Title",
      subsTitle: "This my Subtitle",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.subsTitle}</h3>
      </div>
    );
  }
}
export default Title;
