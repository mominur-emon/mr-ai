import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Main from "./layout/Main";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route element={<Main />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
