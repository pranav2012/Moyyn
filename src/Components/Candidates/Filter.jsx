import React, {useState, useRef} from 'react';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {cities, countries, industries, languages, notices} from '../../util/data/static-data';

function Filter() {
    
    const dateclick = useRef(null) 
    const [filteradded] = useState(true);

    const [countriess] = useState(countries);
    const [citiess] = useState(cities);
    const [industriess] = useState(industries);
    const [languagess] = useState(languages);
    const [noticess] = useState(notices);
    const [country, setcountry] = useState(null);
    const [city, setcity] = useState(null);
    const [industry, setindustry] = useState(null);
    const [language, setlanguage] = useState(null);
    const [notice, setnotice] = useState(null);

    const countryclick = (event) => {
        setcountry(event.currentTarget);
    };
    const countryclose = () => {
        setcountry(null);
    };
    const cityclick = (event) => {
        setcity(event.currentTarget);
    };
    const cityclose = () => {
        setcity(null);
    };
    const industryclick = (event) => {
        setindustry(event.currentTarget);
    };
    const industryclose = () => {
        setindustry(null);
    };
    const languageclick = (event) => {
        setlanguage(event.currentTarget);
    };
    const languageclose = () => {
        setlanguage(null);
    };
    const noticeclick = (event) => {
        setnotice(event.currentTarget);
    };
    const noticeclose = () => {
        setnotice(null);
    };

    const handledelete = () =>{
        console.log("deleted");
    }

    return (
        <>
            <div className={''/*"bg-white br2 c-shadow pa2 mt3"*/}>
            <div className='w-100 center mt3'><p className='ma0 gray pl2 f5-l f5-m f7'>Filter Candidates</p></div>
            <div style={{color:"#265cff"}} className='candidate_search h3 c-shadow bg-white w-100 mt3 pv2 ph4 items-center center br2 flex justify-between'>
                <div>
                    <div aria-controls="country" aria-haspopup="true" onClick={countryclick} className='pointer dim flex flex-column items-center'>
                        <PublicOutlinedIcon/> 
                        <p className='ma0 mt1 gray f8 f9-mo'>Country</p>
                    </div>
                    <Menu
                        id="country"
                        anchorEl={country}
                        keepMounted
                        open={Boolean(country)}
                        onClose={countryclose}
                    >
                        {countriess.map((option,id) => (
                        <MenuItem key={id} onClick={countryclose}>
                            {option.label}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <div aria-controls="city" aria-haspopup="true" onClick={cityclick} className='pointer dim flex flex-column items-center'>
                        <LocationCityOutlinedIcon/>
                        <p className='ma0 mt1 gray f8 f9-mo'>City</p>
                    </div>
                    <Menu
                        id="city"
                        anchorEl={city}
                        keepMounted
                        open={Boolean(city)}
                        onClose={cityclose}
                                    >
                        {citiess.map((option,id) => (
                        <MenuItem key={id} onClick={cityclose}>
                            {option.city}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <div onClick={()=> dateclick.current.click()} className='pointer dim flex flex-column items-center'>
                        <CalendarTodayOutlinedIcon/>
                        <p className='ma0 mt1 gray f8 f9-mo'>Start Date</p>
                    </div>
                    <input  ref={dateclick} type="date" className='hide'/>
                </div>
                <div>
                    <div aria-controls="notice" aria-haspopup="true" onClick={noticeclick} className='pointer dim flex flex-column items-center'>
                        <ScheduleOutlinedIcon/>
                        <p className='ma0 mt1 gray f8 f9-mo'>Notice Period</p>
                    </div>
                    <Menu
                        id="notice"
                        anchorEl={notice}
                        keepMounted
                        open={Boolean(notice)}
                        onClose={noticeclose}
                                    >
                        {noticess.map((option,id) => (
                        <MenuItem key={id} onClick={noticeclose}>
                            {option.time}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <div aria-controls="industry" aria-haspopup="true" onClick={industryclick} className='pointer dim flex flex-column items-center'>
                        <WorkOutlineOutlinedIcon/>
                        <p className='ma0 mt1 gray f8 f9-mo'>Industry</p>
                    </div>
                    <Menu
                        id="industry"
                        anchorEl={industry}
                        keepMounted
                        open={Boolean(industry)}
                        onClose={industryclose}
                                    >
                        {industriess.map((option,id) => (
                        <MenuItem key={id} onClick={industryclose}>
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <div aria-controls="language" aria-haspopup="true" onClick={languageclick}  className='pointer dim flex flex-column items-center'>
                        <TranslateOutlinedIcon/>
                        <p className='ma0 mt1 gray f8 f9-mo'>Languages</p>
                    </div>
                    <Menu
                        id="language"
                        anchorEl={language}
                        keepMounted
                        open={Boolean(language)}
                        onClose={languageclose}
                                    >
                        {languagess.map((option,id) => (
                        <MenuItem key={id} onClick={languageclose}>
                            {option.name}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>
                <div>
                    <div className='flex items-center hide-mo'> 
                        <p className='gray mr1 f7-l f7-m f9-mo'>Eu Driving License</p>
                        <input name="othercountries" type="checkbox"/>
                    </div>
                </div>
            </div>
            <div className='w-90 center tc mt3'>
              { 
                filteradded?
                <div className='chips'>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                    <Chip variant="outlined" size="small" label="Deletable" onDelete={handledelete}/>
                </div>
                :
                <p className='ma0 pl2 f6-l f6-m f8 gray'>No filter's added</p>
              }
            </div>
            </div>
        </>
    )
}

export default Filter;
