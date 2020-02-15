import React, {Component} from 'react';
import "./styles.scss";
import { Line, Bar } from 'react-chartjs-2'


function Graph (){

 const state={
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
                {
                    stack: 'together',
                    label: "videos",
                    backgroundColor: "blue",
                    data: [5,1,11,24,46,32]
                }, {
                    stack: 'together',
                    label: "videos",
                    backgroundColor: "yellow",
                    data: [6,1,11,24,46,32]
                }
             
            ]
        }
    }


    return( 
        <div>
        <h2>Number of time......TITULO</h2>
        <Bar 
        options = {[
        ]}
        data = {state.data}
        />
    </div>
    )
}

export default Graph;