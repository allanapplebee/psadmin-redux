import React, { PropTypes } from 'react';
import Header from './common/header';

class App extends React.Component {
  render() {
    return (
      <div className="containder-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;