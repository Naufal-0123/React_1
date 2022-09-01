import { Outlet, Link } from "react-router-dom"

export default function Computer() {
    return(
        <div>
            <div>Ini Adalah Computer</div>
            <div className="space-x-5">
            <Link to="/setting/computer/apple">Apple</Link>
            <Link to="/setting/computer/asus">Asus</Link>
            <Link to="/setting/computer/acer">Acer</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}