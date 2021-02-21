import candidatos from '../data/Candidatos.json';
import categorias from '../data/Categorias.json';
import preguntas from '../data/Preguntas.json';

//const urlBase = 'https://storage.googleapis.com/sismoee/2019/bogota/twitter.json';
const urlBase = 'https://storage.googleapis.com/sismoee/2019/';
const ObtenerCandidatos = (ciudad) =>{
    let candidatosCiudad = candidatos.filter(candidatos => candidatos.id === ciudad);
    let objCandidatos = candidatosCiudad[0].entities.map(candidato => {
        return {
            name: candidato.name,
            id: candidato.id,
            color: candidato.color,
            foto: "fotos_candidatos/" + candidato.id + ".png"
        }
    });
    return objCandidatos;
}

const ObtenerCiudades = () =>{
    let listCiudades = categorias
    return listCiudades;
}

const ObtenerPreguntas = () =>{
    let listPreguntas = preguntas
    return listPreguntas;
}

const ObtenerData = (red, ciudad) => {
    let urlData = urlBase + ciudad +'/'+ red + '.json';
    let response = fetch(urlData)
    .then((resp) => resp.json())
    .then(function(data) {
        return data
  })
  .catch(function(error) {
      return error
    });
    return response;
}


export { ObtenerCandidatos, ObtenerCiudades, ObtenerPreguntas, ObtenerData}