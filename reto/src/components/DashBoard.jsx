import { ObtenerCandidatos } from "../scripts/datos";
import Encabezado from "./Encabezado";

const Dashboard = () =>{
    ObtenerCandidatos("medellin");
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