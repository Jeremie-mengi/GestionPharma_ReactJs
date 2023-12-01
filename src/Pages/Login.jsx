import {useNavigate} from "react-router-dom";
function Login() {
    const navigate = useNavigate()
    const handleClick = (path) =>{
        navigate(path);
    }  
    return (
    <>
    <h1>Login page</h1>
    <button onClick={()=>handleClick('/Products')}>
        Product
    </button>
    <button onClick={()=>handleClick('/Home')}>
        Home
    </button>
    </>
    );
}
export default Login; 