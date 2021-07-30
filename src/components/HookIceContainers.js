import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IceAction } from "../redux";

function HookIceContainers() {
  const dispatch = useDispatch();
  const numberOfIce = useSelector((state) => state.ice.numberOfIce);
  return (
    <div>
      <h2>Number of ice -{numberOfIce}</h2>
      <button onClick={() => dispatch(IceAction())}>buy ice</button>
    </div>
  );
}

export default HookIceContainers;
