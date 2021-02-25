import React, { useEffect, useState, Fragment } from 'react';
import { ObtenerData, ObtenerPreguntas} from "../scripts/datos";
import { Line } from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const ChartCandidate = (props) => {  
    const [chartData, setChartData] = useState({});
    const [datosEncuesta, setdatosEncuesta] = useState({});
    const listaPreguntas = ObtenerPreguntas();
    
    //ObtenerData(props.red,props.ciudad).then(data => setdatosEncuesta(data)); 

    //const chart = () => {
    //     setChartData({
    //         labels: ['mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'],
    //         datasets : [
    //             {
    //                 label : 'número de alertas',
    //                 data: [ 14, 10, 12, 23, 22, 36],
    //                 backgroundColor : [
    //                     '#FC9BB3'
    //                 ],
    //                 borderWidth: 5
    //             }
    //         ]
    //     })
    // }

    useEffect(()=>{
        verificarIndice(0);
    }, datosEncuesta)


    const verificarIndice = (indice) =>{
        // end point
        ObtenerData(props.red,props.ciudad).then(data => setdatosEncuesta(data)); 
        switch (indice) {
            case 0:
                if (props.candidato.id)
                {
                    console.log("datos",datosEncuesta);
                    let labelDatos = datosEncuesta.topicratio.corrupcion[props.candidato.id];
                    setChartData({
                        labels: labelDatos.dates,
                        datasets : [
                            {
                                label : 'Corrupción',
                                data: labelDatos.values,
                                backgroundColor : [
                                    props.candidato.color
                                ],
                                borderWidth: 1
                            }
                        ]
                    })
                }
                
            break;
            case 1:
                if (props.candidato.id)
                {
                    let labelDatos = datosEncuesta.topiceffectivity.drogas[props.candidato.id];
                    setChartData({
                        labels: labelDatos.dates,
                        datasets : [
                            {
                                label : 'Efectividad',
                                data: labelDatos.values,
                                backgroundColor : [
                                    props.candidato.color
                                ],
                                borderWidth: 1
                            }
                        ]
                    })
                }
                
            break;
            case 2:
                if (props.candidato.id)
                {
                    let labelDatos = datosEncuesta.topicsentiment.medio_ambiente[props.candidato.id];
                    setChartData({
                        labels: labelDatos.dates,
                        datasets : [
                            {
                                label : 'Medio Ambiente',
                                data: labelDatos.values,
                                backgroundColor : [
                                    props.candidato.color
                                ],
                                borderWidth: 1
                            }
                        ]
                    })
                }
        
            break;
            case 3:
                if (props.candidato.id)
                {
                    let labelDatos = datosEncuesta.fan_count[props.candidato.id];
                    setChartData({
                        labels: labelDatos.dates,
                        datasets : [
                            {
                                label : 'Importancia',
                                data: labelDatos.values,
                                backgroundColor : [
                                    props.candidato.color
                                ],
                                borderWidth: 1
                            }
                        ]
                    })
                }
    
            break;
            case 4:
                if (props.candidato.id)
                {
                    let labelDatos = datosEncuesta.effectivity[props.candidato.id];
                    setChartData({
                        labels: labelDatos.dates,
                        datasets : [
                            {
                                label : 'Efectividad',
                                data: labelDatos.values,
                                backgroundColor : [
                                    props.candidato.color
                                ],
                                borderWidth: 1
                            }
                        ]
                    })
                }

            break;
            case 5:
                if (props.candidato.id)
                {
                    let labelDatos = datosEncuesta.publications_count[props.candidato.id];
                    setChartData({
                        labels: labelDatos.dates,
                        datasets : [
                            {
                                label : 'Opinión',
                                data: labelDatos.values,
                                backgroundColor : [
                                    props.candidato.color
                                ],
                                borderWidth: 1
                            }
                        ]
                    })
                }
            break;
            default:
            break;
        }
    } 



    return( 
        <Carousel onChange={(indice) =>verificarIndice(indice)}>
            <div style =  {{height : '350px', width : '340px' }}>
            <Line data = {chartData} options= {{
                title : {text: listaPreguntas[0].name, display : true},
                responsive : true,
                maintainAspectRatio: false,                
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }}],
                        
            xAxes: [{
                ticks: {
                    maxRotation: 180,
                    minRotation: 90
                },
                position: 'center'
            }]
                            }
            }}  />
            </div>

            <div style =  {{height : '350px', width : '500px' }}>
        <Line data = {chartData} options= {{
                title : {text: listaPreguntas[1].name, display : true},
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

            <div style =  {{height : '350px', width : '500px' }}>
        <Line data = {chartData} options= {{
                title : {text: listaPreguntas[2].name, display : true},
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

        <div style =  {{height : '350px', width : '500px' }}>
        <Line data = {chartData} options= {{
                title : {text: listaPreguntas[3].name, display : true},
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



        <div style =  {{height : '350px', width : '500px' }}>
        <Line data = {chartData} options= {{
                title : {text: listaPreguntas[4].name, display : true},
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



        <div style =  {{height : '350px', width : '500px' }}>
        <Line data = {chartData} options= {{
                title : {text: listaPreguntas[5].name, display : true},
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
        </Carousel>
        
    //     <Carousel showThumbs={false} onChange={(indice) =>verificarIndice(indice)}>
    //     <div>
    //         <Fragment>
    //         <div style =  {{height : '350px', width : '340px' }} >
        
    //         <Line data = {chartData} options= {{
    //             title : {text: listaPreguntas[0].name, display : true},
    //             responsive : true,
    //             maintainAspectRatio: false,                
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     }}],
                        
    //                     xAxes: [{
    //                         ticks: {
    //                             autoSkip: false,
    //                             maxRotation: 180,
    //                             minRotation: 90
    //                         },
    //                         position: 'left'
    //                     }]
    //                         }
    //         }}  />
    //         </div>
    //         </Fragment>
    //     </div>

    //     <div>
    //         <Fragment>
    //         <div style =  {{height : '350px', width : '340px' }} >
        
    //         <Line data = {chartData} options= {{
    //             title : {text: 'Grafica slide 2', display : true},
    //             responsive : true,
    //             maintainAspectRatio: false,                
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     }}],
                        
    //                     xAxes: [{
    //                         ticks: {
    //                             autoSkip: false,
    //                             maxRotation: 180,
    //                             minRotation: 90
    //                         },
    //                         position: 'left'
    //                     }]
    //                         }
    //         }}  />
    //         </div>
    //         </Fragment>
    //     </div>

    //     <div>
    //         <Fragment>
    //         <div style =  {{height : '350px', width : '340px' }} >
        
    //         <Line data = {chartData} options= {{
    //             title : {text: 'Grafica slide 2', display : true},
    //             responsive : true,
    //             maintainAspectRatio: false,                
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     }}],
                        
    //                     xAxes: [{
    //                         ticks: {
    //                             autoSkip: false,
    //                             maxRotation: 180,
    //                             minRotation: 90
    //                         },
    //                         position: 'left'
    //                     }]
    //                         }
    //         }}  />
    //         </div>
    //         </Fragment>
    //     </div>

    //     <div>
    //         <Fragment>
    //         <div style =  {{height : '350px', width : '340px' }} >
        
    //         <Line data = {chartData} options= {{
    //             title : {text: 'Grafica slide 2', display : true},
    //             responsive : true,
    //             maintainAspectRatio: false,                
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     }}],
                        
    //                     xAxes: [{
    //                         ticks: {
    //                             autoSkip: false,
    //                             maxRotation: 180,
    //                             minRotation: 90
    //                         },
    //                         position: 'left'
    //                     }]
    //                         }
    //         }}  />
    //         </div>
    //         </Fragment>
    //     </div>

    //     <div>
    //         <Fragment>
    //         <div style =  {{height : '350px', width : '340px' }} >
        
    //         <Line data = {chartData} options= {{
    //             title : {text: 'Grafica slide 2', display : true},
    //             responsive : true,
    //             maintainAspectRatio: false,                
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     }}],
                        
    //                     xAxes: [{
    //                         ticks: {
    //                             autoSkip: false,
    //                             maxRotation: 180,
    //                             minRotation: 90
    //                         },
    //                         position: 'left'
    //                     }]
    //                         }
    //         }}  />
    //         </div>
    //         </Fragment>
    //     </div>

    //     <div>
    //         <Fragment>
    //         <div style =  {{height : '350px', width : '340px' }} >
        
    //         <Line data = {chartData} options= {{
    //             title : {text: 'Grafica slide 2', display : true},
    //             responsive : true,
    //             maintainAspectRatio: false,                
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero: true
    //                     }}],
                        
    //                     xAxes: [{
    //                         ticks: {
    //                             autoSkip: false,
    //                             maxRotation: 180,
    //                             minRotation: 90
    //                         },
    //                         position: 'left'
    //                     }]
    //                         }
    //         }}  />
    //         </div>
    //         </Fragment>
    //     </div>
    // </Carousel>
    );
}

export default ChartCandidate;