import * as React from 'react';

import UserProvider from './context/userContext';
import ThemeProvider from './context/themeContext';
import Users from './containers/Users';
import UserForm from './components/UserForm';
import ThemeWrapper from './components/ThemeWrapper';
import './styles.css';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ThemeWrapper>
          <main className="App">
            <UserForm />
            <Users />
          </main>
        </ThemeWrapper>
      </UserProvider>
    </ThemeProvider>
  );
}

