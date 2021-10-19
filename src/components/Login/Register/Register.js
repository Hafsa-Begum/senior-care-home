import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { createUser, handleNameChange } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [name, setName] = useState('');



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
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div><img className='w-100' src="https://i.ibb.co/2S7L91P/Young-woman-checking-security-password-on-virsual-folder-Isometric-vector-illustration.jpg" alt="" /></div>
                </div>
                <div className="col-md-6">
                    <div>
                        <div>
                            <input onChange={handleNameChange} type="text" placeholder="Enter Your Name" name="" id="" />
                        </div>
                        <div>
                            <input onChange={handleEmailChange} type="email"
                                placeholder="Enter Your Email" name="" id="" required />
                        </div>
                        <div>
                            <input onChange={handlePasswordChange} type="password"
                                placeholder="Enter Your Pasword" name="" id="" required />
                        </div>
                        <button onClick={handleRegister} className="btn btn-primary">Register</button>
                    </div>
                    <p>Already a member? Please <Link to='/login'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;