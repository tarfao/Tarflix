import React from 'react';
import Menu from './componentes/Menu';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />
      {dadosIniciais.categorias.map((categoria, categoriaIndex) => 
      (
        <>
        {categoria.videos.map((video, videoIndex) => (
          <BannerMain 
          videoTitle={video.titulo}
          url={video.url}
          />
        ))}

        <Carousel 
        ignoreFirstVideo
        category={categoria}
        />
      </>
      )
      )}
    </div>
  );
}

export default App;
