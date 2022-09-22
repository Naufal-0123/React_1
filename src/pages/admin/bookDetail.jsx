import { useLocation, useNavigate, useParams} from "react-router-dom";

export default function UserDetail() {
const navigate = useNavigate()
const {id, kelas} = useParams()
const handleBack = () => {
  return navigate("/admin/book", {replace: true})
}

  return (
    <div>
      <h1>User Detail </h1>
      <div className="mt-5">Nama : {id}</div>
      <div>Kelas : {kelas}</div>
      
      <button onClick={handleBack} className="p-2 bg-green-500 rounded-xl text-white">Kembali Ke Halaman User</button>
    </div>
  );
}