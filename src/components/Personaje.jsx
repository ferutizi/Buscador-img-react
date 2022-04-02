import './Personaje.css'

const Personaje = ({personaje}) => {

    const {name, species, image} = personaje

    return(
        <div className="card">
            <h5 className='nombre'>{name}</h5>
            <p className='especie'>{species}</p>
            <img className='img' src={image} alt={`imagen-${name}`} ></img>
        </div>
    )
}

export default Personaje