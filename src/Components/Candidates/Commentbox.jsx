import React, {useState} from 'react';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import Button from '@material-ui/core/Button';
import Comment from './Comment';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

function Commentbox() {
    const [read, setread] = useState(false);
    const [cmt, setcmt] = useState("");
    const [cmtname, setcmtname] = useState("");
    const [addcomment, setaddcomment] = useState(false);

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
        <div className='self-center'>
            <div onClick={()=> {setread(false); setaddcomment(false)}} className={`fixed overlay top-0 bottom-0 left-0 right-0 ${read || addcomment?'active':''}`}></div>

            <div onClick={()=>setread(true)} className='ico mb2 pointer flex flex-column items-center self-center'><div style={{color:"gray"}} ><ChatOutlinedIcon/></div><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>Comments</p></div>
            <div>
                <div className={`add-comment dib read ba br2 b--gray ph2 pv3 ${addcomment?'':'hide'}`}>
                    <div className='flex flex-column w-80 center h-100 justify-between'>
                        <p className='tc f4-l f4-m f5 mb0'>Add Comment!</p>
                        <input value={cmtname} onChange={(e) => setcmtname(e.target.value)} type="text" placeholder="Your Name" className='pl2 f6-l f6-m f7'/>
                        <textarea value={cmt} onChange={(e) => setcmt(e.target.value)} placeholder='Add your comment!' className='br2 f6-l f6-m f7 pa3 ba'/>
                        <Button onClick={insertcomment} style={{background:"#265cff"}} variant="contained">Comment</Button>
                    </div>
                </div>
                <div className={`box arrow dib read f6 br2 gray ma0 mr4 flex flex-column comment pa1 ${read?'':'hide'}`}>
                        <p className={`ml4 mt4 ma0 gray f3-l f4-m f5`}>Comments</p>
                        <div id="cmtbox" onClick={() => setread(true)} className='ov ma4 mt2-l mt3-m mt3'>
                            {
                                comments.length > 0 && comments[0] !== undefined?comments.map((comment,id)=>
                                    <Comment key={id} name={comment.name} msg={comment.msg}/>
                                ):"No Comment added!"
                            }
                        </div>
                        <div onClick={() => setaddcomment(true) } className={`floati grow pointer addcmti`}><div className='grow' style={{color:"gray"}}><AddCommentOutlinedIcon/></div></div>
                    </div>
            </div>
        </div>
    )
}

export default Commentbox;
