import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import store from './store/createStore';
import App from './module/App.jsx';

import PostList from './partial/PostList.jsx'
import PostCardContainer from './container/PostContainer.jsx'

import Admin from './container/Admin.jsx';
import LogInterferceContainer from './container/LogInterferceContainer.jsx';
import NewPost from './partial/admin/NewPost.jsx';

injectTapEventPlugin();
ReactDOM.render(
    (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PostList}/>
                <Route path="/post/:postName" component={PostCardContainer}/>
            </Route>
            <Route path="/admin/login" component={LogInterferceContainer}/>
            <Route path="/admin" component={Admin}>
                <Route path="/admin/post/new_post" component={NewPost}/>
            </Route>
        </Router>
    </Provider>
    ), document.getElementById('blog')
);