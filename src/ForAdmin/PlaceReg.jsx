import React from "react";
import "./PlaceReg.css";

function PlaceReg () {
    const [place_name, setPlace_name] = React.useState('');

    const PlaceNameChange = (event) => {
        setPlace_name(event.target.value);
    }

    const onClick_registration_place = async(event) => {
        event.preventDefault();
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            Coockie[DataCoockie[i][0].replaceAll(' ', '')] = DataCoockie[i][1].replaceAll(' ', '');
        }

        let url = `https://back.shmelkirov.ru/register/venue?session=${Coockie["Session"]}`;
        let place_info = {
            name: place_name,
            lead_id: 3,
        }
        let responce = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(place_info),
        })
        let result = await responce.json();
        alert(result.detail);
    }

    return(
        <>
        <label htmlFor="name">Название</label>
        <input type="text" value={place_name} onChange={PlaceNameChange} />
        <button className="PlaceReg-form-button" onClick={onClick_registration_place}>Добавить</button>
        </>
    )
}

export default PlaceReg;