import React, {Component, useState} from 'react';
import "./styles.scss";
import { Line, Bar } from 'react-chartjs-2'


function Graph ({ data}){

    console.log(data)
    let max = [];
    let min = [];
    let name = [];

function formatData(data){    
    if(data.asteroids){
    const {asteroids} = data;
    max = asteroids.map(
        (el) => (el.estimated_diameter.kilometers.estimated_diameter_max)
    );

    min = asteroids.map(
        (el) => (el.estimated_diameter.kilometers.estimated_diameter_min)
    );
    name = asteroids.map(
        (el) => (el.name)
    );
   

}
}

formatData(data);
/*
function formatData(data ,date) {
const {element_count} = data;
const asteroids = data.near_earth_objects[date];
return {
  count: element_count,
  asteroids
};
}
*/


 const state={
        data: {
            labels: name,
            datasets: [
                {
                    //stack: 'together',
                    label: "estimated_diameter_min_km",
                    backgroundColor: "blue",
                    data: min
                }, {
                    //stack: 'together',
                    label: "estimated_diameter_max_km",
                    backgroundColor: "yellow",
                    data: max
                }
            ]
        }
    }
   


    return( 
        <div>
        <h2>Number of time......TITULO LALALLALALADSFADSFADSFSADFASD ASDF ASDFA</h2>
        <Bar 
       
        data = {state.data}
        />
    </div>
    )
}

export default Graph;