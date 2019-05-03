import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from "./Authentication/Authenticate"
import Welcome from "./components/Welcome"
import ModalE from "./components/Reactstrap/Modal";

const ComponentWithAuthenticate = Authenticate(Welcome)(Content);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
}

render() {
  return (
    <div className="App">
      <TopBar toggle={this.toggle}/>
      <Header />
      <Content />
    </div>
  );
}
}

export default App;
