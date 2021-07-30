import React from "react";
import { connect } from "react-redux";
import { IceAction } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>number of ice-cream -{props.numberOfIce}</h2>
      <button onClick={props.buyIce}>BUY ICE</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIce: state.numberOfIce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(IceAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
