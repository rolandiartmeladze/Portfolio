import React, {useState, useEffect ,ChangeEvent} from "react";
import './NewPost.css';


const NewPost =()=> {
    const [posts, setPosts] = useState<any[] | null>(null);
    const [text, setText] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleChange = async () => {
        const text = document.getElementById('postInput') as HTMLTextAreaElement; 
        setText(text.value);

        const postInfo = {
            owner: name,
            date: "02/08/2024",
            post: text.value
        };

        const link = 'https://mica-soft-makeup.glitch.me';  // Update this with your actual backend URL

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
                const form = document.getElementById('postform');
                showPosts();

            } else {
                console.error('Failed to send data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    const renderContent = () => {
        return text.split('\n').map((line, index) => {
           if (line.startsWith('#')) {
                return <h2 key={index}>{line.slice(1).trim()}</h2>;
            } else if (line.startsWith('>')) {
                return <p key={index}>{line.slice(1).trim()}</p>;
            } else {
                return null;
            }
            
        });
    };



    const showPosts =()=> {        
        const link = 'https://mica-soft-makeup.glitch.me';

        fetch(`${link}/api/showposts`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
          console.log(posts)

    };



    return(

        <form id="postform" className="add-post"  onSubmit={(e) => { e.preventDefault(); handleChange(); }}>

<h3>
    Add New Post
</h3>


<div className="line-cont">
<label htmlFor="">You Name:</label> <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
</div>
<div  className="line-cont">
<label htmlFor="">You Email:</label> <input type="text" placeholder="Email" />
</div>

<div className="line-cont">
<label htmlFor="">Enter Title:</label> <input type="text" placeholder="Title" />

</div>


<div  style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}} className="line-cont">
<label htmlFor="">Select Category:</label> 

<div style={{width: '100%'}}>
    <select style={{flexGrow: '1', width: '100%', padding: '6px'}} name="Category" id="">
    <option value="select">select</option>
    <option value="select">Category2</option>
    <option value="select">Category2</option>
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