import React, {useState} from 'react';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import Button from '@material-ui/core/Button';
// import Alert from '@material-ui/lab/Alert';
import Comment from './Comment';

function Commentbox() {
    const [read, setread] = useState(false);
    const [cmt, setcmt] = useState("");
    const [cmtname, setcmtname] = useState("");
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
        if(!(cmt === "" || cmtname === "")){
            setcomments([{
                name:cmtname,
                msg:cmt
            }])
            setcmtname("");
            setcmt("");
            setaddcomment(false);
        }
    }

    return (
        <div>
            <div onClick={()=> {setread(false); setaddcomment(false);}} className={`fixed overlay top-0 bottom-0 left-0 right-0 ${read || addcomment?'active':''}`}></div>
            <div className={`add-comment dib read ba br2 b--gray ph2 pv3 ${addcomment?'':'hide'}`}>
                <div className='flex flex-column w-80 center h-100 justify-between'>
                    <p className='tc f4 mb0'>Add Comment!</p>
                    <input value={cmtname} onChange={(e) => setcmtname(e.target.value)} type="text" placeholder="Your Name" className='pl2 f6'/>
                    <textarea value={cmt} onChange={(e) => setcmt(e.target.value)} placeholder='Add your comment!' className='br2 f6 pa3 ba'/>
                    {/* {!commentalert?'':<div className='mv2'><Alert severity="error">Empty Comment or Name</Alert></div>} */}
                    <Button onClick={insertcomment} style={{background:"#265cff"}} variant="contained">Comment</Button>
                </div>
            </div>
                <div className={`box arrow dib relative br2 gray ma0 mr4 flex flex-column comment pa1 ${read?'read f6':'f8'}`}>
                    <div id="cmtbox" onClick={() => setread(true)} className='ov pa2'>
                        <p className={`ml2 ma0 gray f8 ${read?'hide':''}`}>Comments</p>
                        {
                            comments.length > 0 && comments[0] !== undefined?comments.map((comment,id)=>
                                <Comment key={id} name={comment.name} msg={comment.msg}/>
                            ):"No Comment added!"
                        }
                    </div>
                    <div onClick={() => setaddcomment(true) } className={`pointer floati grow ${read?'hide':''}`}><div className='addcmti' style={{color:"gray"}}><AddCommentOutlinedIcon/></div></div>
                </div>
            </div>
    )
}

export default Commentbox;
