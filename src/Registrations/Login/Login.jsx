import "./Login.css"
import React from "react";
import Registrtion from "../Person/Person.jsx";

function Login(props) {
    const [reg, setReg] = React.useState(props.reg);

    const onClick_registration = () => {
        setReg(true);
    }

    const [login_val, setLogin_val] = React.useState('');

    const LoginChange = (event) => {
        setLogin_val(event.target.value);
    }

    const [password_val, setPassword_val] = React.useState('');

    const PasswordChange = (event) => {
        setPassword_val(event.target.value);
    }

    const onClick_login = async(event) => {
        event.preventDefault();
        let url = `https://back.shmelkirov.ru/auth?login=${login_val}&password=${password_val}`;
        let response = await fetch(url, {
            method: 'GET',
        });
        let result = await response.json();
        if ("detail" in result){
            alert("Неверный логин или пароль")
        }
        else {
            document.cookie = `Session=${result.session}`;
            window.location.reload()
        }
    }
    return (
    <>
        {(reg == false) && 
        <div className="login-form">
            <h2 className="login-title">Вход</h2>
            <form>
                <div className="login-form-group">
                    <label htmlFor="name">Логин:</label>
                    <input type="text" id="name" value={login_val} onChange={LoginChange} />
                    <label htmlFor="name">Пароль:</label>
                    <input type="text" id="name" value={password_val} onChange={PasswordChange} required />
                </div>
                <button className="login-form-button" onClick={onClick_login}>Войти</button>
            </form>
            <button className="login-reg-btn" onClick={onClick_registration}>Зарегистрироваться</button>
        </div>}
        
        {reg && <Registrtion />}
    </>)
}

export default Login;