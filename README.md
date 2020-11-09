# Busskjerm

Dette er en infoskjerm for å vise busstider på en tilsvarende måte som på bussholdeplasser og togstasjoner.
Prosjektet er laget i React, og bruker Entur sin SDK.

Designet er basert på Ruter sine infoskjermer, https://mon.ruter.no/, og Ruter sin font er hentet fra: https://brand.ruter.no/


## For å lage din egen

Etter å ha clonet repoet, gå inn App.js og endre følgende til egne verdier :\
`const app_name = "Busstider";`\
`const departing_from = "Ila";`\
`const arriving_at = "Gløshaugen";`

Endre deretter `const route_length = 10;` og stoppeplassene ved å følge linken i kommentaren.

Kjør deretter `npm start` og skjermen skal komme opp etter rundt 10 sekunder.



