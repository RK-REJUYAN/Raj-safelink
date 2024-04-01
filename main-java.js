



var timeLeft = 6;
const manualDownloadLink = document.querySelector('.manualDownload-link');
const download = document.querySelector('.download-btn');
const process = document.querySelector('.process');
const countdown = document.querySelector('.countdown');

const pleaseWaitText = document.querySelector('.pleaseWait-text');



const manualDownloadText = document.querySelector('.manualDownload-text');



download.addEventListener('click', () => {
  download.style.display = "none";
  
process.style.display = "block";
  var downloadTimer = setInterval(function timeCount() {
    timeLeft--;
    

    if (timeLeft <= 0) {
      clearInterval(downloadTimer); 
      
      
      
      pleaseWaitText.style.display = "block";

      countdown.style.display = "none";
      
      process.style.display = "none";
      setTimeout(() => {
            
       
        pleaseWaitText.style.display = "none";
     manualDownloadText.style.display = "block";
        
      }, 1000);
    }
  }, 1000);
  
});
