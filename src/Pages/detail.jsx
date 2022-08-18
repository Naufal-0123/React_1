import { useParams } from "react-router-dom"

export default function Detail() {
    let {id, hewan} = useParams()
    return(
        <div>
            <p>Ini Adalah Detail</p>
            <p>Id Nya Adalah {id} {hewan}</p>
        </div>
    )
}