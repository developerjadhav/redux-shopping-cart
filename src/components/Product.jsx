import React from 'react';
import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import { Alert } from 'react-bootstrap';
import StatusCode from '../utils/StatusCode';
import { setProgress } from '../store/progressSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(setProgress(70)); // For top-loading bar
        dispatch(getProducts()); //dispatch an action for fetchProducts
        dispatch(setProgress(100)); // For top-loading bar
    }, [])

    if (status === StatusCode.LOADING) {
        return <div className='mt-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner animation="border" variant="info" />  Loading .....</div>
    }

    if (status === StatusCode.ERROR) {
        return <Alert key={'danger'} variant='danger' >Something went wrong. Plzz try again later.</Alert>
    }

    const addToCart = (product) => {
        dispatch(add(product)); //dispatch a add action
    }

    const cards = products.map(product => (
        <div key={product.id} className='col-md-3'>
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
                    <Button onClick={() => addToCart(product)} variant="primary">Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <>
            <h1 className='mt-5'>Product Dashboard</h1>
            <div className='row gy-4 mt-5 mb-5'>
                {cards}
            </div>
        </>
    )
}

export default Product;