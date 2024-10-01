const LogOut = async () => {
  try {
    let accessToken: string | null = localStorage.getItem('accessToken');
    let refreshToken = localStorage.getItem('refreshToken');

    // Check if the access token is expired or invalid
    // const tokenResponse = await fetch('http://127.0.0.1:8000/api/token/verify/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ token: accessToken })
    // });


    const tokenResponse = await fetch('http://127.0.0.1:8000/api/token/verify/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: accessToken })
    });

    
    const tokenData = await tokenResponse.json();

    // If token is not valid, refresh it
    if (tokenResponse.status === 401 || tokenData.code === 'token_not_valid') {
      console.log('Access token is invalid or expired. Trying to refresh...');
      const refreshResponse = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken })
      });

      const refreshData = await refreshResponse.json();

      if (refreshResponse.ok) {
        accessToken = refreshData?.access;  
      } else {
        console.error('Failed to refresh token:', refreshData);
        return;  
      }
    }

    // Now make the logout request with the valid access token
    const response = await fetch('http://127.0.0.1:8000/api/logout/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: refreshToken  // Send refresh token in body
      })
    });

    if (response.ok) {
      console.log('Logout success');

      // Clear tokens from localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      window.location.reload();  // Reload the page or redirect user
    } else {
      const errorData = await response.json();
      console.error('Logout failed:', errorData);
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};


export default LogOut;
