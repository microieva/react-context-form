import * as React from 'react';
import { UserContextType, User } from '../@types/user.d';
import { UserContext } from '../context/userContext';
import NewUser from '../components/NewUser';

const Users = () => {
  const { users, updateUsers } = React.useContext(UserContext) as UserContextType;
  console.log('users: ', users);
  return (
    <>
      {users.length>0 ? 
      <table>
        <thead> 
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone</th>
            <th id="del-btn"></th>
          </tr>
        </thead> 
        <tbody>
          {users.map((user: User) => (   
            <NewUser key={user.id} updateUsers={updateUsers} user={user} />
          ))}
        </tbody>
      </table> : <h4>List empty</h4>}
    </>    
  )
};

export default Users;
