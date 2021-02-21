import { ObtenerCiudades, ObtenerPreguntas, ObtenerData, ObtenerCandidatos } from "../scripts/datos";
import Encabezado from "./Encabezado";

const Dashboard = () =>{
    let ciudades = ObtenerCiudades();
    console.log("ciudades",ciudades);
    let cosa = ObtenerPreguntas();
    console.log("preguntas",cosa);
    ObtenerCandidatos("medellin");
    ObtenerData("twitter","medellin").then(data => console.log(data));
    return (
        <div>
            <Encabezado/>
            <div id="seleccion"></div>
            <p>aqui van el select de ciudad y candidato</p>
            <div>
                <p>aqui va el carrusel</p>
            </div>
            <div><p>aqui va el versus</p></div>
        </div>
)}

export default Dashboard;