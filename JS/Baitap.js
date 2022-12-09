var m= 10;
var s= 00;

var timeout=null;
function start(){
    if (s==-1){
        m-=1;
        s=59;
    }
   if(m==-1){
       clearTimeout(timeout);
       alert("Het gio");
   }
}
