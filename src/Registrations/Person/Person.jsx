import "./Person.css"
import React from "react";

function Registation() {
    const [login_val, setLogin_val] = React.useState('');

    const LoginChange = (event) => {
        setLogin_val(event.target.value);
    }

    const [password_val, setPassword_val] = React.useState('');

    const PassowrdChange = (event) => {
        setPassword_val(event.target.value);
    }

    const [name_val, setName_val] = React.useState('');

    const NameChange = (event) => {
        setName_val(event.target.value);
    }

    const [telephone_val, setTelephone_val] = React.useState('');

    const TelephoneChange = (event) => {
        setTelephone_val(event.target.value);
    }

    const [mail_val, setMail_val] = React.useState('');

    const MailChange = (event) => {
        setMail_val(event.target.value);
    }

    const [TGname_val, setTGname_val] = React.useState('');

    const TGnameChange = (event) => {
        setTGname_val(event.target.value);
    }

    const onClick_registration = async(event) => {
        event.preventDefault();
        let url = `https://back.shmelkirov.ru/register/user`;
        let person_info = {
            login: login_val,
            password: password_val,
            name: name_val,
            phone: telephone_val,
            mail: mail_val,
            telegram: TGname_val,
        };
        let responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(person_info)
        });
        let result = await responce.json();
        if (result.detail === "This login already exists") {
            alert("Логин уже существует");
        } else if (result.detail === "Too small login") {
            alert("Слишком короткий логин");
        } else if (result.detail === "This email already exists") {
            alert("На эту почту уже зарегистрирован аккаунт");
        } else if (result.detail === "Too small password") {
            alert("Слишком короткий пароль");
        } else if (result.detail === "Too small name") {
            alert("Введите корректное имя");
        } else if (result.detail === "Invalid phone number") {
            alert("Введите корректный номер телефона");
        } else if (result.detail === "Invalid email") {
            alert("Введите корректную почту");
        } else if (result.detail === "The email has been sent to your email for confirmation") {
            alert("На вашу почту выслано письмо для подтверждения регистрации");
            window.location.reload();
        }
    }   

    return (
    <>
        <div className="person-form">
            <h2 className="person-title">Регистрация руководителя команды</h2>
            <form>
                <div className="person-form-group">
                    <label className="person-label" htmlFor="name">Логин:</label>
                    <input className="person-input" type="text" value={login_val} onChange={LoginChange} required />
                    <label className="person-label" htmlFor="name">Пароль:</label>
                    <input className="person-input" type="password" value={password_val} onChange={PassowrdChange} /> 
                    <label className="person-label" htmlFor="name">ФИО:</label>
                    <input className="person-input" type="text" value={name_val} onChange={NameChange} required />
                    <label className="person-label" htmlFor="name">Контактный телефон:</label>
                    <input className="person-input" type="text" value={telephone_val} onChange={TelephoneChange} required />
                    <label className="person-label" htmlFor="name">Почта:</label>
                    <input className="person-input" type="text" value={mail_val} onChange={MailChange} required />
                    <label className="person-label" htmlFor="name">Ник в ТГ:</label>
                    <input className="person-input" type="text" value={TGname_val} onChange={TGnameChange} required />
                </div>
                <button className="person-form-button" onClick={onClick_registration}>Зарегистрироваться</button>
            </form>
        </div>
    </>)
}

export default Registation;