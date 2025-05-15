import { Link } from "react-router-dom";
import { useGithubUsers } from "../hooks/useGithubUsers";

function Users() {
  const {users, loading, error} = useGithubUsers()
  
  return (
    <div className="max-w-[1440px] mx-auto px-20">
      {loading ? (
        <h1 className="text-center">Loading....</h1>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="py-6 border border-black/20">
              <th className="text-left p-6 border border-black/20">Profile</th>
              <th className="text-left border p-6 border-black/20">
                User Name
              </th>
              <th className="text-left border p-6 border-black/20">
                Followers
              </th>
              <th className="text-left border p-6 border-black/20">
                Repositories
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="p-6 border border-black/20">
                    <img
                      src={user.avatar_url}
                      alt=""
                      className="h-[50px] w-[50px] rounded-[50%]"
                    />
                  </td>
                  <td className="p-6 border border-black/20">{user.login}</td>
                  <td className="p-6 border border-black/20">
                    <Link
                      to={`/repos/${user.login}`}
                      target="_blank"
                      className="hover:underline"
                    >
                      See Followers
                    </Link>
                  </td>
                  <td className="p-6 border border-black/20">
                    <Link
                      to={`/repos/${user.login}`}
                      className="hover:underline"
                    >
                      Repos
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
