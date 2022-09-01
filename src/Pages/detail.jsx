import { useParams, useNavigate } from "react-router-dom"

export default function Detail() {
    let navigate = useNavigate ();
    let {id, hewan} = useParams()
    return(
        <div>
            <p>Ini Adalah Detail</p>
            <p>Id Nya Adalah {id} {hewan}</p>
            <button
            onClick={ () => {
                return navigate("/home", {replace: true});
            }}
            >
                Home
            </button>
        </div>
    )
}