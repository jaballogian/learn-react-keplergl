import React from 'react'
import keplerGlReducer from "kepler.gl/reducers"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { taskMiddleware } from "react-palm/tasks"
import { Provider, useDispatch } from "react-redux"
import KeplerGl from "kepler.gl"
import { addDataToMap } from "kepler.gl/actions"
import useSwr from "swr"
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