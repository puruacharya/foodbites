import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ConfigureStore } from './app/store/ConfigureStore';
import { Provider } from 'react-redux';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './app/common/util/ScrollToTop';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
const store = ConfigureStore();
const rootEl = document.getElementById('root');

let render = () => {

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <ReduxToastr
                    position = 'bottom-right'
                    transitionIn = 'fadeIn'
                    transitionOut = 'fadeOut'
                    />
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
