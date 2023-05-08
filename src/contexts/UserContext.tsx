import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

interface User {
  name: string;
  login: string;
  bio: string;
  company: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

const UserContext = createContext<User | null>(null);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const username = "sullivandcesaris";
  //const username = "diego3g";

  useEffect(() => {
    axios.get<User>(`https://api.github.com/users/${username}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };