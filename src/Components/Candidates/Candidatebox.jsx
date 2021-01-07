import React, {useState} from 'react'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import '../../styles/candidate.scss';
import Commentbox from './Commentbox';
import ResumePreview from './ResumePreview';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useMediaQuery } from 'react-responsive';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';

export const Candidatebox = ({candidate}) => {
    const [isPreviewOpen, setisPreviewOpen] = useState(false);
    const ismobile = useMediaQuery({ query: `(max-width: 580px)` });
    const {name,cv,languages,notice,level,comments,date} = candidate;
    const {native,other} = languages;
    
    return (
        <div style={{borderLeft:"2px solid #265cff"}} className="ma1 dib ch bg-white pa3 mt3 br3">
            <ResumePreview
				open={isPreviewOpen}
				close={() => setisPreviewOpen(!isPreviewOpen) }
				src={cv}
			/>
            <div className='flex justify-between items-start mt2-l mt0'>
                <div className='flex items-center'>
                    <div className='flex name_candidatebox flex-column'>
                        <p className='ma0 f4-l f5-m f7'>{name}</p>
                        <p style={{color:"#265cff"}} className='ma0 gray f7-l mt1 f7-m f8-mo'>{level}</p>
                        <p className='ma0 mt2_2 gray f8 f9-m f10-mo mt1'>Registered 3 hours ago</p>
                    </div>
                </div>
                <div className={`flex flex-column items-start ${ismobile?'hide':''}`}>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Start Date: {date}</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Notice Period: {notice} Months</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>{native + ", " + other}</p>
                </div>
                <div onClick={() => setisPreviewOpen(!isPreviewOpen) } className='ico mb2 pointer flex flex-column items-center self-center'><div style={{color:"gray"}} ><DescriptionOutlinedIcon/></div><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>View CV</p></div>
                <Commentbox comments_data={comments}/>
                <div className='h-100 w-25-l w-40-m w-30 pr4 mb2 self-center'>
                    <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                        <button style={{color:"green"}} className="bg-white c-shadow ml2-l ml2-m ml3 pointer mr2-l mr2-m mr0 w-60-l w-50-m w3 h2-l bn link dim br2 ph3 pv2-l pv1 dib white"><div className=' btnic flex f8-m f7-l f9-mo f8-m items-center justify-center'><ThumbUpOutlinedIcon/><span className='ml2'>Shortlist</span></div></button>
                        <button style={{color:"red"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-60-l w-50-m w3 h2-l mt2  mt0-l mt0-m bn link dim br2 ph3 pv2-l pv1 dib"><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'><ThumbDownOutlinedIcon/><span className='ml2'>Reject</span></div></button>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export const Shortlist = ({candidate}) => {
    const {name,email,cv,languages,notice,level,comments,date} = candidate;
    const {native,other} = languages;
    const [isPreviewOpen, setisPreviewOpen] = useState(false);
    const istab = useMediaQuery({ query: `(max-width: 1024px)` });
    const ismobile = useMediaQuery({ query: `(max-width: 580px)` })

    return (
        <div style={{borderLeft:"2px solid #265cff"}} className="ma1 dib ch bg-white pa3 mt3 br3">
            <ResumePreview
				open={isPreviewOpen}
				close={() => setisPreviewOpen(!isPreviewOpen) }
				src={cv}
			/>
            <div className='flex justify-between items-start mt2-l mt0'>
                <div className='flex name_candidatebox items-center'>
                    <div className='flex flex-column'>
                        <p className='ma0 f4-l f5-m f7'>{name}</p>
                        <p style={{color:"#265cff"}} className='ma0 gray f7-l mt1 f7-m f8-mo'>{level}</p>
                        <p className='ma0 mt2_2 gray f8 f9-m f10-mo mt1'>Registered 3 hours ago</p>
                    </div>
                </div>
                <div className={`flex flex-column items-start ${ismobile?'hide':''}`}>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Start Date: {date}</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Notice Period: {notice} Months</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>{native + ", " + other}</p>
                </div>
                <div onClick={() => setisPreviewOpen(!isPreviewOpen) } className='ico mb2 pointer flex flex-column items-center self-center'><div style={{color:"gray"}} ><DescriptionOutlinedIcon/></div><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>View CV</p></div>
                <Commentbox comments_data={comments}/>
                <div onClick={(e) => {window.location.href = `mailto:${email}?subject=Job at Moyyn&body=Hello, thsnks for applying`; e.preventDefault();}} className={`ico mb2 pointer flex flex-column items-center self-center ${istab?'hide':''}`}><div style={{color:"gray"}} ><MailOutlinedIcon/></div><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>Mail</p></div>
                <div className='h-100 w-25-l w-40-m w-30 pr4 mb2 self-center'>
                    <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                        <button style={{color:"green"}} className="bg-white c-shadow ml2-l ml2-m ml3 pointer mr2-l mr2-m mr0 w-60-l w-50-m w3 h2-l bn link dim br2 ph4 pv2-l pv1 dib white"><div className=' btnic flex f8-m f7-l f9-mo f8-m items-center justify-center'><DoneOutlineIcon/><span className='ml2'>Hire</span></div></button>
                        <button style={{color:"red"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-60-l w-50-m w3 h2-l mt2  mt0-l mt0-m bn link dim br2 ph3 pv2-l pv1 dib"><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'><HighlightOffIcon/><span className='ml2'>Reject</span></div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Rejected = ({candidate}) => {
    const {name,cv,languages,notice,level,comments,date} = candidate;
    const {native,other} = languages;
    const [isPreviewOpen, setisPreviewOpen] = useState(false)
    const ismobile = useMediaQuery({ query: `(max-width: 580px)` })

    return (
        <div style={{borderLeft:"2px solid #265cff"}} className="ma1 dib ch bg-white pa3 mt3 br3">
            <ResumePreview
				open={isPreviewOpen}
				close={() => setisPreviewOpen(!isPreviewOpen) }
				src={cv}
			/>
            <div className='flex justify-between items-start mt2-l mt0'>
                <div className='flex items-center'>
                    <div className='flex name_candidatebox flex-column'>
                        <p className='ma0 f4-l f5-m f7'>{name}</p>
                        <p style={{color:"#265cff"}} className='ma0 gray f7-l mt1 f7-m f8-mo'>{level}</p>
                        <p className='ma0 mt2_2 gray f8 f9-m f10-mo mt1'>Registered 3 hours ago</p>
                    </div>
                </div>
                <div className={`flex flex-column items-start ${ismobile?'hide':''}`}>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Start Date: {date}</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Notice Period: {notice} Months</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>{native + ", " + other}</p>
                </div>
                <div onClick={() => setisPreviewOpen(!isPreviewOpen) } className='ico mb2 pointer flex flex-column items-center self-center'><div style={{color:"gray"}} ><DescriptionOutlinedIcon/></div><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>View CV</p></div>
                <Commentbox comments_data={comments}/>
                <div className='h-100 w-25-l w-40-m w-30 pr4 mb2 self-center'>
                    <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                        <button style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-80-l w-50-m w3 h2-l mt2  mt0-l mt0-m bn link dim br2 ph3 pv2-l pv1 dib"><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'><KeyboardBackspaceOutlinedIcon/><span className='ml2'>Shortlist{ismobile?"":" Again"}</span></div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Selected = ({candidate}) => {
    const {name,email,cv,languages,notice,level,comments,date} = candidate;
    const {native,other} = languages;
    const [isPreviewOpen, setisPreviewOpen] = useState(false)
    const ismobile = useMediaQuery({ query: `(max-width: 580px)` })

    return (
        <div style={{borderLeft:"2px solid #265cff"}} className="ma1 dib ch bg-white pa3 mt3 br3">
            <ResumePreview
				open={isPreviewOpen}
				close={() => setisPreviewOpen(!isPreviewOpen) }
				src={cv}
			/>
            <div className='flex justify-between items-start mt2-l mt0'>
                <div className='flex items-center'>
                    <div className='flex name_candidatebox flex-column'>
                        <p className='ma0 f4-l f5-m f7'>{name}</p>
                        <p style={{color:"#265cff"}} className='ma0 gray f7-l mt1 f7-m f8-mo'>{level}</p>
                        <p className='ma0 mt2_2 gray f8 f9-m f10-mo mt1'>Registered 3 hours ago</p>
                    </div>
                </div>
                <div className={`flex flex-column items-start ${ismobile?'hide':''}`}>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Start Date: {date}</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>Notice Period: {notice} Months</p>
                    <p className='ma0 flex-1 mb3 gray f7 f8-m f8-mo'>{native + ", " + other}</p>
                </div>
                <div onClick={() => setisPreviewOpen(!isPreviewOpen) } className='ico mb2 pointer flex flex-column items-center self-center'><div style={{color:"gray"}} ><DescriptionOutlinedIcon/></div><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>View CV</p></div>
                <Commentbox comments_data={comments}/>
                <div className='h-100 w-25-l w-40-m w-30 pr4 mb2 self-center'>
                    <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                        <button onClick={(e) => {window.location.href = `mailto:${email}?subject=Job at Moyyn&body=Hello, thsnks for applying`; e.preventDefault();}} style={{color:"#265cff"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-80-l w-50-m w3 h2-l mt2  mt0-l mt0-m bn link dim br2 ph3 pv2-l pv1 dib"><div className='btnic flex f9-mo f8-m f7-l f8-m  items-center justify-center'><MailOutlinedIcon/><span className='ml2'>Send Mail</span></div></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
