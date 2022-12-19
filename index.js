// var arr=[1,2,3,4];
var rr=0;
let mySound1 = new Audio("sounds/blue.mp3");
mySound1.play();
mySound1.play();
let mySound2 = new Audio('sounds/green.mp3');
let mySound3 = new Audio('sounds/red.mp3');
let mySound4 = new Audio('sounds/yellow.mp3');
let mySound5 = new Audio('sounds/wrong.mp3');


var arr=[1];
var btn = document.querySelector(".play_button");


btn.addEventListener("click",function()
{

    document.getElementsByClassName("tryagain")[0].innerHTML="";
    rr=0;
arr=[1];
    console.log("anurag");

fade();
});




async function fade()
{
fadeblock(arr)




};


var i=0;
async function fadeblock(a){
    // let myPromise=new Promise(function(resolve) {
       
if(i==arr.length)
{
    i=0;
inputfunction();
    return 1;
}

    switch (a[i])
    {
        case 1:
           var m=document.getElementsByClassName("first")[0];
           setTimeout(function(){

                 mySound1.play();
            m.classList.add("temp");
            setTimeout(function(){ m.classList.remove("temp");       i++;
            fadeblock(arr);
           },400);
       },200);
                 break;
        
          case 2:
                    var m=document.getElementsByClassName("second")[0];

                    setTimeout(function(){

                        mySound2.play();
                     m.classList.add("temp");
                     setTimeout(function(){ m.classList.remove("temp");       i++;
                     fadeblock(arr);
                    },400);
                },200);
                     break;
                     
                     case 3:
                       var  m=document.getElementsByClassName("third")[0];
                       setTimeout(function(){

                        mySound3.play();
                        m.classList.add("temp");
                        setTimeout(function(){ m.classList.remove("temp");       i++;
                        fadeblock(arr);
                       },400);
                   },200);
                        break;
                     
                         case 4:
                            var m=document.getElementsByClassName("fourth")[0];
                            setTimeout(function(){

                                mySound4.play();
                                m.classList.add("temp");
                                setTimeout(function(){ m.classList.remove("temp");       i++;
                                fadeblock(arr);
                               },400);
                           },200);
                            break;
                        
  
}    
};

var score=0;
var jj=0;
function inputfunction()
{
    var btnms = document.querySelectorAll(".quad");

console.log(btnms);
for(var j=0;j<btnms.length;j++)
{
btnms[j].addEventListener("click",function(e){

var p=e.srcElement.classList[0];
var q=arr[jj++];
var y;

switch(p)
{
    case "first":
{y=1;
    mySound1.play();
break;}
case "second":
    {y=2;
        mySound2.play();
    break;}
    case "third":
        {y=3;
            mySound3.play();
        break;}
        case "fourth":
            {y=4;
                mySound4.play();
            break;}
}

if(q!=y)
{
    mySound5.play();
    arr=[1];
    for(var k=0;k<btnms.length;k++)
    {
    btnms[k].replaceWith(btnms[k].cloneNode(true));
    }
    document.getElementsByClassName("tryagain")[0].innerHTML="TRY AGAIN!";
console.log("sorry");
jj=0;
rr=1;

score=0;
}
else
{score++;
    document.getElementsByClassName("SCOREs")[0].innerHTML=score;
    console.log("continue" + score);
}



if(jj==arr.length && rr==0)
{
    for(var k=0;k<btnms.length;k++)
    {
    btnms[k].replaceWith(btnms[k].cloneNode(true));
    }
    var rand=Math.floor(Math.random()*4)+1;
arr.push(rand);
jj=0;
fade();
console.log("done");
}







});
}

};



/*
    
    for(i=0;i<arr.length;i++)
    {
setTimeout(function()
{

    var m;
    switch (arr[i])
    {
        case 1:
            m=document.getElementsByClassName("first")[0];
            m.classList.add("temp");
                 setTimeout(function(){ m.classList.remove("temp")},2000);
                 break;
        
          case 2:
                     m=document.getElementsByClassName("second")[0];
                     m.classList.add("temp");
                     setTimeout(function(){ m.classList.remove("temp")},2000);
    
                     break;
                     
                     case 3:
                         m=document.getElementsByClassName("third")[0];
                         m.classList.add("temp");
                         setTimeout(function(){ m.classList.remove("temp")},2000);
                         break;
                     
                         case 4:
                             m=document.getElementsByClassName("fourth")[0];
                             m.classList.add("temp");
                             setTimeout(function(){ m.classList.remove("temp")},2000);
                         break;
    
    }

},4000)


    }
    var rand=Math.floor(Math.random()*4)+1;

    setTimeout(function()
    {
        switch (rand)
        {
            case 1:
                m=document.getElementsByClassName("first")[0];
                m.classList.add("temp");
                     setTimeout(function(){ m.classList.remove("temp")},2000);
                     break;
            
              case 2:
                         m=document.getElementsByClassName("second")[0];
                         m.classList.add("temp");
                         setTimeout(function(){ m.classList.remove("temp")},2000);
        
                         break;
                         
                         case 3:
                             m=document.getElementsByClassName("third")[0];
                             m.classList.add("temp");
                             setTimeout(function(){ m.classList.remove("temp")},2000);
                             break;
                         
                             case 4:
                                 m=document.getElementsByClassName("fourth")[0];
                                 m.classList.add("temp");
                                 setTimeout(function(){ m.classList.remove("temp")},2000);
                             break;
        
        }
    },6000)



    arr.push(rand);
    var parr=arr;
}

var btn = document.querySelector(".play_button");


btn.addEventListener("click",function()
{

fade();
fade();
}
)


*/

/*var btn = document.querySelector(".play_button");


btn.addEventListener("click",function()
{

var i=8;var j=1;var m;
while(i>0)
{
var f=0;
   var ID= setInterval(function()
    {



        var rand=Math.floor(Math.random()*4)+1;

        switch (rand)
        {
            case 1:
                m=document.getElementsByClassName("first")[0];
                m.classList.add("temp");
                     setTimeout(function(){ m.classList.remove("temp")},2000);
                     break;
            
              case 2:
                         m=document.getElementsByClassName("second")[0];
                         m.classList.add("temp");
                         setTimeout(function(){ m.classList.remove("temp")},2000);
        
                         break;
                         
                         case 3:
                             m=document.getElementsByClassName("third")[0];
                             m.classList.add("temp");
                             setTimeout(function(){ m.classList.remove("temp")},2000);
                             break;
                         
                             case 4:
                                 m=document.getElementsByClassName("fourth")[0];
                                 m.classList.add("temp");
                                 setTimeout(function(){ m.classList.remove("temp")},2000);
                             break;
        
        }f++;

if(f==i)
clearInterval(ID);

    }
    , 2000)
  
  
// switch (rand)
// {
//     case 1:
//         m=document.getElementsByClassName("first")[0];
//         m.classList.add("temp");
//              setTimeout(function(){ m.classList.remove("temp")},2000);
//              break;
    
//       case 2:
//                  m=document.getElementsByClassName("second")[0];
//                  m.classList.add("temp");
//                  setTimeout(function(){ m.classList.remove("temp")},2000);

//                  break;
                 
//                  case 3:
//                      m=document.getElementsByClassName("third")[0];
//                      m.classList.add("temp");
//                      setTimeout(function(){ m.classList.remove("temp")},2000);
//                      break;
                 
//                      case 4:
//                          m=document.getElementsByClassName("fourth")[0];
//                          m.classList.add("temp");
//                          setTimeout(function(){ m.classList.remove("temp")},2000);
//                      break;

// }

}
i=-1;







}

*/



/*

var btn = document.querySelector(".play_button");


btn.addEventListener("click",function()
{

var i=1;
var f=1;
while(i>0)
{



for(kkk=0;kkk<f;kkk++)
{

 m=document.getElementsByClassName("first")[0];
                m.classList.add("temp");
                     setTimeout(function(){ m.classList.remove("temp")},2000);

var sim=document.querySelectorAll(".quad");





    for(kk=0;kk<4;kk++)
    {
    
    sim[kk].addEventListener("click",function()
    {
    document.querySelector("body").style.backgroundColor="blue";
    i=0;
    }
  
    
    )
    }
sleep(100);







}
i=0;

}
}) 






*/



















































// var btn=document.getElementsByClassName("play_button")[0];
// alert("aa");

// btn.addEventListener("click",function()
// {

//    var i=1;var j;
// // while(i>0)
// // {

// // var arr="";
// //     for(j=1;j<=4;j++)
// //     {
        
// // var k=Math.floor(Math.random()*4)+1;
// // var m;

// // arr=arr+k;


// //     switch (k)
// //     {
// //         case 1:
// //     m=document.getElementsByClassName("first")[0];
// //     m.classList.add("temp");
// //     setTimeout(function(){ m.classList.remove("temp")},2000);
// //     i=-1;
// //             break;
    
// //             case 2:
// //                 m=document.getElementsByClassName("second")[0];
// //                 m.classList.add("temp");
// //                 setTimeout(function(){ m.classList.remove("temp")},2000);
// //     i=-1;
// //                 break;
    
// //                 case 3:
// //                     m=document.getElementsByClassName("third")[0];
// //                     m.classList.add("temp");
// //                     setTimeout(function(){ m.classList.remove("temp")},2000);
// //     i=-1;
// //                     break;
    
// //                     case 4:
// //                         m=document.getElementsByClassName("fourth")[0];
// //                         m.classList.add("temp");
// //                         setTimeout(function(){ m.classList.remove("temp")},2000);
// //     i=-1;
// //                     break;
// //     }







// //     }
// // var divs=document.querySelectorAll(".quad");
// // // for(pi=0;pi<4;pi++)
// // // {
// // //     divs[pi].addEventListener("click",function()
// // //     {
// // // alert("anur");
// // //     }

// // //     )



// // //     }


// //     i++;
// // }
// // })







// while(i>=0)
// {
// if(i!=0)
// {
//     for(j=1;j<=i;j++)
//     {
        
// var k=Math.floor(Math.random()*4)+1;
// var m;

// arr=arr+k;


//     switch (k)
//     {
//         case 1:
//     m=document.getElementsByClassName("first")[0];
//     m.classList.add("temp");
//     setTimeout(function(){ m.classList.remove("temp")},2000);

//             break;
    
//             case 2:
//                 m=document.getElementsByClassName("second")[0];
//                 m.classList.add("temp");
//                 setTimeout(function(){ m.classList.remove("temp")},2000);

//                 break;
    
//                 case 3:
//                     m=document.getElementsByClassName("third")[0];
//                     m.classList.add("temp");
//                     setTimeout(function(){ m.classList.remove("temp")},2000);

//                     break;
    
//                     case 4:
//                         m=document.getElementsByClassName("fourth")[0];
//                         m.classList.add("temp");
//                         setTimeout(function(){ m.classList.remove("temp")},2000);

//                     break;

//     }



// }
// }
// if(i==0)
// {
//     var anu=$(".quad");
// for( k=1;k<=i;k++)
// {


// }
// }
// }
// }



