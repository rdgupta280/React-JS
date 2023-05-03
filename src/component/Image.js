import {useEffect,useState} from 'react';

export default function Image(){
    const [image,setImage]=useState('');
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then(data=>setImage(data.message))
        .catch(error=>console.log(error));
    },[]);
     
    return(
        <div>
            <h1>Refresh the Page to get new Dog image</h1>
            <img src={image} alt='Dog' width="350" height="450"/>
        </div>
    )
}