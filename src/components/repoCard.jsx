import React from "react";

export default function RepoCard({ repo }) {
  function time(str) {
    const date = str.split("T")[0];
    return date;
  }

  return (
    <li className="repo-item">
      <div>
        Pull request : <a href={repo.pull_request.html_url}>{repo.pull_request.html_url}</a>
        <p> creater name : {repo.user.login}</p>
        <img src={repo.user.avatar_url} alt={repo.user.login} />
        <span>time opend : {time(repo.created_at)}</span>
        <span>last updated : {time(repo.updated_at)}</span>
      </div>
    </li>
  );
}
