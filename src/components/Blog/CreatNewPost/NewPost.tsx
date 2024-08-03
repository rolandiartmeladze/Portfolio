import React, {useState, useEffect ,ChangeEvent} from "react";
import './NewPost.css';


const NewPost =()=> {
    const [posts, setPosts] = useState<any[] | null>(null);

    const [text, setText] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const [category, setCategory] = useState<string>('not selected');



    
//     const DataTransfer = {
//         Now: () => {
//           const now = new Date();
//           const hours = now.getHours().toString().padStart(2, '0');
//           const minutes = now.getMinutes().toString().padStart(2, '0');
//         //   const seconds = now.getSeconds().toString().padStart(2, '0');
//           const year = now.getFullYear();
//           const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
//           const day = now.getDate().toString().padStart(2, '0');
//           return `${year}-${month}-${day} ${hours}:${minutes}`;
//         }
//       };
      
      
//       const [currentTime, setCurrentTime] = useState(DataTransfer.Now());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(DataTransfer.Now());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);




  const resetForm = async ()=>{
    setName('');
    setText('');
    setCategory('not select');
    setTitle('');
    setEmail('');
  }

    const handleChange = async () => {
        const postInfo = {
            owner: name,
            email: email,
            title: title,
            date: new Date().toISOString(),
            category: category,
            post: text,
        };

        const link = 'https://mica-soft-makeup.glitch.me';  

        try {
            const response = await fetch(`${link}/api/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postInfo),
            });

            if (response.ok) {
                console.log('Data successfully sent to the backend');
                resetForm();
            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



   



    // const showPosts =()=> {        
    //     const link = 'https://mica-soft-makeup.glitch.me';

    //     fetch(`${link}/api/showposts`)
    //         .then(response => response.json())
    //         .then(data => setPosts(data))
    //         .catch(error => console.error('Error fetching data:', error));
    //       console.log(posts)

    // };


    return(

        <form id="postform" className="add-post"  onSubmit={(e) => { e.preventDefault(); handleChange(); }}>

<h3>
    Add New Post
</h3>


<div className="line-cont">
<label htmlFor="">You Name:</label> <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="Name" />
</div>
<div  className="line-cont">
<label htmlFor="">You Email:</label> <input onChange={(e)=>{setEmail(e.target.value)}}  value={email} type="email" placeholder="Email" />
</div>

<div className="line-cont">
<label htmlFor="">Enter Title:</label> <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" placeholder="Title" />

</div>


<div  style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} className="line-cont">
    <div style={{display: 'flex'}}>
     <label htmlFor="">Select Category:</label> <label> {category}</label>
    </div>

<div style={{width: '100%'}}>
    <select  onChange={(e)=>{setCategory(e.target.value)}} value={category} className="select-category" name="Category" id="">
    <option value="not selected">select</option>
    <option value="About Me">About Me</option>
    <option value="About Project">About Project</option>
    <option value="Web Developers">Web Developers</option>
    <option value="Feedback">Feedback</option>
    <option value="Tag a user">Tag a user</option>
    
    </select>
</div>
</div>


<div   style={{display:'flex', justifyContent: 'center', textDecoration: 'underline' }} className="line-cont">
<label style={{width:'auto', flexGrow: '0'}} htmlFor="">Srt Pin:</label> <input  style={{width:'auto', flexGrow: '0', boxShadow: 'none', cursor: 'pointer'}} type="checkBox" />

</div>



<div className="line-cont write-post">
<label style={{flexGrow: '0'}} htmlFor="">Wrait Post:</label> 
<div style={{width: '100%'}}>
            <textarea
            onChange={(e)=>{setText(e.target.value)}}
            value={text}
             style={{flexGrow: '1'}}
                id="postInput"
                placeholder="Write Post ..."
            />
    </div>

</div>

<div className="btn-cont">
    <button type="submit">Add Post</button>

</div>

        </form>
    )
}
export default NewPost;