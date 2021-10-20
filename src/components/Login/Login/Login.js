import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, processLogin, setUser, setIsLoading } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirects_uri = location.state?.from || '/home';

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    };
    const handleEmailAndPasswordLogin = () => {
        processLogin(email, password)
            .then(result => {
                setUser(result.user);
                history.push(redirects_uri);
            })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirects_uri);
            })
            .finally(() => setIsLoading(false))
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
                        <div className='mt-5 w-50 pt-5 mx-5'>
                            <h1 className='mt-5'> Login</h1>
                            <div className='underline mb-5 mx-auto'></div>
                            <div className="input-group mb-3">
                                <input onChange={handleEmailChange} type="email"
                                    placeholder="Enter Your Email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                            </div>

                            <div className="input-group mb-3">
                                <input onChange={handlePasswordChange} type="password"
                                    placeholder="Enter Your Pasword" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                            </div>

                            <button onClick={handleEmailAndPasswordLogin} className="btn btn-regular">Sign-in</button>

                            <p>Need an account? Please <Link to='/register'>Register</Link></p>

                            <div>------------------------or------------------------</div>
                            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign in</button>
                            <h1 className='my-5 text-danger'>{error}</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;