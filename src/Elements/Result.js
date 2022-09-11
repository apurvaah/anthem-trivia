import React from 'react';

const Result = ({ showResult, quizs, marks }) => {
    return (
        <section className="bg-dark text-white" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 5}</h3>
                            <h1>Scan this QR Code to view your reward!</h1>
                            <div id="qr-container">
                                <img src="/rewardme-redirect.png" alt="Reward" id="qrimage" align="center" width="200" height="200" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;