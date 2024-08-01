import React from "react";
import './NewPost.css';


const NewPost =()=> {
    return(

        <form className="add-post" action="post">

<h3>
    Add New Post
</h3>


<div className="line-cont">
<label htmlFor="">You Name:</label> <input type="text" placeholder="Name" />
</div>
<div  className="line-cont">
<label htmlFor="">You Email:</label> <input type="text" placeholder="Email" />
</div>

<div className="line-cont">
<label htmlFor="">Your Age:</label> <input type="text" placeholder="Age" />

</div>


<div className="line-cont">
<label htmlFor="">Select Category:</label> 

<div>
    <select name="Category" id="">
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
    <button>Add Post</button>

</div>

        </form>
    )
}

export default NewPost;