import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    name: "",
    email: "",
    description: "",
  };

  handleChange = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
    }
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      description: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us");

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message sent");
      } else if (response.data.status === "fail") {
        alert("Message failed to send");
      }
    });

    this.resetForm();
  };

  render() {
    return (
      // <div className="form">
      //   <form onSubmit={this.handleSubmit}>
      //     <table>
      //       <tr>
      //         <td>
      //           <input
      //             type="text"
      //             onChange={this.handleChange}
      //             id="name"
      //             placeholder="Name"
      //           />
      //         </td>
      //       </tr>
      //       <tr>
      //         <td>
      //           <input
      //             type="text"
      //             onChange={this.handleChange}
      //             id="email"
      //             placeholder="Email"
      //             required
      //           />
      //         </td>
      //       </tr>
      //       <tr>
      //         <td>
      //           <input
      //             type="text"
      //             onChange={this.handleChange}
      //             id="description"
      //             placeholder="Message"
      //           />{" "}
      //         </td>
      //       </tr>
      //       <tr>
      //         <td></td>
      //       </tr>
      //     </table>
      //     <center>
      //       <button className="submit-btn" type="submit">
      //         Submit
      //       </button>
      //     </center>
      //   </form>
      // </div>

      <div className="form">
        <form onSubmit={this.handleSubmit}>
          {" "}
          <div class="form-input">
            <input
              type="text"
              onChange={this.handleChange}
              id="name"
              value={this.state.name}
              placeholder="Name"
            />
          </div>
          <div class="form-input">
            <input
              type="text"
              onChange={this.handleChange}
              id="email"
              placeholder="Email"
              value={this.state.email}
              required
            />
          </div>
          <div class="form-input">
            <input
              type="text"
              onChange={this.handleChange}
              id="description"
              value={this.state.description}
              placeholder="Message"
            />
          </div>
          <div>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
