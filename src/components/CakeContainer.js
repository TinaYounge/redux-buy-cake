import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes-{props.numberOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("cakestate");
  return {
    numberOfCake: state.numberOfCake,
  };
};
const mapDispatchToProps = (dispatch) => {
  console.log("cakesiapatch");

  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
