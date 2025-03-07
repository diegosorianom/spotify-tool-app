import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getSpotifyAuthUrl } from "./utils/spotifyAuth";

function CallbackHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = new URLSearchParams(location.hash.substring(1)); // Quita el #
    const accessToken = hash.get("access_token");

    if (accessToken) {
      localStorage.setItem("spotify_access_token", accessToken);
      navigate("/"); // Redirige a la página principal
    }
  }, [location, navigate]);

  return <div className="text-white text-center mt-10">Procesando login...</div>;
}

function App() {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-3xl mb-4">Spotify Tool App</h1>
            <button
              onClick={handleLogin}
              className="bg-green-500 px-6 py-3 rounded-lg text-black font-bold text-lg hover:bg-green-400"
            >
              Iniciar sesión con Spotify
            </button>
          </div>
        }
      />
      <Route path="/callback" element={<CallbackHandler />} />
    </Routes>
  );
}

export default App;
