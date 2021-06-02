import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import LeftSidebar from "./LeftSidebar"
import RigjhtSidebar from "./RightSidebar"
import Content from './Content'
import Content1 from './Content1'

const DesignMain = ({ ...props }) => {
    const loginUser = useSelector((stare) => stare.userDetail)
    let { is_login, user_email, user_name } = loginUser
    console.log("loginUser => ", is_login);
    // if (is_login === 0) {
    //     return <Redirect to="/login" />
    // }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-3">
                        <LeftSidebar />
                    </div>
                    <div className="col-6"> */}
                    <Content1 />
                    {/* </div>
                <div className="col-3">
                    <RigjhtSidebar />
                </div> */}
                </div>
            </div>
        </>
    )
}

export default DesignMain