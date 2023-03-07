import React, { useMemo } from "react";

import { useAudio } from "react-use";
import utils from "../../utils";
import CustomRange from "../CustomRange";
const Player = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });
  const level = useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "fa-solid fa-volume-xmark";
    }
    if (state.volume > 0 && state.volume < 0.5) {
      return "fa-solid fa-volume-low";
    }
    if (state.volume >= 0.5) {
      return "fa-solid fa-volume-high";
    }
  }, [state.volume, state.muted]);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>SOL</div>
      <div className="orta d-flex flex-column align-items-center">
        <div className="buttonDiv d-flex justify-content-center align-items-center gap-1">
          <button>
            <i className="fa-solid fa-shuffle"></i>
          </button>
          <button>
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="playButton bg-white text-dark rounded-5"
          >
            {state?.playing && <i class="fa-solid fa-pause"></i>}
            {!state?.playing && <i className="fa-solid fa-play "></i>}
          </button>
          <button>
            <i className="fa-solid fa-forward-step"></i>
          </button>
          <button>
            <i className="fa-solid fa-repeat"></i>
          </button>
        </div>
        <div className="w-100 d-flex align-items-center gap-2">
          {audio}
          <div>{utils(state?.time)}</div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div>{utils(state?.duration)}</div>
        </div>
      </div>
      <div className="buttonDiv d-flex  gap-1 mb-4 ">
        <button>
          <i className="fa-solid fa-music"></i>
        </button>
        <button>
          <i className="fa-solid fa-bars"></i>
        </button>
        <button>
          <i cclassNameass="fa-solid fa-walkie-talkie"></i>
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="me-2"
        >
          <i className={level}></i>
        </button>
        <CustomRange
          step={0.01}
          min={0}
          max={1}
          value={state.muted ? 0 : state?.volume}
          onChange={(value) => {
            controls.unmute();
            controls.volume(value);
          }}
        />
        <button>
          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
        </button>
      </div>
    </div>
  );
};

export default Player;
