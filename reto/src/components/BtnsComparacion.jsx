const BtnsComparacion = (props) =>{
    return (
        <div className="divBtnsComparacion">
            <button className="btnCandidatos" onClick={()=> props.showModal(true)}>Selecciona hasta 3 candidatos</button>
        </div>
)}

export default BtnsComparacion