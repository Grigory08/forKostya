import Table from "./Table.jsx";
import "./Results.css";
import React from "react";

function Results() {
    const [teams, setTeams] = React.useState([]);
    
    const getApiData = async () => {
        let url = "http://62.109.19.4:8000/get/all_teams";
        let responce = await fetch(url, {
            method: 'GET'
        });
        let result = await responce.json();
        //console.log(result);
        const teamsData = result.detail.map((dan, index) => ({
            id: index + 1,
            name: dan[0],
            result: dan[1]
        }));
        setTeams(teamsData);
    };   

    React.useEffect(() => {
        getApiData(); 
    }, []);

    return(
        <>
            <div className="result-container">
                {teams.map((dan) => (<Table name={dan.name} key={dan.id} />))}
            </div>
        </>
    )
}

export default Results;