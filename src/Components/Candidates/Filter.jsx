import React, {useState} from 'react';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import Chip from '@material-ui/core/Chip';

function Filter() {

    const [filteradded] = useState(true);

    const handledelete = () =>{
        console.log("deleted");
    }

    return (
        <>
            <div className='w-80 center mt3'><p className='ma0 pl2 f5-l f5-m f7 gray'>Filter Candidates</p></div>
            <div style={{color:"#265cff"}} className='candidate_search h3 bg-white w-80 mt3 pv2 ph4 items-center center c-shadow br2 flex justify-between'>
                <div className='flex flex-column items-center'><PublicOutlinedIcon/> <p className='ma0 mt1 gray f8'>Country</p></div>
                <div className='flex flex-column items-center'><LocationCityOutlinedIcon/><p className='ma0 mt1 gray f8'>City</p></div>
                <div className='flex flex-column items-center'><CalendarTodayOutlinedIcon/><p className='ma0 mt1 gray f8'>Start Date</p></div>
                <div className='flex flex-column items-center'><ScheduleOutlinedIcon/><p className='ma0 mt1 gray f8'>Notice Period</p></div>
                <div className='flex flex-column items-center'><WorkOutlineOutlinedIcon/><p className='ma0 mt1 gray f8'>Industry</p></div>
                <div className='flex flex-column items-center'><TranslateOutlinedIcon/><p className='ma0 mt1 gray f8'>Languages</p></div>
                <div className='flex'> 
                    <p className='gray mr1 f7'>Eu Driving License</p>
                    <input name="othercountries" type="checkbox"/>
                </div>
            </div>
            <div className='w-80 center tc mt3'>
              { 
                filteradded?
                <div>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                </div>
                :
                <p className='ma0 pl2 f6-l f6-m f8 gray'>No filter's added</p>
              }
            </div>
        </>
    )
}

export default Filter;
