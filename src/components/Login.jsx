import { useState } from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../redux/actions/login'
import { Redirect } from "react-router-dom";

const Login = ({ ...props }) => {
    const loginUser = useSelector((state) => state.userDetail)
    let { is_login } = loginUser
    const dispatch = useDispatch();

    const [loginDetail, setLoginDetail] = useState({
        userEmail: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("handleSubmit=>", loginDetail)
        dispatch(LoginAction(loginDetail))
        // props.history.push('/')
    }

    if (is_login === 1) {
        return <Redirect to="/" />
    }

    return (
        <div className="login-main h-100 d-flex align-items-center justify-content-center">
            <Container fluid>
                <Row className="justify-content-md-start">
                    <Col md={8} className="text-center bg-light">
                    </Col>
                    <Col md={4} className="text-center ">
                        <div className="card">
                            <div className="card-body">
                                <h1>Login form</h1>
                                <Form method="post" onSubmit={(e) => handleSubmit(e)}>
                                    <Form.Group className="text-left" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLoginDetail({ ...loginDetail, userEmail: e.target.value })} />
                                    </Form.Group>

                                    <Form.Group className="text-left" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" onChange={(e) => setLoginDetail({ ...loginDetail, password: e.target.value })} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login