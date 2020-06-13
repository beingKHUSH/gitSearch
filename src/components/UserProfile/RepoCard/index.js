import React from "react";
import styles from "./RepoCard.module.css";

const RepoCard = ({ repo }) => {
  return (
    <div>
      <h3 className={styles["repo_name"]}>{repo.name}</h3>
      <p className={styles["repo_description"]}>{repo.description}</p>
      <div className={styles["repo_details"]}>
        <p className={styles["repo_language"]}>{repo.language}</p>
        <p class={styles["repo_fork_count"]}>
          <svg
            aria-label="fork"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          <span>{repo.stargazers_count}</span>
        </p>

        {repo.license ? (
          <p className={styles["repo-license"]}>
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
              ></path>
            </svg>
            <span>{repo.license.name}</span>
          </p>
        ) : null}

        <p>
          <span>
            Updated on {new Date(repo.updated_at.slice(0, -1)).toDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RepoCard;
