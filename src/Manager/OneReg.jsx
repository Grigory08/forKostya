import React from "react";
import "./OneReg.css"

function OneReg (props) {
    const id = props.id;
    const title = props.title;
    const school = props.school;
    const grade = props.grade;
    const name1 = props.name1;
    const grade1 = props.grade1;
    const teacher1 = props.teacher1;
    const name2 = props.name2;
    const grade2 = props.grade2;
    const teacher2 = props.teacher2;
    const name3 = props.name3;
    const grade3 = props.grade3;
    const teacher3 = props.teacher3;

    const onClick_Confim = async(event) => {
        event.preventDefault();
        console.log(id);
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            Coockie[DataCoockie[i][0].replaceAll(' ', '')] = DataCoockie[i][1].replaceAll(' ', '');
        }
        const team_id = {
            team_id: id
        }
        let url = `https://back.shmelkirov.ru/venue/confirm?team_id=${id}&session=${Coockie["Session"]}`;
        let responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(team_id)
        });
        let result = await responce.json();
        window.location.reload();
    }

    const onClick_Reject = async(event) => {
        event.preventDefault();
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            Coockie[DataCoockie[i][0].replaceAll(' ', '')] = DataCoockie[i][1].replaceAll(' ', '');
        }
        const team_id = {
            team_id: id
        }
        let url = `https://back.shmelkirov.ru/venue/reject?team_id=${id}&session=${Coockie["Session"]}`;
        let responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(team_id)
        });
        let result = await responce.json();
        window.location.reload();
    }

    return(
        <>
        <div className="onereg-container">
            <h2 className="onereg-title">Название: <span className="highlight">{title}</span></h2>
            <p className="onereg-text">Школа {school}</p>
            <p className="onereg-text">Класс участия {grade}</p>
            <div className="onereg-children-info">
                Дети: 
                {name1 && (
                    <p className="onereg-children-text">
                        {name1} (Класс: {grade1}) {teacher1 && (<><br /> учитель: {teacher1}</>)}
                    </p>
                )}
                {name2 && (
                    <p className="onereg-children-text">
                        {name2} (Класс: {grade2}) {teacher2 && (<><br /> учитель: {teacher2}</>)}
                    </p>
                )}
                {name3 && (
                    <p className="onereg-children-text">
                        {name3} (Класс: {grade3}) {teacher3 && (<><br /> учитель: {teacher3}</>)}
                    </p>
                )}
            </div>
            <div>
                <button className="confirm-button" onClick={onClick_Confim}>Подтвердить</button>
                <button className="decline-button" onClick={onClick_Reject}>Отклонить</button>
            </div>
        </div>
        </>
    )
}

export default OneReg;