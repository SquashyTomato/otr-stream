// Import Scripts
import { formatMs } from '../../scripts/main.js';

// Component Function
export default function Component({ data }) {
    return (
        <div className="flex flex-row h-16 space-x-4 space-y-1">
            <div className="relative w-128 h-full outline-4 outline-tourney-gray">
                <img src={`https://assets.ppy.sh/beatmaps/${data.menu.bm.set}/covers/cover@2x.jpg?1719944291`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-white text-lg text-center font-bold">{data.menu.bm.metadata.artist} - {data.menu.bm.metadata.title}</h3>
                    <h3 className="text-white text-center">{data.menu.bm.metadata.difficulty}</h3>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                    <div className="flex flex-row space-x-1 bg-tourney-gray w-18 outline-4 outline-tourney-gray">
                        <p className="text-white font-bold">CS |</p><p className="text-white">{data.menu.bm.stats.CS}</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-tourney-gray w-18 outline-4 outline-tourney-gray">
                        <p className="text-white font-bold">AR |</p><p className="text-white">{data.menu.bm.stats.AR}</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-tourney-gray w-18 outline-4 outline-tourney-gray">
                        <p className="text-white font-bold">OD |</p><p className="text-white">{data.menu.bm.stats.OD}</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex flex-row space-x-1 bg-tourney-gray w-28 outline-4 outline-tourney-gray">
                        <p className="text-white font-bold">Length |</p><p className="text-white">{formatMs(data.menu.bm.time.full)}</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-tourney-gray w-18 outline-4 outline-tourney-gray">
                        <p className="text-white font-bold">SR |</p><p className="text-white">{data.menu.bm.stats.fullSR}</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-tourney-gray w-24 outline-4 outline-tourney-gray">
                        <p className="text-white font-bold">BPM |</p><p className="text-white">{data.menu.bm.stats.BPM.realtime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
