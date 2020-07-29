import React from 'react';
import Menu from './componentes/Menu';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />
          <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          />

        <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />
        <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
        />
        <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
        />
        <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
        />
    </div>
  );
}

export default App;
