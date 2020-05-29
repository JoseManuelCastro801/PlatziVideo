import { useState , useEffect} from 'react'

const setInitialState = (API) => {

    const [items , setItems] = useState({
        'categories' : [],
        'nombre' : '',
        'videos' : [1]
    });

    useEffect(() =>{
        fetch(API)
        .then(response => response.json())
        .then(data => setItems(data))
    },[]);

    return items;
}


export default setInitialState;