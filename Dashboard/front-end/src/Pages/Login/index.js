import './Login.css';
import { useState } from 'react'
import { register, login } from '../callapi/login'
import Router from '../../components/Router';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameregister, setUsernameregister] = useState('');
    const [passwordregister, setPasswordregister] = useState('');

    const handleSubmit = () => {
        login(username, password)
        .then(() => {
            window.location.href = "/dashboard"
        }).catch(error => {
            console.log(error);
        })
    }
    const handleSubmitregister = () => {
        register(usernameregister, passwordregister)
            .then(() => {
                window.location.href = "/dashboard"
            }).catch(error => {
                console.log(error);
            })
    }

    return (
        <div class="HomepageBody">
            <div class="SignInForm">
                <p class="SignInText">Login</p>
                <input class="InputSign" type="text" id="name" name="name" placeholder="Email" onChange={event => setUsername(event.target.value)} />
                <input class="InputSign" type="text" id="namemdp" name="namemdp" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                <button class="Confirmbtn" type="button" onClick={handleSubmit}>Confirm</button>
            </div>
            <div class="Separation" />
            <div class="RegisterForm">
                <p class="SignInText">Register</p>
                <input class="InputSign" type="text" id="name" name="name" placeholder="Email" onChange={event => setUsernameregister(event.target.value)} />
                <input class="InputSign" type="text" id="namemdp" name="namemdp" placeholder="Password" onChange={event => setPasswordregister(event.target.value)} />
                <button class="Confirmbtn" type="button" onClick={handleSubmitregister}>Confirm</button>
            </div>
        </div>
    );
}

export default Login;