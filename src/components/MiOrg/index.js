import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    // Estad - hooks, ayuda a manejar el comportamiento de React
    //useState
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // const [nombre, actualizarNombre] = useState("Harland")
    console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elemento")
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg