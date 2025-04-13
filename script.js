async function generateVideo() {
    const prompt = document.getElementById('prompt').value;
    const status = document.getElementById('status');
    const videoOutput = document.getElementById('videoOutput');
    
    status.innerText = 'Generating video...';
    videoOutput.style.display = 'none';
  
    try {
      const response = await fetch('https://app-api.pixverse.ai/openapi/v2/video/text/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-b6ab01e1bd34e012bf1708236e6b15be'
        },
        body: JSON.stringify({
          prompt: prompt
        })
      });
  
      const data = await response.json();
      
      if (data && data.video_url) {
        videoOutput.src = data.video_url;
        videoOutput.style.display = 'block';
        status.innerText = 'Video ready!';
      } else {
        status.innerText = 'Failed to generate video.';
      }
    } catch (error) {
      console.error(error);
      status.innerText = 'Error generating video.';
    }
  }
  
