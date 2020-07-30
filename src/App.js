import React from 'react';
import Menu from './componentes/Menu';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import dadosIniciais from './data/dados_iniciais.json';
import Footer from './componentes/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
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
        <Footer />
    </div>
  );
}

export default App;
