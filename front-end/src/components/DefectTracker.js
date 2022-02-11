import {React, useState, useRef} from 'react';
import {DropdownButton, Dropdown, Form, Button} from 'react-bootstrap';
import bookStore from './store/store'

function DefectTracker(props){
    //ref hooks
    const bookTitle = useRef(null)
    const author = useRef(null)
    const publisher = useRef(null)
    const price = useRef(null)
    const prodID = useRef(null)
    //useState
    const [mappedMovies, sortMovie] = useState(props.mv)

    const BS = bookStore();

    function sortFilms(option){

        let sortArr = props.mv;
        if(option == "Price"){
           sortArr.sort((a, b) => {return a.price - b.price})
           console.log(BS.getState())
        }else if(option == "ID"){
            sortArr.sort((a, b) => {return a.prodId - b.prodId})
        }else if(option == "title"){
            sortArr.sort(
                (a, b) =>{
                    if(a.title < b.title) { return -1; }
                    if(a.title > b.title) { return 1; }
                    return 0;
                })
        }
        sortMovie([...sortArr])
    }

    function submitForm(e){
        e.preventDefault();
        const newBook = {
            title: bookTitle.current.value,
            author: author.current.value,
            publisher: publisher.current.value,
            price: price.current.value,
            prodId: prodID.current.value
        }
        sortMovie([...props.mv, newBook])
        BS.dispatch({
          type: "add",
          book: newBook
      })

      
    }

    return(
        <div style = {{margin: "auto", width: "50%", borderStyle: "solid", padding: "5px", display: "flex"}}>
            <DropdownButton id="dropdown-basic-button" title="Sort By" onSelect={sortFilms}>
                <Dropdown.Item eventKey="title">title</Dropdown.Item>
                <Dropdown.Item eventKey="ID">ID</Dropdown.Item>
                <Dropdown.Item eventKey="Price">Price</Dropdown.Item>
            </DropdownButton>
            <h3 style={{textAlign: "center"}}>Featured Titles</h3>
            {mappedMovies.map((films, index) =>{
            return(
                <div key = {index} style={{borderStyle: "solid", margin: "5px", padding: "5px", flex: "1"}}>
                    <h1>{films.title}</h1>
                    <p>Author: <b>{films.author}</b></p>
                    <p>Publisher: <b>{films.publisher}</b></p>
                    <p>Price: <b>{films.price}</b></p>
                    <br />
                    <p>Product ID: {films.prodId}</p>
                </div>
            )
        })}

<Form onSubmit={submitForm}>
  <Form.Group className="mb-3">
    <Form.Label>Book Title</Form.Label>
    <Form.Control ref={bookTitle}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Author</Form.Label>
    <Form.Control ref={author}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Publisher</Form.Label>
    <Form.Control ref={publisher}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Price</Form.Label>
    <Form.Control ref={price}/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Prod ID</Form.Label>
    <Form.Control ref={prodID}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    )
}

export default DefectTracker;