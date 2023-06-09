import './Hello.css'
import Welcome from './Welcome/Welcome';

function Hello({names, info}){
    return(
        <div className = "hello">
            <h2 className = "title">Hello, {info.title}</h2>
            <ul>
                {names.map((name, index) => (
                    <li key = {index}>{name}</li>
                ))}
            </ul>
            <Welcome isLoggedIn={false} />
        </div>
    )
}

export default Hello;