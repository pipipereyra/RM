 
var listvideo = [
	{src:'video/logan.mp4',name:'Logan'},
	{src:'video/vinga4.mp4',name:'Vingadores 4'},
	{src:'video/toy.mp4',name:'Toy Story'}
	];
var indicevideo=0;
			
//listvideo.push({src:'video/logan.mp4',name:'Logan'});
//listvideo.push({src:'video/vinga4.mp4',name:'Vingadores 4'});
//listvideo.push({src:'video/toy.mp4',name:'Toy Story'});
	

	

	
//var video = document.getElementById('video');
			
var loopa;
			
			
			
            function playvideo(){
            // var video =  document.getElementById('video');
			  if(video.src==''){
				video.src = listvideo[indicevideo].src;
			  }
              video.play();
			  video_title.innerHTML = 
			  listvideo[indicevideo].name;
			  video.onclick=pausevideo;
            }
			 function pausevideo(){
              //var vid =  document.getElementById('video');
              video.pause();
			  console.log(video);
			  video.onclick=playvideo;
            }
			
			function nextvideo(){
				if(indicevideo < listvideo.length-1){
					indicevideo++;
				}else{
					indicevideo=0;
				}		
				video.src = listvideo[indicevideo].src;
				playvideo();
			}
            
           
            
            function stopvideo(){
              //var video =  document.getElementById('video');
              video.pause();
              video.currentTime = 0;
            }
			
			function playaudio(){
				//var audio = document.getElementById('audio');
				setVolumeAudio();
				som.play();				
				loopa = setInterval(reproaudio,1000);
			}
			
			function reproaudio(){
				var tempo = som.currentTime;
				var total = som.duration;
				repro_a.innerHTML = tempo.toFixed(0)
				+"/"+total.toFixed(0)+" s";
			}
			
			function setVolumeAudio(){
				som.volume = setvola.value;
				vola.innerHTML = som.volume*100+" %"; 
			}
			
			function pauseaudio(){
				som.pause();
				clearInterval(loopa);
			}
			
			function stopaudio(){
				//var sound = document.getElementById('som');
				som.pause();
				som.currentTime = 0;
				clearInterval(loopa);
				repro_a.innerHTML = 
				som.currentTime.toFixed(0)
				+"/"+som.duration.toFixed(0)+" s";
			}
			
			