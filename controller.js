/**
 * Created by internazionale on 2016-12-07.
 */

 var contents = new Array( );
var sources = new Array( );
var rank_vid = new Array( );
var rank_src = new Array( );
var rank_name=new Array();
var rank_num=new Array();

function loadChanger()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var updated_url=xmlhttp.responseText;
            var new_urls=updated_url.split(";");

            for(var i=1;i<5;++i)
            {
                var ind_url =new_urls[i-1].slice(1,2);

                document.getElementById('rank_source'+i).src =new_urls[i-1] ;
                console.log(ind_url);
                if(ind_url==1)
                {
                    document.getElementById("name"+i).innerHTML="Marlone";
                }
                else if(ind_url==2)
                {
                    document.getElementById("name"+i).innerHTML="Messi";
                }
                else if(ind_url==3)
                {
                    document.getElementById("name"+i).innerHTML="Neymar";
                }
                else if(ind_url==4)
                {
                    document.getElementById("name"+i).innerHTML="Rodrigoez";
                }
                else
                {
                    document.getElementById("name"+i).innerHTML="Subri";
                }

                document.getElementById("num"+i).innerHTML=new_urls[i+3];
                //console.log(document.getElementById('rank_source'+i).src);
                //console.log(outer_div);
                //outer_div.getElementById('rank_source').src = new_urls[i-1];
                var temp=document.getElementById('vedio'+i);
                temp.load();
                temp.play();

            }
        }
    }
    xmlhttp.open("GET","/0",true);
    xmlhttp.send();

}
loadChanger();

 for (var i = 0; i < 4; i++) {
     //console.log("content" + j);
     j=i+1;
     rank_vid[i] = document.getElementById("vedio" + j);
     rank_src[i] = document.getElementById("rank_source" + j);
     rank_name[i]= document.getElementById("name" + j);
     rank_num[i]= document.getElementById("num" + j);
     //rank_vid[i].onclick=Function (click_on_side(i));

     rank_vid[i].onclick = (function(i){ // outer function
         return function(){ //inner function
             click_on_side(i);
         };
     })(i);
 }

 function click_on_side(i)
 {
 console.log(document.getElementById('main_window').src);
 document.getElementById('main_window').src = rank_src[i].src;
 var temp = document.getElementById('main_play');
 temp.load();
 temp.play();
     video_id=rank_src[i].src.slice(-5,-4);
     console.log(video_id);
 countChanger(video_id);
 }


 for (var i = 0; i < 5; i++) {
 //console.log("content" + j);
 contents[i] = document.getElementById("content" + i);
 sources[i]= document.getElementById("source" + i);
 // console.log(contents[i]);
 }

function countChanger(video_src)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var updated_url=xmlhttp.responseText;
            var new_urls=updated_url.split(";");

            for(var i=1;i<5;++i)
            {
                var ind_url =new_urls[i-1].slice(1,2);

                document.getElementById('rank_source'+i).src =new_urls[i-1] ;
                console.log(ind_url);
                if(ind_url==1)
                {
                    document.getElementById("name"+i).innerHTML="Marlone"
                }
                else if(ind_url==2)
                {
                    document.getElementById("name"+i).innerHTML="Messi"
                }
                else if(ind_url==3)
                {
                    document.getElementById("name"+i).innerHTML="Neymar"
                }
                else if(ind_url==4)
                {
                    document.getElementById("name"+i).innerHTML="Rodrigoez"
                }
                else if(ind_url==5)
                {
                    document.getElementById("name"+i).innerHTML="Subri"
                }

                document.getElementById("num"+i).innerHTML=new_urls[i+3];





                //console.log(outer_div);
                //outer_div.getElementById('rank_source').src = new_urls[i-1];
                var temp=document.getElementById('vedio'+i);
                temp.load();
                temp.play();

            }
        }
    }
    xmlhttp.open("GET",video_src,true);
    xmlhttp.send();

}
//console.log(contents[0]);
contents[0].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[0].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
    countChanger(1);
};
contents[1].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[1].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
    countChanger(2);
};
contents[2].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[2].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
    countChanger(3);
};
contents[3].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[3].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
    countChanger(4);
};
contents[4].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[4].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
    countChanger(5);
};


/*
 console.log(contents[1]);
 contents[1].onclick = function(e)
 {
 console.log('11111');
 console.log(this.src);
 test(this.src);
 loadVideo(this.src);
 };

 */


/*
 document.getElementById('source_one').addEventListener('click', function() {
 document.getElementById('source_video').src = 'example_video_2.mp4';
 });
 */

