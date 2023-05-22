import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", "e")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo
        }
        console.log(datosAEnviar)
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        console.log(titulo, color)
        crearEquipo({ titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={setNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton> Crear </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Completa el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en hexadecimal"
                required
                valor={color}
                type="color"
                actualizarValor={actualizarColor}
            />
            <Boton> Registrar Equipo </Boton>
        </form>
    </section>
}

export default Formulario;