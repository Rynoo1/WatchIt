import React, { useState } from 'react'
import { Row, Col, Image, Button, Placeholder, Card } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import patek from '../images/patek.webp'
import { useCart } from '../context/CartContext';

function AllProdCard({ product, region }) {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const { addToCart, isAddingToCart } = useCart();

    const handleAddToCart = (e) => {
        e.stopPropagation();

        const defaultVariant = product.variants && product.variants[0];

        if (defaultVariant) {
            addToCart(defaultVariant.id, 1);
        } else {
            console.error('No variants found for product:', product.id);
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: region
        }).format(price);
    };

    const getProductPrice = () => {
        return product.variants?.[0]?.calculated_price?.calculated_amount || 0;
    };

    const handleEnter = () => {
        setHover(true);
    }

    const handleLeave = () => {
        setHover(false);
    }

    const handleButtonClick = () => {
        const queryParams = new URLSearchParams();
        queryParams.append('productid', product.id);
        navigate(`/prod?${queryParams.toString()}`);
    };

    return (
        <Col xs={12} md={4} className={hover ? 'hover' : ''} onMouseEnter={handleEnter} onMouseLeave={handleLeave} id={product.id} >
            <Image className='pt-2' fluid src={'http://localhost:5002/images/' + product.image} />
            <Col className={hover ? 'rounded-bottom productstxt pb-2 hover-text' : 'rounded-bottom productstxt pb-2'}>
                <h3 className='pt-2' > {product.title} </h3>
                <Row className="justify-content-around">
                    <Col xs="auto" ><h3>{formatPrice(getProductPrice())}</h3></Col>
                    <Col xs="auto" > <Button onClick={() => handleButtonClick()} variant='add'> View </Button> </Col>
                </Row>
                <Row className='justify-content-center py-2'>
                    <Col xs="auto" > <Button onClick={handleAddToCart} disabled={isAddingToCart} variant='add'> {isAddingToCart ? 'Adding...' : 'Add to cart'} </Button> </Col>
                </Row>
            </Col>
        </Col>
    )
}

export default AllProdCard