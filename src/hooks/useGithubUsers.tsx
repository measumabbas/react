import { useEffect, useState } from "react"

type User = {
    login: string
    id: number
    avatar_url: string
    followers_url: string

}
export const useGithubUsers = ()=>{
    const [users, setUsers] = useState<Array<User>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        setUsers(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // setError()
      });
  }, []);

  return {users, error, loading}
}