import { useNavigate } from "react-router-dom";

function NotFound() {
     const navigate = useNavigate()
    return (
        <div>
            You dont have access
            <button onClick={() => navigate('/')}>Back to home</button>
        </div>
    )
}
export default NotFound;