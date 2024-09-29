// import React from "react";

    
const LogOut = async () => {
    try {
      const token = localStorage.getItem('accessToken'); 
    

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');


      if (!token) {
        console.error('No token found, cannot log out.');
        return;
      }
  
      const logoutResponse = await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`, // or Bearer if using JWT
        },
      });
  
      if (logoutResponse.ok) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        // setAuthorised(false);  
        // navigate('/logout');  
      } else {
        const errorData = await logoutResponse.json();
        console.error('Logout failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };

export default LogOut;