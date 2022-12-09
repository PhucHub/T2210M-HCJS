//code js
//var x=10;
//let y=20;
//Number
//string
//Boolean(T/F)

//Array
//Object
//x ="Hello";//dynamic datatype
//var t=true;
//console.log(x);//printf

var y=20;

//var z=y+10;//30
//var k=x+y;//hello20 ->strcat()
//var u=y+x;//20hello
//var o=y+"World";//20World
//var l="hello"+"world"+y;//helloworld20
var a="20"+10//2010;
console.log(a);
console.log(y);
var b= 5+10+15+"a";//30a

if (y>10){

}else{

}
for(i=0;i<10;i++){
    console.log("i="+i);
}
console.log("Xin chao cac ban"+20+",chuc buoi sang tot lanh");
//gia tri cua y=20, gia tri dep
console.log("gia tri cua y="+y+",gia tri dep");
//neu
console.log(`gia tri cua y=${y},gia tri dep`);

//khai bao 1 ham
function tinhtong(a,b){
    //return a+b;
    console.log(a+b);
//}
//arr.push(17);
//arr.push("xyz");//them phan tu vao mang,phan tu bi day xuong cuoi mang
//arr.push([3,2,1]);
//for (var i=0;i<arr.length;i++){
//    console.log(arr[i]);
//}
//alert("Alert");
//var rs = confirm("Ban co chac chan muon nop bai");//return boolean
//if(rs==true){
  //  console.log("Ng dung da dong y");

// }else{
    //console.log("ko thi thoi");
}
//var s =prompt("vui long nhap ho ten");//return string
//console.log(s)
//neu nhap +OK ->string
//
//

//setTimeout(function (){     //delay
  //  alert("Hello");
//},3000);

//setInterval(function (){
    //console.log("i="+i);
  //  i++;
//},3000);

var span_min =document.getElementById("minutes");

var span_seconds=document.getElementById("seconds")
var min=10,sec=0;
setTimeout(function () {
    var timer = setInterval(function () {
        var m = min;
        if (min < 10) {
            m = "0" + min;
        }
        var s = sec < 10 ? "0" + sec : sec;
        span_min.innerText =m;
        span_seconds.innerText =s;
        console.log(m + ":" + s);
        sec--;
        if (sec < 0) {
            sec = 59;
            min--;
        }
        if (min < 0) {
            clearInterval(timer);
        }

    }, 100);
},2000);


