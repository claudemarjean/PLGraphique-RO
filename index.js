 var i = 1;
        var contenu = "";
        function Ajoutligne(){
             i = i +1;
            
            contenu = contenu + "<label for='valpremier"+i+"' class='label'>Equation "+ i+"</label> <table ><tr> <td> <input onkeyup='verif_integer(this)'' id='valpremier"+i+"' type='text' class='input'  ></td> <td class='variable'>X1</td><td><select class='inputselect1' id='valsigne"+i+"'> <option selected>+</option> <option value='1'>-</option> </select> </td><td><input onkeyup='verif_integer(this)' id='valsecond"+i+"' type='text' class='input' ></td> <td class='variable'>X2</td><td> <select class='inputselect' id='valtrois"+i+"'><option selected><=</option><option value='1'>>=</option><option value='2'>=</option> </select></td> <td> <input onkeyup='verif_integer(this)'' id='valquatre"+i+"' type='text' class='input' ></td> </tr> </table> ";

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

           if((valpremier1<=0)|| (valsecond1<=0)){
            X = -d3.max(dataset);
           }
             else{
              X = d3.max(dataset);
             }
          
           Y =   ( (valquatre1-(valpremier1 *(X)))/valsecond1)  ;
           
           YY = d3.max(dataset) ;
           XX = ( (valquatre1-(valsecond1 *(YY)))/valpremier1) ;

           
          // alert('premier point :X='+X+'|Y='+Y+'deuxième point: X='+XX+'|Y='+YY);

           var tab = [X,Y,XX,YY];


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

function obtsol(i){
    var signe;
    var valcord;
    valacomp = (width/2)+(height/2);

    var tab = pointprec(i);
    //alert("tab0X = "+tab[0]+" tab1 Y="+tab[1]+" tab2 x="+tab[2]+" tab3 Y="+tab[3]);
  //  alert("X1 ="+(((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))+" Y1="+((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))+" X2="+((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))+" Y2="+((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset))))));


  //diso
   /* valcord = ((((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))
              + ((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))
              +((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))
              +((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset)))))/2);*/

    valcord =  document.getElementById('valquatre'+i+'').value;
    //alert("valtrois1:"+document.getElementById('valtrois1').value);
    //alert("vaalcomp="+valacomp+ " valcord "+valcord);

    if(document.getElementById('valtrois1').value === '1')
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
    if(document.getElementById('valtrois1').value === '2')
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

            //alert("taille du coord = "+ coord.length);
           // alert("la taille du tableau coord = "+coord.length);
          /* var ref = 0;
            for(p = 0;p<(coord.length/2);p++){
              alert("PI x="+coord[ref]+" et PI y="+coord[ref+1]);
              ref = ref+2;
              
            }*/

            return coord;
            
}

function dersol(){
  
  var tab = TRpi();
  var coord = [];
  var c = 0;
  var max = [0,0];
  for(i=0; i<(tab.length/2);i++){
    //alert("tab c="+tab[c]+" tab c+1="+tab[c+1]);  
    //alert("max 0="+max[0]+" max1="+max[1]);
    var res = ((tab[c]+tab[c+1]));
    if((max[0]+max[1]) < ((tab[c]+tab[c+1]))){
      max = [(tab[c]),(tab[c+1])];
    }
    coord.push(res);
    c = c+2;
  }
  //alert("max(x) = "+max[0]+"max(y)="+max[1]);
  return max;
}

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
          
           Y =   height  ;
           
           YY = -height ;
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

           X = -width
          
           Y =   valquatre1 /valsecond1 ;
           
           YY = valquatre1 /valsecond1 ;
           XX = width ;

           
          // alert('premier point :X='+X+'|Y='+Y+'deuxième point: X='+XX+'|Y='+YY);

           var tab = [X,Y,XX,YY];

           return tab;
}