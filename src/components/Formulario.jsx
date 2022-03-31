import useFormulario from "../hooks/useFormulario"

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
            <h1>App personajes de Rick and Morty</h1>
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