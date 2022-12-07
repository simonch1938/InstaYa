import PktForm from "./pkt-form"
import { useParams } from "react-router-dom"

const pktData = {
    id: 1,
    title: 'Be loved',
    author: 'Toni Morrison',
    year: '1987'
}

const PktEdit = () => {
    const { id } = useParams()

    return (
        <>
            <div className="card">
                <h3>This is the edition form from pkt # {id}</h3>
                <pktForm data={pktData} />
            </div>
        </>
    )
}

export default PktEdit