import { useLocation } from "react-router-dom";

function SignUpPage() {
    const {state} = useLocation();
    return (
      <>
        <div>
          {state?.name} Not Found
        </div>
          <a href="#" style={{color:"white", textDecoration:"none"}}>Sign Up here</a>
      </>
    );
}

export default SignUpPage;