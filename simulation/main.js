function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2-6      
        document.getElementById("canvas2").style.cursor="grab";
}



function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3
        document.getElementById("canvas3").style.cursor="grab";
        document.getElementById("arrowcube1").style.visibility="visible";
        
        document.getElementById("cubefromtanktb1").style.visibility="visible";
        //Month Print
        document.getElementById("demotank1").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank2").innerHTML = logo.getDate();

        document.getElementById("cubedatehidden2").style.visibility="visible";
        //Month Print
        document.getElementById("demotank11").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank12").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden3").style.visibility="visible";
        //Month Print
        document.getElementById("demotank21").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank22").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden4").style.visibility="visible";
}



function navNext3()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";

        document.getElementById("canvas4").style.cursor="grab";

        //Month Print
        document.getElementById("demotank31").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank32").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden5").style.visibility="visible";
        document.getElementById("cubefromctm_tb").style.visibility="visible";
        //Month Print
//document.getElementById("demo01").innerHTML = logo.getMonth() + 1;
//Date Print
//document.getElementById("demo02").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo03").innerHTML = logo.getFullYear();

        //document.getElementById("cubedatehidden1").style.visibility="visible";

}


// for specimen 1

function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";
        document.getElementById("canvas5").style.cursor="grab";
        //Month Print
        document.getElementById("demotank51").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank52").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden7").style.visibility="visible";

        document.getElementById("arrow4").style.visibility="visible";

        // document.getElementById("cubedatehidden").style.visibility="visible";
}


function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";

        //Month Print
        document.getElementById("demotank61").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank62").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden8").style.visibility="visible";

        document.getElementById("arrow6").style.visibility="visible";
        document.getElementById("bigc1").style.visibility="visible";
        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6()

{

        document.getElementById("canvas6").style.visibility="hidden";

        document.getElementById("canvas4a").style.visibility="visible";

        //Month Print
        document.getElementById("demotank71").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank72").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden9").style.visibility="visible";
        //document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}

// for specimen 2

function navNext4a()

{

        document.getElementById("canvas4a").style.visibility="hidden";

        document.getElementById("canvas5a").style.visibility="visible";
        document.getElementById("canvas5a").style.cursor="grab";

        document.getElementById("arrow4s2").style.visibility="visible";

        //Month Print
        document.getElementById("demotank111").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank112").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden11").style.visibility="visible";

        // document.getElementById("cubedatehidden").style.visibility="visible";
}


function navNext5a()

{

        document.getElementById("canvas5a").style.visibility="hidden";

        document.getElementById("canvas6a").style.visibility="visible";

        //Month Print
        document.getElementById("demotank121").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank122").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden12").style.visibility="visible";

        document.getElementById("arrow6s2").style.visibility="visible";
        document.getElementById("bigc2").style.visibility="visible";
        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6a()

{

        document.getElementById("canvas6a").style.visibility="hidden";

        document.getElementById("canvas4b").style.visibility="visible";


        //Month Print
        document.getElementById("demotank131").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank132").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden13").style.visibility="visible";
        //document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}

// for specimen 3

function navNext4b()

{

        document.getElementById("canvas4b").style.visibility="hidden";

        document.getElementById("canvas5b").style.visibility="visible";
        document.getElementById("canvas5b").style.cursor="grab";

        document.getElementById("arrow4s3").style.visibility="visible";

        //Month Print
        document.getElementById("demotank151").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank152").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden15").style.visibility="visible";

        // document.getElementById("cubedatehidden").style.visibility="visible";
}


function navNext5b()

{

        document.getElementById("canvas5b").style.visibility="hidden";

        document.getElementById("canvas6b").style.visibility="visible";

        //Month Print
        document.getElementById("demotank161").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank162").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden16").style.visibility="visible";

        document.getElementById("arrow6s3").style.visibility="visible";
        document.getElementById("bigc3").style.visibility="visible";
        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


// for specimen 3* (Star)

function navNext4c()

{

        document.getElementById("canvas4c").style.visibility="hidden";

        document.getElementById("canvas5c").style.visibility="visible";
        document.getElementById("canvas5c").style.cursor="grab";

        document.getElementById("arrow4s4").style.visibility="visible";

        //Month Print
        document.getElementById("demotank191").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank192").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden19").style.visibility="visible";

        // document.getElementById("cubedatehidden").style.visibility="visible";
}


function navNext5c()

{

        document.getElementById("canvas5c").style.visibility="hidden";

        document.getElementById("canvas6c").style.visibility="visible";

        //Month Print
        document.getElementById("demotank201").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank202").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden20").style.visibility="visible";

        document.getElementById("arrow6s4").style.visibility="visible";
        document.getElementById("bigc4").style.visibility="visible";
        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6c()

{

        document.getElementById("canvas6a").style.visibility="hidden";

        document.getElementById("canvas9").style.visibility="visible";

        //document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}

function navNext6b()

{

        document.getElementById("canvas6b").style.visibility="hidden";

        document.getElementById("canvas7").style.visibility="visible";

        //document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}



function navNext7()

{

        document.getElementById("canvas7").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";

}
function navNext8()
{

        document.getElementById("canvas8").style.visibility="hidden";
        
        document.getElementById("canvas4c").style.visibility="visible";


        //Month Print
        document.getElementById("demotank171").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank172").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden17").style.visibility="visible";
        // document.getElementById("canvas9").style.visibility="visible";

}

function navNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

}
/*function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";

}

function navBack2()

{

	    document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("details").style.visibility="hidden";

        document.getElementById("canvas1").style.visibility="visible";

}



function navBack3()

{

	    document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("clothforcube").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";

}



function navBack4()

{

	    document.getElementById("canvas4").style.visibility="hidden";

       

        document.getElementById("canvas3").style.visibility="visible";



}

*/
var logorep= 0;
var z = 0;


var size = 0;
var age = 0;
var logo= 0;
function agesizeIn()

{

    age = document.getElementById("ageIn").value;

    size = document.getElementById("sizeIn").value;

if (age !== "" && size > 0)
    {
        //alert(age);
        //alert(size);
        //document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrowcubox").style.visibility="visible";
        document.getElementById("nextButton2").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
    




   //------------------------------------------ 
    // JavaScript program to illustrate 
    // calculation of no. of days between two date 

    // To set two dates to two variables 
var date1 = new Date(age); 
var today = new Date(); 

// To calculate the time difference of two dates 
var Difference_In_Time = today.getTime() - date1.getTime(); 
 
// To calculate the no. of days between two dates 
var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24 ));


  z = Math.floor(Difference_In_Days); //change Float to integer

   //alert("Converted value of " + Difference_In_Days + " is " + z);

//----------------------------------------
//Global Variable Print Date in Cube

logo = new Date(date1);          
        
//Month Print
document.getElementById("demo").innerHTML = logo.getMonth() + 1;
//Date Print
document.getElementById("demo2").innerHTML = logo.getDate();
//Year Print
// document.getElementById("demo3").innerHTML = logo.getFullYear();

//-----------------------------------------------
document.getElementById("cubedatehidden").style.visibility="visible";

    document.getElementById("details").style.visibility="visible";

    //document.getElementById("nav").style.visibility="visible";



    document.getElementById("age").innerHTML= z + " Days Old";//age;

    document.getElementById("size").innerHTML= size + " cm";

    document.getElementById("cs").innerHTML= size*size + " cm<sup>2</sup>";

    document.getElementById("num").innerHTML="3";

    document.getElementById("sizec1").innerHTML= size + " cm";

    document.getElementById("sizec2").innerHTML= size + " cm";
}
    
    else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter all Values";
        //alert("Wrong");
        
    }
}


function tunnu()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 2.33 && size == 10)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    
    else if (numbox == 5.25 && size == 15)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>2.33 for 10cm speciman<br><br>5.25 for 15cm speciman";
        document.getElementById('quantity').value = '';
    }
}


function tunnu2()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantitys2").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 2.33 && size == 10)
    {
        
        document.getElementById("numoutnexts2").innerHTML = "Click Next";
        document.getElementById("arrow5s2").style.visibility="visible";
        document.getElementById("nextButton5s2").style.visibility="visible";
    }
    
    else if (numbox == 5.25 && size == 15)
    {
        
        document.getElementById("numoutnexts2").innerHTML = "Click Next";
        document.getElementById("arrow5s2").style.visibility="visible";
        document.getElementById("nextButton5s2").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnexts2").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>2.33 for 10cm speciman<br><br>5.25 for 15cm speciman";
        document.getElementById('quantitys2').value = '';
    }
}

function tunnu3()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantitys3").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 2.33 && size == 10)
    {
        
        document.getElementById("numoutnexts3").innerHTML = "Click Next";
        document.getElementById("arrow5s3").style.visibility="visible";
        document.getElementById("nextButton5s3").style.visibility="visible";
    }
    
    else if (numbox == 5.25 && size == 15)
    {
        
        document.getElementById("numoutnexts3").innerHTML = "Click Next";
        document.getElementById("arrow5s3").style.visibility="visible";
        document.getElementById("nextButton5s3").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnexts3").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>2.33 for 10cm speciman<br><br>5.25 for 15cm speciman";
        document.getElementById('quantitys3').value = '';
    }
}

function tunnu4()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantitys4").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 2.33 && size == 10)
    {
        
        document.getElementById("numoutnexts4").innerHTML = "Click Next";
        document.getElementById("arrow5s4").style.visibility="visible";
        document.getElementById("nextButton5s4").style.visibility="visible";
    }
    
    else if (numbox == 5.25 && size == 15)
    {
        
        document.getElementById("numoutnexts4").innerHTML = "Click Next";
        document.getElementById("arrow5s4").style.visibility="visible";
        document.getElementById("nextButton5s4").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnexts4").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>2.33 for 10cm speciman<br><br>5.25 for 15cm speciman";
        document.getElementById('quantitys4').value = '';
    }
}


function movecube(){

    document.getElementById("cubefromtanktb1").style.visibility="hidden";
    document.getElementById("cubefromtank1").style.animation="cubeFromCuringTank1 2s forwards";
    document.getElementById("cubedatehidden2").style.animation="cubedateFromCuringTank1 2s forwards";
    //document.getElementById("clothforcube").style.visibility="visible";
    document.getElementById("arrowcube1").style.visibility="hidden";
    
    document.getElementById("arrowcube2").style.visibility="visible";
    document.getElementById("cubefromtanktb2").style.visibility="visible";
}

function mcurcube1(){
    document.getElementById("cubefromtanktb2").style.visibility="hidden";
    document.getElementById("cubefromtanktb2").style.visibility="hidden";
    document.getElementById("cubefromtank2").style.animation="cubeFromCuringTank2 2s forwards";
    document.getElementById("cubedatehidden3").style.animation="cubedateFromCuringTank2 2s forwards";
    //document.getElementById("clothforcube").style.visibility="visible";
    document.getElementById("arrowcube2").style.visibility="hidden";

    document.getElementById("arrowcube3").style.visibility="visible";
    document.getElementById("cubefromtanktb3").style.visibility="visible";
}

function mcurcube2(){
    document.getElementById("cubefromtanktb3").style.visibility="hidden";
    document.getElementById("cubefromtank3").style.animation="cubeFromCuringTank 2s forwards";
    document.getElementById("cubedatehidden4").style.animation="cubedateFromCuringTank3 2s forwards";
    document.getElementById("arrowcube3").style.visibility="hidden";

    document.getElementById("step3b").style.visibility="visible";
    
    
setTimeout(function()
    {
        document.getElementById("arrowcube4").style.visibility="visible";
        document.getElementById("clothforcube").style.visibility="visible";
    },2000);
    

}


function movecloth(){

   

    document.getElementById("clothforcube").style.animation="wipeOutMoisture 3.20s forwards";

    document.getElementById("arrowcube4").style.visibility="hidden";     

    setTimeout(function()

	{

	document.getElementById("cubefromtank1").src="images/cubeclear.png";
    document.getElementById("cubefromtank2").src="images/cubeclear.png";
    document.getElementById("cubefromtank3").src="images/cubeclear.png";
    document.getElementById("arrowcuringnext").style.visibility="visible";
    document.getElementById("nextButton3").style.visibility="visible";
	},1850);

   
}



function isInputNumber(evt)

{

    var ch = String.fromCharCode(evt.which);



    if(!(/[0-9]/.test(ch))){

        evt.preventDefault();

    }

}


// For Specimen 1 Movements


function movecube1(){
    document.getElementById("cubefromctm_tb").style.visibility="hidden";
    document.getElementById("cubefromctm").style.animation="cubeFromctm 2s forwards";
    document.getElementById("cubedatehidden5").style.animation="cubedateFromctm 2s forwards";
    document.getElementById("arrow1").style.visibility="hidden";

    setTimeout(function()

    {
    //document.getElementById("cubefromctm").src="fitmachine.png";
    document.getElementById("cubefromctm").style.visibility="hidden";   
    document.getElementById("cuberotate").style.visibility="visible";
    document.getElementById("cuberotate_tb").style.visibility="visible";
    document.getElementById("arrow2").style.visibility="visible";
    },1750);
}

function movecube2(){

    document.getElementById("cuberotate_tb").style.visibility="hidden";
    document.getElementById("cubedatehidden5").style.visibility="hidden";
    document.getElementById("cuberotate").style.animation="cubechange 2s forwards";
    document.getElementById("arrow2").style.visibility="hidden";
    setTimeout(function()

    {
        document.getElementById("cuberotate").style.visibility="hidden";
        document.getElementById("cubechangectm").style.visibility="visible";
        document.getElementById("cubechangectm_tb").style.visibility="visible";
        //Month Print
        document.getElementById("demotank41").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank42").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden6").style.visibility="visible";


        document.getElementById("arrow3").style.visibility="visible";
        document.getElementById("step4b").style.visibility="visible";
    //document.getElementById("cuberotate").src="fitmachine.png";
    //document.getElementById("cuberotate").style.animation="cuberotate 3s forwards";
    },1750);

}

function movecube3(){
    document.getElementById("cubechangectm_tb").style.visibility="hidden";
    document.getElementById("cubechangectm").style.animation="cubechangectm 3s forwards";
    document.getElementById("cubedatehidden6").style.animation="cubedatechangectm 3s forwards";
     document.getElementById("arrow3").style.visibility="hidden";

     document.getElementById("fitcubenext").style.visibility="visible";

     document.getElementById("nextButton4").style.visibility="visible";
}


function movecube4(){

    document.getElementById("arrow4").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("numpadbig").style.visibility="visible";

}


function showbigclk()
{

    document.getElementById("arrow6").style.visibility="hidden";
    document.getElementById("bigc1").style.visibility="hidden";
    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("bigclock").style.visibility="visible";
    document.getElementById("pin1").style.visibility="visible";
    document.getElementById("pin2").style.visibility="visible";
    document.getElementById("clkdot").style.visibility="visible";

    document.getElementById("arrow7").style.visibility="visible";
    document.getElementById("strtbtn").style.visibility="visible";
    document.getElementById("startstep").style.visibility="visible";
    document.getElementById("clktable").style.visibility="visible";
}
    
function showmoveclk()
{
    document.getElementById("strtbtn").style.visibility="hidden";
    document.getElementById("arrow7").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 10)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("pin1").style.animation="clockpin10 4.20s forwards";
        document.getElementById("pin2").style.animation="clockpin210 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 127, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1").style.visibility="visible";
        document.getElementById("press2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopstep").style.visibility="visible";
            document.getElementById("arrow8").style.visibility="visible";
            document.getElementById("stopbtn").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 15)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("pin1").style.animation="clockpin15 4.20s forwards";
        document.getElementById("pin2").style.animation="clockpin215 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 138, 3000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1").style.visibility="visible";
        document.getElementById("press2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopstep").style.visibility="visible";
            document.getElementById("arrow8").style.visibility="visible";
            document.getElementById("stopbtn").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("okcube").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("crekl").style.animation="crek1 2.20s forwards";
            document.getElementById("crekr").style.animation="crek2 2.20s forwards";
            document.getElementById("cubedatehidden8").style.visibility="hidden";
            document.getElementById("press1").style.visibility="hidden";
            document.getElementById("press2").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function stopmoveclk()
{
    document.getElementById("arrow8").style.visibility="hidden";
    document.getElementById("stopbtn").style.visibility="hidden";
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("loadfail").innerHTML = "295";
    document.getElementById("lfstep").style.visibility="visible";
    document.getElementById("arrow9").style.visibility="visible";
    document.getElementById("nextButton6").style.visibility="visible";
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("lfstep").style.visibility="visible";
    document.getElementById("arrow9").style.visibility="visible";
    document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}


// For Specimen 2 Movements


function movecube11(){
    document.getElementById("cubefromctm_tbs2").style.visibility="hidden";
    document.getElementById("cubefromctms2").style.animation="cubeFromctm 2s forwards";
    document.getElementById("cubedatehidden9").style.animation="cubedateFromctm 2s forwards";
    document.getElementById("arrow1s2").style.visibility="hidden";

    setTimeout(function()

    {
    //document.getElementById("cubefromctm").src="fitmachine.png";
    document.getElementById("cubefromctms2").style.visibility="hidden";   
    document.getElementById("cuberotates2").style.visibility="visible";
    document.getElementById("cuberotate_tbs2").style.visibility="visible";
    document.getElementById("arrow2s2").style.visibility="visible";
    },1750);
}

function movecube22(){

    document.getElementById("cuberotate_tbs2").style.visibility="hidden";
    document.getElementById("cubedatehidden9").style.visibility="hidden";
    document.getElementById("cuberotates2").style.animation="cubechange 2s forwards";
    document.getElementById("arrow2s2").style.visibility="hidden";
    setTimeout(function()

    {
        document.getElementById("cuberotates2").style.visibility="hidden";
        document.getElementById("cubechangectms2").style.visibility="visible";
        document.getElementById("cubechangectm_tbs2").style.visibility="visible";
        //Month Print
        document.getElementById("demotank81").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank82").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden10").style.visibility="visible";


        document.getElementById("arrow3s2").style.visibility="visible";
        document.getElementById("step4bs2").style.visibility="visible";
    //document.getElementById("cuberotate").src="fitmachine.png";
    //document.getElementById("cuberotate").style.animation="cuberotate 3s forwards";
    },1750);

}

function movecube33(){
    document.getElementById("cubechangectm_tbs2").style.visibility="hidden";
    document.getElementById("cubechangectms2").style.animation="cubechangectm 3s forwards";
    document.getElementById("cubedatehidden10").style.animation="cubedatechangectm 3s forwards";
     document.getElementById("arrow3s2").style.visibility="hidden";

     document.getElementById("fitcubenexts2").style.visibility="visible";

     document.getElementById("nextButton4s2").style.visibility="visible";
}


function movecube44(){

    document.getElementById("arrow4s2").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("numpadbigs2").style.visibility="visible";

}


function showbigclk2()
{
// alert("hello");
    document.getElementById("arrow6s2").style.visibility="hidden";
    document.getElementById("bigc2").style.visibility="hidden";
    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("bigclocks2").style.visibility="visible";
    document.getElementById("pin1s2").style.visibility="visible";
    document.getElementById("pin2s2").style.visibility="visible";
    document.getElementById("clkdots2").style.visibility="visible";

    document.getElementById("arrow7s2").style.visibility="visible";
    document.getElementById("strtbtns2").style.visibility="visible";
    document.getElementById("startsteps2").style.visibility="visible";
    document.getElementById("clktables2").style.visibility="visible";
}
    
function showmoveclk2()
{
    document.getElementById("strtbtns2").style.visibility="hidden";
    document.getElementById("arrow7s2").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 10)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("pin1s2").style.animation="clockpin10s2 4.20s forwards";
        document.getElementById("pin2s2").style.animation="clockpin210s2 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("values2", 0, 138, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1s2").style.visibility="visible";
        document.getElementById("press2s2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopsteps2").style.visibility="visible";
            document.getElementById("arrow8s2").style.visibility="visible";
            document.getElementById("stopbtns2").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 15)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("pin1s2").style.animation="clockpin15s2 4.20s forwards";
        document.getElementById("pin2s2").style.animation="clockpin215s2 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("values2", 0, 138, 3000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1s2").style.visibility="visible";
        document.getElementById("press2s2").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopsteps2").style.visibility="visible";
            document.getElementById("arrow8s2").style.visibility="visible";
            document.getElementById("stopbtns2").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("okcubes2").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("crekls2").style.animation="crek1 2.20s forwards";
            document.getElementById("crekrs2").style.animation="crek2 2.20s forwards";
            document.getElementById("cubedatehidden12").style.visibility="hidden";
            document.getElementById("press1s2").style.visibility="hidden";
            document.getElementById("press2s2").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function stopmoveclk2()
{
    document.getElementById("arrow8s2").style.visibility="hidden";
    document.getElementById("stopbtns2").style.visibility="hidden";
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("loadfails2").innerHTML = "323";
    document.getElementById("lfsteps2").style.visibility="visible";
    document.getElementById("arrow9s2").style.visibility="visible";
    document.getElementById("nextButton6s2").style.visibility="visible";
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("loadfails2").innerHTML = "765";
    document.getElementById("lfsteps2").style.visibility="visible";
    document.getElementById("arrow9s2").style.visibility="visible";
    document.getElementById("nextButton6s2").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}

// For Specimen 3 Movements


function movecube111(){
    document.getElementById("cubefromctm_tbs3").style.visibility="hidden";
    document.getElementById("cubefromctms3").style.animation="cubeFromctm 2s forwards";
    document.getElementById("cubedatehidden13").style.animation="cubedateFromctm 2s forwards";
    document.getElementById("arrow1s3").style.visibility="hidden";

    setTimeout(function()

    {
    //document.getElementById("cubefromctm").src="fitmachine.png";
    document.getElementById("cubefromctms3").style.visibility="hidden";   
    document.getElementById("cuberotates3").style.visibility="visible";
    document.getElementById("cuberotate_tbs3").style.visibility="visible";
    document.getElementById("arrow2s3").style.visibility="visible";
    },1750);
}

function movecube222(){

    document.getElementById("cuberotate_tbs3").style.visibility="hidden";
    document.getElementById("cubedatehidden13").style.visibility="hidden";
    document.getElementById("cuberotates3").style.animation="cubechange 2s forwards";
    document.getElementById("arrow2s3").style.visibility="hidden";
    setTimeout(function()

    {
        document.getElementById("cuberotates3").style.visibility="hidden";
        document.getElementById("cubechangectms3").style.visibility="visible";
        document.getElementById("cubechangectm_tbs3").style.visibility="visible";
        //Month Print
        document.getElementById("demotank141").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank142").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden14").style.visibility="visible";


        document.getElementById("arrow3s3").style.visibility="visible";
        document.getElementById("step4bs3").style.visibility="visible";
    //document.getElementById("cuberotate").src="fitmachine.png";
    //document.getElementById("cuberotate").style.animation="cuberotate 3s forwards";
    },1750);

}

function movecube333(){
    document.getElementById("cubechangectm_tbs3").style.visibility="hidden";
    document.getElementById("cubechangectms3").style.animation="cubechangectm 3s forwards";
    document.getElementById("cubedatehidden14").style.animation="cubedatechangectm 3s forwards";
     document.getElementById("arrow3s3").style.visibility="hidden";

     document.getElementById("fitcubenexts3").style.visibility="visible";

     document.getElementById("nextButton4s3").style.visibility="visible";
}


function movecube444(){

    document.getElementById("arrow4s3").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("numpadbigs3").style.visibility="visible";

}


function showbigclk3()
{
// alert("hello");
    document.getElementById("arrow6s3").style.visibility="hidden";
    document.getElementById("bigc3").style.visibility="hidden";
    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("bigclocks3").style.visibility="visible";
    document.getElementById("pin1s3").style.visibility="visible";
    document.getElementById("pin2s3").style.visibility="visible";
    document.getElementById("clkdots3").style.visibility="visible";

    document.getElementById("arrow7s3").style.visibility="visible";
    document.getElementById("strtbtns3").style.visibility="visible";
    document.getElementById("startsteps3").style.visibility="visible";
    document.getElementById("clktables3").style.visibility="visible";
}
    
function showmoveclk3()
{
    document.getElementById("strtbtns3").style.visibility="hidden";
    document.getElementById("arrow7s3").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 10)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("pin1s3").style.animation="clockpin10s3 4.20s forwards";
        document.getElementById("pin2s3").style.animation="clockpin210s3 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("values3", 0, 104, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1s3").style.visibility="visible";
        document.getElementById("press2s3").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopsteps3").style.visibility="visible";
            document.getElementById("arrow8s3").style.visibility="visible";
            document.getElementById("stopbtns3").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 15)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("pin1s3").style.animation="clockpin15s3 4.20s forwards";
        document.getElementById("pin2s3").style.animation="clockpin215s3 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("values3", 0, 138, 3000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1s3").style.visibility="visible";
        document.getElementById("press2s3").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopsteps3").style.visibility="visible";
            document.getElementById("arrow8s3").style.visibility="visible";
            document.getElementById("stopbtns3").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("okcubes3").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("crekls3").style.animation="crek1 2.20s forwards";
            document.getElementById("crekrs3").style.animation="crek2 2.20s forwards";
            document.getElementById("cubedatehidden16").style.visibility="hidden";
            document.getElementById("press1s3").style.visibility="hidden";
            document.getElementById("press2s3").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function stopmoveclk3()
{
    document.getElementById("arrow8s3").style.visibility="hidden";
    document.getElementById("stopbtns3").style.visibility="hidden";
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("loadfails3").innerHTML = "242";
    document.getElementById("lfsteps3").style.visibility="visible";
    document.getElementById("arrow9s3").style.visibility="visible";
    document.getElementById("nextButton6s3").style.visibility="visible";
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("loadfails3").innerHTML = "540";
    document.getElementById("lfsteps3").style.visibility="visible";
    document.getElementById("arrow9s3").style.visibility="visible";
    document.getElementById("nextButton6s3").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}


// For Specimen 3* (Star) Movements


function movecube1114(){
    document.getElementById("cubefromctm_tbs4").style.visibility="hidden";
    document.getElementById("cubefromctms4").style.animation="cubeFromctm 2s forwards";
    document.getElementById("cubedatehidden17").style.animation="cubedateFromctm 2s forwards";
    document.getElementById("arrow1s4").style.visibility="hidden";

    setTimeout(function()

    {
    //document.getElementById("cubefromctm").src="fitmachine.png";
    document.getElementById("cubefromctms4").style.visibility="hidden";   
    document.getElementById("cuberotates4").style.visibility="visible";
    document.getElementById("cuberotate_tbs4").style.visibility="visible";
    document.getElementById("arrow2s4").style.visibility="visible";
    },1750);
}

function movecube2224(){

    document.getElementById("cuberotate_tbs4").style.visibility="hidden";
    document.getElementById("cubedatehidden17").style.visibility="hidden";
    document.getElementById("cuberotates4").style.animation="cubechange 2s forwards";
    document.getElementById("arrow2s4").style.visibility="hidden";
    setTimeout(function()

    {
        document.getElementById("cuberotates4").style.visibility="hidden";
        document.getElementById("cubechangectms4").style.visibility="visible";
        document.getElementById("cubechangectm_tbs4").style.visibility="visible";
        //Month Print
        document.getElementById("demotank181").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demotank182").innerHTML = logo.getDate();
        
        document.getElementById("cubedatehidden18").style.visibility="visible";


        document.getElementById("arrow3s4").style.visibility="visible";
        document.getElementById("step4bs4").style.visibility="visible";
    //document.getElementById("cuberotate").src="fitmachine.png";
    //document.getElementById("cuberotate").style.animation="cuberotate 3s forwards";
    },1750);

}

function movecube3334(){
    document.getElementById("cubechangectm_tbs4").style.visibility="hidden";
    document.getElementById("cubechangectms4").style.animation="cubechangectm 3s forwards";
    document.getElementById("cubedatehidden18").style.animation="cubedatechangectm 3s forwards";
     document.getElementById("arrow3s4").style.visibility="hidden";

     document.getElementById("fitcubenexts4").style.visibility="visible";

     document.getElementById("nextButton4s4").style.visibility="visible";
}


function movecube4444(){

    document.getElementById("arrow4s4").style.visibility="hidden";

    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("numpadbigs4").style.visibility="visible";

}


function showbigclk4()
{
// alert("hello");
    document.getElementById("arrow6s4").style.visibility="hidden";
    document.getElementById("bigc4").style.visibility="hidden";
    //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("bigclocks4").style.visibility="visible";
    document.getElementById("pin1s4").style.visibility="visible";
    document.getElementById("pin2s4").style.visibility="visible";
    document.getElementById("clkdots4").style.visibility="visible";

    document.getElementById("arrow7s4").style.visibility="visible";
    document.getElementById("strtbtns4").style.visibility="visible";
    document.getElementById("startsteps4").style.visibility="visible";
    document.getElementById("clktables4").style.visibility="visible";
}
    
function showmoveclk4()
{
    document.getElementById("strtbtns4").style.visibility="hidden";
    document.getElementById("arrow7s4").style.visibility="hidden";
    setTimeout(function()
    {
       if (size == 10)//numbox == 2.33 && size == 10)
        {
        
        document.getElementById("pin1s4").style.animation="clockpin10s4 4.20s forwards";
        document.getElementById("pin2s4").style.animation="clockpin210s4 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("values4", 0, 133, 2000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1s4").style.visibility="visible";
        document.getElementById("press2s4").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopsteps4").style.visibility="visible";
            document.getElementById("arrow8s4").style.visibility="visible";
            document.getElementById("stopbtns4").style.visibility="visible";
            },3000); 
        
        //document.getElementById("stopstep").style.visibility="visible";
        //document.getElementById("arrow8").style.visibility="visible";
        //document.getElementById("stopbtn").style.visibility="visible";
        }
    
        else if (size == 15)//numbox == 5.25 && size == 15)
        {
        
        document.getElementById("pin1s4").style.animation="clockpin15s4 4.20s forwards";
        document.getElementById("pin2s4").style.animation="clockpin215s4 4.00s forwards";

        /*Countdown Timer Animation Code Start*/  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("values4", 0, 138, 3000);
        /*Countdown Timer Animation Code End*/
        document.getElementById("press1s4").style.visibility="visible";
        document.getElementById("press2s4").style.visibility="visible";

            setTimeout(function()
            {
            document.getElementById("stopsteps4").style.visibility="visible";
            document.getElementById("arrow8s4").style.visibility="visible";
            document.getElementById("stopbtns4").style.visibility="visible";
            },3000); 
        
        }
        else
        {
        //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
        alert("Wrong");
        } 
        


        document.getElementById("okcubes4").style.visibility="hidden";

            setTimeout(function()
            {
            document.getElementById("crekls4").style.animation="crek1 2.20s forwards";
            document.getElementById("crekrs4").style.animation="crek2 2.20s forwards";
            document.getElementById("cubedatehidden20").style.visibility="hidden";
            document.getElementById("press1s4").style.visibility="hidden";
            document.getElementById("press2s4").style.visibility="hidden";
            },1750);    
    //img.setAttribute('style','transform:rotate(180deg)');
    },1850);

}


function stopmoveclk4()
{
    document.getElementById("arrow8s4").style.visibility="hidden";
    document.getElementById("stopbtns4").style.visibility="hidden";
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("loadfails4").innerHTML = "312";
    document.getElementById("lfsteps4").style.visibility="visible";
    document.getElementById("arrow9s4").style.visibility="visible";
    document.getElementById("nextButton6s4").style.visibility="visible";
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("loadfails4").innerHTML = "727";
    document.getElementById("lfsteps4").style.visibility="visible";
    document.getElementById("arrow9s4").style.visibility="visible";
    document.getElementById("nextButton6s4").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
    

}




function ShowLF()
{
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("lf1").innerHTML = "295" + " kN";
    document.getElementById("lf2").innerHTML = "323" + " kN";
    document.getElementById("lf3").innerHTML = "242" + " kN";

    document.getElementById("csf1").innerHTML = "29.5";
    document.getElementById("csf2").innerHTML = "32.3";
    document.getElementById("csf3").innerHTML = "24.2";
    
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("lf1").innerHTML = "727" + " kN";
    document.getElementById("lf2").innerHTML = "765" + " kN";
    document.getElementById("lf3").innerHTML = "540" + " kN"; 

    document.getElementById("csf1").innerHTML = "32.31";
    document.getElementById("csf2").innerHTML = "34.00";
    document.getElementById("csf3").innerHTML = "24.00";   
    //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
}


function ShowLoadRes()
{
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("csft1").innerHTML = "29.5" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("csft2").innerHTML = "32.3" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("csft3").innerHTML = "24.2" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("avg1").innerHTML = "28.66" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("csft4").innerHTML = "24.36/32.96";
    document.getElementById("csft5").innerHTML = "Ok";
    document.getElementById("csft6").innerHTML = "Ok";
    document.getElementById("csft7").innerHTML = "Not Ok";
    document.getElementById("csfres1").innerHTML = "28.66" + " MPa(N/mm<sup>2</sup>)"; //Invalid Test";
    document.getElementById("rlfstep").style.visibility="visible"; 
    document.getElementById("nextButton8").style.visibility="visible";   
    /*document.getElementById("csf1").innerHTML = "24.2";
    document.getElementById("csf2").innerHTML = "32.3";
    document.getElementById("csf3").innerHTML = "29.5";
    csft7
avg1

    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";*/
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("csft1").innerHTML = "32.31" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("csft2").innerHTML = "34.00" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("csft3").innerHTML = "24.00" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("avg1").innerHTML = "30.10" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("csft4").innerHTML = "24.31/32.89";    
    document.getElementById("csft5").innerHTML = "Ok";
    document.getElementById("csft6").innerHTML = "Ok";
    document.getElementById("csft7").innerHTML = "Not Ok";
    document.getElementById("csfres1").innerHTML = "30.10" + " MPa(N/mm<sup>2</sup>)";//"Invalid Test";
    document.getElementById("rlfstep").style.visibility="visible";
    document.getElementById("nextButton8").style.visibility="visible";
    /*document.getElementById("lf1").innerHTML = "727";
    document.getElementById("lf2").innerHTML = "865";
    document.getElementById("lf3").innerHTML = "540"; 

    document.getElementById("csf1").innerHTML = "32.3";
    document.getElementById("csf2").innerHTML = "29.5";
    document.getElementById("csf3").innerHTML = "24.0";   
    //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";*/
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
}


function ShowLFinalRes()
{
    if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("fcsft1").innerHTML = "28.4" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("fcsft2").innerHTML = "29.9" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("fcsft3").innerHTML = "31.2" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("avg2").innerHTML = "29.83" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("fcsft4").innerHTML = "25.35/34.31";
    document.getElementById("fcsft5").innerHTML = "Ok";
    document.getElementById("fcsft6").innerHTML = "Ok";
    document.getElementById("fcsft7").innerHTML = "Ok";
    document.getElementById("csfres2").innerHTML = "29.83" + " MPa(N/mm<sup>2</sup>)";//"Valid Test";
    document.getElementById("flfstep").style.visibility="visible";
    document.getElementById("nextButton9").style.visibility="visible";
    /*document.getElementById("csf1").innerHTML = "24.2";
    document.getElementById("csf2").innerHTML = "32.3";
    document.getElementById("csf3").innerHTML = "29.5";
    csft7
avg1

    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";*/
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
     {
//32.31
// 34.00
// 24.00
// 30.10

    document.getElementById("fcsft1").innerHTML = "32.31" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("fcsft2").innerHTML = "34.00" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("fcsft3").innerHTML = "32.31" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("avg2").innerHTML = "32.87" + " MPa(N/mm<sup>2</sup>)";
    document.getElementById("fcsft4").innerHTML = "24.31/32.89";
    document.getElementById("fcsft5").innerHTML = "Ok";
    document.getElementById("fcsft6").innerHTML = "Ok";
    document.getElementById("fcsft7").innerHTML = "Ok";
    document.getElementById("csfres2").innerHTML = "32.87" + " MPa(N/mm<sup>2</sup>)";//"Valid Test";
    document.getElementById("flfstep").style.visibility="visible";
    document.getElementById("nextButton9").style.visibility="visible";
    /*document.getElementById("lf1").innerHTML = "727";
    document.getElementById("lf2").innerHTML = "865";
    document.getElementById("lf3").innerHTML = "540"; 

    document.getElementById("csf1").innerHTML = "32.3";
    document.getElementById("csf2").innerHTML = "29.5";
    document.getElementById("csf3").innerHTML = "24.0";   
    //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";*/
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }
}


function Showrep()
{

    //Global Variable Print Date in Cube

//logo = new Date(date1);

var xx = new Date();
 logorep = xx.getDate()+'-'+(xx.getMonth()+1)+'-'+xx.getFullYear();

//Month Print
//document.getElementById("demo").innerHTML = logo.getMonth() + 1;
//Date Print
//document.getElementById("demo2").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo3").innerHTML = logo.getFullYear();

    //var genrep = new Date();
//alert(logo);
if (size == 10)
{
document.getElementById("sos1").innerHTML= size+" cm";

//Month Print
document.getElementById("demorep").innerHTML = logo.getMonth() + 1;
//Date Print
document.getElementById("demorep2").innerHTML = logo.getDate();
//Year Print
document.getElementById("demorep3").innerHTML = logo.getFullYear();

document.getElementById("cubedatehiddenrep").style.visibility="visible";

document.getElementById("ad1").innerHTML= z;
document.getElementById("td1").innerHTML = logorep;
document.getElementById("ft1").innerHTML= "295" + " kN";
document.getElementById("v1").innerHTML= "29.5" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av1").innerHTML= "29.83";
document.getElementById("fs1").innerHTML= "Valid";

document.getElementById("ad2").innerHTML= z;
document.getElementById("td2").innerHTML = logorep;
document.getElementById("ft2").innerHTML= "323" + " kN";
document.getElementById("v2").innerHTML= "32.3" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av2").innerHTML= "29.83";
document.getElementById("fs2").innerHTML= "Valid";

document.getElementById("ad3").innerHTML= z;
document.getElementById("td3").innerHTML = logorep;
document.getElementById("ft3").innerHTML= "242" + " kN";
document.getElementById("v3").innerHTML= "24.2" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av3").innerHTML= "29.83";
document.getElementById("fs3").innerHTML= "Invalid";

document.getElementById("ad4").innerHTML= z;
document.getElementById("td4").innerHTML = logorep;
document.getElementById("ft4").innerHTML= "312" + " kN";
document.getElementById("v4").innerHTML= "31.2" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av4").innerHTML= "29.83";
document.getElementById("fs4").innerHTML= "Valid";


document.getElementById("resetbtnlast").style.visibility="visible";
}
 else 
{
document.getElementById("sos1").innerHTML= size +" cm";

//Month Print
document.getElementById("demorep").innerHTML = logo.getMonth() + 1;
//Date Print
document.getElementById("demorep2").innerHTML = logo.getDate();
//Year Print
document.getElementById("demorep3").innerHTML = logo.getFullYear();

document.getElementById("cubedatehiddenrep").style.visibility="visible";

document.getElementById("ad1").innerHTML= z;
document.getElementById("td1").innerHTML = logorep;
document.getElementById("ft1").innerHTML= "727" + " kN";
document.getElementById("v1").innerHTML= "32.31" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av1").innerHTML= "32.87";
document.getElementById("fs1").innerHTML= "Valid";

document.getElementById("ad2").innerHTML= z;
document.getElementById("td2").innerHTML = logorep;
document.getElementById("ft2").innerHTML= "765" + " kN";
document.getElementById("v2").innerHTML= "34.00" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av2").innerHTML= "32.87";
document.getElementById("fs2").innerHTML= "Valid";

document.getElementById("ad3").innerHTML= z;
document.getElementById("td3").innerHTML = logorep;
document.getElementById("ft3").innerHTML= "540" + " kN";
document.getElementById("v3").innerHTML= "24.00" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av3").innerHTML= "29.83";
document.getElementById("fs3").innerHTML= "Invalid";

document.getElementById("ad4").innerHTML= z;
document.getElementById("td4").innerHTML = logorep;
document.getElementById("ft4").innerHTML= "727" + " kN";
document.getElementById("v4").innerHTML= "32.31" + " MPa(N/mm<sup>2</sup>)";
document.getElementById("av4").innerHTML= "32.87";
document.getElementById("fs4").innerHTML= "Valid";


document.getElementById("resetbtnlast").style.visibility="visible";    
}
}




function reset()
{
    location.reload();
}
/*if (size == 10)//numbox == 2.33 && size == 10)
    {
    document.getElementById("fcsft1").innerHTML = "28.4";
    document.getElementById("fcsft2").innerHTML = "29.9";
    document.getElementById("fcsft3").innerHTML = "31.2";
    document.getElementById("avg2").innerHTML = "29.83";
    document.getElementById("fcsft4").innerHTML = "25.35/34.31";
    document.getElementById("fcsft5").innerHTML = "Ok";
    document.getElementById("fcsft6").innerHTML = "Ok";
    document.getElementById("fcsft7").innerHTML = "Ok";
    document.getElementById("csfres2").innerHTML = "Valid Test";
    document.getElementById("flfstep").style.visibility="visible";
    document.getElementById("nextButton9").style.visibility="visible";
    
    }
    else if (size == 15)//numbox == 5.25 && size == 15)
    {
    document.getElementById("fcsft1").innerHTML = "28.4";
    document.getElementById("fcsft2").innerHTML = "29.9";
    document.getElementById("fcsft3").innerHTML = "31.2";
    document.getElementById("avg2").innerHTML = "29.83";
    document.getElementById("fcsft4").innerHTML = "25.35/34.31";
    document.getElementById("fcsft5").innerHTML = "Ok";
    document.getElementById("fcsft6").innerHTML = "Ok";
    document.getElementById("fcsft7").innerHTML = "Ok";
    document.getElementById("csfres2").innerHTML = "Valid Test";
    document.getElementById("flfstep").style.visibility="visible";
    document.getElementById("nextButton9").style.visibility="visible";
    document.getElementById("lf1").innerHTML = "727";
    document.getElementById("lf2").innerHTML = "865";
    document.getElementById("lf3").innerHTML = "540"; 

    document.getElementById("csf1").innerHTML = "32.3";
    document.getElementById("csf2").innerHTML = "29.5";
    document.getElementById("csf3").innerHTML = "24.0";   
    //document.getElementById("loadfail").innerHTML = "727";
    document.getElementById("arrow10").style.visibility="visible";
    document.getElementById("nextButton7").style.visibility="visible";
    //document.getElementById("arrow9").style.visibility="visible";
    //document.getElementById("nextButton6").style.visibility="visible";
    }
    else
    {
        alert("Wrong");
    }*/
/*
function movecube2(){

    //document.getElementById("arrow1").style.visibility="hidden";

setTimeout(function()

    {

    document.getElementById("cubefromctm").src="fitmachine.png";

    },1750);

document.getElementById("cubefromctm").style.animation="cubeFromctm 2s forwards";

}*/
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;/



/*
/* 
    
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        viewttext = "24.2";
        //showtext2 = "323";
        viewttext2 = "32.3";
        //showtext3 = "295";
        viewttext3 = "29.5";
        viewttext4 = "28.66";
        viewttext5 = "24.36/32.96";
        viewttext6 = "Not Ok";
        viewttext7 = "Ok";
        viewttext8 = "Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        viewttext = "32.3";
        //showtext2 = "865";
        viewttext2 = "29.5";
        //showtext3 = "540";
        viewttext3 = "24.0";
        viewttext4 = "28.6";
        viewttext5 = "24.31/32.89";
        viewttext6 = "Ok";
        viewttext7 = "Ok";
        viewttext8 = "Not Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
    }
    
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
---------------------------------------------------------
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;*/

//var showtext : String;
/*var showtext2 : String;
var showtext3 : String;
/
var reviewttext : String;
var reviewttext2 : String;
var reviewttext3 : String;
//var axat:Number = 28.66;
//var nav11:Number = 28.6;
var reviewttext4 : String;
var reviewttext5 : String;
var reviewttext6 : String;
var reviewttext7 : String;
var reviewttext8 : String;
var reviewttext9 : String;
var reviewttext10 : String;
//var valtext : String;


//var itext : String;
//var nstext:Number;
//stop();button_obs
reviewbtn.addEventListener(MouseEvent.CLICK, revr_MouseClickHandler);

function revr_MouseClickHandler(event:MouseEvent):void
{
    //nstext = display.text;
    // Start your custom code
    // This example code displays the words "Mouse clicked" in the Output panel.
    //trace("Mouse clicked");
    //trace(nstext);
    //if(nstext == 2.333)
    //{
    // End your custom code
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        reviewttext = "30.4";
        //showtext2 = "323";
        reviewttext2 = "29.6";
        //showtext3 = "295";
        reviewttext3 = "32.2";
        reviewttext4 = "30.73";
        reviewttext5 = "26.12/35.34";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        reviewttext = "28.4";
        //showtext2 = "865";
        reviewttext2 = "29.9";
        //showtext3 = "540";
        reviewttext3 = "31.2";
        reviewttext4 = "29.83";
        reviewttext5 = "25.35/34.31";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
    }
    //gotoAndPlay(333);
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
*/
