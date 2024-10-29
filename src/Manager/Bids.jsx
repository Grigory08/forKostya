import "./Bids.css"
import React from "react";
import OneReg from "./OneReg.jsx";

function Manager() {
    const [bids, setBids] = React.useState([]);

    const getApiData = async () => {
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            Coockie[DataCoockie[i][0].replaceAll(' ', '')] = DataCoockie[i][1].replaceAll(' ', '');
        }

        let url = `https://back.shmelkirov.ru/venue/requests?session=${Coockie["Session"]}`;
        let responce = await fetch(url, {
            method: 'GET'
        });
        let result = await responce.json();
        const bidsData = result.detail.map((team) => ({
            id: team.id,
            status: team.status,
            lead_id: team.lead_id,
            grade: team.grade,
            name: team.name,
            participants: team.participants,
            school: team.school,
            tasks: team.tasks,
        }));
        setBids(bidsData);
    };   

    React.useEffect(() => {
        getApiData(); 
    }, []);

    return (
        <>
        <div className="bids-container">
            {bids.map((dan, index) => (dan.status === "not confirmed" && 
            <OneReg key={index} id={dan.id} title={dan.name} school={dan.school} grade={dan.grade} 
            name1={dan.participants[0]?.name}
            grade1={dan.participants[0]?.grade} 
            teacher1={dan.participants[0]?.teacher}
            {...(dan.participants[1] && {
                name2: dan.participants[1].name,
                grade2: dan.participants[1].grade,
                teacher2: dan.participants[1].teacher,
            })}
            {...(dan.participants[2] && {
                name3: dan.participants[2].name,
                grade3: dan.participants[2].grade,
                teacher3: dan.participants[2].teacher,
            })} />
            ))}
        </div>
        </>
    )
}

export default Manager;