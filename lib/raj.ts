export const journal = {
  name: "Pitch & Paper",
  volume: "Vol. 01",
  issue: "Birthday Special",
  date: "Saturday 19 September 2026",
  price: "Gratis",
  kicker: "Player of the Issue",
} as const;

export const raj = {
  name: "Raj",
  shirt: 10,
  position: "Attacking Midfielder",
  nickname: "The Playmaker",
  club: "Sunday XI",
  foot: "Right",
  born: "Matchday Special",
  height: "5 ft 10 in",
  dek: "Sunday XI’s playmaker — and player of this birthday issue.",
  pullQuote:
    "Some players win matches. Raj wins the afternoon — and, this week, another year.",
  editorNote:
    "From the desk: this issue was printed for one reader. Happy birthday, Raj. The rest of us are still chasing your through-ball.",
  formGuide: "W W D W W — five unbeaten, one birthday to go.",
  seasonLabel: "Journal stats · Season 25/26",
  physicals: [
    { label: "Club", value: "Sunday XI" },
    { label: "Position", value: "AM / No. 10" },
    { label: "Nickname", value: "The Playmaker" },
    { label: "Preferred foot", value: "Right" },
    { label: "Born", value: "Matchday Special" },
    { label: "Height", value: "5 ft 10 in" },
  ],
  season: [
    { label: "Appearances", value: "38" },
    { label: "Goals", value: "14" },
    { label: "Assists", value: "21" },
    { label: "Big chances created", value: "47" },
    { label: "Minutes", value: "3,210" },
    { label: "Pass completion", value: "87%" },
  ],
  bio: [
    "He arrives late, laces still in hand, and by the time the first long ball is hoofed, Raj has already seen the game that will be played. That is the gift: not pace, exactly, and not power — though both turn up when the pitch asks — but a kind of private radar. Sunday XI do not so much build attacks as wait for him to invent them.",
    "Teammates call him The Playmaker with the half-smile of people who have been made to look better than they are. Opposition captains mark him, then mark him again, then watch a disguised pass split the two of them. The journal keeps a private ledger: fourteen goals this season, twenty-one assists, forty-seven big chances created. The terrace keeps a louder one. They sing when he receives on the half-turn.",
    "This week the issue is not a cup final. It is a birthday. The numbers on the page are invented until someone who loves him writes the true ones in the margin. The photograph is a stand-in until a real one is slipped into the plate. What is not invented is the dedication. Raj: player of the issue, captain of the afternoon, and — for one more year — still the best thing that happens after kick-off.",
  ],
  photos: {
    cover: {
      src: "/photos/cover.jpg",
      alt: "Anonymous footballer in a crimson kit running toward floodlights on a wet night pitch",
      caption: "Fig. 1 — Floodlights, the night before the birthday",
    },
    portrait: {
      src: "/photos/portrait.jpg",
      alt: "Placeholder player-card portrait in a crimson jersey",
    },
    action: {
      src: "/photos/action.jpg",
      alt: "Midfielder on the half-turn controlling a ball on wet grass",
      caption: "Fig. 2 — Night match, 90+3",
    },
    ball: {
      src: "/photos/ball.jpg",
      alt: "Worn match ball on a muddy pitch",
      caption: "Fig. 3 — The ball waits. Raj never does.",
    },
    crowd: {
      src: "/photos/crowd.jpg",
      alt: "Terrace crowd under night floodlights",
      caption: "Fig. 4 — Still singing.",
    },
  },
  colophon:
    "Photos are placeholders. Swap files in /public/photos — cover.jpg, portrait.jpg, action.jpg, ball.jpg, crowd.jpg — to print Raj as he really is.",
} as const;
