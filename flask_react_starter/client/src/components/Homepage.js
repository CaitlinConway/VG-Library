import React from "react";

import { connect } from 'react-redux';

class Homepage extends React.Component {


  render() {
    return (
      <>
      <div id={'homepage-title'}>Play With Pals</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
