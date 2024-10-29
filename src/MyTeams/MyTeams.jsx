import "./MyTeams.css"
import React from "react";
import OneTeam from "./OneTeam.jsx";

function MyTeams () {
    const [teams, setTeams] = React.useState([]);

    const getTeams = async() => {
        // places
        let url = `https://back.shmelkirov.ru/get/all_venues`;
        let response = await fetch(url, {
            method: 'GET'
        });
        let result = await response.json();
        const venuesObject = {};
        if (result.detail && result.detail.length > 0) {
            result.detail.forEach(venue => {
                venuesObject[venue[0]] = venue[1];
            });
        }
        // cookie
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            Coockie[DataCoockie[i][0].replaceAll(' ', '')] = DataCoockie[i][1].replaceAll(' ', '');
        }
        // sessions
        url = `https://back.shmelkirov.ru/get/teams?session=${Coockie["Session"]}`;
        let responce = await fetch(url, {
            method: 'GET'
        });
        result = await responce.json();
        //console.log(result.detail);
        const teamsData = result.detail.map((team) => ({
            id: team.id,
            status:(team.status === "confirmed" && "подтверждено") ||
            (team.status === "rejected" && "отклонено") ||
            (team.status === "not confirmed" && "на рассмотрении") ||
            "неизвестный статус",
            lead_id: team.lead_id,
            name: team.name,
            participants: team.participants,
            grade: team.grade,
            school: team.school,
            tasks: team.tasks,
            venue: venuesObject[team.venue]
        }));
        //console.log(venuesObject);
        //console.log(teamsData);
        setTeams(teamsData);
    }

    React.useEffect(() => {
        getTeams();
    }, []);

    return (
        <>
        <div className="teams-container">
        {teams.map((dan, index) => (
            <OneTeam key={index} title={dan.name} status={dan.status} place={dan.venue} school={dan.school} grade={dan.grade} 
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

export default MyTeams;