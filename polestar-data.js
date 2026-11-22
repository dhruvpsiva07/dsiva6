/* =========================================================
   polestar-data.js — vlog archive.
   SEASONS[].arcs[].vlogs[] = { title, date, songs, desc, ig }
   Add an "ig" URL to any vlog to link it out later.
   ========================================================= */

const PS_SEASON_1 = [
  {
    name: "Intro",
    vlogs: [
      { title: "Day 100 — I have flu", date: "Feb 18, 2026", songs: "None", desc: "I was supposed to start vlogs here but I was sick." },
      { title: "Day 99 — I recovered", date: "Feb 19, 2026", songs: "None", desc: "I recovered but I forgot to vlog." },
      { title: "Day 98 — Me and Nevan get Pho", date: "Feb 20, 2026", songs: "None", desc: "Real start of the vlogs, we enjoyed the Pho." },
      { title: "Day 97 — I had a philosophical day", date: "Feb 21, 2026", songs: "ROC — 2Slimey", desc: "Im yappin, just wanted to do the burger thing." }
    ]
  },
  {
    name: "Feb Fun",
    vlogs: [
      { title: "Day 96 — Venezuela made it out the GC", date: "Feb 22, 2026", songs: "Borderline — Tame Impala", desc: "Took like 4 months to go to this.\nThere is a secret second vlog for this hangout." },
      { title: "Day 95 — The day of mischief", date: "Feb 23, 2026", songs: "Outside — SoFaygo", desc: "Mrs. Kulkarni had me deliverin live fish to classrooms while my friends fooled around and skipped." },
      { title: "Day 94 — 2026 ❌ 2016 ✅", date: "Feb 24, 2026", songs: "Black Beetles — Rae Sremmurd\nDIOR LEOPARD — Che", desc: "Josh speaks during the tornado drill, and we start camping in James' room." },
      { title: "Day 93 — Skipping School", date: "Feb 25, 2026", songs: "Demigod — Slayr\nSloppy Joe — Slayr", desc: "We celebrated Angie's birthday with Nithin's buffet, then we went to the beach. All during school." },
      { title: "Day 92 — National slime yo hb day", date: "Feb 26, 2026", songs: "$$$ Problems — Homixide Gang", desc: "SLIME YO HBS OUT! W Paul Cameo as well" },
      { title: "Day 91 — I had a great day", date: "Feb 27, 2026", songs: "On My Soul — Bruno Mars\nUnreleased — 2Slimey", desc: "I had a great day while Nithin and Nevan got slimed by Mr. Maraj." },
      { title: "Day 90 — UACTF and Frauds", date: "Feb 28, 2026", songs: "Let Me Know — Sosocamo\nMunni n Drugs — Bleeod", desc: "First Polestar collab with Nevan.\nI was at Divjot's house for UACTF while Nithin, Nevan, Varad, and Achin got food." }
    ]
  },
  {
    name: "Project K",
    vlogs: [
      { title: "Day 89 — A Beautiful Sunday", date: "Mar 1, 2026", songs: "New People, Same Old Mistakes — Tame Impala\nBreak from Toronto — PARTYNEXTDOOR\nThat's Okay — Trippy Rex\nFreestyle — Osamason", desc: "Collab with Nithin.\nI went to the temple and a restaurant. Josh got ready to GPT his assignments for FLVS." },
      { title: "Day 88 — Abuse", date: "Mar 2, 2026", songs: "200 for Lunch — Gunna\nFWU — PARTYNEXTDOOR\nMAKE OUT WITH MY CHOPPA — Che", desc: "Collab with Nithin.\n4 DAYS TILL PROJECT K.\nNithin gets a haircut and gets beaten by Anshika." },
      { title: "Day 87 — TKD & WAR", date: "Mar 3, 2026", songs: "SHIP HER OFF — Destroy Lonely\nTBH — PARTYNEXTDOOR", desc: "3 DAYS TILL PROJECT K.\nTKD with Master Santi, reenacting KP, and WAR on Josh." },
      { title: "Day 86 — KP Prefers Bagels", date: "Mar 4, 2026", songs: "Say Dat — Sosocamo\nShut Up — Nettspend", desc: "2 DAYS TILL PROJECT K.\nCameo with the Bagel Man Mr. K, then Nevan takes Nithin and Varad for some bagels." },
      { title: "Day 85 — Shiro the Goat", date: "Mar 5, 2026", songs: "Off the Meter — Ken Carson, Destroy Lonely, Playboi Carti", desc: "1 DAY TILL PROJECT K.\nOff day from school so just hung out with Shiro." },
      { title: "Day 84 — PROJECT K", date: "Mar 6, 2026", songs: "Rock n Roll — Ken Carson", desc: "Sleepover at Nithin's house for PROJECT K. May have ended in multiple disasters." },
      { title: "Day 83 — Recovering and Morphing into K", date: "Mar 7, 2026", songs: "Toxic — Slayr", desc: "I relaxed at home after the sleepover while Josh morphed." },
      { title: "Day 82 — Haircut", date: "Mar 8, 2026", songs: "24HRs — Lil Tecca", desc: "Boring day where I got a haircut." }
    ]
  },
  {
    name: "Week of Loss",
    vlogs: [
      { title: "Day 81 — Filler Monday", date: "Mar 9, 2026", songs: "Control — Playboi Carti", desc: "The loss of my hair. Due to my uneven haircut, I now looked half bald." },
      { title: "Day 80 — Nacho Libre", date: "Mar 10, 2026", songs: "Ain't Hard — Destroy Lonely", desc: "The loss of my presence. I left early for an appointment while everyone camped in James." },
      { title: "Day 79 — BOY DON'T PLAY WIT ME", date: "Mar 11, 2026", songs: "Fire Your Manager — NBA Youngboy, Playboi Carti\nFRIED — Ty Dolla $ign\nPOP OUT — Playboi Carti", desc: "The loss of Nithin's control.\nI watched as Josh uncharacteristically artificially altered his mental state." },
      { title: "Day 78 — Lot of KP Activity in the Hallway", date: "Mar 12, 2026", songs: "Sicko Mode — Travis Scott", desc: "The loss of my sanity. Mr. K had a public meltdown and hindered me across multiple timelines." },
      { title: "Day 77 — FBLA Crossover", date: "Mar 13, 2026", songs: "16 — Baby Keem\nSorry not Sorry — Bryson Tiller", desc: "The loss of words. In the case of my 2 friends it was later resolved. But with the Sonawanes, it was not so simple..." }
    ]
  },
  {
    name: "Morocco Trip",
    vlogs: [
      { title: "Day 76 — 1 Year of I Am Music", date: "Mar 14, 2026", songs: "We need all da vibes — Playboi Carti, Young Thug, Ty Dolla $ign", desc: "Travel day to Morocco. Reminiscing on 1 year of IAMMUSIC." },
      { title: "Day 75 — Landed in Morocco", date: "Mar 15, 2026", songs: "Lady of Neptune — Tory Lanez", desc: "Walked through some markets and ate at a nice restaurant." },
      { title: "Day 74 — The Souks of Morocco", date: "Mar 16, 2026", songs: "Let Go — Aaron May", desc: "More souks (markets) and spice markets." },
      { title: "Day 73 — The Atlas Mountains", date: "Mar 17, 2026", songs: "End of time — Consciouns", desc: "" },
      { title: "Day 72 — Riad Tour", date: "Mar 18, 2026", songs: "Backr00ms — Playboi Carti", desc: "Tour of the Riad we stayed in." },
      { title: "Day 71 — Agafay Desert", date: "Mar 19, 2026", songs: "", desc: "We stayed in the desert and went on a camel ride." },
      { title: "Day 70 — Ban me from F1", date: "Mar 20, 2026", songs: "SLIDE — Tory Lanez", desc: "It was Eid so we went to a mall to pass time." },
      { title: "Day 69 — Essaouira", date: "Mar 21, 2026", songs: "Cha Cha Cha — Bruno Mars", desc: "The coastal city of Essaouira. We explored the medina and enjoyed the beach." },
      { title: "Day 68 — A day of low effort", date: "Mar 22, 2026", songs: "5% Tint — Travis Scott\nMasked up — Nettspend, NBA Youngboy", desc: "" },
      { title: "Day 67 — 67 67 67 67 67", date: "Mar 23, 2026", songs: "Doot Doot — Skrilla\nDon't — Bryson Tiller", desc: "...." }
    ]
  },
  {
    name: "End of March",
    vlogs: [
      { title: "Day 66 — AP Chem Studying!", date: "Mar 24, 2026", songs: "Back to that — Apollored1", desc: "Studying for the AP Chemistry exam." },
      { title: "Day 65", date: "Mar 25, 2026", songs: "", desc: "" },
      { title: "Day 64", date: "Mar 26, 2026", songs: "", desc: "" },
      { title: "Day 63", date: "Mar 27, 2026", songs: "", desc: "" },
      { title: "Day 62", date: "Mar 28, 2026", songs: "", desc: "" },
      { title: "Day 61", date: "Mar 29, 2026", songs: "", desc: "" },
      { title: "Day 60", date: "Mar 30, 2026", songs: "", desc: "" },
      { title: "Day 59", date: "Mar 31, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "April Fools Day",
    vlogs: [
      { title: "Day 58", date: "Apr 1, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "April Filler Arc",
    vlogs: [
      { title: "Day 57 — April Filler Day", date: "Apr 2, 2026", songs: "", desc: "" },
      { title: "Day 56 — April Filler Day", date: "Apr 3, 2026", songs: "", desc: "" },
      { title: "Day 55 — April Filler Day", date: "Apr 4, 2026", songs: "", desc: "" },
      { title: "Day 54 — April Filler Day", date: "Apr 5, 2026", songs: "", desc: "" },
      { title: "Day 53 — April Filler Day", date: "Apr 6, 2026", songs: "", desc: "" },
      { title: "Day 52 — April Filler Day", date: "Apr 7, 2026", songs: "", desc: "" },
      { title: "Day 51 — April Filler Day", date: "Apr 8, 2026", songs: "", desc: "" },
      { title: "Day 50 — April Filler Day", date: "Apr 9, 2026", songs: "", desc: "" },
      { title: "Day 49 — April Filler Day", date: "Apr 10, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "Prom",
    vlogs: [
      { title: "Day 48 — Prom", date: "Apr 11, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "April Filler Arc II",
    vlogs: [
      { title: "Day 47 — April Filler Day", date: "Apr 12, 2026", songs: "", desc: "" },
      { title: "Day 46 — April Filler Day", date: "Apr 13, 2026", songs: "", desc: "" },
      { title: "Day 45 — April Filler Day", date: "Apr 14, 2026", songs: "", desc: "" },
      { title: "Day 44 — April Filler Day", date: "Apr 15, 2026", songs: "", desc: "" },
      { title: "Day 43 — April Filler Day", date: "Apr 16, 2026", songs: "", desc: "" },
      { title: "Day 42 — April Filler Day", date: "Apr 17, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "Gradbash",
    vlogs: [
      { title: "Day 41 — Gradbash", date: "Apr 18, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "April Filler Arc III",
    vlogs: [
      { title: "Day 40 — AFD", date: "Apr 19, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "Water Wars",
    vlogs: [
      { title: "Day 39", date: "Apr 20, 2026", songs: "", desc: "" },
      { title: "Day 38", date: "Apr 21, 2026", songs: "", desc: "" },
      { title: "Day 37", date: "Apr 22, 2026", songs: "", desc: "" },
      { title: "Day 36", date: "Apr 23, 2026", songs: "", desc: "" },
      { title: "Day 35", date: "Apr 24, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "April Filler Arc IV",
    vlogs: [
      { title: "Day 34 — AFD", date: "Apr 25, 2026", songs: "", desc: "" },
      { title: "Day 33 — AFD", date: "Apr 26, 2026", songs: "", desc: "" },
      { title: "Day 32 — AFD", date: "Apr 27, 2026", songs: "", desc: "" },
      { title: "Day 31 — AFD", date: "Apr 28, 2026", songs: "", desc: "" },
      { title: "Day 30 — AFD", date: "Apr 29, 2026", songs: "", desc: "" },
      { title: "Day 29 — AFD", date: "Apr 30, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "Last 2 Weeks of School",
    vlogs: [
      { title: "Day 28", date: "May 1, 2026", songs: "", desc: "" },
      { title: "Day 27", date: "May 2, 2026", songs: "", desc: "" },
      { title: "Day 26", date: "May 3, 2026", songs: "", desc: "" },
      { title: "Day 25", date: "May 4, 2026", songs: "", desc: "" },
      { title: "Day 24", date: "May 5, 2026", songs: "", desc: "" },
      { title: "Day 23", date: "May 6, 2026", songs: "", desc: "" },
      { title: "Day 22", date: "May 7, 2026", songs: "", desc: "" },
      { title: "Day 21", date: "May 8, 2026", songs: "", desc: "" },
      { title: "Day 20", date: "May 9, 2026", songs: "", desc: "" },
      { title: "Day 19", date: "May 10, 2026", songs: "", desc: "" },
      { title: "Day 18", date: "May 11, 2026", songs: "", desc: "" },
      { title: "Day 17", date: "May 12, 2026", songs: "", desc: "" },
      { title: "Day 16", date: "May 13, 2026", songs: "", desc: "" },
      { title: "Day 15", date: "May 14, 2026", songs: "", desc: "" },
      { title: "Day 14", date: "May 15, 2026", songs: "", desc: "" }
    ]
  },
  {
    name: "Graduation Countdown",
    vlogs: [
      { title: "Day 13 — Insert good caption", date: "May 16, 2026", songs: "Only Angel — Harry Styles", desc: "I overslept for Niyathi's graduation." },
      { title: "Day 12 — Something Generational idk", date: "May 17, 2026", songs: "Dollaz on my head — Young Thug, Gunna", desc: "Set up some signs outside my home." },
      { title: "Day 11 — Grad Rehearsal", date: "May 18, 2026", songs: "Say It — Tory Lanez", desc: "Crazy day, went to 2 stores to attempt \"fraud\" with Nevan.\nThen went to USF to meet up with Nithin, Varad, Arnav, Pranav, JB.\nThen Nithin and Arnav went to take their exam at school, then JB, Pranav, and Varad went to a secret side quest, while me and Nevan went to school to get my grad tickets from Mr. Canady (RIP).\nDuring school me and Nevan also did a sneaky move on K. Afterwards we all reconvened at my home, and Anshika joined us.\nDuring this, a \"log\" from \"morris bridge\" came and hit Pranav's car.\nWe then had a good rehearsal and good dinner at Chili's." },
      { title: "10 Days Until Graduation", date: "May 19, 2026", songs: "None", desc: "10 Days Until Graduation." },
      { title: "9 Days Until Graduation", date: "May 20, 2026", songs: "", desc: "9 Days Until Graduation." },
      { title: "8 Days Until Graduation", date: "May 21, 2026", songs: "", desc: "8 Days Until Graduation.\nNiyathi had her grad party today. 2 surprises in this reel." },
      { title: "7 Days Until Graduation", date: "May 22, 2026", songs: "", desc: "7 Days Until Graduation.\nMe, Nithin, and Varad went to Bibimgo today. Food could have been better." },
      { title: "6 Days Until Graduation", date: "May 23, 2026", songs: "", desc: "" },
      { title: "5 Days Until Graduation", date: "May 24, 2026", songs: "", desc: "" },
      { title: "4 Days Until Graduation", date: "May 25, 2026", songs: "The Truth — Lil Tecca", desc: "4 Days Until Graduation.\nGenuinely played with Shiro all day." },
      { title: "3 Days Until Graduation", date: "May 26, 2026", songs: "FAMJAM4000 — Jordan Ward", desc: "3 Days Until Graduation.\nI made a good egg sandwich, wasted my day, and picked up my sister from her Busch Gardens trip." },
      { title: "2 Days Until Graduation", date: "May 27, 2026", songs: "SOUL-FLY — Homixide Gang", desc: "2 Days Until Graduation.\nI built a chair today." },
      { title: "1 Day Until Graduation", date: "May 28, 2026", songs: "Neon Guts — Lil Uzi Vert, Pharrell Williams", desc: "1 Day Until Graduation.\nI had my grad party today and called close family friends." }
    ]
  },
  {
    name: "Graduation",
    vlogs: [
      { title: "Graduation", date: "May 29, 2026", songs: "Flashing Lights — Kanye West", desc: "FINAL VLOG OF THE GRADUATION SERIES.\nIncluding 4 GSA pre-grad POVs, Varad's Meta glasses POVs, recorded and streamed footage of Dust graduating, and more." }
    ]
  },
  {
    name: "Summer 26",
    vlogs: [
      { title: "Beginning", date: "June 2026", songs: "3005 — Childish Gambino", desc: "" },
      { title: "Athens", date: "June 2026", songs: "Excavator — Don Toliver", desc: "" },
      { title: "Great Split", date: "June 2026", songs: "Far From Any Road — The Handsome Family", desc: "" },
      { title: "Island boi", date: "June 2026", songs: "In progress", desc: "In progress." }
    ]
  }
];

const SEASONS = [
  {
    id: "s1",
    title: "Season 1 — Graduation Countdown",
    meta: "Feb — June 2026 · 100 days",
    blurb: "A daily countdown from 100 days out to graduation, plus the start of summer. Every vlog, grouped by arc.",
    arcs: PS_SEASON_1
  },
  {
    id: "s2",
    title: "Season 2",
    meta: "Coming soon",
    blurb: "Placeholder — the next season of Polestar. Add the arcs to polestar-data.js when filming starts.",
    arcs: [],
    soon: true
  }
];
