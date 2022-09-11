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
                setReward(data);
            })

        setShowReward(true);
        setShowButton(false);
    }

    return (
        <div>

            <div class="card align-items-center justify-content-center">
            { showButton? <button class="btn btn-primary align-items-center justify-content-center" type="button" onClick={onClick}>Reveal Reward</button> : null}
            { showReward ? <div class="card-body">{reward}</div> : null }
            </div>
        </div>
    );
};

export default Reward;