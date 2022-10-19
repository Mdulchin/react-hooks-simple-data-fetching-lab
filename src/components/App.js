// create your App component here
import react, { useEffect, useState } from "react";

function App(){
const [dogImage, setDogImage] =useState(null)

useEffect(() => {
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(data => setDogImage(data.message))
}, [])
if (!dogImage){
    return <p>Loading...</p>
}
return (

<div>
    
    <img src={dogImage} alt="A Random Dog"></img>
</div>

)
}

export default App