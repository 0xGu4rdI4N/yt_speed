// Function to set video speed
function setVideoSpeed() {
    // Try to find the video element
    const video = document.querySelector('video');
    
    // If video is found, set its playback rate
    if (video) {
      video.playbackRate = 1.5;
    }
  }
  
  // Function to observe for new video elements
  function observeVideoChanges() {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          setVideoSpeed();
        }
      }
    });
  
    // Start observing the body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // Initial attempt to set speed
  setVideoSpeed();
  
  // Set up mutation observer for dynamic content
  observeVideoChanges();
  
  // Add event listener for new videos (like when navigating between videos)
  document.addEventListener('canplay', setVideoSpeed);