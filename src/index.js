import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Video from './pages/cadastro/Video';

const E404RROR = () => (<div>Página não encontrada - Error 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/cadastro/video' component={Video} />
      <Route component={E404RROR} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);