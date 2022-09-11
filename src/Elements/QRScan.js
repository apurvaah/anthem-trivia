import './style.css'

const QRScan = () => {
    let dict = { a:"img1" , b:"img2" }

    let img_key =  Object.keys(dict)
    let result_img = Math.random()* img_key.length

    return (
        <div>
            <div id="homePageTitle">
                <h1>Scan this QR Code to win rewards!</h1>
                
            </div>

            <div id="qr-container">
            <img src= "/rewardme-redirect.png" alt="Reward" id = "qrimage" align = "center" width="400" height="400"/>
            </div>
        </div>
    );
};

export default QRScan;