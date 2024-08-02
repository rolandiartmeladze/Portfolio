import React from "react";

import './Post.css'



import { RxAvatar } from "react-icons/rx";
import { FaClock } from "react-icons/fa";
import { MdCategory } from "react-icons/md";


const Posts =()=>{

    return(
        <div className="Post-container">

        <article className="Post-element">
            <h1 className="post-title">Post nmae</h1>
            <div style={{paddingLeft: '8px', display:'flex', marginBottom: '12px'}}>
                <span><RxAvatar />{'Roland Artmelade'}</span>
                <span><FaClock />{'02/08/2024'}</span>
                <span><MdCategory />{'About Me'}</span>
            </div>
        <p className="post-body">
            post body Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex. Doloremque eos odit ullam commodi maxime, perferendis suscipit est quasi magnam repellat reprehenderit non repellendus totam, soluta itaque, tempora ratione?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni repellat soluta aspernatur praesentium quae modi. Officia distinctio suscipit nobis recusandae non dolorum esse illum similique! Deserunt, ad rem!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem necessitatibus sunt, rem repellat pariatur hic porro provident, illum sequi minima officiis at est ipsum? Nostrum cum praesentium dolor nam vel?
            </p>

            <div>
                <samp> მეტის ნახვა </samp>
            </div>
        </article>        
        

       

        <article className="Post-element">
            <h1>Post nmae</h1>
            <h3>Data Time</h3>
            <h4>Category</h4>
        <p>
            post body Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex. Doloremque eos odit ullam commodi maxime, perferendis suscipit est quasi magnam repellat reprehenderit non repellendus totam, soluta itaque, tempora ratione?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni repellat soluta aspernatur praesentium quae modi. Officia distinctio suscipit nobis recusandae non dolorum esse illum similique! Deserunt, ad rem!
            </p>
        </article>        


        <article className="Post-element">
            <h1>Post nmae</h1>
            <h3>Data Time</h3>
            <h4>Category</h4>
        <p>
            post body Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex. Doloremque eos odit ullam commodi maxime, perferendis suscipit est quasi magnam repellat reprehenderit non repellendus totam, soluta itaque, tempora ratione?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni repellat soluta aspernatur praesentium quae modi. Officia distinctio suscipit nobis recusandae non dolorum esse illum similique! Deserunt, ad rem!
            </p>
        </article>        



        <article className="Post-element">
            <h1>Post nmae</h1>
            <h3>Data Time</h3>
            <h4>Category</h4>
        <p>
            post body Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex. Doloremque eos odit ullam commodi maxime, perferendis suscipit est quasi magnam repellat reprehenderit non repellendus totam, soluta itaque, tempora ratione?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni repellat soluta aspernatur praesentium quae modi. Officia distinctio suscipit nobis recusandae non dolorum esse illum similique! Deserunt, ad rem!
            </p>
        </article>        

        <article className="Post-element">
            <h1>Post nmae</h1>
            <h3>Data Time</h3>
            <h4>Category</h4>
        <p>
            post body Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex. Doloremque eos odit ullam commodi maxime, perferendis suscipit est quasi magnam repellat reprehenderit non repellendus totam, soluta itaque, tempora ratione?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni repellat soluta aspernatur praesentium quae modi. Officia distinctio suscipit nobis recusandae non dolorum esse illum similique! Deserunt, ad rem!
            </p>
        </article>        

        <article className="Post-element">
            <h1>Post nmae</h1>
            <h3>Data Time</h3>
            <h4>Category</h4>
        <p>
            post body Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ex. Doloremque eos odit ullam commodi maxime, perferendis suscipit est quasi magnam repellat reprehenderit non repellendus totam, soluta itaque, tempora ratione?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi magni repellat soluta aspernatur praesentium quae modi. Officia distinctio suscipit nobis recusandae non dolorum esse illum similique! Deserunt, ad rem!
            </p>
        </article>        

        </div>

    )
};

export default Posts;