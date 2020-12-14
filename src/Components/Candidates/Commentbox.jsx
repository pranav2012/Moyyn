import React, {useState} from 'react';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import Button from '@material-ui/core/Button';
// import Alert from '@material-ui/lab/Alert';
import Comment from './Comment';

function Commentbox() {
    const [read, setread] = useState(false);
    const [addcomment, setaddcomment] = useState(false);
    // const [commentalert, setcommentalert] = useState(null)
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
    },
    {
        name:"Raj",
        msg:"Nice guy"
    },
    {
        name:"Raj",
        msg:"Nice guy"
    },
    {
        name:"Raj",
        msg:"Nice guy"
    },
    {
        name:"Raj",
        msg:"Nice guy"
    },
    {
        name:"Raj",
        msg:"Nice guy"
    },
    {
        name:"Raj",
        msg:"Nice guy"
    }]);

    // useEffect(() => {
    //   console.log(comments)
    // }, [comments])

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
            setaddcomment(false);
        }
    }

    return (
        <div>
            <div onClick={()=> {setread(false); setaddcomment(false);}} className={`fixed overlay top-0 bottom-0 left-0 right-0 ${read || addcomment?'active':''}`}></div>
            <div className={`add-comment dib read ba br2 b--gray ph2 pv3 ${addcomment?'':'hide'}`}>
                <div className='flex flex-column w-80 center h4 justify-between'>
                    <p className='tc f4 mb0'>Add Comment!</p>
                    <input type="text" placeholder="Your Name" className='pl2 f6'/>
                    <textarea placeholder='Add your comment!' className='br2 f6 pa3 ba'/>
                    {/* {!commentalert?'':<div className='mv2'><Alert severity="error">Empty Comment or Name</Alert></div>} */}
                    <Button onClick={insertcomment} style={{background:"#265cff"}} variant="contained">Comment</Button>
                </div>
            </div>
            <div className='flex items-center'>
                <div className={`box arrow dib br2 gray dib ma0 mr4 flex flex-column comment pa3 ${read?'read f6':'f8'}`}>
                    <div id="cmtbox" onClick={() => setread(true)} className='ov'>
                        <p className={`ml2 ma0 gray f8 ${read?'hide':''}`}>Comments</p>
                        {
                            comments.length > 0 && comments[0] !== undefined?comments.map((comment,id)=>
                                <Comment key={id} name={comment.name} msg={comment.msg}/>
                            ):"No Comment added!"
                        }
                    </div>
                </div>
                <div  onClick={() => setaddcomment(true) } className={`items-center pointer flex flex-column dim ${''}`}><AddCommentOutlinedIcon/><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>Add Comment</p></div>
            </div>
        </div>
    )
}

export default Commentbox;
