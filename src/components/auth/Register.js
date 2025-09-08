import { Link, useNavigate } from 'react-router-dom';
import '../../assets/style.css'
import AuthContext from '../Context/AuthContext';
import { useState } from 'react';
function Register() {
    const { auth, setAuth } = AuthContext()
    const navigate = useNavigate()
    const [data, setData] = useState({});
    const [success, setSuccess] = useState('');
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("userData", JSON.stringify(data))
        setSuccess("Registred success!")
        navigate('/')
    }

    return (
        <>
            <div className='container'>

                <h4>Register to the portal</h4>
                {success ? success : ''}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='fileds'>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" placeholder="Enter name" name="name" value={data?.name} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='fileds'>
                        <label htmlFor='age'>Age:</label>
                        <input type="number" placeholder="Enter age" name="age" value={data?.age} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='fileds'>
                        <label htmlFor='age'>Select gender:</label>
                        <input type="radio" name='gender' value={data?.gender} onChange={(e) => handleChange(e)} />Male
                        <input type="radio" name='gender' value={data?.gender} onChange={(e) => handleChange(e)} />Female
                    </div>
                    <div className='fileds'>
                        <label htmlFor='name'>Mobile no.:</label>
                        <input type="text" placeholder="Enter mobile" name="mobile" value={data?.mobile} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='fileds'>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" placeholder="Enter email" name="email" value={data?.email} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='fileds'>
                        <label htmlFor='password'>Pass :</label>
                        <input type="password" placeholder="Enter password" name="pass" value={data?.pass} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='fileds'>
                        <label htmlFor='data'>Filled data is correct :</label>
                        <input type="checkbox" name='loggedIn' value={data?.loggedIn} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='login-btn'>
                        <button type='submit'>Register</button>
                    </div>

                    <div>
                        <Link to='/'>Back to login</Link>
                    </div>

                </form>
            </div>
        </>
    );
}

export default Register;