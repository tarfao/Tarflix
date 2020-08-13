import config from '../config';
import axios from 'axios';

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

async function create(values) {
  try {
    const link_extra = {
      text: values.text,
      url: values.url
    }
    const dados = { titulo: values.nome, cor: values.cor, link_extra }
    await axios.post(URL_CATEOGORIES, dados)

    console.log("Categoria cadastrada com sucesso!");
  } catch (error) {
    console.error(error)
  }
}

export default {
  getAllCategoryWithVideos, getAll, create
}