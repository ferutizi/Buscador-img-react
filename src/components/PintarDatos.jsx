import { useEffect, useState } from "react"
import Personaje from "./Personaje"

const PintarDatos = ({personaje}) => {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        consumirApi(personaje)
    }, [personaje])

    const consumirApi = async(personaje) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}&status=alive`)
            console.log(res)
            console.log(personaje)

            if(!res.ok) {
                alert('Personaje no encontrado')
            }

            const datos = await res.json()
            console.log(datos.results)
            setPersonajes(datos.results)

        } catch (error) {
            console.log(error)
        } finally {

        }
    }

    return(
        <div>
            {
                personajes.map(item => (
                    <Personaje key={item.id} personaje={item} />
                ))
            }
        </div>
    )
}

export default PintarDatos