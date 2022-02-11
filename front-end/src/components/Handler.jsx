import React, {useEffect, useState} from 'react';
import axios from "axios";

function Handler(){

    const URL = "http://127.0.0.1:3001/submit"

    const [users, addNewUser] = useState([{
        "id": 1,
        "title": "Imperator",
        "name": "Caesar"
    },
    {
        "id": 2,
        "title": "Imperator",
        "name": "Pompey"
    }
]);

    //add title
    const [title, addNewTitle] = useState('')
    //add name
    const [name, addNewName] = useState('')
    
    /*
    useEffect(()=>{
        addNewUser([...users, {"id": 3, "name": name}])
    })
    */
     const addUser = async (e) =>{
        e.preventDefault();
        if(name != ""){
            let payload = {id: 4, title: title, name: name}
            let resp = await axios.post(URL, payload)
            console.log(resp.data)
            //different way of doing axios post
            /*
            axios.post(URL, {
                title: title,
                name: name
            })
            .then((resp) =>{
                console.log(resp.data)
                let data = await(resp.json()) 
                console.log(data)
            })
            .catch((err) =>{
                console.log(err)
            })
            */
        }
        console.log(title, name)
        
        //addNewUser([...users, {"id": 3, "name": name}])
        //...users takes all elements of the array
        //[array] + new obj inserted in addNewUser
        // it doesnt actually add, it just transforms the old array by adding the old array + the new object
    }

    return(<div className="container">
        <h1>Send Requests</h1>
        <form>

            <div className="form-group">
                <input className="form-control" placeholder="Title" value={title} onChange={(e) => addNewTitle(e.target.value)}></input>
            </div>

            <div className="form-group">
                <input className="form-control" placeholder="Name" value={name} onChange={(e) => addNewName(e.target.value)}></input>
            </div>

            <button className= "btn btn-lg btn-info" onClick= {addUser}> ADD</button>
        </form>

        <div>
            {users.map((user)=>{
                return (
                <div>
                    <h1>{user.title}</h1>
                    <h1>{user.name}</h1>
                    <button className= "btn btn-lg btn-info"> Add Friend</button>
                </div>
                )
            })}
        </div>
    </div>)
}

export default Handler;