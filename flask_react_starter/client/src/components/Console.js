import React from "react";

import { connect } from 'react-redux';

class Console extends React.Component {


  render() {
    let console = this.props.console
    return (
      <>
      <div id={'Console-name'}>{console.name}</div>
      </>
    )
};
}

const mapStateToProps = (state) => {

  };

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Console);
