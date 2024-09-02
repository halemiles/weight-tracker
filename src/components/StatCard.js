import Card from 'react-bootstrap/Card';

const StatCard = ({title,value}) => {
    return(
        <Card style={{ width: '18rem' }} >
        <Card.Body >
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text className="text-center" >
                {value}
            </Card.Text>
        </Card.Body>
        </Card>
    )
}

export default StatCard;