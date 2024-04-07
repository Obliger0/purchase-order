import "./App.css";
// import Home from "./Pages/Home";
// import Contact from "./Pages/Contact";
// import AboutUs from "./Pages/AboutUs";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import PageNotFound from "./Pages/PageNotFound";
// import SignInPage from "./Pages/SignIn";
// import SignUpPage from "./Pages/SignUp";
import { InfiniteScroll } from "./Pages/InfiniteScroll";
import  ExcelFilePage  from "./Pages/ExcelFilePage";
import { TableCompFromApi } from "./components/table/tableFromApi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "grey" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about?name=qwer"
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          Contact
        </NavLink> */}
        <Routes>
          {/* <Route path="*" element={<PageNotFound />} />
          <Route path={`${"/" || "/home"}`} element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact/:name" element={<Contact />} />
          <Route path="/signin/:name" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} /> */}
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/excel-file" element={<ExcelFilePage />} />
          <Route path="/table" element={<TableCompFromApi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <div ref={divApp} className={`App ${modal && "block-app"}`}>
//   <TableCompFromApi openModal={modal} setOpenModal={setModal} divApp={divApp}/>
// </div>

// const [modal, setModal] = useState(false);
// const [data, setData] = useState([]);
// // const modal
// const divApp = useRef();

// async function fetchData() {
//   try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json()
//     setData(data)
//   } catch(error) {
//     console.error(error);
//   }
// }
// useEffect(() => {
//   // window.scrollTo(0, 0);
//   window.scrollTo(window.scrollX, window.scrollY);
//   // divApp.current.scrollIntoView();
//   fetchData();
// },[modal]);
