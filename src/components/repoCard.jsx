import React from "react";

export default function RepoCard({ pull_request }) {
  console.log(pull_request);
  function time(str) {
    const date = str.split("T")[0];
    return date;
  }

  return (
    <li className="repo-item">
      {pull_request.user.login}
    </li>
  );
}
