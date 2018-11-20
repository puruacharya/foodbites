import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigureStore } from './app/store/ConfigureStore';
import { Provider } from 'react-redux';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './app/common/util/ScrollToTop';

const rootEl = document.getElementById('root');

const store = ConfigureStore();

let render = () => {

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>

            </BrowserRouter>
        </Provider>,
        rootEl
    );
};

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render);
    });
}

render();
registerServiceWorker();
