import  { useLocation } from "react-router-dom";
function AboutUs() {
  const { state, search } = useLocation();
  console.log(state,search);
  return <div>About {state?.name}</div>;
}

export default AboutUs;

