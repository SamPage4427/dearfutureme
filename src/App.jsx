import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileRoute, ReviewRoute, LetterRoute, MainRoute } from "./routes";
import { ModalProvider } from "./contexts/modal";
import ProtectedRoute from "./components/protected-route";

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/letter" element={<LetterRoute />} />
          <Route path="/year-review" element={<ReviewRoute />} />
          {/* <ProtectedRoute> */}
          <Route path="/profile" element={<ProfileRoute />} />
          {/* </ProtectedRoute> */}
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
