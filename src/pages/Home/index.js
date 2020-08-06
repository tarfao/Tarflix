import React, { useEffect, useState } from 'react';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import PageDefault from '../../componentes/PageDefault';
import categoriesRepository from '../../repositories/categoria'

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoryWithVideos()
    .then(resp => {
      setDadosIniciais([...resp]);
    })
    .catch(err => {
      console.log(err.message)
    })
    
  }, []);

  return (
    <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && <p>Loading....</p>}
        {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
  </PageDefault>
  );
}

export default Home;
