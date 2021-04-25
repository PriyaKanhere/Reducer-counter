import React, { useReducer } from "react"
import './style.css';


function App() {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCREMENT': {
        return { ...state, count: state.count + 1 }
      }
      case 'DECREMENT': {
        return { ...state, count: state.count - 1 }
      }
      default: {
        return state
      }
    }
  }, {
    count: 0
  })

  let { count } = state
  const add = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const subtract = () => {

    dispatch({ type: 'DECREMENT' })
  }

  return (
    <section>
      <h2>Counter: The Most Novel Example I Could Come Up With</h2>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <div>{count}</div>
        <button onClick={add}>+</button>
      </div>
    </section>
  );
}

export default App;
