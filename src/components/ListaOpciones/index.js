import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método Map -> arreglo.map( (equipo, index) => {
    //    return <option></option>
    //})

    const manerjarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manerjarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo...</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
            {/* {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)} */}
        </select>
    </div>
}

export default ListaOpciones