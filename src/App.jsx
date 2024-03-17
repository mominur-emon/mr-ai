import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
