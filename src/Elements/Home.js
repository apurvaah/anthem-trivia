import './style.css'
import {useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const onClick = async (e) => {
        console.log("Start Game Button was clicked") // Check to see if button is working

        navigate('/game');
    }

    const onClickReward = async (e) => {
        console.log("Rewards Button was clicked") // Check to see if button is working

        navigate('/qrscan');
    }

    return (
        <div>
            <div id="homePageTitle">
                <h1>Play Me!</h1>
            </div>

            <div class="timer hide">Timer: 0</div>

            <div id="container">
                <h1 id="header"></h1>
                <div id="text">
                </div>
                <button class="text-white button" id="start-button" type="button" onClick={onClick}>Start Game</button>
                <button class="text-white button" id="start-button" type="button" onClick={onClickReward}>Reward Me</button>
                <div id="result"></div>
            </div>
        </div>
    );
};

export default Home;