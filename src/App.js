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
      "https://api.github.com/search/issues?q=+type:pr+user:evannetwork"
    );

    setRepos(response.data.items);
    setLoading(false);
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
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
