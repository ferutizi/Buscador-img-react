import useFormulario from "../hooks/useFormulario"
import './Formulario.css'

const Formulario = ({setPersonaje}) => {

    const [formulario, handleChange, reset] = useFormulario({
        name: '',
    });

    const {name} = formulario

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name.trim()) {
            return alert('Ingrese el nombre de un personaje');
        }

        setPersonaje(name.trim().toLowerCase());
        reset();
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                type='text'
                placeholder="ingrese personaje"
                value={name}
                onChange={handleChange}
                />
                <button type="submit">Buscar</button>
            </form>
        </>
    )
}

export default Formulario