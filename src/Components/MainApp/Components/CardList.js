import React from 'react';
import Cards from './Cards';

const Cardlist = ({dat}) => {
    const user = dat.map((usr,ind)=>{
        return <Cards
            key={ind}
            name={dat[ind].name}
            email={dat[ind].email}
            city={dat[ind].address.city}
            />
        });
return(
        <div>
            {user}
        </div>    
        );
}

export default Cardlist;