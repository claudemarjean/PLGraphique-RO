


var dataset = [ 6 ];

var width = 620, height = 620;


var svg = d3.select('svg')
    .attr('width', width)
    .attr("height", height);

svg.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "white")
    .style("stroke","black")
    .style("stroke-width","4");


    var xScale = d3.scaleLinear()
        .domain([-d3.max(dataset), d3.max(dataset)])
        .range([0, width -20  ]);

    var yScale = d3.scaleLinear()
        .domain([-d3.max(dataset), d3.max(dataset)])
        .range([height-20, 0 ]);

var x_axis = d3.axisBottom()
    .scale(xScale);

var y_axis = d3.axisLeft()
    .scale(yScale);

    var xAxisTranslate = height/2 ;
    var yAxisTranslate = width /2;

svg.append("g")
    //.attr("transform", "translate((0, 10)")
    .attr("transform", "translate("+yAxisTranslate+", 10)")
    .call(y_axis);


svg.append("g")
    .attr("transform", "translate(10, "+xAxisTranslate+")")
    .call(x_axis);







function graph(){
    var maxoumin = obtmaxoumin();

    if (maxoumin == 1){
        graphmin();
    }
    if(maxoumin == 2){
        graphmax();
    }

}

/*MMMMMMMMMMMMMMMMMMMMMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
function graphmax(){

    
            var i = 1;
            while(document.getElementById('valpremier'+i+'') != null){
                            
                        var testinfinit = testinfinity(i);
                       // alert("testinfinity:"+testinfinit);
                        var tab = resolequation(i);

                        //retourne 1 si l'un des 2 variable est egal 0
                        if(testinfinit == 0){
                                         //créer les droites d'équation 
                                        svg.append("line")          
                                            .style("stroke", "Blue") 
                                            .attr("x1", ((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset)))))  
                                            .attr("y1", ((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset)))))
                                            .attr("x2", ((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset)))))
                                            .attr("y2", ((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))) ;
                                        // par rapport à notre repère d3 si y veut négatif? on augmente la valeur par rapport au 0 et sur l'axe d'abscisse si on veut x positif on augmente la valeur sur l'origine d3 en positif


                                            
                                         //affiche la limite des solution  
                                        var signe = obtsol(i);
                                        var signedt = Csolar(i);
                                            //alert("signe="+signe);
                                            //alert("signedt"+signedt);
                                            if(signe === 1){
                                                if(signedt < 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt > 0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                            }

                                            if(signe === 0){
                                                
                                                if(signedt > 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt <0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }
                                               
                                            }
                                            //fin affichage de la limite des solutions



                                            i = i+1; 
                        } 
                        if (testinfinit == 1){
                            //alert("en cours");
                            var varzero = xouyzero(i);
                                if(varzero == 0){
                                   // alert("x est zéro et pour toi le programmeur va créer une fonction qui retourne seulement le X ou le Y");
                                    var y = calcy(i);
                                   // alert("y="+y);

                                     svg.append("line")          
                                            .style("stroke", "Blue") 
                                            .attr("x1", ((width/2)+((y[0])*(((width/2)-10)/d3.max(dataset)))))  
                                            .attr("y1", ((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset)))))
                                            .attr("x2", ((width/2)+((y[2])*(((width/2)-10)/d3.max(dataset)))))
                                            .attr("y2", ((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))) ;
                                          
                                         //affiche la limite des solution  si x=0
                                        var signe = obtsol(i);
                                        var signedt = Csolar(i);
                                            //alert("signe="+signe);
                                            //alert("signedt"+signedt);
                                            if(signe === 1){
                                                if(signedt < 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((y[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((y[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((y[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt > 0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((y[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((y[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((y[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                            }

                                            if(signe === 0){
                                                
                                                if(signedt > 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((y[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((y[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((y[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt <0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((y[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((y[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((y[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((y[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((y[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }
                                               
                                            }
                                }
                                if(varzero == 1){
                                    var x = calcx(i);
                                    svg.append("line")          
                                            .style("stroke", "Blue") 
                                            .attr("x1", ((width/2)+((x[0])*(((width/2)-10)/d3.max(dataset)))))  
                                            .attr("y1", ((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset)))))
                                            .attr("x2", ((width/2)+((x[2])*(((width/2)-10)/d3.max(dataset)))))
                                            .attr("y2", ((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))) ;

                                            var signe = obtsol(i);
                                            var signedt = Csolarx(i);

                                            if(signe === 1){
                                                if(signedt < 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((x[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((x[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((x[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt > 0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((x[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((x[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((x[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                            }

                                            if(signe === 0){
                                                
                                                if(signedt > 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((x[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((x[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((x[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt <0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((x[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((x[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((x[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((x[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((x[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }
                                               
                                            }





                                            
                                      }

                                i = i+1;
                        }       
            }

            //affichage du droite de solution min et max
            var sol = resolutionresult();
            var pointsol = dersol();
              svg.append("line")          
            .style("stroke", "red") 
            .attr("x1", ((width/2)+((sol[0])*(((width/2)-10)/d3.max(dataset)))))  
            .attr("y1", ((height/2)-((sol[1])*(((height/2)-10)/d3.max(dataset)))))
            .attr("x2", ((width/2)+((sol[2])*(((width/2)-10)/d3.max(dataset)))))
            .attr("y2", ((height/2)-((sol[3])*(((height/2)-10)/d3.max(dataset)))))  
            .transition()
            .duration(2000)
            .attr("x1", ( ((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset))))+((sol[0])*(((width/2)-10)/d3.max(dataset)))))  
            .attr("y1", ( ((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset))))-((sol[1])*(((height/2)-10)/d3.max(dataset)))))
            .attr("x2", ( ((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset))))+((sol[2])*(((width/2)-10)/d3.max(dataset)))))
            .attr("y2", ( ((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset))))-((sol[3])*(((height/2)-10)/d3.max(dataset))))) ;


            //fin d'affichage du droite de solution min et max

            
            //renouvelement des axes
            svg.append("g")
            //.attr("transform", "translate((0, 10)")
            .attr("transform", "translate("+yAxisTranslate+", 10)")
            .call(y_axis);


        svg.append("g")
            .attr("transform", "translate(10, "+xAxisTranslate+")")
            .call(x_axis);
            
            /*
            svg.append('polygon')
                .attr('points', "50,50 200,50 250,100 ")
                .attr('stroke', '#f00')
                .attr('fill', 'none');
            */
            /*svg.append('polygon')
                .attr('points', "50,50 200,50 250,100 250,150 20,50")
                .attr('fill', 'green');*/
             /*
                        svg.append("circle")
                            .attr("cx",((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset)))) )
                            .attr("cy",((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset)))) )
                            .attr("r",3)
                            .attr("fill","red");

                        */

        //affiche la dernier point de solution
        var pointsol = dersol();
            svg.append("circle")
                 .attr("cx",((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset)))) )
                 .attr("cy",((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset)))) )
                 .attr("r",0)
                 .transition()
                 .duration(4000)
                 .attr("cx",((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset)))) )
                 .attr("cy",((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset)))) )
                 .attr("r",5)
                 .attr("fill","blue");
        //affiche la droite de solution parallèle à son origine
        
        /*  var sol = resolutionresult();
            svg.append("line")          
            .style("stroke", "red") 
            .attr("x1", ((width/2)+((sol[0])*(((width/2)-10)/d3.max(dataset))))+((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset))))+10)  
            .attr("y1", ((height/2)-((sol[1])*(((height/2)-10)/d3.max(dataset))))-((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset))))-10)
            .attr("x2", ((width/2)+((sol[2])*(((width/2)-10)/d3.max(dataset))))+((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset))))+10)
            .attr("y2", ((height/2)-((sol[3])*(((height/2)-10)/d3.max(dataset))))-((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset))))-10) ;

       */
}

function graphmin(){
     var i = 1;
            while(document.getElementById('valpremier'+i+'') != null){
                var testinfinit = testinfinity(i);
                 // alert("testinfinity:"+testinfinit);
                var tab = resolequation(i);
                svg.append("line")          
                      .style("stroke", "Blue") 
                         .attr("x1", ((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset)))))  
                         .attr("y1", ((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset)))))
                         .attr("x2", ((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset)))))
                         .attr("y2", ((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))) ;
                        // par rapport à notre repère d3 si y veut négatif? on augmente la valeur par rapport au 0 et sur l'axe d'abscisse si on veut x positif on augmente la valeur sur l'origine d3 en positif

                 //affiche la limite des solution  
                                        var signe = obtsol(i);
                                        var signedt = Csolar(i);
                                            //alert("signe="+signe);
                                            //alert("signedt"+signedt);

                                            //si 0 est une solution et la droite est passe sur la droite d'ordonnée négatif
                                            if(signe === 1){
                                                if(signedt < 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt > 0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                            }

                                            if(signe === 0){
                                                
                                                if(signedt > 0){
                                                            svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
                                                        .attr('fill', '#9da3a5');
                                                }

                                                if(signedt < 0){
                                                         svg.append('polygon')
                                                        //.attr('points', "50,50  200,50 220,70 70,70")
                                                        .attr('fill', 'white')
                                                        .transition()
                                                        .duration(2000)
                                                        .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+5)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
                                                            +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
                                                            +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
                                                            +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
                                                        .attr('fill', '#9da3a5');
                                                }
                                               
                                            }
                                            //fin affichage de la limite des solutions



                i = i +1;
            }
       //affiche la droite de solution min et max
       //valaka ia leti eh
            var sol = resolutionresult();            var pointsol = dersolmin();
            //alert("pointsol:"+pointsol);
              svg.append("line")          
            .style("stroke", "red") 
            .attr("x1", (((width/2)+(width/3))+((sol[0])*(((width/2)-10)/d3.max(dataset)))))  
            .attr("y1", (((height/2)-(height/3))-((sol[1])*(((height/2)-10)/d3.max(dataset)))))
            .attr("x2", (((width/2)+(width/3))+((sol[2])*(((width/2)-10)/d3.max(dataset)))))
            .attr("y2", (((height/2)-(height/3))-((sol[3])*(((height/2)-10)/d3.max(dataset)))))  
            .transition()
            .duration(2000)
            .attr("x1", ( ((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset))))+((sol[0])*(((width/2)-10)/d3.max(dataset)))))  
            .attr("y1", ( ((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset))))-((sol[1])*(((height/2)-10)/d3.max(dataset)))))
            .attr("x2", ( ((width/2)+((pointsol[0])*(((width/2)-10)/d3.max(dataset))))+((sol[2])*(((width/2)-10)/d3.max(dataset)))))
            .attr("y2", ( ((height/2)-((pointsol[1])*(((height/2)-10)/d3.max(dataset))))-((sol[3])*(((height/2)-10)/d3.max(dataset))))) ;


            //fin d'affichage du droite de solution min et max
}
