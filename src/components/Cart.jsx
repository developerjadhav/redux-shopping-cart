import React from 'react';
import { Container, Card, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        //Dispatch a remove action
        dispatch(remove(id));
    }

    const cards = products.map(product => (
        <div key={product.cartItemId} className='col-md-4'>
            <Card className='h-100' style={{ width: '18rem' }}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR. {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button onClick={() => removeFromCart(product.cartItemId)} variant="danger">Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    const emptyCart = <div>
        <Container className="d-flex justify-content-center mt-5">
            <Card className="text-center shadow-lg p-4" style={{ width: "24rem" }}>
                <Card.Body>
                    <Card.Title>Your Cart is empty!</Card.Title>
                    <Card.Text>
                        Please navigate to "Product Dashboard" and add your favourite items to the cart.
                    </Card.Text>
                    <Button as={Link} to='/' variant="info">
                        Go to Product Dashboard
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    </div>

    return (
        <div>
            <h2 className='mt-5'>This is your cart</h2>
            <div className='row gy-4'>
                {products.length === 0 ? emptyCart : cards}
            </div>
        </div>
    )
}

export default Cart