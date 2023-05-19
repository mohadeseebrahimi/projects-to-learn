import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseItem.css'

function CourseItem({id, title , img , text }){
    return(
        <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary">
            <Link to={`/course/${id}`} className='buy-btn'>ادامه مطالب</Link>
          </Button>
        </Card.Body>
      </Card>
    )
}

export default CourseItem