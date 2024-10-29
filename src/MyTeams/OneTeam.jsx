import "./OneTeam.css"

function OneTeam (props) {
    const title = props.title;
    const status = props.status;
    const place = props.place;
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

    return(
        <>
        <div className="oneteam-container">
            <h2 className="oneteam-title">Название: <span className="highlight">{title}</span></h2>
            <p className="oneteam-text">Статус: {status}</p>
            <p className="oneteam-text">Площадка {place}</p>
            <p className="oneteam-text">Школа {school}</p>
            <p className="oneteam-text">Класс участия {grade}</p>
            <div className="oneteam-children-info">
                Дети: 
                {name1 && (
                    <p className="oneteam-children-text">
                        {name1} (Класс: {grade1}) {teacher1 && (<><br /> учитель: {teacher1}</>)}
                    </p>
                )}
                {name2 && (
                    <p className="oneteam-children-text">
                        {name2} (Класс: {grade2}) {teacher2 && (<><br /> учитель: {teacher2}</>)}
                    </p>
                )}
                {name3 && (
                    <p className="oneteam-children-text">
                        {name3} (Класс: {grade3}) {teacher3 && (<><br /> учитель: {teacher3}</>)}
                    </p>
                )}
            </div>
        </div>
        </>
    )
}

export default OneTeam;