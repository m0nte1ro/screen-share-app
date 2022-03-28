import logo from './logo.svg';
import './App.css';

async function GetScreen(){
  const video = document.getElementById('video');
  if(video.srcObject==null){
    await window.navigator.mediaDevices.getDisplayMedia(
      { 
        video: true, 
        audio: true 
      }
    ).then(
      stream => {video.srcObject = stream}, 
      err=> console.log(err)
    );
    video.play();
  } 
  else {
    video.pause();
    video.srcObject=null;
    video.load();
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Screen Sharing App!</h1>
        <video id="video" autoPlay></video>
        <div id="start">
          {/* <input id="code-input" placeholder="Enter your code"/> */}
          <button id="start-button" onClick={()=>GetScreen()}>Start Screen Sharing</button>
        </div>
      </header>
    </div>
  );
}

export default App;
