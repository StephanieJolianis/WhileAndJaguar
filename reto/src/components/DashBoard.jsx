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
            <div className="titulo1Dashboard">
            <p>Dashboard</p>
            <p>Para saberlo, se divide el número de palabras relacionadas con el tema escogido por el total de palabras que el candidato usó. El resultado se multiplica por 1000 para mayor claridad</p>
            </div>
            <div id="seleccion"></div>
            <p>aqui van el select de ciudad y candidato</p>
            <div>
                <p>aqui va el carrusel</p>
            </div>
            <div><p>aqui va el versus</p></div>
        </div>
)}

export default Dashboard;