// ══════════════════════════════════════════════════════
//  POSTS.JS  —  aggiungi i tuoi post qui
//
//  CAMPI OBBLIGATORI:
//    id, title, date, tags, excerpt, content
//
//  CAMPI OPZIONALI:
//    cover      → percorso immagine (es. "img/posts/cover.jpg")
//    pinned     → true = appare in Bacheca
//    eventDate  → "YYYY-MM-DD"  (solo per eventi)
//    eventTime  → "HH:MM"       (solo per eventi)
//    eventPlace → "Luogo"       (solo per eventi)
//
//  TAG DI CATEGORIA (almeno uno per post):
//    music · study · content · tech · sport
// ══════════════════════════════════════════════════════

const POSTS = [

  {
    id: "concerto-estate-cusano-2026",
    title: "Concerto d'Estate — Banda di Cusano Milanino",
    date: "2026-03-14",
    cover: "",
    pinned: true,
    eventDate: "2026-06-20",
    eventTime: "21:00",
    eventPlace: "Cusano Milanino",
    tags: ["music", "banda", "cusano", "concerto"],
    excerpt: "Appuntamento con il Concerto d'Estate della Banda di Cusano Milanino. Una serata di musica sotto le stelle — tutti invitati!",
    content: `
      <p>Vi aspettiamo al <strong>Concerto d'Estate</strong> della Banda di Cusano Milanino!</p>
      <p>Una serata all'aperto con un programma ricco e variegato, dalla musica classica ai brani più leggeri. L'ingresso è libero e aperto a tutti.</p>
      <p>📅 20 Giugno 2026 · ore 21:00<br>📍 Cusano Milanino</p>
    `
  },

  {
    id: "concerto-primavera-palazzolo-2026",
    title: "Concerto di Primavera — Banda di Palazzolo Milanese",
    date: "2026-03-10",
    cover: "",
    pinned: false,
    tags: ["music", "banda", "palazzolo", "concerto"],
    excerpt: "Un'altra serata incredibile con la Banda di Palazzolo Milanese. Programma impegnativo, pubblico caloroso e tanta musica.",
    content: `
      <p>Il Concerto di Primavera 2026 è stato un appuntamento davvero speciale.</p>
      <p>Il programma spaziava da brani sinfonici a qualche pezzo più leggero, sotto la guida del direttore Enrico Tiso.</p>
      <h2>I momenti migliori</h2>
      <p>Tra tutti i brani, il momento più emozionante è stato l'assolo di trombone nel secondo movimento di apertura.</p>
    `
  },

  {
    id: "smart-home-automazioni",
    title: "Le mie automazioni preferite con Home Assistant",
    date: "2026-02-20",
    cover: "",
    pinned: false,
    tags: ["tech", "home assistant", "smart home"],
    excerpt: "Dopo mesi di configurazioni, ho trovato le automazioni che uso davvero ogni giorno: luci adattive, riscaldamento intelligente e notifiche utili.",
    content: `
      <p>Home Assistant è diventato il centro della mia casa. Ecco le automazioni che hanno davvero cambiato la mia routine.</p>
      <h2>Luci adattive</h2>
      <p>Con il componente Adaptive Lighting, le luci cambiano temperatura colore durante il giorno automaticamente.</p>
      <h2>Riscaldamento intelligente</h2>
      <p>Il termostato ora sa quando sono in casa tramite geofencing. Il risparmio in bolletta si è già notato.</p>
    `
  },

  {
    id: "doremi-evento-febbraio",
    title: "Serata con i DoReMitici a febbraio",
    date: "2026-02-05",
    cover: "",
    pinned: false,
    tags: ["music", "doremi", "evento"],
    excerpt: "Prima uscita dell'anno con i DoReMitici! Un piccolo evento in centro, atmosfera raccolta e tanta voglia di suonare.",
    content: `
      <p>Febbraio è iniziato nel migliore dei modi: prima uscita dell'anno con i DoReMitici.</p>
      <p>Evento piccolo ma molto bello — uno di quei contesti informali dove ci si diverte davvero.</p>
    `
  },

  {
    id: "nuovo-video-youtube",
    title: "Nuovo video sul canale: viaggio a Barcellona",
    date: "2026-01-18",
    cover: "",
    pinned: false,
    tags: ["content", "youtube", "viaggi"],
    excerpt: "È online il video del mio viaggio a Barcellona. Tre giorni intensi tra architettura, cibo e musica di strada.",
    content: `
      <p>Finalmente online il video del viaggio a Barcellona!</p>
      <h2>Il viaggio</h2>
      <p>Tre giorni intensi: Sagrada Família, Gòtic, El Born, la spiaggia e tanto cibo buono.</p>
      <h2>Il video</h2>
      <p>Ho provato uno stile di montaggio più lento, con più attenzione ai dettagli. Fatemi sapere nei commenti!</p>
    `
  },

  {
    id: "polimi-primo-semestre",
    title: "Fine del primo semestre al Politecnico",
    date: "2026-01-28",
    cover: "",
    pinned: false,
    tags: ["study", "polimi", "università"],
    excerpt: "Sessione invernale archiviata. Qualche soddisfazione, qualche esame tosto, ma il bilancio è positivo.",
    content: `
      <p>La sessione invernale è finalmente finita. Tempo di tirare le somme.</p>
      <h2>Gli esami</h2>
      <p>Alcuni esami sono andati meglio del previsto, altri hanno richiesto più fatica. Il bello dell'ingegneria informatica è che ogni materia ti spinge a ragionare in modo diverso.</p>
      <p>Avanti con il secondo semestre!</p>
    `
  },

];
