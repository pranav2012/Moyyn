import React, {useState, useEffect} from 'react';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Comment from './Comment';

function Commentbox() {
    const [read, setread] = useState(false);
    const [addcomment, setaddcomment] = useState(false);
    const [commentalert, setcommentalert] = useState(null)
    const [comments, setcomments] = useState([{
        name:"Pranav",
        msg:"Nice projects"
    },
    {
        name:"Yash",
        msg:"Nice cv"
    },
    {
        name:"Raj",
        msg:"Nice guy"
    }]);

    useEffect(() => {
      console.log(comments)
    }, [comments])

    const insertcomment = () => {
        let name = document.getElementById("name");
        let cmt = document.getElementById("cmt");
        if(!(cmt.value === "" || name.value === "")){
            setcomments([{
                name:name.value,
                msg:cmt.value
            }])
            name.value="";
            cmt.value="";
            setcommentalert(false);
            setaddcomment(false);
        }
       else setcommentalert(true);
    }

    return (
        <div>
            <div onClick={()=> {setread(false); setaddcomment(false);}} className={`fixed overlay top-0 bottom-0 left-0 right-0 ${read || addcomment?'active':''}`}></div>
            <div className={`add-comment read ba br2 b--gray pa2 ${addcomment?'':'hide'}`}>
            {!commentalert?'':<Alert severity="error">This is an error alert — check it out!</Alert>}
                <div className='flex flex-column w-80 center h-100 justify-between'>
                    <p className='tc f4 mb0'>Add Comment!</p>
                    <input id="name" type="text" placeholder="Your Name" className='pl2 f6'/>
                    <textarea id="cmt" placeholder='Add your comment!' className='br2 f6 pa3 ba'/>
                    <Button onClick={insertcomment} style={{background:"#265cff"}} variant="contained">Comment</Button>
                </div>
            </div>
            <div className='flex items-center'>
                <div id="cmtbox" onClick={() => setread(true)} className={`box arrow br2 gray dib ma0 mr4 flex flex-column comment pa3 ${read?'read f6':'f8'}`}>
                    {
                        comments.length > 0 && comments[0] !== undefined?comments.map((comment,id)=>
                            <Comment key={id} name={comment.name} msg={comment.msg}/>
                        ):"No Comment added!"
                    }
                </div>
                <div  onClick={() => setaddcomment(true) } className={`items-center pointer flex flex-column dim ${''}`}><AddCommentOutlinedIcon/><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>Add Comment</p></div>
            </div>
        </div>
    )
}

export default Commentbox;
