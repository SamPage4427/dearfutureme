import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ProfileRoute,
  ReviewRoute,
  LetterRoute,
  MainRoute,
  ProfileNotesRoute,
  ProfileLettersRoute,
  ProfileSettingsRoute,
} from "./routes";
import { ModalProvider } from "./contexts/modal";
// import ProtectedRoute from "./components/protected-route";

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRoute />} />
          <Route path="/letter" element={<LetterRoute />} />
          {/* Another route to show full letter based off the letter id */}
          <Route path="/year-review" element={<ReviewRoute />} />
          <Route
            path="/profile"
            element={
              // <ProtectedRoute>
              <ProfileRoute />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/profile/notes"
            element={
              // <ProtectedRoute>
              <ProfileNotesRoute />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/profile/letters"
            element={
              // <ProtectedRoute>
              <ProfileLettersRoute />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/profile/settings"
            element={
              // <ProtectedRoute>
              <ProfileSettingsRoute />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/letters/:letterId"
            // element={<ProtectedRoute></ProtectedRoute>}
          />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
