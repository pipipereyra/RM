var listvideo = [];
var indicevideo=0;
	
	listvideo = [{src:'video/logan.mp4', name:'Logan'},
						{src:'video/VINGADORES 4.mp4', name:'Vingadores Ultimato'},
						{src:'video/Grindelwald.mp4', name:'AFOH Crimes de Grindelwald'}];
	
	
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
             // var video =  document.getElementById('video');
              video.pause();
			  video.onclick=playvideo;
            }
            
            function stopvideo(){
             // var video =  document.getElementById('video');
              video.pause();
              video.currentTime = 0;
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
			function prevvideo(){
				if(indicevideo > listvideo.length-3){
					indicevideo--;
				}
				else{indicevideo=0;}
				video.src = listvideo[indicevideo].src;
				playvideo();
			}



	