// create your App component here
import React , { useState , useEffect } from "react";

function App() {
    const [ link , setLink ] = useState('')
    const [ loaded , setLoaded ] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp=>resp.json())
        .then(obj => {
            setLink(obj.message)
            setLoaded(true)
        })
    } , [])

    if (! loaded) return <p>Loading...</p>

    return (
        <img src={link} alt='A Random Dog'></img>
    )
}

export default App