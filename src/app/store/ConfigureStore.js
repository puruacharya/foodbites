import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
export const ConfigureStore = (preloadedState) => {
    const middleware = [];
    const middlewareEnhancer = applyMiddleware(...middleware);
    const storeEnhancers= [middlewareEnhancer];

    const composedEnhancer = compose(storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );


return store;
};