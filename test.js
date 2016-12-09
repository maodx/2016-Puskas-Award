var a = document.getElementById('source_one');
var b = document.getElementById("example_video_1");
a.addEventListener('click',function() {
    if (document.getElementById("example_video_1").children[0].src == 'http://fiddle.jshell.net/_display/example_video_2.mp4') {
        console.log('1')
        document.getElementById("example_video_1").children[0].src="1.mp4";
        a.innerHTML = 'Source 1';
    }
    else {
        console.log('2')
        document.getElementById("example_video_1").children[0].src="2.mp4";
        a.innerHTML = 'Source 2';
    }


});