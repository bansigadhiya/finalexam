import React, { useEffect } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import './Product.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCartdata, getCartdataAsync, getProductAsync } from '../../Services/Action/Product.action';
import { useNavigate } from 'react-router-dom';

function Product() {

  const dispatch = useDispatch();

  const getProduct = () => {
    dispatch(getProductAsync())
  }

  const { product } = useSelector((state) => state.productReducer);

  const navigate = useNavigate();

  const handleAdd = (id) => {
    dispatch(getCartdataAsync(id))
    setTimeout(() => {
      navigate('/cart')
    },200)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className='py-100'>
      <section>
        <Container>
          <div className="heading w-50 mx-auto text-center">
            <h3 className='text-primary'>Our Products</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur? Repellat alias reiciendis animi harum minima velit soluta eaque, iusto vitae voluptatibus</p>
          </div>
          <Row>
            {
              product.map((pro) => {
                return (
                  <div className="col-3">
                    <Card className='mb-4 bg-light p-1'>
                      <Card.Img variant="top" src="images/product.webp" />
                      <Card.Body>
                        <Row className='align-items-center'>
                          <Card.Title className='col-6'>{pro.name}</Card.Title>
                          <Card.Text className='col-6 d-flex justify-content-end'>{pro.date}</Card.Text>
                        </Row>
                        <Card.Text>
                          {pro.detail}
                        </Card.Text>
                        <div className='d-flex align-items-center justify-content-between'>
                          <Button className='bg-primary border-0' onClick={() => {handleAdd(pro.id)}}>Add to cart</Button>
                          <Button className='bg-primary border-0'>View details</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })
            }
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Product
