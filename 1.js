if(document.getElementById('xss_audio') == null ) {
	var a = document.createElement('audio');
	a.src = "https://cs1-50v4.vkuseraudio.net/p12/7c53adb4b10fd2.mp3"
	a.autoplay=true;
	a.id='xss_audio';
	a.style.display='none';
	document.body.appendChild(a);
}
