import React, {useEffect, useState} from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'

function UseEffectPrac(){
    
    const [position, SetPosition] = useState({
        position: "absolute",
        display: 'flex',
        width: '100px',
        height: '100px',
        backgroundColor: 'blue',
        left: '0',
        top: '0',
        borderRadius: '50%',
        horiNumber: 0,
        topNumber: 0
    })

    const changePosition = (insertHori, insertTop) =>{
        SetPosition({
            position: "absolute",
            display: 'flex',
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
            left: position.horiNumber+insertHori,
            top: position.topNumber+insertTop,
            borderRadius: '50%',
            horiNumber: position.horiNumber+insertHori,
            topNumber: position.topNumber+insertTop
        })
    }

    return (
        <Container fluid="md">
            <Row>
                <div style={position}>
                </div>
            </Row>

           <Row>
               <Col>
                    <Button onClick={()=>{changePosition(-10, 0)}}>Left</Button>
               </Col>
               <Col>
                    <Button onClick={()=>{changePosition(0, -10)}}>Top</Button>
               </Col>
               <Col>
                    <Button onClick={()=>{changePosition(0, 10)}}>Bottom</Button>
               </Col>
               <Col>
                    <Button onClick={()=>{changePosition(10, 0)}}>Right</Button>
               </Col>
           </Row>
        </Container>
        
    )
}

export default UseEffectPrac;