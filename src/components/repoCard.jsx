import React from "react";

export default function RepoCard({ pull_request }) {
  console.log(pull_request);
  function time(str) {
    const date = str.split("T")[0];
    return date;
  }

  return (
    <li className="repo-item">
      <div>
        <h2>{pull_request.head.repo.name}</h2>
        <p>pull request title: {pull_request.title}</p>
        Pull request url : <a href={pull_request.url}>{pull_request.url}</a>
        <p> creater name : {pull_request.user.login}</p>
        <img src={pull_request.user.avatar_url} alt={pull_request.user.login} />
        <span>time opend : {time(pull_request.created_at)}</span>
        <span>last updated : {time(pull_request.updated_at)}</span>
      </div>
    </li>
  );
}
