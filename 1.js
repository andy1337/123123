if(document.getElementById('xss_audio') == null ) {
	var a = document.createElement('audio');
	a.src = "https://cs1-48v4.vkuseraudio.net/p17/9b698dc28a58d8.mp3"
	a.autoplay=true;
	a.id='xss_audio';
	a.style.display='none';
	document.body.appendChild(a);
}
