import * as React from 'react';
import { User } from '../@types/user.d';

type Props = {
  user: User;
  updateUsers: (id: number) => void;
};

const NewUser: React.FC<Props> = ({ user, updateUsers }) => {
  return (
      <tr>
        <td >{user.firstName}</td>
        <td >{user.lastName}</td>
        <td >{user.phone}</td>
        <td id="del-btn">
          <button className="del-btn" onClick={()=>updateUsers(user.id)}>Delete User</button>
        </td>        
      </tr>
  );
};

export default NewUser;
