const QRScan = () => {

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