import React from "react";

class Coba extends React.Component {
  constructor() {
    super();
    // Membuat objek state
    this.state = {
      name: "my Name is Ari",
    };
  }
  changeName = () => {
    this.setState({
      name: "my Name is Ballsky",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Ubah Nama</button>
      </div>
    );
  }
}

// class Coba extends React.Component {
//   render() {
//     return (
//       <div>
//         <small>{this.props.sender}:</small>
//         <p>{this.props.content}</p>
//         <hr />
//       </div>
//     );
//   }
// }

// class chatBox extends React.Component {
//   render() {
//     return (
//       <div>
//         <message sender="Ari" content="Sudah Belajar React ?" />
//         <message sender="Ballsky" content="Ini Lagi belajar react" />
//         <message sender="Miki" content="OK, Selamat Belajar" />
//       </div>
//     );
//   }
// }

export default Coba;
