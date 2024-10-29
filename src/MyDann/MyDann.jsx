import "./MyDann.css"

function MyDann () {

    const onClick_delogin = () => {
        document.cookie = 'Session=; path=/; expires=-1';
        window.location.reload();
    }

    return (
        <>
        <div className="mydann-container">
            <button className="" onClick={onClick_delogin}>Выйти</button>
        </div>
        </>
    )
}

export default MyDann;