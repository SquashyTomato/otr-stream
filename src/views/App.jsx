// Import Modules
import { useEffect, useState } from 'react';

// Import Components
import BeatmapData from './components/BeatmapData.jsx';
import ContentBar from './components/ContentBar.jsx';
import GameplayBox from './components/GameplayBox.jsx';
import MatchScore from './components/MatchScore.jsx';
import TeamScore from './components/TeamScore.jsx';

// Import Scripts
import WebSocketClient from '../scripts/socket.js';

// Import Assets
//import BackgroundImage from '../assets/overlay/background.png';
import BackgroundVideo from '../assets/overlay/background.mp4';
import ForegroundImage from '../assets/overlay/foreground.png';
import LogoImage from '../assets/overlay/logo.png';

// Page Function
export default function Page() {
    // State Variables
    const [data, setData] = useState(null);

    // WebSocket Connection
    useEffect(() => {
        // Connect to WebSocket Server
        if (import.meta.env.DEV) WebSocketClient.connect('127.0.0.1:24050');
        else WebSocketClient.connect(window.location.host);

        // Handle Incoming Messages
        const handleMessage = (data) => {
            console.log(`[CLIENT] Data recieved from WebSocket Server:\n ${data}`);
            try {
                const parsed = JSON.parse(data);
                setData(parsed);
            } catch (error) {
                console.error(`[CLIENT] Error parsing WebSocket data:\n ${error}`);
            }
        };

        // Subscribe to WebSocket Messages
        console.log('[CLIENT] Subscribing to WebSocket Messages');
        WebSocketClient.subscribe(handleMessage);

        return () => {
            // Cleanup WebSocket Connection
            console.log('[CLIENT] Unsubscribing from WebSocket Messages and closing connection');
            WebSocketClient.unsubscribe(handleMessage);
            WebSocketClient.close();
        };
    }, []);

    // Get IPC Client Data
    const teamSize = 4;

    // Check if Data is Available and output the following message if not.
    if (!data) {
        return <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-white">Waiting for data from the WebSocket Server...</h1>
            <p className="text-lg text-white/70">Please make sure tosu is running and the osu! Tournament Client is running.</p>
            <p className="text-sm text-white/50">If everything is running correctly, you can try refreshing the page or open the browser console and check for errors.</p>
        </div>
    };

    return (
        <>
            <div className="relative w-screen h-screen overflow-hidden">
                {/* Background and Foreground Assets */}
                {/* <img src={BackgroundImage} className="absolute inset-0 w-full h-full object-cover aspect-video -z-10" /> */}
                <video src={BackgroundVideo} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover aspect-video -z-10" />
                <img src={ForegroundImage} className="absolute inset-0 w-full h-full object-cover aspect-video z-10" />

                {/* Overlay Contents */}
                <div className="relative z-0">
                    {/* Top Bar */}
                    <ContentBar
                        alignment='top'
                        left={
                            <TeamScore data={data} alignment="left" color="blue" />
                        }
                        middle={
                            <img src={LogoImage} className="h-18" />
                        }
                        right={
                            <h4 className="text-white/30">YORUMCULAR<br /><br /><br /></h4>
                        }
                    />

                    {/* Overlay Specifics */}
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex space-x-6">
                                {Array.from({ length: teamSize }, (_, index) => (
                                    <GameplayBox key={index} number={index} color="blue" data={data} />
                                ))}
                            </div>
                            <MatchScore data={data} />
                            <div className="flex space-x-6">
                                {Array.from({ length: teamSize }, (_, index) => (
                                    <GameplayBox key={index} number={teamSize + index} color="red" data={data} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <ContentBar
                        alignment='bottom'
                        left={
                            <BeatmapData data={data} />
                        }
                        right={
                            <TeamScore data={data} alignment="right" color="red" />
                        }
                    />
                </div>
            </div>
        </>
    );
};
