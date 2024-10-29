import "./Header.css"
import "./Registrations/Login/Login.css";
import Registrtion from "./Registrations/Person/Person.jsx"
import Results from "./Results/Results.jsx";
import Registration_teams from "./Registrations/Team/Team.jsx"
import React from "react";
import Rules from "./Rules/Rules.jsx";
import "./News/News.css"
import Manager from "./Manager/Bids.jsx";
import MyTeams from "./MyTeams/MyTeams.jsx";
import PlaceReg from "./ForAdmin/PlaceReg.jsx";
import MyDann from "./MyDann/MyDann.jsx";
import logo from "./logo.png"

function Header() {
    // sesion
    const [chek, setChek] = React.useState(0);
    
    const FetchData = async() => {
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            const key = DataCoockie[i][0] ? DataCoockie[i][0].replaceAll(' ', '') : null;
            const value = DataCoockie[i][1] ? DataCoockie[i][1].replaceAll(' ', '') : null;
            if (key) {
                Coockie[key] = value;
            }
        }

        if ("Session" in Coockie && Coockie["Session"] != "" && Coockie["Session"] != null) {
            //console.log(Coockie["Session"]);
            let url = `https://back.shmelkirov.ru/me?session=${Coockie["Session"]}`;
            let chek_session = await fetch(url, {
                method: 'GET',
            });
            let result = await chek_session.json();
            //console.log(result);
            if (result.user_type == "noob") {

                setChek(1);
            } 
            if (result.user_type == "venue") {
                setChek(2);
            } 
            if (result.user_type == "admin") {
                setChek(3);
            }
            //console.log(result.user_type);
        }
    }

    React.useEffect(() => {
        FetchData(); 
    }, []);

    // header buttons
    const [news, setNews] = React.useState(true);
    const [rules, setRules] = React.useState(false);
    const [result, setResult] = React.useState(false);
    const [myteams, setMyteams] = React.useState(false);
    const [manager, setManager] = React.useState(false);
    const [login_btn, setLogin_btn] = React.useState(false);
    const [comands_registration, setComands_registration] = React.useState(false);
    const [registrtion, setRegistration] = React.useState(false);
    const [palce_reg, setPlace_reg] = React.useState(false);
    const [mydann, setMydann] = React.useState(false);

    const onClick_news = () => {
        setNews(true);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_rules = () => {
        setNews(false);
        setRules(true);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_tournamets = () => {
        setNews(false);
        setRules(false);
        setResult(true);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_login = () =>{
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(true);
        setRegistration(false);
        setComands_registration(false)
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_Registration = () => {
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(true);
        setComands_registration(false)
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_registration_teams = () => {
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(true);
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_MyTeams = () => {
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(true);
        setManager(false);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_Manager = () => {
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(false);
        setManager(true);
        setPlace_reg(false);
        setMydann(false);
    }

    const onClick_Place_reg = () => {
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(false);
        setManager(false);
        setPlace_reg(true);
        setMydann(false);
    }

    const onClick_Mydann = () => {
        setNews(false);
        setRules(false);
        setResult(false);
        setLogin_btn(false);
        setRegistration(false);
        setComands_registration(false);
        setMyteams(false);
        setManager(false);
        setPlace_reg(false);
        setMydann(true);
    }

    const onClick_delogin = () => {
        document.cookie = 'Session=; path=/; expires=-1';
        window.location.reload();
    }
 
    // login
    const [login_val, setLogin_val] = React.useState('');

    const LoginChange = (event) => {
        setLogin_val(event.target.value);
    }

    const [password_val, setPassword_val] = React.useState('');

    const PasswordChange = (event) => {
        setPassword_val(event.target.value);
    }

    const onClick_login_btn = async(event) => {
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
        <div className="header-container">    
            <div>
                <div className="header-title">
                    <img className="logo-img" src={logo} alt="logo" />
                    <div className="header-text">
                        <b>Математические игры "Шмель"<br /></b>
                        <button className="header-button" onClick={onClick_news}>Новости</button>
                        <button className="header-button" onClick={onClick_rules}>Правила</button>
                        {/*<button className="header-button" onClick={onClick_tournamets}>Результаты</button>*/}
                        {(chek == 1) && <button className="header-button" onClick={onClick_registration_teams}>Регистрация команд</button>}
                        {(chek == 1) && <button className="header-button" onClick={onClick_MyTeams}>Мои команды</button>}
                        {(chek == 2) && <button className="header-button" onClick={onClick_Manager}>Заявки</button>}
                        {(chek == 3) && <button className="header-button" onClick={onClick_Place_reg}>Регнуть площадку</button>}
                    </div>
                </div>
            </div>   
            <div className="account">
                {(chek == 0) && <button className="header-button bacc" onClick={onClick_login}><b>Вход/Регистрация</b></button>}
                {/*(chek != 0) && <button className="header-button yacc" onClick={onClick_Mydann}><b>Мой профиль</b></button>*/} 
                {(chek != 0) && <button className="header-button yacc" onClick={onClick_delogin}><b>Выйти</b></button>} 
            </div>   
            
        </div>

        {news && 
        <div className="news">
            <div className="news-block">
                <div className="news-text">
                <div className="news-title">Открываем регистрацию на I математическую игру для 2-3 классов</div>
                <br />
                Турнир пройдет 10 ноября 2024 года.
                <br /> 
                Спешите зарегистрироваться, количество команд ограничено.
                <br />
                Участие в Турнире бесплатное.
                <br />
                Победители и призеры получат памятные призы от Центра Шмель
                <br />
                <a href='../public/regulations.pdf' target="_blank">Положение</a>
                <br />
                <a href="#" onClick={onClick_rules}>Правила игры</a>
                <br />
                Если у вас остались вопросы или возникают трудности при регистрации, пишите - borody@mail.ru
                </div>
            </div>
        </div>}

        {rules && <Rules />}

        {result && <Results />}

        {login_btn && <div className="login-form">
            <h2 className="login-title">Вход</h2>
            <form>
                <div className="login-form-group">
                    <label className="login-label" htmlFor="name">Логин:</label>
                    <input className="login-input" type="text" value={login_val} onChange={LoginChange} />
                    <label className="login-label" htmlFor="name">Пароль:</label>
                    <input className="login-input" type="password" value={password_val} onChange={PasswordChange} required />
                </div>
                <button className="login-form-button" onClick={onClick_login_btn}>Войти</button>
            </form>
            <button className="login-reg-btn" onClick={onClick_Registration}>Зарегистрироваться</button>
        </div>}

        {registrtion && <Registrtion />}

        {comands_registration && <Registration_teams />}

        {myteams && <MyTeams /> }

        {manager && <Manager />}

        {palce_reg && <PlaceReg />}

        {mydann && <MyDann />}
    </>)
}

export default Header;