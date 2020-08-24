import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "./components/repoCard";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://api.github.com/users/evannetwork/repos"
    );

    let repoNames = response.data.map((repo) => repo.name);

    Promise.all(repoNames.map(name =>
      fetch(`https://api.github.com/repos/evannetwork/${name}/pulls?state=all`).then(resp => resp.json())
  )).then(res => {
    const newArr = res.filter(function(item){
      return item.length !== 0;
    });

    const arr = newArr.map((res) => res);

    setRepos(arr)
    setLoading(false)
  })
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading ....</div>
      ) : (
        <ul>
          {" "}
          {repos.map((repo) => (
            <li id={repo[0].id} key={repo[0].id}>{repo[0].url}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
