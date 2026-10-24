
/* ---------------------------------------------------------------------------

    UPCOMING RELEASES

    Date: Always write the date in year-month-day format.
    Title: The name of the release. Use the same capitalization as on Spotify.
    Feat: Write the name of the featured artist(s) on the release. (Optional)
    Note: A short note about the release. (Optional)
    URL: A pre-save or announcement link. (Optional)
  
   --------------------------------------------------------------------------- */

const UPCOMING = [
    {date: "2026-11-06", title: "Get Paid", feat: "", note: "", url: ""},
    {date: "2026-11-27", title: "Get Up", feat: "", note: "", url: ""},
    {date: "2026-12-18", title: "A Message From a Fan", feat: "feat. Dirk J J vd Merwe", note: "", url: ""},
];

// This Spotify artist page (TheDemonFire) is used as a fallback link for releases that don't have a URL. It's also the account the automatic updater reads the back catalogue from.
const SPOTIFY_ARTIST = "https://open.spotify.com/artist/5WlSr320ygP7poNts98aXH";
