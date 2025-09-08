import { Link, useNavigate } from 'react-router-dom';
import '../../assets/style.css'
import { useState } from 'react';
function Login() {
    const usersData = JSON.parse(localStorage.getItem("userData"))
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    console.log(usersData, "usersData");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (usersData.email === email && usersData.pass === pass) {
            navigate('dashboard')
            localStorage.setItem("loggedIN",true)
        }
    }
    return (
        <>
            <div className='container'>

                <h4>Login to the portal</h4>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='fileds'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder="Enter email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='fileds'>
                        <label htmlFor='email'>Pass :</label>
                        <input type="password" placeholder="Enter password" value={pass} name="pass" onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className='login-btn'>
                        <button>Login</button>
                    </div>

                    <div>
                        <Link to='/register'>Register</Link>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Login;