import React, {useState} from 'react'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import '../../styles/candidate.scss';
import Commentbox from './Commentbox';
import ResumePreview from './ResumePreview';
import { useMediaQuery } from 'react-responsive';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

export const MCandidatebox = ({candidate}) => {
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
            </div>
        </div>     
    )
}


export const MShortlist = ({candidate}) => {
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
            </div>
        </div>
    );
}

export const MRejected = ({candidate}) => {
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
            </div>
        </div>
    );
}

export const MSelected = ({candidate}) => {
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
            </div>
        </div>
    );
}


