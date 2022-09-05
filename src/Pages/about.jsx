import { Link } from "react-router-dom"

export default function About() {
    return(
        <div>
            <section className="space-x-5">
                <Link to={"/about/1/Anjing"}>Satu</Link>
                <Link to={"/about/2/Kucing"}>Dua</Link>
                <Link to={"/about/3/Burung"}>Tiga</Link>
            </section>
            Ini Adalah About
        </div>
    )
}