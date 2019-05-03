import React from 'react';

const Authenticate = FirstComp => SecondComp =>
  class extends React.Component {
    render() {
      if (!localStorage.getItem('user')) {
        return <FirstComp />;
      } else {
        return <SecondComp />;
      }
    }
  };

export default Authenticate;
