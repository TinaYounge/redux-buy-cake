import { BUY_ICE } from "./IceType";

const initialIce = {
  numberOfIce: 20,
};
const IceReduce = (state = initialIce, action) => {
  switch (action.type) {
    case BUY_ICE:
      return { ...state, numberOfIce: state.numberOfIce - 1 };
    default:
      return state;
  }
};

export default IceReduce;
