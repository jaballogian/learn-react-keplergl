import React from 'react'
import keplerGlReducer from "kepler.gl/reducers"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { taskMiddleware } from "react-palm/tasks"
import { Provider } from "react-redux"
import Map from './Components/Map'

const reducers = combineReducers({
  keplerGl: keplerGlReducer
})

const store = createStore(reducers, {}, applyMiddleware(taskMiddleware))

function App() {
  return (
    <Provider store={store}>
      <Map/>
    </Provider>
  );
}

export default App