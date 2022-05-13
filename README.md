# Human Centered Design @cmda-minor-web 2021 - 2022

## De opdracht

De opdracht die we kregen voor het vak Human Centred Design was om een exclusief design te maken voor een client. Iets wat tegenstrijdig is omdat op CMD normaliter gewenst is om zo inclusief te ontwerpen. Exclusief design houdt in dat je iets ontwerpt specifiek voor één persoon, het ontwerp sluit dus helemaal aan bij diegene zijn of haar wensen en behoeftes.
Om dit te bereiken is het noodzakelijk om je gebruiker goed te kennen en te begrijpen. Doormiddel van meerdere tests leer ik mijn gebruiker beter kennen en kom ik op een uiteindelijk resultaat. Ook staat het gebruiken van _exclusive design principles_ centraal in deze opdracht, wat dit precies inhoudt vertel ik later meer over.

In mijn geval is de gebruiker waar ik voor heb ontworpen _Marijn Meijles_.

In de opdracht omschrijving op github staat beschreven;

_"Marijn is waarschijnlijk de beste developer die je ooit gaat ontmoeten. Een briljante nerd. Hij doet al jaren met heel veel plezier mee aan deze opdracht. Marijn heeft een motorische stoornis. Hij gebruikt zijn computer dus anders dan wij. Hij heeft veel moeite met fijne motoriek. Hij gebruikt zijn toetsenbord om te navigeren, en in de Accessibility settings van zijn Mac heeft hij Sticky Keys aan staan."_

vervolgens konden we uit twee ontwerp uitdagingen kiezen om voor Marijn op te lossen;

- Ontwerp een date picker voor Marijn

  _Hij reist veel met de trein, en hij moet van tevoren aangeven welke trein hij wil nemen zodat er iemand is om hem te helpen met zijn rolstoel. Date-pickers zijn over het algemeen priegelig, en niet ontworpen voor iemand die afhankelijk is van zijn toetsenbord?_

- Ontwerp een Drag & Drop lijst

  _Hoe kun je een drag & drop lijst optimaliseren voor een gebruiker die afhankelijk is van zijn toetsenbord én motorisch gestoord is?_

Ik heb gekozen voor de eerste uitdaging namenlijk een date picker ontwerpen voor Marijn.
Maar waar ga je beginnen met ontwerpen voor iemand die je nog nooit eerder hebt ontmoet?

## User Scenario

Via github wist ik dus dat Marijn een geniale developer is, al jaren mee doet aan de opdracht en een motorische stoornis heeft waardoor hij veel moeite heeft met fijne motoriek. Daarnaast wist ik dat hij zijn laptop bediend met zijn toetsenbord. Uit latere tests en van studenten kwam ik meer over Marijn te weten, deze kennis heb ik verwerkt in een user scenario.

### Mijn gebruiker: Wie is Marijn?

![Afbeelding van Marijn](/assets/marijn.jpeg)

- **Gebruiker:** Marijn Meijles
- **Leeftijd:** 45 jaar oud
- **Woonplaats:** Eindhoven
- **Werk:** Technical Chief Architect in Amsterdam

#### Over Marijn

Zoals hierboven beschreven is Marijn dus Technical Chief Architect in Amsterdam, waar hij de Metadata van zo een beetje alle muziek op deze wereld beheerd!! Als developer heeft Marijn al 30 ervaring en heeft hier dan ook een ruime kennis in. Tijdens de tests uitte hij dit vooral door het proberen te vinden van bugs in onze applicaties , iets wat hij met veel plezier steeds maar probeerde.

Verder is Marijn een echte muziekfan, hij gaat graag naar concerten en houdt in het bijzonder van Metal muziek. Ook drinkt Marijn graag een biertje en heeft hij zoals hij zelf zegt geen tijd voor hobby's.

Verder heeft Marijn dus een motorische stoornis, deze stoornis is aangeboren. Door deze motorische stoornis die zich uit in spasmes beheerst Marijn geen fijne motoriek, hierdoor gebruikt hij zijn laptop op een andere manier.
Ook resulteert zijn stoornis zich in moeite hebben met spraak, ondanks dit laat Marijn zich niet uit het veld slaan en maakt zelfs veel grapjes. Humor is flink aanwezig bij Marijn!

Zoals hierboven benoemd gebruikt Marijn zijn laptop op een andere manier dan hoe deze oorspronkelijk is ontworpen. Hij gebruikt enkel zijn linkerarm arm om zijn toetsenbord en trackpad te bedienen. De rechterkant van zijn toetsenbord is voor hem daarom makkelijker te gebruiken. Ook maakt hij gebruik van sticky keys om _short keys_ te kunnen uitvoeren. Tot slot gebruikt hij _H_, _J_, _K_ en _L_ om te navigeren op een pagina.

### Marijns Wensen: Wat wilt hij graag?

Zoals beschreven in de opdracht wilt Marijn een date picker kunnen gebruiken om zijn trein reis in te plannen. Date pickers zijn vaak "priegelig" ontworpen en voor Marijn dus een obstajkel om te gebruiken.

Marijn reist bijna elke dag van Eindhoven naar Amsterdam en terug voor zijn werk, het komt een enkele keer voor dat hij naar een andere locatie moet reizen, ongeveer één keer per maand.

Wanneer Marijn naar zijn werk in Amsterdam gaat planned hij de avond van te voren zijn reis in. Deze reis is vanaf Eindhoven Centraal rond half tien 's ochtends. Wanneer Marijn van zijn werk terug naar huis gaat wilt hij dit zo snel mogelijk. Echter is het niet mogelijk om a la minute zijn reis aan te melden, daarom moet er minimaal een uur tussen het aanmelden en zijn reis zitten. Hetzelfde voor reizen naar andere locaties geldt, ook daar moet er minimaal een uur speling zijn.

Omdat Marijn al 10 jaar mee werkt aan deze opdracht was hij de apps in metal thema wel zat, zoals hij zelf zei:
_"Dat heb ik nu al heel vaak gezien"_

Hij wilt dus een Date picker waarop hij op een makkelijke manier zijn trein reisen kan inplannen.

### De oplossing: Hoe kan Marijn de applicatie gebruiken?

Omdat Marijn op een makkelijke manier zijn treinreizen wilt kunnen inplannen heb ik de applicatie zo simpel mogelijk gehouden. Om goed aan te sluiten bij zijn wensen heeft de applicatie drie functionaliteiten:

- Reizen weergeven van Eindhoven naar Amsterdam
- Reizen weergeven van Amsterdam naar Eindhoven
- Een andere reis inplannen

Om handelingen die fijne motoriek te vereisen te elimineren is het toetsen bord opgedeelt in drie grote knoppen, waarbij het niet uit maakt welke individuele toetsen hij indrukt.

- Wanneer hij de rechterkant van het toetsenbord indrukt wordt hij doorgelinkt naar de NS site en ziet hij de treinen van de volgende dag rond half tien van Eindhoven naar Amsterdam.
- Wanneer hij het midden van het toetsenbord indrukt wordt hij doorgelinkt naar de NS site en ziet hij de treinen van over een uur van Amsterdam naar Eindhoven.
- Wanneer hij aan de linkerkant van zijn toetsenbord iets indrukt wordt hij doorgelinkt naar de homepagina van de NS om zelf een trein in te plannen.

### Exclusief Design: Waarom zou Marijn de applicatie gebruiken?

De applicatie is gemaakt volgens Exclusive Design Principles, dit resulteert er in dat de applicatie enkel en alleen voor Marijn is gemaakt, er is tot in de puntjes rekening gehouden met zijn wensen en behoeftes zodat hij in een gepersonaliseerde app op een voor hem zo makkelijk mogelijke manier zijn doel kan bereiken.

Trein reizen in plannen verandert van een frustrerende uitdaging naar een fluitje van een cent dat hij met plezier uitvoert.

## Marijns Crazy Train
