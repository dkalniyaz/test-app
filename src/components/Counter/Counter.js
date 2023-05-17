import { useState, useEffect } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Yoc clicked ${count} times`

        return () =>{
            document.title = 'React app'
        }
    }, []);

    return(
        <div className="counter">
            <p> Clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Counter;