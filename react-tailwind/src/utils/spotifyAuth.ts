const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const scopes = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export function getSpotifyAuthUrl() {
  const authUrl = new URL("https://accounts.spotify.com/authorize");
  authUrl.searchParams.append("client_id", clientId);
  authUrl.searchParams.append("response_type", "token");
  authUrl.searchParams.append("redirect_uri", redirectUri);
  authUrl.searchParams.append("scope", scopes.join(" "));
  authUrl.searchParams.append("show_dialog", "true");
  return authUrl.toString();
}
