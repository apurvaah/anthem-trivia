import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import QRScan from './Elements/QRScan';
import Reward from './Elements/Rewards';
import QuizHome from './Elements/QuizHome';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<QuizHome />} />
          <Route exact path="/qrscan" element={<QRScan />} />
          <Route exact path="/rewardme" element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
