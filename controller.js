/**
 * Created by internazionale on 2016-12-07.
 */

 var contents = new Array( );
var sources = new Array( );

 for (var i = 0; i < 5; i++) {
 //console.log("content" + j);
     contents[i] = document.getElementById("content" + i);
     sources[i]= document.getElementById("source" + i);
     console.log(contents[i]);
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
                document.getElementById('rank_source'+i).src = new_urls[i-1];
                console.log(document.getElementById('rank_source'+i).src);
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

