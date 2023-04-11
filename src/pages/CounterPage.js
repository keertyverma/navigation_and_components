import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

export default function CounterPage({ initialCount }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        };
      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        };
      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd: action.payload,
        };
      case ADD_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel>
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}
