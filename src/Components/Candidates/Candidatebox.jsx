import React, {useState} from 'react'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import '../../styles/candidate.scss';
import Commentbox from './Commentbox';
import ResumePreview from './ResumePreview';
import cv from '../../util/data/Resume.pdf'

function Candidatebox({candidate}) {
    const [isPreviewOpen, setisPreviewOpen] = useState(false)
    return (
        <div style={{borderLeft:"2px solid #265cff"}} className="ma1 dib ch bg-white pa3 mt3 br3">
            <ResumePreview
				open={isPreviewOpen}
				close={() => setisPreviewOpen(!isPreviewOpen) }
				src={cv}
			/>
            <div className='flex justify-between items-start mt2'>
                <div className='flex items-center'>
                    <div className='flex flex-column'>
                        <p className='ma0 f4-l f5-m f7_2-mo'>Pranav Agarwal</p>
                        <p style={{color:"#265cff"}} className='ma0 gray f7-l mt1 f7-m f7-mo'>Senior</p>
                        <p className='ma0 mt2_2 gray f8 f9-m f10-mo mt1'>Registered 3 hours ago</p>
                    </div>
                </div>
                <div className='flex flex-column items-start'>
                    <p className='ma0 flex-1 mb3 gray f8 f9-m f9-mo'>Start Date: 7th December, 2020</p>
                    <p className='ma0 flex-1 mb3 gray f8 f9-m f9-mo'>Notice Period: 2 Months</p>
                    <p className='ma0 flex-1 mb3 gray f8 f9-m f9-mo'>English, Hindi</p>
                </div>
                <div className='h-100 w-25-l w-40-m w-30 pr4 mb2 self-center'>
                    <div className='flex justify-center flex-row-l flex-row-m flex-column justify-center items-center'>
                        <button style={{color:"green"}} className="bg-white c-shadow ml2-l ml2-m ml3 pointer mr2-l mr2-m mr0 w-60-l w-50-m w-90 h2-l h2-m h7-mo bn link dim br2 ph3 pv2 dib white"><div className=' btnic flex f8-m f7-l f9-mo f8-m f7-l items-center justify-center'><ThumbUpOutlinedIcon/><span className='ml2'>Shortlist</span></div></button>
                        <button style={{color:"red"}} className="bg-white pointer ml2-l ml2-m ml3 c-shadow w-60-l w-50-m w-90 h2-l h2-m h7-mo mt1 mt0-l mt0-m bn link dim br2 ph3 pv2 dib"><div className='btnic flex f9-mo f8-m f7-l f8-m f7-l items-center justify-center'><ThumbDownOutlinedIcon/><span className='ml2'>Reject</span></div></button>
                    </div>
                </div>
                <div onClick={() => setisPreviewOpen(!isPreviewOpen) } className='mb2 pointer flex flex-column items-center self-center'><DescriptionOutlinedIcon/><p className='ma0 flex-1 mt1 gray f8 f9-m f9-mo'>View CV</p></div>
                <Commentbox/>
            </div>
        </div>     
    )
}

export default Candidatebox;
