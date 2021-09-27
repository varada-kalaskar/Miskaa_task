import Carousel from 'react-bootstrap/Carousel' ;
import {Row, Col} from 'react-bootstrap';
import "./Country.css";
import axios from 'axios';
import { useState, useEffect } from "react";
const Country = () => {
    const [userDatas, setUserDatas] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3/region/asia').then((res)=>{
            const allTests = res.data;
            setUserDatas(allTests);
        });
    },[userDatas]);
    return ( 
        
        <div className="testimonial">
            <Carousel>
            {userDatas.map((user)=>(
                <Carousel.Item>
                
                    <img style={{'height':"300px"}}  className="d-block w-100"  src={'assets/img/R.jpeg'}/> 
                    <Carousel.Caption className="testimonialcaption">
                        <p><bold className="name">{user.name.common}</bold> <small className="location" style={{'color':'black'}}>{user.location}</small></p>
                        <Row className="user" style={{'marginTop':'5vh'}}>
                            <Col md={2}>
                                <img className="flag" src={user.flags[1]}/>
                            </Col>
                            <Col md={6}>
                                <div className="personalinfo">
                                    <p><div className="rating">Capital: {user.capital}</div>
                                    <div className="rating">Region: {user.region}</div>
                                    <div className="rating">Sub Region: {user.subregion}</div></p>
                                </div>
                            </Col>
                        </Row>
                        <p className="message"> <i className="fas fa-quote-left"></i>{user.name.common} having an area of {user.area} is bordered by nations which include: {user.borders}.<br></br>The people here mostly speak {user.languages.key}<i className="fas fa-quote-right"></i></p>
                    </Carousel.Caption>
                
                
                </Carousel.Item>
                ))}
                </Carousel>
        </div>
        
     );
}
 
export default Country;