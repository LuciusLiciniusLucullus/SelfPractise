import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap'
import DefectTracker from './DefectTracker';

function Home(){
    //returns props from useContext
    const URL = "http://127.0.0.1:3001/user"

    const [users, populateUser] = useState()
    
    useEffect(() =>{
        axios.get(URL)
        .then(res =>{
            populateUser(res.data)
        })
        .catch(err =>{
            populateUser('error')
        })

    }, [])
    
    const lemon = () =>{
        populateUser("error")
    }

    //infy exercise
    const movies = [
        {"title": "Angels and Demons", "publisher": "Penguin Random House", "author": "Dan Brown", "price": 409, "prodId": 2012},
        {"title": "Norse Mythology", "publisher": "Bloomsbury Publishing", "author": "Neil Gaiman", "price": 300, "prodId": 2019},
        {"title": "History of Rome", "publisher": "Roman Empire", "author": "Cassius Dio", "price": 3100, "prodId": 2011},
        {"title": "Roman Republic", "publisher": "Roman Empire", "author": "Livy", "price": 3020, "prodId": 2111}
    ]

    if(users == undefined){
        return(
            <div>
                <h1>LOADING!</h1>
                
            </div>
        )
    }else if(users == 'error'){
        return(
            <div>
                <h1>Error Retriving Data from server.</h1>
                <DefectTracker mv={movies}/>
            </div>
        )
    }

    return(
        <div>
            <h1>Home</h1>
            {users.map((user) =>{
                return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>USERNAME: {user.username}</Card.Title>
                      <Card.Title>ID: {user.id}</Card.Title>
                      
                      <Card.Text>
                        Some description about this user...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )
            })}
        </div>
    )
    
}

export default Home;