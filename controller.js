/**
 * Created by internazionale on 2016-12-07.
 */
function loadVideo(src_path)
{
    console.log('src_path');
    document.getElementById("main_window").src=src_path;
}

function test(id){
    alert(id);
}

 var contents = new Array( );
var sources = new Array( );

 for (var i = 0; i < 5; i++) {
 //console.log("content" + j);
     contents[i] = document.getElementById("content" + i);
     sources[i]= document.getElementById("source" + i);
     console.log(contents[i]);

 }

contents[0].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[0].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
};
contents[1].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[1].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
};
contents[2].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[2].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
};
contents[3].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[3].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
};
contents[4].onclick = function()
{
    console.log(document.getElementById('main_window').src);
    document.getElementById('main_window').src = sources[4].src;
    var temp=document.getElementById('main_play')
    temp.load();
    temp.play();
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

