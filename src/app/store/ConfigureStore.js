import { createStore, applyMiddleware, compose} from 'redux';

export const ConfigureStore = (preloadedState) => {
    const middleware = [];
    const middlewareEnhancer = applyMiddleware(...middleware);
    const storeEnhancers= [middlewareEnhancer];

    const composedEnhancer = compose(storeEnhancers);

    const store = createStore(
        rootreducer,
        preloadedState,
        composedEnhancer
    );


return store;
    }