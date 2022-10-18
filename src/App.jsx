import { useState, useEffect } from "react";
import "./App.css";
// import axios from './axios'
import axios from "axios";
// import NewsArticle from "./Newsarticle";

const App = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?apiKey=16f12c1b9b9a40b980e1056ca0de65fc&q=cricket"
      );
      setMyData(res.data.articles);
      console.log(res);
    };

    getApiData();
  },[]);

  return (
    <div>
      <h1>Todays News</h1>
      {myData.map((post) => {
        const { id, title, description, url, urlToImage} = post;
        return(
          <div key={id}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img  src = {urlToImage}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
