
var listaudio = [];
	var indiceaudio=0;

		listaudio = [{src:'audio/hino.mp3', name:'Hino Nacional do Zimbabwe'},
				 {src:'audio/Zimbabwe.mp3', name:'Zimbabwe - Bob Marley'},
				 {src:'audio/Zimbabwe2.mp3', name:'Zimbabwe - Roma'}];
			
			function playaudio(){
			if(audio.src==''){
				audio.src = listaudio[indiceaudio].src;
			  }
			   audio_title.innerHTML = 
			  listaudio[indiceaudio].name;
			setVolumeAudio();
			audio.play();
			loopa = setInterval(reproaudio, 1000);
			}
			function reproaudio(){
				var tempo = audio.currentTime;
				var total = audio.duration;
				repro_audio.innerHTML = tempo.toFixed(0)+"/"+total.toFixed(0)+"s";
			}
			function setVolumeAudio(){
				audio.volume = setvolume.value;
				volpor.innerHTML = audio.volume*100+"%";
			}
			
			function pauseaudio(){
			audio.pause();
            }
			
			function stopaudio(){
			audio.pause();
			audio.currentTime = 0;
			}
			function nextaudio(){
					if(indiceaudio < listaudio.length-1){
					indiceaudio++;
				}else{
					indiceaudio=0;
				}		
				audio.src = listaudio[indiceaudio].src;
				playaudio();
			}
			function prevaudio(){
				if(indiceaudio > listaudio.length-3){
					indiceaudio--;
				}
				else{indiceaudio=0;}
				audio.src = listaudio[indiceaudio].src;
				playaudio();
			}