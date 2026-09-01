/* =========================================================
   VIDEO LIBRARY DATA
   -----------------------------------------------------------
   Add your own clips by adding an object to the VIDEOS array
   below. Two supported types:

   1) YouTube embed:
      { type: "youtube", youtubeId: "dQw4w9WgXcQ", ... }
      (the ID is the part after v= in a YouTube URL)

   2) Local video file (place the file in the /videos folder):
      { type: "local", src: "videos/my-clip.mp4", ... }

   "category" must be one of: "training", "matches", "fun"
   "featured": true shows it in the homepage preview grid
   (only the first 3 featured items are shown there).
========================================================= */

const VIDEOS = [
  {
    id: "v1",
    title: "Saturday Morning Multi-Ball Drilling",
    description: "Coach Daniel runs the Performance group through footwork and multi-ball topspin drills.",
    category: "training",
    duration: "4:12",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: true
  },
  {
    id: "v2",
    title: "Elite Squad Match Play Analysis",
    description: "Full-speed match play from the Wednesday Elite Squad session, filmed for video review.",
    category: "matches",
    duration: "6:48",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: true
  },
  {
    id: "v3",
    title: "Junior Fun Tournament Highlights",
    description: "Best rallies, celebrations, and trophy moments from our Sunday junior mini-tournament.",
    category: "fun",
    duration: "3:05",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: true
  },
  {
    id: "v4",
    title: "Serve Technique Breakdown",
    description: "A slow-motion look at pendulum and reverse pendulum serves with Coach Priya.",
    category: "training",
    duration: "5:20",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: false
  },
  {
    id: "v5",
    title: "Friday Social Night Round-Robin",
    description: "Laughs, long rallies, and friendly trash talk from our weekly social meetup.",
    category: "fun",
    duration: "2:47",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: false
  },
  {
    id: "v6",
    title: "League Finals: SpinZone vs. Riverside",
    description: "Full highlight reel from our travel team's league championship match.",
    category: "matches",
    duration: "7:33",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: false
  },
  {
    id: "v7",
    title: "Footwork Ladder Warm-Up",
    description: "A quick warm-up routine coaches use at the start of every Performance session.",
    category: "training",
    duration: "1:58",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: false
  },
  {
    id: "v8",
    title: "Behind the Scenes: Setting Up the Hall",
    description: "A day in the life of getting SpinZone's hall ready before a Saturday open-play session.",
    category: "fun",
    duration: "2:10",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: false
  },
  {
    id: "v9",
    title: "Junior Development: First Rally Milestones",
    description: "Celebrating our newest players landing their first sustained rallies.",
    category: "training",
    duration: "3:34",
    type: "youtube",
    youtubeId: "REPLACE_WITH_YOUTUBE_ID",
    featured: false
  }
];
