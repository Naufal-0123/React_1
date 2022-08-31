import { Outlet, Link } from "react-router-dom"

export default function Settings() {
    return(
        <div>
            <section className="space-y-5 ">
                <Link to="/setting/phone">Phone</Link>
                <Link to="/setting/profile">Profile</Link>
                <Link to="/setting/computer">Computer</Link>
            </section>
            <section className="col-span-7 border">
                <Outlet/>
            </section>
        </div>
    )
}