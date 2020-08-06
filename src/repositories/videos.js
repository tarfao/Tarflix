import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(values) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
    })
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          return resposta;
        }
        throw new Error('Não foi possível cadastrar os dados');
      });

}

export default {
    create
}