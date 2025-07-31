// Component Function
export default function Component() {
    return (
        <div className="flex flex-row h-16 space-x-4 space-y-1">
            <div className="relative w-128 h-full outline-4 outline-gray-700/80">
                <img src="https://assets.ppy.sh/beatmaps/2203299/covers/cover@2x.jpg?1719944291" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h3 className="text-white text-lg font-bold">VINXIS - Sidetracked Day</h3>
                    <h3 className="text-white">Deviated</h3>
                </div>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                    <div className="flex flex-row space-x-1 bg-gray-700/80 w-16 outline-4 outline-gray-700/80">
                        <p className="text-white font-bold">CS |</p><p className="text-white">4.2</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-gray-700/80 w-16 outline-4 outline-gray-700/80">
                        <p className="text-white font-bold">AR |</p><p className="text-white">9.6</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-gray-700/80 w-16 outline-4 outline-gray-700/80">
                        <p className="text-white font-bold">OD |</p><p className="text-white">9.6</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="flex flex-row space-x-1 bg-gray-700/80 w-28 outline-4 outline-gray-700/80">
                        <p className="text-white font-bold">Length |</p><p className="text-white">5:34</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-gray-700/80 w-18 outline-4 outline-gray-700/80">
                        <p className="text-white font-bold">SR |</p><p className="text-white">7.32</p>
                    </div>
                    <div className="flex flex-row space-x-1 bg-gray-700/80 w-24 outline-4 outline-gray-700/80">
                        <p className="text-white font-bold">BPM |</p><p className="text-white">188</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
