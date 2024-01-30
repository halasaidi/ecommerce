/* eslint-disable react-hooks/rules-of-hooks */
// WithAuth.js
import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';
import { getAuthUser, handleLogout } from '../firebase';

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const authUser = await getAuthUser();
          setUser(authUser);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };

      fetchUser();
    }, []); // Empty dependency array to mimic componentDidMount behavior

    const handleLogoutClick = async () => {
      try {
        await handleLogout();
        setUser(null);
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    return (
      <>
        <Navbar name={user?.displayName} loggedIn={user !== null} handleLogoutClick={handleLogoutClick} />
        {/* Wrap the WrappedComponent in JSX syntax */}
        <WrappedComponent {...props} user={user} />
      </>
    );
  };
};

export default WithAuth;
