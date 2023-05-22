import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
import "./Equipo.css"

const Equipo = (props) => {
    //Destructuración
    const { id, titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    // console.log(colaboradores.length > 0)

    const fondo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <> 
        { colaboradores.length > 0 && 
            < section className = "equipo" style = { fondo } >
                <input 
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        // console.log(evento.target.value)
                        actualizarColor(evento.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {/* <Colaborador /> */}
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                    }
                </div>
            </section >
        }
    </>
}

export default Equipo