import React from 'react';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
  }
  
  export type UserContextType = {
    users: User[];
    saveUser: (user: User) => void;
    updateUsers: (id: number) => void;
  };

  export interface IProps {
    children: React.ReactNode;
  }
  