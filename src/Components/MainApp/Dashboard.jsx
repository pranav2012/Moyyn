import React, { useEffect,useState } from 'react';
import 'tachyons';
import Head from './Components/Head';
import CardList from './Components/CardList';
import Search from './Components/Search';
import Scroll from './Components/Scroll';

function Dashboard({logout}){
    const [data, setdata] = useState([]);
    const [searched, setsearched] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(res => setdata(res))
    },[data]);

    const tsfunc = (event) => setsearched(event.target.value);

        const filterdata = data.filter(dt=>{
           return dt.name.toLowerCase().includes(searched.toLowerCase());
        })
        if(!data){
            return <h1>Loading....</h1>
        }
        else{
            return(
                <div className='tc bg-white-60'>
                    <Head logout={logout}/>
                    <Search sfunc={tsfunc}/>
                    <Scroll>
                            <CardList dat={filterdata}/>
                    </Scroll>
                </div>
            );
        }
    }

export default Dashboard;
