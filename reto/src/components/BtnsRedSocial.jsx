import { useState } from "react";

const RedesSociales = (props) =>{
    const [btnAll, setBtnAll] = useState(false);
    const [btnTwetter, setbtnTwetter] = useState(false);
    const [btnFacebook, setbtnFacebook] = useState(false);
    
    const setRed = (event) => {
        return props.setData(event.target.value)
    }

    const udpButtonColor = (buttonSelected) => {
        switch (buttonSelected) {
            case "all":
                setBtnAll(true);
                setbtnTwetter(false);
                setbtnFacebook(false);
                break;

            case "twetter":
                setBtnAll(false);
                setbtnTwetter(true);
                setbtnFacebook(false);
                break;

            case "facebook":
                setBtnAll(false);
                setbtnTwetter(false);
                setbtnFacebook(true);
                break;
                
            default:
                break;
        }  
    }

    

    return (
        <div className="divRedes">
            <button value="facebook" className={btnFacebook==true ? "facebookSelected" : "facebookUnselected"} onClick={(e)=> {setRed(e); udpButtonColor("facebook")}}>Facebook</button>
            <button value="twitter" className={btnTwetter==true ? "twitterSelected" : "twitterUnselected"} onClick={(e)=> {setRed(e); udpButtonColor("twetter")}}>Twitter</button>
            <button value="all" className={btnAll==true ? "allSelected" : "allUnSelected"} onClick={(e)=> {setRed(e); udpButtonColor("all")}}>Todas</button>
        </div>
)}

export default RedesSociales