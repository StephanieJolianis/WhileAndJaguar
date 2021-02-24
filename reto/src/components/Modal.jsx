import { ObtenerPreguntas, ObtenerData, ObtenerCandidatos }  from "../scripts/datos";
import { useState } from "react";

const Modal = (props) => {
    const DivModal = props.show && ( 
        <div className="overlay">
            <div className="popup">
                <p>Este es el modal</p>
                <button className="btnCancelModal" onClick={()=> props.close(false)}>Cancelar</button>
            </div>
        </div>);
    
        return(
        <div>
            {DivModal}
        </div>
    )}

export default Modal;