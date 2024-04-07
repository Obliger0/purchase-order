import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { pathname, search} = location;
  // console.log({pathname,search});
  const searchParams = new URLSearchParams(search).get("name");
  // console.log(searchParams);

  const data = {name: "Sujal"};

  return (
    <div>
      Home
      <Link to="/about" state={data} style={{textDecoration : 'none'}}>
        Go to about Sujal
      </Link>
    </div>
  );
}

export default Home;
