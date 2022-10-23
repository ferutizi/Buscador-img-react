import { useEffect, useState } from "react"
import Personaje from "./Personaje"
import './PintarDatos.css'

const PintarDatos = ({personaje}) => {

    const [personajes, setPersonajes] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
        consumirApi(personaje)
    }, [personaje])

    const consumirApi = async(personaje) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}&status=alive`)

            if(!res.ok) {
                return alert('el personaje no se ha encontrado')
            }

            const datos = await res.json()
            setPersonajes(datos.results)

        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    return(
        [modal, setModal],
        <div className="container">
            {
                personajes.map(item => (
                    <Personaje key={item.id} personaje={item} />
                ))
            }
        </div>
    )
}

export default PintarDatos