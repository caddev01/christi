import React from "react";
import Gamedeck from "./Gamedeck";
import Countdown from "./Countdown";
import QuizerApp from "./Quizer/QuizerAppTwo";

const Game = () => {
    const counter = Countdown();

    return(
        <div>
            <Gamedeck>
                {Countdown()}
            </Gamedeck>
        </div>
    )
}