# Optimum Food Solutions — website

Moderne, simpel one-pager bygget i ren HTML, CSS og JavaScript. Ingen build-værktøjer
eller installation nødvendig.

## Sådan åbnes sitet
Dobbeltklik på `index.html` — eller højreklik → "Åbn med" → din browser.
Det virker direkte fra filsystemet; der kræves ingen server.

## Filer
| Fil | Indhold |
|-----|---------|
| `index.html` | Al tekst og struktur (sektionerne i rækkefølge) |
| `styles.css` | Design og layout — farver styres øverst under `:root` |
| `main.js` | Mobil-menu, scroll-animationer, aktiv menu, kontakt-formular |
| `assets/` | Logoer (og evt. favicon) |

## Logoer
De rigtige logoer er allerede koblet på og ligger i `assets/`:
- `assets/optimum-logo.jpg` — vises i headeren og footeren.
- `assets/optimum-intelligence-logo.png` — vises i Optimum Intelligence-sektionen.
- `assets/dagrofa-logo.webp`, `assets/stadsing-logo.png`, `assets/bki-logo.avif` — partner-logoer i "Hvem er vi"-kortene.

> Bemærk: BKI-filen var oprindeligt en AVIF gemt med `.png`-endelse. Den er omdøbt til
> `.avif`, så browsere viser den korrekt. AVIF understøttes af alle moderne browsere.

Vil du udskifte et logo, så læg den nye fil i `assets/` og opdatér `src` på det relevante
`<img>` i `index.html` (søg efter `logo-img` for headeren og `intel-logo-img` for
Intelligence-sektionen). I footeren bruges et hvidt tekst-wordmark i stedet for billedet,
fordi det grønne logo har hvid baggrund og ikke står godt på den mørkegrønne footer.

## Rediger indhold
- **Tekst:** redigeres direkte i `index.html`.
- **Farver:** ændres ét sted — variablerne under `:root` i `styles.css`.
- **Kontakt-e-mail:** søg efter `jacob.zohner@optimumfoodsolutions.dk` i `index.html` og `main.js`.

## Kontaktformular
Da sitet er statisk (ingen server), åbner "Send besked"-knappen brugerens e-mailklient med
beskeden udfyldt. Ønskes ægte formular-aflevering uden e-mailklient, kan formularen kobles
til en gratis tjeneste som [Formspree](https://formspree.io) eller [Web3Forms](https://web3forms.com).

## Hosting (når I vil online)
Sitet kan hostes gratis ved at uploade de tre filer + `assets/` til fx GitHub Pages,
Netlify, Cloudflare Pages eller et almindeligt webhotel. Ingen byggeproces nødvendig.
