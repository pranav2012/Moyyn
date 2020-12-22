import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Comment from './Comment';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import 'tachyons';

function Commentbox({comments_data}) {
    const [read, setread] = useState(false);
    const [cmt, setcmt] = useState("");
    const [cmtname, setcmtname] = useState("");
    const [addcomment, setaddcomment] = useState(false);

    const [comments, setcomments] = useState([undefined]);

    useEffect(() => {
      setcomments(comments_data);
    }, [comments_data]);

    const insertcomment = () => {
        if(!(cmt === "" || cmtname === "")){
            setcomments(arr=>[...comments,{
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
                <div onClick={()=> {setaddcomment(false)}} className={`fixed overlay top-0 bottom-0 left-0 right-0 ${addcomment?'active z-11':''}`}></div>
                <div className={`add-comment dib read ba br2 b--gray ph2-l ph2-m ph1 pv3 ${addcomment?'':'hide'}`}>
                    <div onClick={()=>setaddcomment(false)} className='absolute dim right-1 pointer'>&times;</div>
                    <div className='flex flex-column w-80 center h-100 justify-between'>
                        <p className='tc f4-l f4-m gray f5 mb0'>Add Comment!</p>
                        <input value={cmtname} onChange={(e) => setcmtname(e.target.value)} type="text" placeholder="Your Name" className='pl2 gray b--gray ba br2 h2 mt1 f6-l f6-m f7'/>
                        <textarea value={cmt} onChange={(e) => setcmt(e.target.value)} placeholder='Add your comment!' className='br2 f6-l gray f6-m b--gray f7 pa3 ba'/>
                        <Button onClick={insertcomment} style={{background:"#265cff"}} variant="contained">Comment</Button>
                    </div>
                </div>
                <div className={`box arrow dib read f6 br2 gray ma0 mr4 flex flex-column comment pa1 ${read?'':'hide'}`}>
                        <div className="flex flex-row-l flex-row-m flex-column mb3-l mb3-m mb0 center justify-between w-90-l w-90-m w-70 items-center-l items-center-m items-start">
                            <p className={`ml4-l ml4-m ml0 mt4 ma0 gray f3-l f4-m f5`}>Comments</p>
                            <button onClick={() => setaddcomment(true) }  style={{background:"#265cff"}} className="h2 mt4-l mt4-m mt2 pointer h7-mo fw6 f8-mo f7-m f6-l mr4 w-25-l w-25-m w-60 bn link dim br2 ph3-l ph3-m ph2 pv2-l pv2-m pv1 dib white">Add Comment</button>
                        </div>
                        <div id="cmtbox" onClick={() => setread(true)} className='ov ma4 mt2-l mt3-m mt3'>
                            {
                                comments.length > 0 && comments[0] !== undefined?comments.map((comment,id)=>
                                    <Comment key={id} name={comment.name} msg={comment.msg}/>
                                ):"No Comment added!"
                            }
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Commentbox;
