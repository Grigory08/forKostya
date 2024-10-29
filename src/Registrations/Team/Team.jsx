import "./Team.css"
import React from "react";

function Registration_teams() {
    const [venues1, setVenues] = React.useState([]);

    const fetchVenues = async () => {
        let url = `https://back.shmelkirov.ru/get/all_venues`;
        let response = await fetch(url, {
            method: 'GET'
        });
        let result = await response.json();
        //console.log(result.detail);
        if (result.detail && result.detail.length > 0) {
            const transformedVenues = result.detail.map(item => ({
                id: item[0],
                name: item[1]
            }));
            setVenues(transformedVenues);
            //console.log(transformedVenues);
        }
    };

    React.useEffect(() => {
        fetchVenues();
    }, []);

    // team info
    const [grade, setGrade] = React.useState(0);
    const GradeChange = (event) => {
        setGrade(event.target.value);
    }

    const [title, setTitle] = React.useState('');
    const TitleChange = (event) => {
        setTitle(event.target.value);
    }

    const [place, setPlace] = React.useState(venues1[0]?.id || '');

    React.useEffect(() => {
        if (venues1.length > 0) {
            setPlace(venues1[0].id);
        }
    }, [venues1]);

    const PlaceChange = (event) => {
        setPlace(event.target.value);
    }

    const [school, setSchool] = React.useState('');
    const SchoolChange = (event) => {
        setSchool(event.target.value);
    }

    // children info
    const [children, setChildren] = React.useState(0);
    const onClick_children = (event) => {
        event.preventDefault();
        setChildren(children + 1);
    }

    const [name1, setName1] = React.useState("");
    const Name1Change = (event) => {
        setName1(event.target.value);
    }
    const [name2, setName2] = React.useState("");
    const Name2Change = (event) => {
        setName2(event.target.value);
    }
    const [name3, setName3] = React.useState("");
    const Name3Change = (event) => {
        setName3(event.target.value);
    }

    const[grade1, setGrade1] = React.useState(2);
    const Grade1Change = (event) => {
        setGrade1(event.target.value);
    }
    const[grade2, setGrade2] = React.useState(2);
    const Grade2Change = (event) => {
        setGrade2(event.target.value);
    }
    const[grade3, setGrade3] = React.useState(2);
    const Grade3Change = (event) => {
        setGrade3(event.target.value);
    }

    const [teacher1, setTeacher1] = React.useState("");
    const Teacher1Change = (event) => {
        setTeacher1(event.target.value);
    }
    const [teacher2, setTeacher2] = React.useState("");
    const Teacher2Change = (event) => {
        setTeacher2(event.target.value);
    }
    const [teacher3, setTeacher3] = React.useState("");
    const Teacher3Change = (event) => {
        setTeacher3(event.target.value);
    }

    const onClick_registration = async(event) => {
        event.preventDefault();
        let DataCoockie = document.cookie.split(';');
        let Coockie = {}; 
        for (let i = 0; i < DataCoockie.length; i++) {
            DataCoockie[i] = DataCoockie[i].split("=");
            Coockie[DataCoockie[i][0].replaceAll(' ', '')] = DataCoockie[i][1].replaceAll(' ', '');
        }
        // team
        let url = `https://back.shmelkirov.ru/register/team?session=${Coockie["Session"]}`;
        let person_info = {
            name: title,
            grade: grade,
            venue: place,
            school: school,
        };
        let responce = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(person_info)
        });
        let result = await responce.json();
        //alert(result.team_id);
        //children
        url = `https://back.shmelkirov.ru/register/participant?session=${Coockie["Session"]}`;
        if (name1 != ""){
            let child1_info = {
                name: name1,
                teacher: teacher1,
                grade: grade1,
                team: result.team_id
            }
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(child1_info)
            })
        }
        if (name2 != ""){
            let child2_info = {
                name: name2,
                teacher: teacher2,
                grade: grade2,
                team: result.team_id
            }
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(child2_info)
            })
        }
        if (name3 != ""){
            let child3_info = {
                name: name3,
                teacher: teacher3,
                grade: grade3,
                team: result.team_id
            }
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(child3_info)
            })
        }
        alert("Заявка успешно отправленна");
        window.location.reload();
    }

    return (
    <>
        <div className="team-form">
            <h2 className="team-title">Регистрация команд</h2>
            <form>
                <div className="team-form-group">
                    <label className="team-label" htmlFor="name">Класс участия:</label>
                    <input className="team-input" type="text" value={grade} onChange={GradeChange} required />
                    <label className="team-label" htmlFor="name">Название:</label>
                    <input className="team-input" type="text" value={title} onChange={TitleChange} required />
                    <label className="team-label" htmlFor="name">Площадка:</label>
                    <select className="team-select" value={place} onChange={PlaceChange} required>
                        {venues1.map((venue, index) => (
                            <option key={index} value={venue.id}>
                                {venue.name}
                            </option>
                        ))}
                    </select>                
                    <label className="team-label" htmlFor="name">Школа:</label>
                    <input className="team-input" type="text" value={school} onChange={SchoolChange} required />
                </div>

                {(children >= 1) && 
                <div className="team-child-form-group">
                    <h2>ребеночек 1</h2>
                    <label className="team-label" htmlFor="name">ФИО:</label>
                    <input className="team-input" type="text" value={name1} onChange={Name1Change} required />
                    <label className="team-label" htmlFor="name">Класс:</label>
                    <input className="team-input" type="text" value={grade1} onChange={Grade1Change} required />
                    <label className="team-label" htmlFor="name">Учитель:</label>
                    <input className="team-input" type="text" value={teacher1} onChange={Teacher1Change} required />
                </div>}

                {(children >= 2) && 
                <div className="team-child-form-group">
                    <h2>ребеночек 2</h2>
                    <label className="team-label" htmlFor="name">ФИО:</label>
                    <input className="team-input" type="text" value={name2} onChange={Name2Change} required />
                    <label className="team-label" htmlFor="name">Класс:</label>
                    <input className="team-input" type="text" value={grade2} onChange={Grade2Change} required />
                    <label className="team-label" htmlFor="name">Учитель:</label>
                    <input className="team-input" type="text" value={teacher2} onChange={Teacher2Change} required />
                </div>}
                
                {(children >= 3) && 
                <div className="team-child-form-group">
                    <h2>ребеночек 3</h2>
                    <label className="team-label" htmlFor="name">ФИО:</label>
                    <input className="team-input" type="text" value={name3} onChange={Name3Change} required />
                    <label className="team-label" htmlFor="name">Класс:</label>
                    <input className="team-input" type="text" value={grade3} onChange={Grade3Change} required />
                    <label className="team-label" htmlFor="name">Учитель:</label>
                    <input className="team-input" type="text" value={teacher3} onChange={Teacher3Change} required />
                </div>}

                {(children < 3) && <button className="team-child-button" onClick={onClick_children}>+ Добавить ребенка</button>}
                <button className="team-form-button" onClick={onClick_registration}>Зарегистрироваться</button>
            </form>
        </div>
    </>)
}

export default Registration_teams;