import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const handleBack = () => {
    return navigate("/", {replace: true})
  }
  return (
    <div>
      <h1>Register Page</h1>
      <button onClick={handleBack} className="p-2 bg-green-500 rounded-xl text-white">Kembali ke Login</button>
    </div>
  );
}