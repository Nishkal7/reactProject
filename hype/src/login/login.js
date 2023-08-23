import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const validateUser = () => {
        //dummy check
        if (data.password === '1234567') {
            navigate('/todo');
        }
        else {
            alert('Invalid Password');
        }
    }
    return (
        <div className='formView'>
            <div>
                <input
                    name='username'
                    type='text'
                    value={data.username}
                    placeholder='Enter your name'
                    onChange={changeHandler}
                />
            </div>
            <div>
                <input
                    name='password'
                    type='password'
                    value={data.password}
                    placeholder='Enter your password'
                    onChange={changeHandler}
                />
            </div>
            <div>
                <button className='validate' onClick={validateUser}>Login</button>
            </div>
        </div>
    );
}

export default Login;
