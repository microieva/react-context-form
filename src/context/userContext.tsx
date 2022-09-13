import * as React from 'react';
import { UserContextType, User } from '../@types/user.d';

export const UserContext = React.createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: any;
}
const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  
  const [users, setUsers] = React.useState<User[]>([
    {
      id: 1,
      firstName: 'ieva',
      lastName: 'vyl',
      phone: '1234',
    },
    {
      id: 2,
      firstName: 'ugne',
      lastName: 'vyl',
      phone: '1111',
    },
  ]);

  const saveUser = (user: User) => {
    const newUser: User = {
      id: Math.random(), 
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    };
    setUsers([...users, newUser]);
  };

  const updateUsers = (id: number) => {
    const newUsers = users.filter((user: User) => user.id !== id);
    setUsers(newUsers);
  };
  return <UserContext.Provider value={{ users, saveUser, updateUsers }}>{children}</UserContext.Provider>;
};

export default UserProvider;
