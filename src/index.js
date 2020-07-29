import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const E404RROR = () => (<div>Página não encontrada - Error 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={E404RROR} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);