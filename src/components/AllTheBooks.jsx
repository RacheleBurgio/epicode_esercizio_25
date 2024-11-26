import Horror from '../data/horror.json'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Libro = () => {
  return (
    <>
      {Horror.map((book, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>€{book.price}</Card.Text>
            <Button variant="primary">Acquista</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default Libro
