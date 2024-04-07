import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function SignInPage() {
    const {name} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(name!=="abc") navigate("/signup", {state:{name}})
    })
    return <div>Sign in</div>
}

export default SignInPage;