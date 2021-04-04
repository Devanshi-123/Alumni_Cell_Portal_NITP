import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../../assets/4.jpg';



function Cards() {
    return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src={image1}/>
    <Card.Body>
      <Card.Title style={{backgroundColor: "rgb(249, 86, 31)" ,color: "white",  borderRadius: 5 }}>ANNOUNCEMENT</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={image1}/>
    <Card.Body>
      <Card.Title style={{backgroundColor: "#f5b20a" ,color: "white",  borderRadius: 5 }}>SOCIAL MEDIA</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={image1} />
    <Card.Body>
      
        <Card.Title style={{backgroundColor: "black" ,color: "white",  borderRadius: 5 }} >   UPDATES</Card.Title>
      
      
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
 );
}

export default Cards;