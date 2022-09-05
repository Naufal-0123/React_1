import { Outlet, Link, useNavigate, useLocation } from "react-router-dom"

export default function Settings() {
    let navigate = useNavigate ()
    let location = useLocation ()
    let path = location.pathname.split("/")[1];
    console.log(location.pathname);
    console.log(location.pathname.split("/"));
    console.log("item 1 =>", path)

    console.log("location =>", location)
    return(
        <div className="grid grid-cols-8 border">
            <section className="space-x-5 col-span-5 ">
                <Link to={`/${path}/phone`}>Phone</Link>
                <Link to={`/${path}/profile`}>Profile</Link>
                <Link to={`/${path}/computer`}>Computer</Link>
            </section>
            <section className="col-span-7 border">
                <Outlet/>
            </section>
            <button 
            onClick={() => {
                return navigate(-1)
            }}
            >Back
            </button>
        </div>
    )
}