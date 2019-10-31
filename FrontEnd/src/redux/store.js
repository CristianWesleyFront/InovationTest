import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducer";
import rootSaga from "./saga";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});

const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(...middlewares)
      )
    : applyMiddleware(...middlewares);

const store = createStore(
  combineReducers({
    ...reducers
  }),
  enhancer
);
sagaMiddleware.run(rootSaga);
export { store };
