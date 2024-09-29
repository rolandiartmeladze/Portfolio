const LogOut = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    console.error('No tokens found, cannot log out.');
    return;
  }


  try {
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

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      window.location.reload();
    } else {
      const errorData = await response.json();
      console.error('Logout failed:', errorData);
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};


export default LogOut;
