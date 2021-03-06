import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from '../components/Message'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Meta from '../components/Meta'
const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const state = useSelector((state) => state.cart)
  const { cartItems } = state

  const removeFromTrashHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const checkOutHandler = () => {
    history.push('/login?redirect=shipping')
  }
  return (
    <Row>
      <Meta title='Techvaly | Cart' />
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Message variant={'info'}>
            Your cart is empty! <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      className='form-select'
                      as='select'
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                      value={item.qty}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={3}>
                    <Button
                      type='button'
                      variant='dark'
                      onClick={() => {
                        removeFromTrashHandler(item.product)
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              Total: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              Items
            </ListGroup.Item>
            <ListGroup.Item>
              subtotal ($
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              )
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                variant='dark'
                style={{ width: '-webkit-fill-available' }}
                onClick={checkOutHandler}
              >
                Proceed To CheckOut
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
