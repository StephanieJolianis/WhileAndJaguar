import React, { useEffect, useState, Fragment } from 'react';
import { ObtenerData } from "../scripts/datos";
import { Line } from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';






const ChartCandidate = (props) => {  
    
    const [chartData, setChartData] = useState({});
    ObtenerData(props.red,props.ciudad).then(data => console.log(data));
    const carousel = () => {
    return (<Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>)
    }
    

    const chart = () => {
        setChartData({
            labels: ['mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'],
            datasets : [
                {
                    label : 'número de alertas',
                    data: [ 14, 10, 12, 23, 22, 36],
                    backgroundColor : [
                        '#FC9BB3'
                    ],
                    borderWidth: 5
                }
            ]
        })
    }

    useEffect(()=>{
        chart()
    }, [])





    return( 
        <Fragment>
            <Carousel>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            </Carousel>

            <div style =  {{height : '350px', width : '340px' }} >
        
        
            <Line data = {chartData} options= {{
                title : {text: 'Número de alertas mensuales (últimos seis meses) ', display : true},
                responsive : true,
                maintainAspectRatio: false,                
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }}],
                        
                        xAxes: [{
                            ticks: {
                                autoSkip: false,
                                maxRotation: 180,
                                minRotation: 90
                            },
                            position: 'left'
                        }]
                            }
            }}  />
            </div>
            
            </Fragment>
        
    );
}

export default ChartCandidate;