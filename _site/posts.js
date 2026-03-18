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
    id: "gita-banda-palazzolo-2026",
    title: "Trasferta e concerto a Pergine Valsugana",
    date: "2026-03-18",
    cover: "",
    pinned: true,
    eventDate: "2026-03-28",
    eventTime: "20:30",
    eventPlace: "Pergine Valsugana",
    tags: ["musica", "banda palazzolo", "concerto"],
    excerpt: "La Banda di Palazzolo in trasferta!",
    content: `
      <p>Quest'anno la gita della banda dura 2 giorni! La trasferta a Pergine Valsugana prevede anche una notte fuori, tra il 28 e il 29 marzo 2026.</p>
      <p>La sera del 28 ci sarà il concerto nel Teatro Comunale, invece il resto del tempo è dedicato al divertimento e lo svago.</p>
      <p>Questo <a href="https://www.teatrodipergine.it/eventi/2730-concerto-corpo-musicale-santa-cecilia" target="_blank" rel="noopener noreferrer">link</a> rimanda al sito ufficiale del teatro di Pergine, per approfondire.</p>
      <p>📅 28 Marzo 2026 · ore 20:30<br>📍 Pergine Valsugana, Teatro Comunale </p>
    `
  },

  {
    id: "referendum-2026",
    title: "Presidente di Seggio, Referendum 2026",
    date: "2026-03-18",
    cover: "",
    pinned: true,
    eventDate: "2026-03-21",
    eventTime: "16:00",
    eventPlace: "Paderno Dugnano",
    tags: ["lavoro", "seggio", "referendum"],
    excerpt: "Sabato 21 marzo c'è l'insediamento dei seggi.",
    content: `
      <p>Questo weekend sarà pieno per me. infatti sono stato nominato presidente si seggio per il <a href="https://it.wikipedia.org/wiki/Referendum_costituzionale_in_Italia_del_2026" target="_blank" rel="noopener noreferrer">
      "Referendum Giustizia 2026"</a></p>
      <p>Sabato alle 16:00 c'è l'insediamento del seggio. Per chi non se ne intendesse è uno dei momenti in cui c'è più lavoro per 
      i componenti del seggio dato che bisogna firmare e timbrare tutte le schede. Oltre a quello bisogna allestire tutta l'aula 
      per prepararsi alla votazione. Solitamente questo lavoro impiega circa 2-3 ore. Però le altre volte che sono stato ai seggi 
      c'erano dalle 2 alle 5 schede (per elettore), invece questa volta solo una, quindi il lavoro sarà più veloce.</p>
      <p>Le votazioni sono aperte domenica dalle 7:00 alle 23:00 e lunedì dalle 7:00 alle 15:00. Dopodiché inizierà lo scrutinio. Anche questo
      credo sarà più veloce dato che è una sola scheda ed è un referendum (quindi le risposte sono Sì oppure No, facili da scrutinare).</p>
      <p>L'unico svantaggio di avere una sola scheda è il compenso previsto per i componenti del seggio (per ogni scheda aggiuntiva, oltre la prima,
      c'è un aumento del compenso), che è ridotto in confronto alle altre consultazioni a cui ho partecipato. Però è giusto così, poiché 
      teoricamente ci sarà meno lavoro da fare (anche se il tempo rimane lo stesso).</p>
      <p>Altre informazioni sulla mia "carriera" ai seggi sono <a href="seggio-elettorale.html">qui.</a></p>
    `
  },

  {
    id: "ricordo-vittime-covid-2026",
    title: "In memoria delle vittime del COVID-19",
    date: "2026-03-18",
    cover: "img/posts/ricordo-vittime-covid-2026.jpg",
    pinned: false,
    eventDate: "2026-03-18",
    eventTime: "11:00",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "banda palazzolo", "servizio"],
    excerpt: "Servizio con la banda di Palazzolo in memoria delle vittime del COVID-19",
    content: `
      <p>Questo è il quinto anno in cui viene celebrata questa giornata, in ricordo di tutte le persone venute a mancare a causa del Coronavirus</p>
      <p>Il Comune di Paderno Dugnano ha dedicato una zona del Parco "La Cava" in cui sono stati piantati degli alberi in ricordo 
      delle vittime e di quel periodo storico che ha segnato tutti noi.</p>
      <p>La sindaca Anna Varisco, oltre a ricordare gli orrori e le difficoltà di quel periodo, ha voluto sottolineare l'importante ruolo che ha avuto 
      la comunità: l'unione delle forze di tutti i volontari ha permesso al paese di andare avanti nonostante le difficoltà. </p>
      <p>Per quanto riguarda la banda, abbiamo eseguito la marcia Monviso sfilando dall'ingresso del parco, fino alla zona dedicata. 
      Poi il maestro Enrico Tiso ha eseguito un brano da solista mentre la bandiera italiana veniva posizionata a mezz'asta. Dopodiché c'è
      stato il mio intervento con il Silenzio. Dopo alcuni discorsi ufficiali abbiamo eseguito il "Va pensiero" e infine la cerimonia
       si è conclusa con l'Inno di Mameli.</p>
    `
  },

  {
    id: "concerto-estate-cusano-2026",
    title: "Concerto d'Estate — Banda di Cusano Milanino",
    date: "2026-03-14",
    cover: "",
    pinned: true,
    eventDate: "2026-06-20",
    eventTime: "21:00",
    eventPlace: "Cusano Milanino",
    tags: ["musica", "banda cusano", "concerto"],
    excerpt: "Appuntamento con il Concerto d'Estate della Banda di Cusano Milanino. Una serata di musica sotto le stelle — tutti invitati!",
    content: `
      <p>Vi aspettiamo al <strong>Concerto d'Estate</strong> della Banda di Cusano Milanino!</p>
      <p>Una serata all'aperto con un programma incredibile a tema "Cartoni animati"!</p>
      <p>L'ingresso è libero e aperto a tutti.</p>
      <p>📅 20 Giugno 2026 · ore 21:00<br>📍 Cusano Milanino</p>
    `
  },

  {
    id: "concerto-palazzolo-cava-2026",
    title: "Concerto nell'anfiteatro — Banda di Palazzolo Milanese",
    date: "2026-03-16",
    cover: "",
    pinned: true,
    eventDate: "2026-05-24",
    eventTime: "",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "banda palazzolo", "concerto"],
    excerpt: "Il concerto della banda di Palazzolo nel magnifico anfiteatro della Cava!",
    content: `
      <p>Come l'anno scorso e anche quello prima, suonerò al concerto della banda di Palazzolo</p>
      <p>Il luogo è bellissimo: l'anfiteatro della Cava di Paderno Dugnano. Il pubblico che verrà a sentirci potrà ascoltare la musica 
      e guardare il paesaggio suggestivo di quel meraviglio parco</p>
      <p>Il concerto è di pomeriggio e il mio consiglio è di arrivare al parco molto in anticipo per avere anche il tempo di fare una passeggiata e goderselo tutto.</p>
      <p>📅 24 Maggio 2026 · pomeriggio<br>📍 Paderno Dugnano, Anfiteatro Parco La Cava </p>
    `
  },

  {
    id: "pubblicazioni-smart-home",
    title: "La mia esperienza con la smart home",
    date: "2026-03-02",
    cover: "img/loghi/home_assistant_logo.png",
    pinned: false,
    tags: ["tech", "home assistant", "smart home"],
    excerpt: "Da alcuni anni uso Home Assistant, volevo provare a pubblicare alcune delle mie idee e configurazioni.",
    content: `
      <p>Home Assistant è diventato il centro della mia casa, ormai da qualche anno. Mio papà è vittima dei miei continui esperimenti.
        Mia mamma invece mi sprona e mi permette di comprare anche nuovi dispositivi smart.</p>
      <p>Stavo pensando di iniziare a scrivere qualche articolo in cui mostro alcune delle mie configurazioni. Home Assistant si basa su una forte community
        e io ho letto migliaia di consigli online, quindi è giusto che anch'io contribuisca. Tutti dovrebbero farlo così che tutti si aiutino a vicenda.</p>
      <p>Quindi appena trovo l'argomento giusto e il tempo pubblicherò qualche cosa del mio HA. Non sarà niente di rivoluzionario, ma solo qualche automazione o script utile.
      </p>
    `
  },

  {
    id: "doremitici-carnevale-2026",
    title: "Carnevale 2026",
    date: "2026-02-21",
    cover: "img/posts/doremitici-carnevale-2026.jpg",
    pinned: false,
    eventDate: "2026-02-21",
    eventTime: "16:00",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "doremitici", "servizio"],
    excerpt: "I DoReMitici hanno portato un po' di musica per carnevale, fuori dal centro commerciale.",
    content: `
      <p>Il 21 febbraio, come gruppo DoReMitici ci siamo presentati davanti all'ingresso del Centro commerciale Brianza di 
      Paderno Dugnano e abbiamo suonato per un paio d'ore, travestiti per l'occasione. 
         Per leggere l'articolo sul sito ufficiale <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2026-02-21_Carnevale_2026/index.php" target="_blank" rel="noopener noreferrer">clicca qui</a>.</p>
      <p>Per il nostro gruppo questi servizi sono utili anche per raccogliere qualche offerta per permetterci piano piano 
      di evolvere (indumenti personalizzati, attrezzatura audio/video, partiture, ecc...), ma questa volta ne abbiamo approfittato
       anche per leggere qualche brano mai visto alle prove 🤫. L'esecuzione non è stata perfetta, ma anche questo ci può aiutare 
       a migliorare (ad esempio per velocizzare la lettura musicale a prima vista e anche per imparare a risolvere situazioni critiche
       durante gli eventi).</p>
      <p>Spezzo una lancia a nostro favore 😅 dicendo che l'esecuzione è stata inficiata anche dall'assenza delle percussioni che quindi ha
      reso ancora più difficile il nostro lavoro.
      </p>
    `
  },

  {
    id: "doremitici-serata-gruppo-missionario",
    title: "Serata Gruppo Missionario ''Io sono l'altro''",
    date: "2026-02-20",
    cover: "img/posts/doremitici-serata-gruppo-missionario.jpg",
    pinned: false,
    eventDate: "2026-02-18",
    eventTime: "20:45",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "doremitici", "evento"],
    excerpt: "I DoReMitici hanno partecipato a una serata organizzata dal Gruppo Missionario presso la Cineteca Milano Metropolis.",
    content: `
      <p>Il 18 febbraio è stata una serata piacevole e con grandi spunti di riflessione. Per leggere l'articolo completo sul sito dei DoReMitici, 
        <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2026-02-18_Serata_gruppo_missionario/index.php" target="_blank" rel="noopener noreferrer">clicca qui</a>.</p>
      <p>Noi abbiamo suonato 3 brani: Gabriel's Oboe, Schiindler's List, Dolce Sentire.</p>
      <p>Suonare quelle musiche non è semplice perché ci vuole un buon controllo del suono nelle dinamiche come il piano e il pianissimo.
         Ho registrato con il mio microfono e riascoltando sono contento del risultato.
      </p>
    `
  },

];
