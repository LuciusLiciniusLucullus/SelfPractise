import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, ListGroup, Button, Container, Row, Col, ProgressBar} from 'react-bootstrap'


  function WeatherAPI(){
    const key = '60da72971152b1bc17dc5ddd9c2eaf1e'
    const [cityName, callWeather] = useState('')

    //errorMsg setter
    const [setter, setErrorMsg] = useState(false)

    //setting api data
    const [apiData, loadWeatherAPI] = useState({
        loading: true,
        data: ''
    })

    /*useEffect(() =>{
        
    })*/
    const fetchUser = async () =>{
        if(cityName != ""){
            setErrorMsg(false)
            let resp = await(fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+key))
            let weatherData = await(resp.json())
            //error handling, if city not found
            console.log(weatherData)
            if(weatherData.cod == "404"){
                setErrorMsg(true)
            }else if(weatherData.cod == "200"){
                loadWeatherAPI({
                    loading: false,
                    data: weatherData
                })
            }
            
        }else{
                setErrorMsg(true)
            }
        }
        
      
      return (<div>
        <Container fluid="md">
            <Row>
                <h1>Weather API</h1>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>City Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={(e) => callWeather(e.target.value)}/>
                    </InputGroup>
                    {setter && <p>City not found! Please re-enter a valid city.</p>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick= {fetchUser}>Fetch</Button>
                </Col>
            </Row>
            {
                apiData.loading?'':
                <Row>
                    <Col>
                    <ListGroup>
                        <ListGroup.Item variant = "primary">City Name: {apiData.data.name}</ListGroup.Item>
                        <ListGroup.Item variant = "primary">Humidity: {apiData.data.main.humidity}</ListGroup.Item>
                        <ListGroup.Item variant = "primary">Temp: {apiData.data.main.temp}F</ListGroup.Item>
                        <ListGroup.Item variant = "primary">Weather: {apiData.data.weather[0].description}</ListGroup.Item>
                        <ListGroup.Item>
                            Clouds:
                            <ProgressBar>
                                <ProgressBar variant="info" now={apiData.data.clouds.all} key={1} />
                            </ProgressBar>
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
            }
            
        </Container>
        
      </div>)
  }
  
  export default WeatherAPI;