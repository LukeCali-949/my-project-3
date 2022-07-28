import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(
    Object.assign(document.createElement("audio"), {
      src: url,
      volume: 0.2,
      loop: true,
    })
  );
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  const turnOff = () => setPlaying(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, turnOff];
};

const Player = ({ url, isClicked }) => {
  const [playing, toggle, turnOff] = useAudio(url);

  return (
    <div>
      <button
        class="p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md absolute top-0 left-0"
        onClick={toggle}
      >
        <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span class="relative text-white">{playing ? "Pause" : "Play"}</span>
        </span>
      </button>
    </div>
  );
};

export default Player;
