import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
    // const [valor, setValor] = useState("")
    // console.log("Datos: ", props);
    const placeholderModificado = `${props.placeholder}...`

    //Destructuración
    const { type = "text" } = props

    // console.log(props.type)

    const manerjarCambio = (e) => {
        // console.log("Cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            type={type}
            onChange={manerjarCambio}
        />
    </div>
}

export default Campo