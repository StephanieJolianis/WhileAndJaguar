import reactDom from "react-dom";
import { ObtenerCiudades, ObtenerPreguntas, ObtenerData, ObtenerCandidatos }  from "../scripts/datos";
import { useState } from "react";

const SeleccionCiudadCandidatos = (props) =>{
    const [imgsrc, setimgsrc] = useState("");
    let ciudades = ObtenerCiudades();
    let listCandidatos = ObtenerCandidatos(props.ciudad)
    const opCiudades = ciudades.map(ciudad => <option value={ciudad.id} key={ciudad.id}>{ciudad.name}</option>);
    const opCandidatos = listCandidatos.map(candidato => <option value={candidato.id} key={candidato.id}>{candidato.name}</option>);

    const selectCandidato = (ciudad) => {
        props.setCandidato(ObtenerCandidatos(ciudad));
        props.setCiudad(ciudad);
    }
    const changeCandidato = (keyCandidato) =>{
        let selCandidato = listCandidatos.filter(c => c.id == keyCandidato);
        if (selCandidato[0] && selCandidato[0].id != undefined){
            props.setCandidato(selCandidato[0]);
            const image = require('../data/fotos_candidatos/' + selCandidato[0].id + '.png');
            setimgsrc(image);
        }
    }

    return (
        <div id="seleccion" className="seleccion1">
        
                <img className="imgCandidato" src={imgsrc.default}/>

            <div className="seleccionCiudad">
            <img src="https://img.icons8.com/nolan/64/home.png" className="iconoCiudad"/>
            <p>Ciudad:</p>
            <select className="select" name="ciudades" id="ciudad" onChange={e=>(selectCandidato(e.target.value))}>
            {opCiudades}
            </select>
            <i className="iselect"></i>
            </div>
            <div className="seleccionCandidato">
            <img src="https://img.icons8.com/nolan/64/checked.png" className="iconoCiudad"/>
            <p>Candidato:</p>
            <select className="select" name="candidatos" id="candidato" onChange={e=>(changeCandidato(e.target.value))}>
            {opCandidatos}
            </select>
            <i className="iselect"></i>
            </div>
        </div>
)}

export default SeleccionCiudadCandidatos