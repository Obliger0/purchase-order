import { useNavigate, useParams } from "react-router-dom";

function Contact() {
    const { name } = useParams();
    const navigate = useNavigate();
    console.log({name});
    return ( <div>Contact  {name}
        <button onClick={()=>{navigate(-2)}}
        >Next</button>
    </div> );
}

export default Contact;