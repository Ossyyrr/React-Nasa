import React, { useState } from 'react';

import {getImageByDate} from '../../services/curiosityApi'; 
import FetchDate from '../../components/FetchDate';
import CuriosityList from '../../components/CuriosityList/view';

function Curiosity({cacheCuriosity,setCacheCuriosity}){
   const [data, setData] = useState([{}])
   const [date, setDate] = useState('2012-08-08');  


   async function fetchCuriosityData() {

       if(cacheCuriosity[date]){  
       console.log('cojo datos del cache')
       console.log(cacheCuriosity[date])
       setData(cacheCuriosity[date])
       
       }else{
        let data = await getImageByDate(date);
        setData(data);
    
        let  cacheData = {...cacheCuriosity, [date]:data}
    
        setCacheCuriosity(cacheData)
        console.log(cacheData)
       }
}


    return <> 
    <FetchDate fetchImg={fetchCuriosityData} date={date} setDate={setDate} ></FetchDate>
    <CuriosityList data={data}></CuriosityList>
    </>
}

export default Curiosity;