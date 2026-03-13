// ══════════════════════════════════════════════════════
//  POSTS.JS  —  aggiungi i tuoi post qui
//
//  Per aggiungere un post, copia uno dei blocchi sotto
//  e incollalo in cima all'array (i post sono in ordine
//  cronologico inverso, dal più recente al più vecchio).
//
//  CAMPI:
//  id       → stringa unica, usata nell'URL  (es. "mio-post-2026")
//  title    → titolo del post
//  date     → data nel formato "YYYY-MM-DD"
//  cover    → percorso immagine (es. "img/posts/cover.jpg") oppure "" per nessuna
//  tags     → array di tag liberi  +  categoria principale (music/study/content/tech/about)
//  excerpt  → breve anteprima mostrata nelle card (max ~180 caratteri)
//  content  → testo completo in HTML (puoi usare <p>, <h2>, <ul>, <img>, ecc.)
// ══════════════════════════════════════════════════════

const POSTS = [

  {
    id: "concerto-primavera-2026",
    title: "Concerto di Primavera 2026 — Banda Palazzolo",
    date: "2026-03-10",
    cover: "",
    tags: ["music", "banda", "palazzolo", "concerto"],
    excerpt: "Un'altra serata incredibile con la Banda di Palazzolo Milanese. Programma impegnativo, pubblico caloroso e qualche momento di pura magia sul palco.",
    content: `
      <p>Il Concerto di Primavera 2026 è stato un appuntamento davvero speciale per la Banda di Palazzolo Milanese.</p>
      <p>Il programma spaziava da brani sinfonici a qualche pezzo più leggero, il tutto sotto la guida precisa del direttore Enrico Tiso.</p>
      <h2>I momenti migliori</h2>
      <p>Tra tutti i brani in programma, il momento più emozionante è stato sicuramente l'assolo di trombone nel secondo movimento di apertura — una di quelle esecuzioni che ti restano impresse.</p>
      <p>Il pubblico ha risposto con grande calore e alla fine non mancavano i bis!</p>
    `
  },

  {
    id: "smart-home-automazioni",
    title: "Le mie automazioni preferite con Home Assistant",
    date: "2026-02-20",
    cover: "",
    tags: ["tech", "home assistant", "smart home", "domotica"],
    excerpt: "Dopo mesi di configurazioni, ho trovato le automazioni che uso davvero ogni giorno. Dalla luce che segue l'ora del giorno alla gestione del riscaldamento.",
    content: `
      <p>Home Assistant è diventato il centro della mia casa. Dopo tanto smanettare, ecco le automazioni che hanno davvero cambiato la mia routine quotidiana.</p>
      <h2>Luci adattive</h2>
      <p>Con il componente Adaptive Lighting, le luci cambiano temperatura colore e intensità durante il giorno. La mattina sono fresche e bianche, la sera diventano calde e soffuse — automaticamente.</p>
      <h2>Riscaldamento intelligente</h2>
      <p>Il termostato ora sa quando sono in casa (tramite geofencing sul telefono) e quando non ci sono. Il risparmio in bolletta si è già notato.</p>
      <h2>Notifiche utili</h2>
      <p>Ricevo una notifica se ho lasciato una finestra aperta e inizia a piovere. Semplice, ma salvavita.</p>
    `
  },

  {
    id: "doremi-evento-febbraio",
    title: "Serata con i DoReMitici a febbraio",
    date: "2026-02-05",
    cover: "",
    tags: ["music", "doremi", "evento"],
    excerpt: "Prima uscita dell'anno con i DoReMitici! Un piccolo evento in centro, atmosfera raccolta e tanta voglia di suonare.",
    content: `
      <p>Febbraio è iniziato nel migliore dei modi: prima uscita dell'anno con i DoReMitici.</p>
      <p>Evento piccolo ma molto bello — uno di quei contesti informali dove ci si diverte davvero, senza la pressione di un concerto ufficiale.</p>
      <p>Il repertorio era quello classico del gruppo, con qualche aggiunta nuova che stiamo provando in vista della prossima stagione.</p>
    `
  },

  {
    id: "nuovo-video-youtube",
    title: "Nuovo video sul canale: viaggio a Barcellona",
    date: "2026-01-18",
    cover: "",
    tags: ["content", "youtube", "viaggi", "barcellona"],
    excerpt: "È online il video del mio viaggio a Barcellona dello scorso autunno. Tre giorni intensi tra architettura, cibo e musica di strada.",
    content: `
      <p>Finalmente online il video del viaggio a Barcellona! Ci ho messo un po' a montarlo, ma sono abbastanza soddisfatto del risultato.</p>
      <h2>Il viaggio</h2>
      <p>Tre giorni intensi: Sagrada Família, Gòtic, El Born, la spiaggia. Ma soprattutto tanto cibo buono e molta musica di strada.</p>
      <p>Barcellona è una di quelle città che ti entra dentro — ci tornerei domani.</p>
      <h2>Il video</h2>
      <p>Ho provato uno stile di montaggio più lento rispetto ai video precedenti, con più attenzione ai dettagli e meno voiceover. Fatemi sapere cosa ne pensate nei commenti!</p>
    `
  },

  {
    id: "polimi-primo-semestre",
    title: "Fine del primo semestre al Politecnico",
    date: "2026-01-28",
    cover: "",
    tags: ["study", "polimi", "università"],
    excerpt: "Sessione invernale archiviata. Qualche soddisfazione, qualche esame tosto, ma il bilancio è positivo. Riflessioni a caldo sul primo semestre.",
    content: `
      <p>La sessione invernale è finalmente finita. Tempo di tirare le somme sul primo semestre al Politecnico di Milano.</p>
      <h2>Gli esami</h2>
      <p>Alcuni esami sono andati meglio del previsto, altri hanno richiesto più fatica del previsto. Il bello dell'ingegneria informatica è che ogni materia ti spinge a ragionare in modo diverso.</p>
      <h2>Cosa mi è piaciuto</h2>
      <p>I laboratori pratici, senza dubbio. Il momento in cui il codice che hai scritto fa qualcosa di concreto è sempre soddisfacente.</p>
      <p>Avanti con il secondo semestre!</p>
    `
  },

];

// Esporta per uso nei vari file HTML
// (caricato come <script src="posts.js"> in ogni pagina)
