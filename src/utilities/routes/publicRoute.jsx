import { useSelector } from "react-redux"
import { selectLogin } from "../../redux/users/userSelectors"
import {Navigate} from "react-router-dom"

export const PublicRestrictedRoute = ({children, restricted = true}) => {
    const login = useSelector(selectLogin)
    console.log(login)

    const shouldRedirect = login && restricted;

    console.log(shouldRedirect)

    return shouldRedirect ? <Navigate to="/contacts" /> : children;
}