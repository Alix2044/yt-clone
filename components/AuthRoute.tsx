import React from "react"
import {getAuth} from "firebase/auth"


export interface AuthRouteProps{}
const AuthRoute: React.FunctionComponent<AuthRouteProps> = (props) =>{
    const {children} = props
    const auth = getAuth()
    const navigate = useNavigate()
    const [loading,setloading] = useState(false)
    

}