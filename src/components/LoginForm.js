import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  changeUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password !== "" && this.state.username !== "") {
      this.props.onSubmit(this.state)
    }
  }


  render() {
    
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input value={this.state.username} id="username" name="username" type="text" onChange={(e) => this.changeUserName(e)}  />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} id="password" name="password" type="password" onChange={(e) => this.changePassword(e)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
