import Layout from './Layout'
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"


const Dashboard = ({ ...props }) => {
    const loginUser = useSelector((stare) => stare.userDetail)
    let { is_login, user_email, user_name } = loginUser
    console.log("loginUser => ", is_login);
    if (is_login === 0) {
        return <Redirect to="/login" />
    }
    return (
        <Layout>
            <h1>Dashboard</h1>
        </Layout>
    )
}

export default Dashboard