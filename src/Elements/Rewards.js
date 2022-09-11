import React, {useState} from 'react';

const Reward = () => {

    const [reward, setReward] = useState("");
    const [showReward, setShowReward] = useState(false)
    const [showButton, setShowButton] = useState(true)

    const onClick = async (e) => {
        console.log("Start Game Button was clicked") // Check to see if button is working

        await fetch("/get-reward", {     // will need this to connect to backend to parse database
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: {}  // Update based on Flask
          }).then(response => response.text())
            .then(data => {
                console.log("ON REWARDS GETTING DATA")
                console.log(data)
                setReward(data);
            })

        setShowReward(true);
        setShowButton(false);
    }

    return (
        <div>

            <div id="container">
            { showButton? <button class="text-white button" id="start-button" type="button" onClick={onClick}>Reveal Reward</button> : null}
            { showReward ? <div class="reward container">{reward}</div> : null }
            </div>
        </div>
    );
};

export default Reward;