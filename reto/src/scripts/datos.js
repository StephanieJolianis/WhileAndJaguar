import candidatos from '../data/Candidatos.json';
import categorias from '../data/Categorias.json';
import preguntas from '../data/Preguntas.json';

export const ObtenerCandidatos = (ciudad) =>{
    let candidatosCiudad = candidatos.filter(candidatos => candidatos.id === ciudad);
    let objCandidatos = candidatosCiudad[0].entities.map(candidato => {
        return {
            name: candidato.name,
            id: candidato.id,
            color: candidato.color,
            foto: "fotos_candidatos/" + candidato.id + ".png"
        }
    });
    console.log(objCandidatos)
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
export { ObtenerCiudades, ObtenerPreguntas}