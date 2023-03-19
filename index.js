 var i = 1;
        var contenu = "";
        function Ajoutligne(){
             i = i +1;
            
            contenu = contenu + "<label for='valpremier"+i+"' class='label'>Equation "+ i+"</label> <table ><tr> <td> <input onkeyup='verif_integer(this)'' id='valpremier"+i+"' type='text' class='input'  ></td> <td class='variable'>X1</td><td><select class='inputselect1' id='valsigne"+i+"'> <option selected>+</option> <option value='1'>-</option> </select> </td><td><input onkeyup='verif_integer(this)' id='valsecond"+i+"' type='text' class='input' ></td> <td class='variable'>X2</td><td> <select class='inputselect' id='valtrois"+i+"'><option selected value='1'><=</option><option value='2'>>=</option> </select></td> <td> <input onkeyup='verif_integer(this)'' id='valquatre"+i+"' type='text' class='input' ></td> </tr> </table> ";

            document.getElementById('nouveauligne').innerHTML = contenu;

        }
        function resolequation(i){
          
           var tab = resolreturn(i);
           return tab;

        }

        function resolreturn(i){
          var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,XX,YY;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;
           if((valpremier1<=0)&& (valsecond1<=0)){
             X = d3.max(dataset);
           }
             else if((valpremier1<=0)|| (valsecond1<=0)){
                X = -d3.max(dataset);
              //X = 0;
             }
               else{
                  X = d3.max(dataset);
               }

           Y =   ( (valquatre1-(valpremier1 *(X)))/valsecond1)  ;
           
           YY = d3.max(dataset) ;
           XX = ( (valquatre1-(valsecond1 *(YY)))/valpremier1) ;

           
          // alert('premier point :X='+X+'|Y='+Y+'deuxième point: X='+XX+'|Y='+YY);

           var tab = [X,Y,XX,YY];
           //alert("tab="+tab);

           return tab;

           //location.href = "graphe.html?X1="+X+"&Y1="+Y;
           //document.getElementById('valpremier1').value = "88";


        }


  function verif_integer(champ){
           var nombre = new RegExp("[0-9.-+]");
            var verifNb;
           for(var x = 0; x < champ.value.length; x++){
              verifNb = nombre.test(champ.value.charAt(x));
              if(verifNb == false){
                 champ.value = champ.value.substr(0,x) + champ.value.substr(x+1,champ.value.length); x--;
                 alert('Ce champ est obligatoirement en chiffre');
                    
              }
          }
      }


function resolutionresult(){
  var valdernierone, valderniertwo;
  valdernierone = document.getElementById('valdernierone').value;
  valderniertwo = document.getElementById('valderniertwo').value;
    if((valdernierone<=0)|| (valderniertwo<=0)){
            X = -d3.max(dataset);
           }
             else{
              X = d3.max(dataset);
             }
          
           Y =   ( (0-(valdernierone *(X)))/valderniertwo)  ;
           
           YY = d3.max(dataset) ;
           XX = ( (0-(valderniertwo *(YY)))/valdernierone) ;
           var tab = [X,Y,XX,YY];
           //alert('DERNIER SOL premier point :X='+X+'|Y='+Y+'deuxième point: X='+XX+'|Y='+YY);
           return tab;

}


//return 1 si le point 0 est une solution
function obtsol(i){
    var signe;
    var valcord;
    valacomp = (width/2)+(height/2);

    var tab = pointprec(i);

    valcord =  document.getElementById('valquatre'+i+'').value;
    var valtroiss = document.getElementById('valtrois1').value;
    if(valtroiss === '1')
    {
      //alert("inf ou egal");

      if(valcord > 0){
        signe = 1;
        return signe;
      }
      if(valcord < 0){
        signe = 0;
        return signe;
      }
      
    }
    if(valtroiss === '2')
    {
      
      //alert("sup ou egal");
      if(valcord > 0){
        signe = 0;
        return signe;
      }
      if(valcord < 0){
        signe = 1;
        return signe;
      }
    }
}


function pointprec(i){
   var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,XX,YY;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;

           if((valpremier1<=0)|| (valsecond1<=0)){
            X = -1;
           }
             else{
              X = 1;
             }
          
           Y =   ( (valquatre1-(valpremier1 *(X)))/valsecond1)  ;
           
           YY = 1 ;
           XX = ( (valquatre1-(valsecond1 *(YY)))/valpremier1) ;

           
          // alert('premier point :X='+X+'|Y='+Y+'deuxième point: X='+XX+'|Y='+YY);

           var tab = [X,Y,XX,YY];

           return tab;

           //location.href = "graphe.html?X1="+X+"&Y1="+Y;
           //document.getElementById('valpremier1').value = "88";

}

function TRpi(){
    var p = [];
    var i = 1;
    var coordx;
    var coordy;
    var coord = [];
            while(document.getElementById('valpremier'+i+'') != null){
              
              
               var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,XX,YY;
               valpremier1 = document.getElementById('valpremier'+i+'').value;
               valsigne1 = document.getElementById('valsigne'+i+'').value;
               valsecond1 = document.getElementById('valsecond'+i+'').value;
               valtrois1 = document.getElementById('valtrois'+i+'').value;
               valquatre1 = document.getElementById('valquatre'+i+'').value;
               
               p.push(valpremier1,valsecond1,valquatre1);

              i = i+1;
            }
            //alert("i="+i);
            var rep = 0;

            for(j = 0; j<(i-2); j++){
              
                var comp = rep+3;
                for(q = j; q<i-1; q++){
                  if(p[comp]!= null){
                        
                      coordy = (((p[comp])*(p[rep+2]))-((p[rep])*p[comp+2]))/(((p[rep+1])*(p[comp]))-((p[rep])*(p[comp+1])));
                      coordx = (((p[rep+2])-(p[rep+1]*coordy))/p[rep]);
                      coord.push(coordx,coordy);

                    comp = comp+3;
                  }
                 }
              

              rep = rep+3;
            }
            return coord;
            
}

function dersol(){      
  
  var tab = TRpi();
  var coord = [];
  var c = 0;
  var max = [0,0];
  for(i=0; i<(tab.length/2);i++){
    var res = ((tab[c]+tab[c+1]));
    if((max[0]+max[1]) < ((tab[c]+tab[c+1]))){
      max = [(tab[c]),(tab[c+1])];
    }
    coord.push(res);
    c = c+2;
  }
  return max;
}

function dersolpy(){
    var tab = TRpi();
    var c = 0;
    var max = 0;
    for(i = 0; i < (tab.length/2);i++){
      if(max < tab[c+1]){
        max = [(tab[c]),(tab[c+1])];
      }
      c = c+2;
    }
    return max;
}


//retourne le point par rapport à l'axe Y
function Valx(i){

  var valpremier1,valquatre1,X;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;
  X = valquatre1/valpremier1;

  return X;

}

function Valy(i){
  var valsecond1,valquatre1,Y;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;
  Y = valquatre1/valsecond1;
  return Y;

}

//retourne le point par rapport à l'axe Y
function Csolar(i){
  var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,sol;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;
  X = valquatre1/valpremier1;
  Y = valquatre1/valsecond1;
  sol = X+Y;
  return Y;

}

function Csolardeux(i){
  var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,sol;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;
  X = valquatre1/valpremier1;
  Y = valquatre1/valsecond1;
  sol = X+Y;
  return X;
}

function Csolarx(i){
  var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,sol;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;
  X = valquatre1/valpremier1;
  Y = valquatre1/valsecond1;
  sol = X+Y;
  return X;

}

function obtmaxoumin(){
  var val = document.getElementById('optmaxmin').value;
  return val;
}

function testinfinity(i){
    var valpremier1,valsecond1,valtrois1,valquatre1;
             valpremier1 = document.getElementById('valpremier'+i+'').value;
             valsecond1 = document.getElementById('valsecond'+i+'').value;
             valtrois1 = document.getElementById('valtrois'+i+'').value;

    if( valpremier1 ==0 || valsecond1 ==0 ){
      return 1;
    }
    return 0;
}

function xouyzero(i){
   var valpremier1,valsecond1;
             valpremier1 = document.getElementById('valpremier'+i+'').value;
             valsecond1 = document.getElementById('valsecond'+i+'').value;
    if( valpremier1 == 0){
      return 0;
    }
    if(valsecond1 == 0){
      return 1;
    }
}


function calcx(i){
   var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,XX,YY;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;

           X = valquatre1 /valpremier1;
          
           Y =   - d3.max(dataset)  ;
           
           YY = d3.max(dataset) ;
           XX = valquatre1 /valpremier1;

           
          // alert('premier point :X='+X+'|Y='+Y+'deuxième point: X='+XX+'|Y='+YY);

           var tab = [X,Y,XX,YY];

           return tab;

}

function calcy(i){
   var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1,X,Y,XX,YY;
           valpremier1 = document.getElementById('valpremier'+i+'').value;
           valsigne1 = document.getElementById('valsigne'+i+'').value;
           valsecond1 = document.getElementById('valsecond'+i+'').value;
           valtrois1 = document.getElementById('valtrois'+i+'').value;
           valquatre1 = document.getElementById('valquatre'+i+'').value;

           X = - d3.max(dataset);
          
           Y =   valquatre1 /valsecond1 ;
           
           YY = valquatre1 /valsecond1 ;
           XX = d3.max(dataset) ;

           

           var tab = [X,Y,XX,YY];

           return tab;
}


function dersolmin(){      

  var tab = TRpi();
  var coord = [];
  var c = 0;

  var max = dersol();
  var min = [(max[0]),(max[1])];
  for(i=0; i<(tab.length/2);i++){
    var res = ((tab[c]+tab[c+1]));
    
    if((min[0]+min[1]) > ((tab[c]+tab[c+1]))){

      min = [(tab[c]),(tab[c+1])];
    }
    coord.push(res);
    c = c+2;



  }
  
  return min;
}

function dersolminpy(){
    var tab = TRpi();
    var c = 0;
    var max = dersolpy();
    var min = max;
     for(i=0; i<(tab.length/2);i++){
        //alert("hditra min="+min+ "et tab c+1 ="+tab[c+1]);
        if(min[1] > tab[c+1]){
          min = [(tab[c]),(tab[c+1])];
         // alert("min anaty boucle="+min);
        }
        c = c+2;
     }
     return min;
  }

function dersolminfintroisd(){
    var max = dersol();
    var min = dersolmin();
     var tab = TRpi();
  var coord = [];
  var c = 0;

  for(i=0; i<(tab.length/2);i++){
    var res = ((tab[c]+tab[c+1]));
    
    if((min[0]+min[1]) < ((tab[c]+tab[c+1])) && ((tab[c]+tab[c+1])) < (max[0]+max[1])){

      min = [(tab[c]),(tab[c+1])];
    }
    coord.push(res);
    c = c+2;

    }
    return min;
  }

  function dersolminfintroisdpary(){

    // alert("tato");
     return dersolminpy();

  }


//X et Y sont positif et 0 est solution
function xypositzerosolut(tab){
    svg.append('polygon')
    //.attr('points', "50,50  200,50 220,70 70,70")
    .attr('fill', 'white')
    .transition()
    .duration(2000)
    .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-5)+","
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
        +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
        +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
        +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
        +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
        +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
    .attr('fill', '#9da3a5');
}

// X et Y sont positf et 0 n'est pas une solution
function xypositzerononsolut(tab){
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
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+50)+"")
    .attr('fill', '#9da3a5');

}
// X et Y sont négatif et 0 est solution
function xynegatzerosolut(tab){
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
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+50)+"")
    .attr('fill', '#9da3a5');
}

// X et Y sont négatif et 0 n'est pas une solution
function xynegatzerononsolut(tab){
  svg.append('polygon')
       //.attr('points', "50,50  200,50 220,70 70,70")
       .attr('fill', 'white')
       .transition()
       .duration(2000)
      .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-5)+","
           +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
          +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
           +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
           +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
          +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
           +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
           +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-60)+"")
       .attr('fill', '#9da3a5');
}

// X poisitif et Y négatif 0 est solution
function xpositynegatzerosolut(tab){
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
// X positif et Y négatif et 0 n'est pas une solution
function xpositynegatzerononsolut(tab){
   svg.append('polygon')
    //.attr('points', "50,50  200,50 220,70 70,70")
    .attr('fill', 'white')
    .transition()
    .duration(2000)
    .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-5)+","
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
        +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
        +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
        +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
        +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
        +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
    .attr('fill', '#9da3a5');
}

// X négatif et Y positif et 0 solution
function xnegatypositzerosolut(tab){
   svg.append('polygon')
    //.attr('points', "50,50  200,50 220,70 70,70")
    .attr('fill', 'white')
    .transition()
    .duration(2000)
    .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-5)+","
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-5)+" "
        +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))-5)+","
        +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-5)+" "
        +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))-60)+","
        +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))-60)+" "
        +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-60)+","
        +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))-50)+"")
    .attr('fill', '#9da3a5');
}

// X négatif et Y positif et 0 n'est pas une solution
function xnegatypositzerononsolut(tab){
  svg.append('polygon')
       //.attr('points', "50,50  200,50 220,70 70,70")
       .attr('fill', 'white')
       .transition()
       .duration(2000)
      .attr('points',""+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))-5)+","
           +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+5)+" "
          +((width/2)+(((tab[2])*(((width/2)-10)/d3.max(dataset))))+5)+","
           +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+5)+" "
           +(((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))+60)+","
          +(((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))+60)+" "
           +(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+60)+","
           +(((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+60)+"")
       .attr('fill', '#9da3a5');
}


function Paramdataset(){
  var valpremier1,valsecond1,valquatre1,X,Y,sol;
  var max = 0; 
   var i = 1;
            while(document.getElementById('valpremier'+i+'') != null){
                 valpremier1 = document.getElementById('valpremier'+i+'').value;
                 valsecond1 = document.getElementById('valsecond'+i+'').value;
                 valquatre1 = document.getElementById('valquatre'+i+'').value;
                  if(valpremier1 > max){
                    max = valpremier1;
                  }
                  if(valsecond1 > max){
                    max = valsecond1;
                  }
                  if(valquatre1 > max){
                    max = valquatre1;
                  }
              i = i + 1;
            }
           // alert("retour du max="+max);
            return max;
}




function trouverpointintersolution(){
    var poininterall = TRpi();

   // alert("les point d'intersection="+poininterall);
    var nouveaupi = [];
    var valpremier1,valsigne1,valsecond1,valtrois1,valquatre1;
   var i = 1;

    while(document.getElementById('valpremier'+i+'') != null){

                 valpremier1 = document.getElementById('valpremier'+i+'').value;
                 valsigne1 = document.getElementById('valsigne'+i+'').value;
                 valsecond1 = document.getElementById('valsecond'+i+'').value;
                 valtrois1 = document.getElementById('valtrois'+i+'').value;
                 valquatre1 = document.getElementById('valquatre'+i+'').value;
                 var c = 0;
                 //si la condition est inferieur ou égal
                 if(valtrois1 === '1' ){
                            if(valpremier1 >  0 && valsecond1 > 0){
                                  // alert("point fa taraiky be"+poininterall);
                                for(q = 0; q < (poininterall.length/2); q++){
                                  var yacomp = 0;
                                   yacomp = ((valquatre1 - (valpremier1*poininterall[c]))/valsecond1);
                                   //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                                   if (poininterall[c+1] <= yacomp) {
                                      nouveaupi.push(poininterall[c],poininterall[c+1]);
                                   }

                                  c = c +2;
                                }
                                poininterall = nouveaupi;
                                nouveaupi = [];
                            }
                            if(valpremier1 >  0 && valsecond1 < 0){
                                  // alert("point fa taraiky be"+poininterall);
                                for(q = 0; q < (poininterall.length/2); q++){
                                  var yacomp = 0;
                                   yacomp = ((valquatre1 - (valpremier1*poininterall[c]))/valsecond1);
                                   //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                                   if (poininterall[c+1] >= yacomp) {
                                      nouveaupi.push(poininterall[c],poininterall[c+1]);
                                   }

                                  c = c +2;
                                }
                                poininterall = nouveaupi;
                                nouveaupi = [];
                            }
                            if(valpremier1 <  0 && valsecond1 > 0){
                                  // alert("point fa taraiky be"+poininterall);
                                for(q = 0; q < (poininterall.length/2); q++){
                                  var yacomp = 0;
                                   yacomp = ((valquatre1 - (valpremier1*poininterall[c]))/valsecond1);
                                   //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                                   if (poininterall[c+1] <= yacomp) {
                                      nouveaupi.push(poininterall[c],poininterall[c+1]);
                                   }

                                  c = c +2;
                                }
                                poininterall = nouveaupi;
                                nouveaupi = [];
                            }
                        

                       if(valsecond1 === '0'){
                            // alert("point fa taraiky be"+poininterall);
                            for(q = 0; q < (poininterall.length/2); q++){
                              var yacomp = 0;
                               yacomp = (valquatre1/valpremier1);
                               //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                               if (poininterall[c] <= yacomp) {
                                  nouveaupi.push(poininterall[c],poininterall[c+1]);
                               }

                              c = c +2;
                            }
                            poininterall = nouveaupi;
                            nouveaupi = [];
                       }

                       if( valpremier1 === '0'){
                           // alert("point fa taraiky be"+poininterall);
                            for(q = 0; q < (poininterall.length/2); q++){
                              var yacomp = 0;
                               yacomp = (valquatre1/valsecond1);
                               //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                               if (poininterall[c+1] <= yacomp) {
                                  nouveaupi.push(poininterall[c],poininterall[c+1]);
                               }

                              c = c +2;
                            }
                            poininterall = nouveaupi;
                            nouveaupi = [];
                       }
                  }
                  //si la condition est supérieur ou égal
                if(valtrois1 === '2' ){
                      if(valpremier1 >  0 && valsecond1 > 0){
                                  // alert("point fa taraiky be"+poininterall);
                                for(q = 0; q < (poininterall.length/2); q++){
                                  var yacomp = 0;
                                   yacomp = ((valquatre1 - (valpremier1*poininterall[c]))/valsecond1);
                                   //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                                   if (poininterall[c+1] >= yacomp) {
                                      nouveaupi.push(poininterall[c],poininterall[c+1]);
                                   }

                                  c = c +2;
                                }
                                poininterall = nouveaupi;
                                nouveaupi = [];
                            }
                      if(valpremier1 >  0 && valsecond1 < 0){
                                  // alert("point fa taraiky be"+poininterall);
                                for(q = 0; q < (poininterall.length/2); q++){
                                  var yacomp = 0;
                                   yacomp = ((valquatre1 - (valpremier1*poininterall[c]))/valsecond1);
                                   //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                                   if (poininterall[c+1] <= yacomp) {
                                      nouveaupi.push(poininterall[c],poininterall[c+1]);
                                   }

                                  c = c +2;
                                }
                                poininterall = nouveaupi;
                                nouveaupi = [];
                            } 
                       if(valpremier1 <  0 && valsecond1 > 0){
                                  // alert("point fa taraiky be"+poininterall);
                                for(q = 0; q < (poininterall.length/2); q++){
                                  var yacomp = 0;
                                   yacomp = ((valquatre1 - (valpremier1*poininterall[c]))/valsecond1);
                                   //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                                   if (poininterall[c+1] >= yacomp) {
                                      nouveaupi.push(poininterall[c],poininterall[c+1]);
                                   }

                                  c = c +2;
                                }
                                poininterall = nouveaupi;
                                nouveaupi = [];
                            }    
                      if(valsecond1 === '0'){
                            // alert("point fa taraiky be"+poininterall);
                            for(q = 0; q < (poininterall.length/2); q++){
                              var yacomp = 0;
                               yacomp = (valquatre1/valpremier1);
                               //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                               if (poininterall[c] >= yacomp) {
                                  nouveaupi.push(poininterall[c],poininterall[c+1]);
                               }

                              c = c +2;
                            }
                            poininterall = nouveaupi;
                            nouveaupi = [];
                       }

                       if( valpremier1 === '0'){
                           // alert("point fa taraiky be"+poininterall);
                            for(q = 0; q < (poininterall.length/2); q++){
                              var yacomp = 0;
                               yacomp = (valquatre1/valsecond1);
                               //alert("poininterall = "+ poininterall[c+1]+" yacomp:"+yacomp);
                               if (poininterall[c+1] >= yacomp) {
                                  nouveaupi.push(poininterall[c],poininterall[c+1]);
                               }

                              c = c +2;
                            }
                            poininterall = nouveaupi;
                            nouveaupi = [];
                       }     
                }

                 
                
      i = i+1;
    }
    //alert("point inter solution :"+poininterall);
    //alert("matetita an");
    return poininterall;
  }



function trouversolutionmax(){

        var piv = trouverpointintersolution();
        var maxxt = [];
        var maxyt = [];
        var maxxtn = [0,0];
        var maxx = 0;
        var maxy = 0;
        var c = 0;
        //alert("controleur");
        var valdernierone, valderniertwo;
        valdernierone = document.getElementById('valdernierone').value;
        valderniertwo = document.getElementById('valderniertwo').value;

        if( valdernierone > valderniertwo){
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c] > maxx){
                maxx = piv[c];
              }
              c = c+2;
            }

            c = 0;
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c] == maxx){
               // alert("piv: "+piv[c]+"  pivc+1: "+piv[c+1]);
                maxxt.push(piv[c],piv[c+1]);
              }
              c = c+2;
            }

            c = 0;
           // alert("maxxt @ty eh="+maxxt);
           //alert("maxxtleght "+maxxt.length+ " maxxt= "+maxxt);

            for(i = 0; i < (maxxt.length/2);i++){
              //alert("maxxt+1: "+maxxt[c+1]+ " maxy="+maxy);
              if(maxxt[c+1] > maxy){
                maxy = maxxt[c+1];
              }
              c = c+2;
            }
           // alert("maxy="+maxy);

            c = 0;
            maxxtn = [];
            for(i = 0; i < (maxxt.length/2);i++){
              if(maxxt[c+1] == maxy){
               // alert("fifn");
                //maxxt = [];
                maxxtn.push(maxxt[c],maxxt[c+1]);
              }
              c = c+2;
            }


        }

        if( valdernierone < valderniertwo || valdernierone === valderniertwo){
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c+1] > maxx){
                maxx = piv[c+1];
              }
              c = c+2;
            }

            c = 0;
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c+1] == maxx){
               // alert("piv: "+piv[c]+"  pivc+1: "+piv[c+1]);
                maxxt.push(piv[c],piv[c+1]);
              }
              c = c+2;
            }

            c = 0;
           // alert("maxxt @ty eh="+maxxt);
           //alert("maxxtleght "+maxxt.length+ " maxxt= "+maxxt);

            for(i = 0; i < (maxxt.length/2);i++){
              //alert("maxxt+1: "+maxxt[c+1]+ " maxy="+maxy);
              if(maxxt[c] > maxy){
                maxy = maxxt[c];
              }
              c = c+2;
            }
           // alert("maxy="+maxy);

            c = 0;
            maxxtn = [];
            for(i = 0; i < (maxxt.length/2);i++){
              if(maxxt[c] == maxy){
               // alert("fifn");
                //maxxt = [];
                maxxtn.push(maxxt[c],maxxt[c+1]);
              }
              c = c+2;
            }

        }




        //alert("solution="+maxxtn);

        if(maxxtn.length === 0 ){
          maxxtn = [0,0];
        }

        return maxxtn;
}

function trouversolutionmin(){
   var piv = trouverpointintersolution();
        var maxxt = [];
        var maxyt = [];
        var maxxtn = [0,0];
        var maxx = piv[0];
        var maxy = 0;
        var c = 0;
        //alert("controleur");
        var valdernierone, valderniertwo;
        valdernierone = document.getElementById('valdernierone').value;
        valderniertwo = document.getElementById('valderniertwo').value;

        for(i = 0; i < (piv.length/2);i++){
              //alert("maxxt+1: "+maxxt[c+1]+ " maxy="+maxy);
              if(piv[c] > maxy){
                maxy = piv[c];
              }
              c = c+2;
            }



        if( valdernierone > valderniertwo){
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c] < maxx){
                maxx = piv[c];
              }
              c = c+2;
            }

            c = 0;
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c] == maxx){
               // alert("piv: "+piv[c]+"  pivc+1: "+piv[c+1]);
                maxxt.push(piv[c],piv[c+1]);
              }
              c = c+2;
            }

            c = 0;
           // alert("maxxt @ty eh="+maxxt);
           //alert("maxxtleght "+maxxt.length+ " maxxt= "+maxxt);

            for(i = 0; i < (maxxt.length/2);i++){
              //alert("maxxt+1: "+maxxt[c+1]+ " maxy="+maxy);
              //alert("maxy ne ka:"+maxy);
              if(maxxt[c+1] < maxy){
                maxy = maxxt[c+1];
              }
              c = c+2;
            }
           // alert("maxy="+maxy);

            c = 0;
            maxxtn = [];
            for(i = 0; i < (maxxt.length/2);i++){
              if(maxxt[c+1] == maxy){
               // alert("fifn");
                //maxxt = [];
                maxxtn.push(maxxt[c],maxxt[c+1]);
              }
              c = c+2;
            }


        }



         if( valdernierone < valderniertwo || valdernierone === valderniertwo){
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c+1] < maxx){
                maxx = piv[c+1];
              }
              c = c+2;
            }
            c = 0;
            for(i = 0; i < (piv.length/2);i++){
              if(piv[c+1] == maxx){
               // alert("piv: "+piv[c]+"  pivc+1: "+piv[c+1]);
                maxxt.push(piv[c],piv[c+1]);
              }
              c = c+2;
            }
            maxxtn = maxxt;

        }


        if(maxxtn.length === 0 ){
          maxxtn = [0,0];
        }

       // alert("maxxtn = "+maxxtn);
        return maxxtn;
}