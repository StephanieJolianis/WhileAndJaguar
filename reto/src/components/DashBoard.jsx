import { ObtenerCiudades, ObtenerPreguntas, ObtenerData, ObtenerCandidatos } from "../scripts/datos";
import Encabezado from "./Encabezado";
import CiudadCandidato from "./SelecciónCiudadCandidato";
import RedesSociales from "./BtnsRedSocial";
import ChartCandidate from "./ChartCandidate";
import SelectTema from "./SelectTema";
import Modal from "./Modal";
import { useState } from "react";
import BtnsComparacion from "./BtnsComparacion";

const Dashboard = () =>{
    const [candidato, setCandidato] = useState([]);
    const [ciudad, setCiudad] = useState("medellin");
    const [redSocial, setRedSocial] = useState("all");
    const [ open, setOpen ] = useState(false);

    ObtenerCandidatos("medellin");

    return (
        <div>
            <div className="section1">
            <Encabezado/>
            <div className="titulo1Dashboard">
            <p className="dashboardtitle">Dashboard</p>
            </div>
            <CiudadCandidato 
            setCandidato={setCandidato}
            ciudad={ciudad}
            setCiudad={setCiudad}
            />
            <RedesSociales data={redSocial} setData={setRedSocial}/>
                <div className="divCarrusel">
                    <div className="contentCarrusel">
                <ChartCandidate red={redSocial} ciudad={ciudad} candidato={candidato}/>
                <SelectTema/>
                </div>
                </div>
            </div>

            <div className="section2">
                <BtnsComparacion showModal={setOpen}/>
            <Modal show={open} close={setOpen}/>
            <div><p>aqui va el versus</p></div>
            </div>
        </div>
)}

export default Dashboard;