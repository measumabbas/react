import { useEffect, useState } from "react";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string;
  forks: number;
};
export const useGithubUser = (login?: string) => {
  const [repos, setRepos] = useState<Array<Repository>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/${login}/repos`)
      .then((data) => data.json())
      .then((parsedData) => {
        setRepos(parsedData)
        setLoading(false);
    })
      .catch((err) => {
        console.log(err);
         setLoading(false);
      });
  }, []);

  return { repos, loading, error };
};
