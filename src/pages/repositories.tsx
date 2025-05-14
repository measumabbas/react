import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Repositories = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((data) => data.json())
      .then((parsedData) => {
        setRepos(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="px-20">
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div >
          <div className="grid grid-cols-4 gap-8">
            {repos.map((repo) => {
              return (
                <div key={repo.id} className="shadow p-4 rounded-xl">
                  <p>Name: {repo.name}</p>
                  <p className="line-clamp-3">Description: {repo.description}</p>
                  <p>Language: {repo.language}</p>
                  <p>Forks: {repo.forks}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Repositories;
