import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cake {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default HookCakeContainer;
