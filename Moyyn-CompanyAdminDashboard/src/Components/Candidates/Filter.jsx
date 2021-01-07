import React, { useState, useEffect, useRef } from 'react';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import Chip from '@material-ui/core/Chip';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { countries, industries, languages, notices } from '../../util/data/static-data';

function Filter({setfilter}) {

    const [filters, setfilters] = useState([]);

    const [countriess] = useState(countries);
    const [industriess] = useState(industries);
    const [languagess] = useState(languages);
    const [noticess] = useState(notices);
    const [country, setcountry] = useState(null);
    const [industry, setindustry] = useState(null);
    const [language, setlanguage] = useState(null);
    const [notice, setnotice] = useState(null);

    const [countryvalue, setcountryvalue] = useState(undefined);
    const [industryvalue, setindustryvalue] = useState(undefined);
    const [languagevalue, setlanguagevalue] = useState(undefined);
    const [noticevalue, setnoticevalue] = useState(undefined);
    const [dl, setdl] = useState(false);

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }

    const previ=usePrevious(industryvalue),
          prevc=usePrevious(countryvalue),
          prevl=usePrevious(languagevalue),
          prevn=usePrevious(noticevalue),
          prevdl=usePrevious(dl);
    
    useEffect(() => { 
        if(industryvalue !==previ) setfilters(arr => [...filters ,industryvalue]);
        if(countryvalue !==prevc)  setfilters(arr => [...filters ,countryvalue]);
        if(languagevalue !==prevl)  setfilters(arr => [...filters ,languagevalue]);
        if(noticevalue !==prevn)  setfilters(arr => [...filters ,noticevalue]);
        if(dl !== prevdl) {
            dl?setfilters(arr => [...filters ,"EU License"])
            :setfilters((chips)=>chips.filter((chip)=> chip !== "EU License"))
        }
        setfilter(filters);
        // console.log(filters)
        // eslint-disable-next-line 
    }, [industryvalue,countryvalue,languagevalue,noticevalue,dl,filters])

    return (
        <>
            <div className={'mt2'/*"bg-white br2 c-shadow pa2 mt3"*/}>
                <div className='w-100 center mt3'><p className='ma0 gray pl2 f5-l f5-m f7'>Filter Candidates</p></div>
                <div style={{ color: "#265cff" }} className='flex items-center candidate_search h3 c-shadow bg-white w-100-l w-90 mt3 pv2 ph4-l ph3-m ph2 center br2'>
                    <div className='flex justify-between flex-wrap items-center mr-auto w-60-l w-100-m w-100'>
                        <div className='ml0-l ml4-m ml4'>
                            <div aria-controls="country" aria-haspopup="true" onClick={(e)=>setcountry(e.currentTarget)} className='pointer dim flex flex-column items-center'>
                                <PublicOutlinedIcon />
                                <p className='ma0 mt1 gray f8 f9-mo'>Country</p>
                            </div>
                            <Menu
                                id="country"
                                anchorEl={country}
                                keepMounted
                                open={Boolean(country)}
                                onClose={()=>setcountry(null)}
                            >
                                {countriess.map((option, id) => (
                                    <MenuItem key={id} onClick={()=>{setcountryvalue(option.label);setcountry(null)}}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <div>
                            <div aria-controls="notice" aria-haspopup="true" onClick={(e)=>setnotice(e.currentTarget)} className='pointer dim flex flex-column items-center'>
                                <ScheduleOutlinedIcon />
                                <p className='ma0 mt1 gray f8 f9-mo'>Notice Period</p>
                            </div>
                            <Menu
                                id="notice"
                                anchorEl={notice}
                                keepMounted
                                open={Boolean(notice)}
                                onClose={()=>setnotice(null)}
                            >
                                {noticess.map((option, id) => (
                                    <MenuItem key={id} onClick={()=>{setnoticevalue(option.time);setnotice(null)}}>
                                        {option.time}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <div>
                            <div aria-controls="industry" aria-haspopup="true" onClick={(e)=>setindustry(e.currentTarget)} className='pointer dim flex flex-column items-center'>
                                <WorkOutlineOutlinedIcon />
                                <p className='ma0 mt1 gray f8 f9-mo'>Industry</p>
                            </div>
                            <Menu
                                id="industry"
                                anchorEl={industry}
                                keepMounted
                                open={Boolean(industry)}
                                onClose={()=>setindustry(null)}
                            >
                                {industriess.map((option, id) => (
                                    <MenuItem key={id} onClick={()=>{setindustryvalue(option);setindustry(null)}}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <div>
                            <div aria-controls="language" aria-haspopup="true" onClick={(e)=>setlanguage(e.currentTarget)} className='pointer dim flex flex-column items-center'>
                                <TranslateOutlinedIcon />
                                <p className='ma0 mt1 gray f8 f9-mo'>Languages</p>
                            </div>
                            <Menu
                                id="language"
                                anchorEl={language}
                                keepMounted
                                open={Boolean(language)}
                                onClose={()=>setlanguage(null)}
                            >
                                {languagess.map((option, id) => (
                                    <MenuItem key={id} onClick={()=>{setlanguagevalue(option.name);setlanguage(null)}}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <div>
                            <div className='flex items-center hide-mo'>
                                <p className='gray mr1 f7-l f7-m f9-mo'>Eu Driving License</p>
                                <input onChange={() => setdl(!dl)} value={dl} name="othercountries" type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-90 center tc mt3'>
                 {
                        filters.length !== 0 ?
                            <div className='chips'>
                                {
                                    filters.map((name,id)=>{
                                        //console.log(name)
                                        return <Chip key={id} variant="outlined" size="small" label={name} onDelete={()=>setfilters((chips)=>chips.filter((chip)=>chip !== name))} />
                                    })
                                }
                            </div>
                            :
                            <p className='ma0 pl2 f5-l f5-m f7 gray'>No filter's added</p>
                    }
                </div>
            </div>
        </>
    )
}

export default Filter;
