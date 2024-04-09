import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/main-route";
import LetterRoute from "./routes/letter-route";
import ProtectedRoute from "./components/protected-route";
import ProfileRoute from "./routes/profile-route";
import { ModalProvider } from "./contexts/modal";
import ReviewRoute from "./routes/review-route";

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
