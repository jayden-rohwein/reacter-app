import React, { Component } from "react";
import AdminLayout from "./layouts/adminLayout/adminLayout";
import AccountForm from "./components/accountForm/accountForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: ["Home", "Login", "Account"]
    };
  }
  render() {
    return (
      <div className="App">
        <AdminLayout menuItems={this.state.menu}>
          <AccountForm />
        </AdminLayout>
      </div>
    );
  }
}

export default App;
