// import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import "./App.css";
import Gif from "./peach-and-goma-goma.gif";
import Happy from "./happy.gif";
import Sad from "./sad.gif";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function App() {
    const [state, setState] = useState(0);
    const [num, setNum] = useState(0);
    const { width, height } = useWindowSize();
    const array = [
        "no",
        "are you sure?",
        "You might regret it!",
        "Really? Think again!",
        "Come on, don't be shy!",
        "I have made this especially for you!",
        "Say yes and let the magic begin!",
        "You are breaking my heart! I would be sad. Say yes!",
        "Last chance! Say yes and make my day!",
    ];

    const click = () => {
        if (num >= array.length - 1) setState(-1);
        else setNum(num + 1);
    };

    return (
        <div>
            {state === 1 ? (
                <div className="App">
                    <Confetti width={width} height={height} className="mt-5" />
                    <img alt="love" style={{ width: "40vh" }} src={Happy}></img>
                    <div>
                        Thanks ! Will be seeing you
                        soon!🥰
                    </div>
                </div>
            ) : state === 0 ? (
                <div className="App">
                    <div
                        style={{
                            fontWeight: 800,
                            fontSize: "30px",
                            color: "fuchsia",
                            marginBottom:"20px"
                        }}
                    >
                        Let's go out tomorrow
                    </div>
                    <img alt="love" style={{ width: "40vh" }} src={Gif}></img>
                    <div className="Bottom">
                        <button
                            className="Button"
                            onClick={() => {
                                setState(1);
                            }}
                        >
                            <div className="cover cut"></div>
                            <div className="text">Yes</div>
                        </button>
                        <button className="Button" onClick={click}>
                            <div className="cover cut"></div>
                            <div className="text">{array[num]}</div>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="App">
                    <img alt="love" style={{ width: "40vh" }} src={Sad}></img>
                </div>
            )}
        </div>
    );
}
// const style =
export default App;
