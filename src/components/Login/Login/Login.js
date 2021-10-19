import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, processLogin } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        processLogin(email, password)
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div>
                        <img className='w-100' src="https://i.ibb.co/2S7L91P/Young-woman-checking-security-password-on-virsual-folder-Isometric-vector-illustration.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div>
                        <div>
                            <div>
                                <input onChange={handleEmailChange} type="email"
                                    placeholder="Enter Your Email" name="" id="" required />
                            </div>
                            <div>
                                <input onChange={handlePasswordChange}
                                    type="password"
                                    placeholder="Enter Your Pasword" name="" id="" required />
                            </div>
                            <button onClick={handleLogin} className="btn btn-primary">Sign-in</button>
                        </div>
                        <p>New member at Senior Care Home? Please <Link to='/register'>Register</Link></p>
                        <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;