import * as React from 'react';
import { UserContext } from '../context/userContext';
import { UserContextType, User } from '../@types/user.d';

const emptyValues = {
  firstName: '',
  lastName: '',
  phone: ''
}

const UserForm: React.FC = () => {
  const { saveUser } = React.useContext(UserContext) as UserContextType;
  const [formData, setFormData] = React.useState<User | any>(emptyValues);

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent, formData: User | any) => {
    e.preventDefault();
    if (formData != emptyValues){
      saveUser(formData);
    }
    setFormData(emptyValues);
  };

  return (
    <form name="userForm" id="userForm" className="Form" onSubmit={e => onSubmit(e, formData)}>
      <div>
        <label htmlFor='firstName'>First name:</label>
        <input 
          //style={style.form.inputs}
          id='firstName' 
          type='text'
          value={formData.firstName}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor='lastName'>Last name:</label>
        <input 
          //style={style.form.inputs}
          id='lastName' 
          type='text'
          value={formData.lastName}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor='phone'>Phone:</label>
        <input
          //style={style.form.inputs}
          id='phone' 
          type='text'
          value={formData.phone}
          onChange={onChange}
        />
      </div>   
      <button 
        //style={style.form.submitBtn} 
        type='submit' 
      > Add User
      </button>    
    </form>
  );
};

export default UserForm;
