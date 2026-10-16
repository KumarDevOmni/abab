// =====================================================================
//  EDIT THIS FILE to change the pandal details or to add more guests.
// =====================================================================

window.SITE = {
  pandal: "[PANDAL NAME]",          // shown on the welcome slide and the last slide
  year: "2026",
  seconds: 8,                       // seconds each slide stays on screen
  bondLines: ["Many communities.", "One constituency.", "One celebration."],
  thanksLine: "Thank you for celebrating Durga Puja with us.",
  closing: "Jai Maa Durga"
};

window.GUESTS = [
  {
    id: "byrathi-basavaraj",                         // used in the link: guest.html?id=byrathi-basavaraj
    name: "Byrathi Basavaraj",
    welcomeLine: "MLA, K R Pura Constituency",       // line under the name on the Welcome slide
    title: "Honourable MLA, K R Pura",               // line under the name on the Portrait slide
    highlight: "Four-time MLA · Former Minister of Urban Development (excluding Bengaluru)",
    photo: "byrathi-basavaraj.jpg",                  // file inside the photos folder
    cards: [                                         // timeline: [ "year", "milestone" ] (use 3 or 4)
      ["2009", "Corporator, Hoodi Ward"],
      ["2013", "Elected MLA, K R Pura"],
      ["2020–23", "Minister, Urban Development (excl. Bengaluru)"],
      ["2023", "Elected MLA for a fourth term"]
    ],
    footer: "Serving K R Pura since 2013"
  },
  {
    id: "krishna-byre-gowda",
    name: "Krishna Byre Gowda",
    welcomeLine: "Minister for Bengaluru Development",
    title: "Honourable Minister for Bengaluru Development",
    highlight: "Six-time MLA, Byatarayanapura · Former Agriculture Minister",
    photo: "krishna-byre-gowda.jpg",
    cards: [
      ["2003", "First elected MLA, Vemagal"],
      ["2013–18", "Minister of Agriculture"],
      ["2018–19", "Minister, Rural Development & Panchayat Raj"],
      ["2026", "Minister for Bengaluru Development"]
    ],
    footer: "Representing Byatarayanapura since 2008"
  },
  {
    id: "dk-mohan-babu",
    name: "D K Mohan Babu",
    welcomeLine: "[DESIGNATION / ROLE]",
    title: "[Designation]",
    highlight: "[One-line highlight]",
    photo: "dk-mohan-babu.jpg",
    cards: [
      ["[Year]", "[Milestone 1]"],
      ["[Year]", "[Milestone 2]"],
      ["[Year]", "[Milestone 3]"],
      ["[Year]", "[Milestone 4]"]
    ],
    footer: "[One line about his service]"
  }

  /* ---------- TEMPLATE: copy this block (add a comma after the guest above) ----------
  ,{
    id: "first-last",
    name: "Full Name",
    welcomeLine: "Designation or constituency",
    title: "Honourable ...",
    highlight: "One-line highlight",
    photo: "first-last.jpg",
    cards: [
      ["2010", "Milestone"],
      ["2015", "Milestone"],
      ["2020", "Milestone"]
    ],
    footer: "One closing line"
  }
  ------------------------------------------------------------------------------------ */
];
