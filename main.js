var saat =24;

var dakika =0;

var saniye=0;

var a =setInterval(function(){


    document.getElementById("saat").innerHTML=saat;
    document.getElementById("dakika").innerHTML=dakika;
    document.getElementById("saniye").innerHTML=saniye--;


    if(Number(document.getElementById("saniye").innerHTML)==0){

        dakika--;
        saniye=59;

    }
    if(Number(document.getElementById("dakika").innerHTML)==0 && 
    Number(document.getElementById("saniye").innerHTML)==0
){

        saat--;
        dakika=59;

    }

    if(Number(document.getElementById("saat").innerHTML)==0 &&
    Number(document.getElementById("dakika").innerHTML)==0 &&
    Number(document.getElementById("saniye").innerHTML)==0
    ){

clearInterval(a);

// for(i=0;i<3;i++){
//     document.getElementsByClassName("deneme")[i].style.backgroundColor="red";
// }


document.getElementById("body").style.backgroundColor="red";

    }
    

},1000)





/*

? HATIRLATMA: && and
            || or
            ! but mantıksal operatörleridir.


*/




/*

todo setInterval() metodu milisaniye cinsinden belirli aralıklarla bir fonksiyonu çağırmaya yarar.
*    setTimeOut() metodu ise milisaniye cinsinden bir fonksiyonu sadece bir kez çağırmaya yarar.

*/