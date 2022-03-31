const Personaje = ({personaje}) => {

    const {name, species, image} = personaje

    return(
        <div>
            <h5>{name}</h5>
            <p>{species}</p>
            <img src={image} alt={`imagen-${name}`} ></img>
        </div>
    )
}

export default Personaje