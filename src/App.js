import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider} from "react-redux";

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";

import store from './store'

import './App.css';
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <UsersPage />
          </Route>
          <Route path="/:id/posts" exact>
            <PostsPage />
          </Route>
          <Route path="/:id/posts/:id" exact>
            <SinglePostPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
