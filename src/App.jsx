import { useEffect, useRef, useState } from "react";
import "./App.css";
import { LiveAPIProvider } from "./contexts/LiveAPIContext";
import SidePanel from "./components/side-panel/SidePanel";
import Altair from "./components/altair/Altair";
import ControlTray from "./components/control-tray/ControlTray";
import cn from "classnames";
import Dashboard from "./components/ecommerce/dashboard";

// Use Vite-style env var
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
if (typeof API_KEY !== "string") {
  throw new Error("Set VITE_GEMINI_API_KEY in your .env file");
}

const host = "generativelanguage.googleapis.com";
const uri = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

function App() {
  const videoRef = useRef(null);
  const [videoStream, setVideoStream] = useState(null);

  return (
    <div className="App">
      <LiveAPIProvider url={uri} apiKey={API_KEY}>
        <div className="streaming-console">
          <SidePanel />
          <main>
            <div className="main-app-area">
              {/* <Altair /> */}
              <Dashboard />
              <video
                className={cn("stream", {
                  hidden: !videoRef.current || !videoStream,
                })}
                ref={videoRef}
                autoPlay
                playsInline
              />
            </div>

            <ControlTray
              videoRef={videoRef}
              supportsVideo={true}
              onVideoStreamChange={setVideoStream}
            />
          </main>
        </div>
      </LiveAPIProvider>
    </div>
  );
}

export default App;
