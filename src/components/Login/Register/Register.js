import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { createUser, handleNameChange } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');



    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };
    const handleRegister = () => {
        createUser(email, password)
        if (password.length < 6) {
            setError('Password Must be of Six Characters or Long');
        }
        if (/^[a-zA-Z]$/.test(password)) {
            setError('Password should contain atleast one number and one special character')
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div><img className='w-100' src="https://i.ibb.co/2S7L91P/Young-woman-checking-security-password-on-virsual-folder-Isometric-vector-illustration.jpg" alt="" /></div>
                </div>
                <div className="col-md-6">
                    <div className='mt-5 w-50 pt-5 mx-5'>
                        <h1 style={{ color: "#03045e" }} className='mt-5'>Please Register</h1>
                        <div className='underline mb-5 mx-auto'></div>
                        <div className="input-group mb-3 mx-auto">
                            <input onChange={handleNameChange} type="text" placeholder="Enter Your Name" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                        </div>

                        <div className="input-group mb-3">
                            <input onChange={handleEmailChange} type="email"
                                placeholder="Enter Your Email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                        </div>

                        <div className="input-group mb-3">
                            <input onChange={handlePasswordChange} type="password"
                                placeholder="Enter Your Pasword" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                        </div>

                        <button onClick={handleRegister} className="btn btn-regular">Register</button>
                        <p>Already a member? Please <Link to='/login'>Sign in</Link></p>
                        <h1 className='my-5 text-danger'>{error}</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;