
/* --------------------------------------------------------------------------

   UPCOMING RELEASES

   Date: Always write the date in year-month-day format.
   Title: The name of the release. Use the same capitalization as on Spotify.
   Feat: Write the name of the featured artist(s) on the release. (Optional)
   Note: A short note about the release. (Optional)
   URL: A pre-save or announcement link. (Optional)
  
   -------------------------------------------------------------------------- */

const UPCOMING = [
  {date: "2026-09-18", title: "Pride", feat: "", note: "", url: ""},
  {date: "2026-10-09", title: "Get Paid", feat: "", note: "", url: ""},
  {date: "2026-11-06", title: "You Don't Know Me", feat: "feat. [REDACTED]", note: "", url: ""},
  {date: "2026-12-25", title: "Autopilot", feat: "with. [REDACTED]", note: "", url: ""},
];

// This Spotify artist page is used as a fallback link for releases that don't have a URL. It is also the account the automatic updater reads the back catalogue from.
const SPOTIFY_ARTIST = "https://open.spotify.com/artist/5WlSr320ygP7poNts98aXH";
