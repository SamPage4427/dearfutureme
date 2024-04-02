import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/main-route";
import LetterRoute from "./routes/letter-route";
import ProtectedRoute from "./components/protected-route";
import ProfileRoute from "./routes/profile-route";
import { ModalProvider } from "./contexts/modal";
import { LoginModal } from "./components/modals/login-modal";

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/letter" element={<LetterRoute />} />
          {/* <ProtectedRoute>
          <Route path="/profile" element={<ProfileRoute />} />
        </ProtectedRoute> */}
          <Route path="/modal" element={<LoginModal />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
