import React, { useState } from 'react';

import {getImageByDate} from '../../services/curiosityApi'; 

getImageByDate('2019-01-01')


function Curiosity(){
    return <h2>Soy el contenedor Curiosity</h2>
}

export default Curiosity;