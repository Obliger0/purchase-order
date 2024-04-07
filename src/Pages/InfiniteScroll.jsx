import { useEffect, useState } from "react";
import "./pages.css";
export function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(offset) {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=10`
      );
      const apidata = await res.json();
      setData([...data, ...apidata.users]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  function debounceFunc(func, delay) {
    console.log("debounce");
    let timeoutId;
    const obj = { timer: 0 };
    return (...args) => {
      console.log({ upeer: obj });
      clearTimeout(obj.timer);
      console.log(delay, { timeoutId: obj.timer });
      obj.timer = setTimeout(() => {
        console.log("debounce getting called");
      }, delay);
      console.log({ timeoutId: obj.timer });
    };
  }

  function onScroll(e) {
    console.log({ e });
    const totalScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollheight = e.target.defaultView.scrollY;
    if (scrollheight >= totalScrollHeight) {
      const newOffset = offset + 10;
      // fetchData(newOffset);
      // setOffSet(newOffset);
    }
    console.log("scrolled");
  }
  // window.addEventListener("scroll", debounceFunc(onScroll, 2000));
  useEffect(() => {
    fetchData(0);
  }, []);
  return (
    <>
      <div className="card-container" onScroll={()=>(debounceFunc(onScroll, 2000))} >
        {data.map((obj) => {
          return (
            <div className="card">
              <h3>{obj.first_name}</h3>
              <h4>{obj.last_name}</h4>
              <p>{obj.email}</p>
              <p>{obj.job}</p>
            </div>
          );
        })}
      </div>
      {isLoading && <h1>Loading.....</h1>}
    </>
  );
}
