import config from '../config';

const URL_CATEOGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
    return fetch(`${URL_CATEOGORIES}`)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível pegar os dados');
      });

}

function getAllCategoryWithVideos() {
    return fetch(`${URL_CATEOGORIES}?_embed=videos`)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível pegar os dados');
      });

}

export default {
    getAllCategoryWithVideos, getAll
}