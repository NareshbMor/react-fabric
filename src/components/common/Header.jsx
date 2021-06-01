import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction, LogoutAction } from "../../redux/actions/login";
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = ({ ...props }) => {
    const loginUser = useSelector((state) => state.userDetail)
    let { is_login, user_name } = loginUser
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const [loginDetail, setLoginDetail] = useState({
        userEmail: '',
        password: ''
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("handleSubmit=>", loginDetail)
        dispatch(LoginAction(loginDetail))
        handleClose()
        // props.history.push('/')
    }
    return (
        <>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <h1>Logo</h1>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                        </ul>

                        {
                            is_login === 0 ?
                                <div className="text-end">
                                    <button type="button" onClick={() => handleShow()} className="btn btn-outline-light me-2">Login</button>
                                    <button type="button" className="btn btn-warning">Sign-up</button>
                                </div> :
                                <div className="text-end">
                                    <Link to="/design" className="btn btn-outline-light me-2">Create a design</Link>
                                    <button type="button" className="btn btn-outline-light me-2">Hi, {user_name}</button>
                                    <button type="button" onClick={() => dispatch((LogoutAction()))} className="btn btn-warning">Logout</button>
                                </div>
                        }

                    </div>
                </div>
            </header>

            <Modal show={show} onHide={handleClose}>
                <form method="post" onSubmit={(e) => handleSubmit(e)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">Email address</label>
                            <input type="text" onChange={(e) => setLoginDetail({ ...loginDetail, userEmail: e.target.value })} className="form-control" id="formGroupExampleInput" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                            <input type="password" onChange={(e) => setLoginDetail({ ...loginDetail, password: e.target.value })} className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* <Modal className="modal fade" show={true} id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form method="post" onSubmit={(e) => handleSubmit(e)} >
                            <div className="modal-header">
                                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">


                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal> */}
        </>
    );
};

export default Header;