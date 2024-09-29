const Login = async (User: any) => {
  console.log(User);
  try {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
      credentials: "include",
      });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      
      const user = {
        email: data.email,
        lastname: data.lastname,
        firstname: data.firstname,
        username: data.username,
        id: data.id,

      }

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      localStorage.setItem("user", JSON.stringify(user));
      
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error("Error during login:", error);
    return false; 
  }
};

export default Login;
