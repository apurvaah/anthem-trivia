import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Reward from './Elements/Rewards';
import QuizHome from './Elements/QuizHome';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Using routing to route different React pages */}
          <Route exact path="/" element={<QuizHome />} />
          <Route exact path="/rewardme" element={<Reward />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
