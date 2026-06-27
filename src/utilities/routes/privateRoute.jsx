import { useSelector } from "react-redux"
import { selectLogin } from "../../redux/users/userSelectors"
import {Navigate} from "react-router-dom"


export const PrivateRoute = ({children, path}) => {
    const login = useSelector(selectLogin)

    console.log(login)

    return login ? children : <Navigate to="/" />;
}