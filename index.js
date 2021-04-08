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

    valcord = ((((width/2)+((tab[0])*(((width/2)-10)/d3.max(dataset))))
              + ((height/2)-((tab[1])*(((height/2)-10)/d3.max(dataset))))
              +((width/2)+((tab[2])*(((width/2)-10)/d3.max(dataset))))
              +((height/2)-((tab[3])*(((height/2)-10)/d3.max(dataset)))))/2);


    if(document.getElementById('valtrois1').value === '<=')
    {
      if(valcord > valacomp){
        signe = 1;
        return signe;
      }
      if(valcord < valacomp){
        signe = 0;
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