import { Component } from 'react';
import './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="loader-inner" />
      </div>
    );
  }
}

export default Loader;
