const create = async (newPost: any) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
  
      if (!accessToken) {
        throw new Error("Unauthorized: No access token available.");
      }
  
      const response = await fetch("http://127.0.0.1:8000/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(newPost),
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Unauthorized: Invalid or expired token.");
        }
        throw new Error("Failed to create post.");
      }
  
      const data = await response.json();
      console.log("Post created:", data);
      return data;
  
    } catch (error) {
    //   console.error("Error creating post:", error.message);
    }
  };

  export default create;
  