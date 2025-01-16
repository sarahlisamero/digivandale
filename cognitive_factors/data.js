const nudgesBiasesHeuristics = [
    {
        name: "Confirmation bias",
        definition: "Mensen zoeken informatie die hun bestaande overtuigingen bevestigt."
    },
    {
        name: "Anchoring bias",
        definition: "Mensen vertrouwen te veel op het eerste stukje informatie dat ze ontvangen."
    },
    {
        name: "Availability heuristic",
        definition: "Mensen beoordelen de waarschijnlijkheid van een gebeurtenis op basis van hoe gemakkelijk voorbeelden te bedenken zijn."
    },
    {
        name: "Overconfidence bias",
        definition: "Mensen overschatten hun eigen kennis of vaardigheden."
    },
    {
        name: "Hindsight bias",
        definition: "Achteraf denken dat een gebeurtenis voorspelbaar was."
    },
    {
        name: "Loss aversion",
        definition: "Mensen vermijden liever verlies dan dat ze winst nastreven."
    },
    {
        name: "Framing effect",
        definition: "Beslissingen worden beïnvloed door hoe informatie wordt gepresenteerd."
    },
    {
        name: "Dunning-Kruger effect",
        definition: "Mensen met weinig kennis overschatten hun bekwaamheid."
    },
    {
        name: "Self-serving bias",
        definition: "Succes toeschrijven aan jezelf, en mislukkingen aan externe factoren."
    },
    {
        name: "Sunk cost fallacy",
        definition: "Mensen blijven investeren in iets waarin ze al veel hebben geïnvesteerd, zelfs als het niet meer rationeel is."
    },
    {
        name: "Bandwagon effect",
        definition: "Mensen volgen de menigte of een populaire mening."
    },
    {
        name: "Negativity bias",
        definition: "Negatieve ervaringen wegen zwaarder dan positieve."
    },
    {
        name: "Halo effect",
        definition: "Een goede indruk op één gebied beïnvloedt hoe we iemand op andere gebieden beoordelen."
    },
    {
        name: "Recency bias",
        definition: "Recente gebeurtenissen hebben meer invloed dan oude gebeurtenissen."
    },
    {
        name: "Optimism bias",
        definition: "Mensen geloven dat ze minder kans hebben op negatieve gebeurtenissen."
    },
    {
        name: "Status quo bias",
        definition: "Mensen geven de voorkeur aan de huidige situatie boven verandering."
    },
    {
        name: "Clustering illusion",
        definition: "Mensen zien patronen in willekeurige gegevens."
    },
    {
        name: "Attribution bias",
        definition: "Het gedrag van anderen toeschrijven aan hun persoonlijkheid, niet aan externe omstandigheden."
    },
    {
        name: "Just-world bias",
        definition: "Geloven dat mensen krijgen wat ze verdienen."
    },
    {
        name: "Base rate fallacy",
        definition: "Basisinformatie negeren ten gunste van specifieke details."
    },
    {
        name: "Rosy retrospection bias",
        definition: "Mensen herinneren zich het verleden positiever dan het daadwerkelijk was."
    },
    {
        name: "Egocentric bias",
        definition: "Mensen overschatten hun eigen bijdrage aan een groepsprestatie."
    },
    {
        name: "Pessimism bias",
        definition: "Mensen geloven dat negatieve uitkomsten waarschijnlijker zijn."
    },
    {
        name: "Illusory superiority",
        definition: "Mensen denken dat ze beter zijn dan gemiddeld."
    },
    {
        name: "Survivorship bias",
        definition: "Alleen succesvolle voorbeelden worden bekeken, waardoor het beeld vertekend raakt."
    },
    {
        name: "Action bias",
        definition: "Mensen voelen zich beter door iets te doen, zelfs als het nutteloos is."
    },
    {
        name: "Outcome bias",
        definition: "Beslissingen worden beoordeeld op basis van het resultaat, niet het proces."
    },
    {
        name: "Empathy gap",
        definition: "Het is moeilijk om je in te leven in gevoelens die je zelf niet ervaart."
    },
    {
        name: "Pro-innovation bias",
        definition: "Nieuwe ideeën worden overschat omdat ze innovatief lijken."
    },
    {
        name: "Cheerleader effect",
        definition: "Mensen zien groepen als aantrekkelijker dan individuele leden."
    },
    {
        name: "Forer effect",
        definition: "Vage en algemene uitspraken voelen persoonlijk accuraat aan."
    },
    {
        name: "Planning fallacy",
        definition: "Mensen onderschatten hoeveel tijd of middelen iets kost."
    },
    {
        name: "Gambler's fallacy",
        definition: "Geloven dat kansen veranderen naarmate een gebeurtenis vaker gebeurt."
    },
    {
        name: "Empowerment bias",
        definition: "Mensen overschatten hun controle over gebeurtenissen."
    },
    {
        name: "Hyperbolic discounting",
        definition: "Mensen geven meer waarde aan beloningen op korte termijn dan op lange termijn."
    },
    {
        name: "Belief bias",
        definition: "Mensen accepteren logische fouten als ze overeenkomen met hun overtuigingen."
    },
    {
        name: "False consensus effect",
        definition: "Denken dat je mening breder gedeeld wordt dan echt het geval is."
    },
    {
        name: "Authority bias",
        definition: "Meer waarde hechten aan meningen van autoriteitsfiguren."
    },
    {
        name: "Zero-risk bias",
        definition: "De voorkeur geven aan keuzes die risico's volledig elimineren, ook al zijn ze inefficiënt."
    },
    {
        name: "Placebo effect",
        definition: "Het geloof dat iets werkt kan het effect versterken, zelfs zonder werkzame stoffen."
    },
    {
        name: "Chunking nudge",
        definition: "Informatie in kleine stukken aanbieden om het makkelijker te verwerken."
    },
    {
        name: "Time scarcity nudge",
        definition: "Mensen beïnvloeden door een gevoel van urgentie te creëren."
    },
    {
        name: "Color coding",
        definition: "Kleuren gebruiken om gedrag te sturen (zoals rood voor waarschuwingen)."
    },
    {
        name: "Visual cues",
        definition: "Visuele elementen die gewenst gedrag stimuleren."
    },
    {
        name: "Checklists",
        definition: "Mensen helpen door hen te herinneren aan stappen die ze moeten volgen."
    },
    {
        name: "Reframing nudge",
        definition: "Informatie presenteren op een manier die gunstiger lijkt."
    },
    {
        name: "Choice restriction",
        definition: "Opties beperken om het maken van een keuze makkelijker te maken."
    },
    {
        name: "Peer benchmarking",
        definition: "Vergelijkingen tonen met het gedrag van anderen in dezelfde situatie."
    },
    {
        name: "Dynamic pricing",
        definition: "Prijzen aanpassen aan gedrag of timing om gedrag te beïnvloeden."
    },
    {
        name: "Structured procrastination",
        definition: "Mensen sturen om nuttige taken te doen terwijl ze andere uitstellen."
    },
    {
        name: "Behavioral defaults",
        definition: "Standaardinstellingen bepalen gedrag zonder bewuste actie."
    },
    {
        name: "Partition nudge",
        definition: "Tussenschotten plaatsen om gedrag te sturen (zoals kleinere borden)."
    },
    {
        name: "Proximity nudge",
        definition: "Beloningen of doelen fysiek dichterbij brengen om actie te bevorderen."
    },
    {
        name: "Temptation bundling",
        definition: "Ongewenst gedrag combineren met iets leuks (bijvoorbeeld muziek luisteren tijdens sporten)."
    },
    {
        name: "Door-in-the-face nudge",
        definition: "Eerst een grote vraag stellen en daarna een kleinere om die aanvaardbaar te laten lijken."
    },
    {
        name: "Foot-in-the-door nudge",
        definition: "Iemand met een kleine vraag overhalen om later iets groters te doen."
    },
    {
        name: "Message framing",
        definition: "Positieve of negatieve taal gebruiken om keuzes te sturen."
    },
    {
        name: "Scarcity reminders",
        definition: "Herinneren aan beperkte beschikbaarheid om actie uit te lokken."
    },
    {
        name: "Attention triggers",
        definition: "Opvallende meldingen om gedrag te stimuleren."
    },
    {
        name: "Behavioral anchoring",
        definition: "Een uitgangspunt instellen om keuzes te sturen."
    },
    {
        name: "Illusion of control",
        definition: "Mensen geloven dat ze meer controle hebben over een situatie dan eigenlijk het geval is."
    },
    {
        name: "Contrast effect",
        definition: "Mensen beoordelen een optie in vergelijking met een andere, niet op zichzelf."
    },
    {
        name: "Hot-hand fallacy",
        definition: "Het geloof dat een persoon met succes in een reeks succesvol zal blijven."
    },
    {
        name: "Endowment effect",
        definition: "Mensen hechten meer waarde aan iets wat ze al bezitten."
    },
    {
        name: "Mere exposure effect",
        definition: "Mensen hebben de neiging iets leuker te vinden hoe vaker ze het zien."
    },
    {
        name: "Social proof",
        definition: "Mensen volgen het gedrag van anderen om te bepalen wat juist is."
    },
    {
        name: "Primacy effect",
        definition: "Eerste indrukken hebben een onevenredig grote invloed."
    },
    {
        name: "Serial position effect",
        definition: "Mensen herinneren zich het eerste en laatste deel van een reeks beter."
    },
    {
        name: "IKEA effect",
        definition: "Mensen hechten meer waarde aan dingen die ze zelf hebben gemaakt."
    },
    {
        name: "Loss framing",
        definition: "Opties presenteren als verlies om actie te stimuleren."
    },
    {
        name: "Precommitment",
        definition: "Van tevoren beloftes maken om gewenst gedrag te bevorderen."
    },
    {
        name: "Priming",
        definition: "Mensen onbewust beïnvloeden (associaties) door bepaalde woorden of beelden te tonen."
    },
    {
        name: "Feedback loops",
        definition: "Directe terugkoppeling geeft mensen inzicht in hun gedrag."
    },
    {
        name: "Simplification",
        definition: "Complexe keuzes makkelijker maken verhoogt participatie."
    },
    {
        name: "Commitment",
        definition: "Een mechanisme om jezelf aan toekomstige acties te binden."
    },
    {
        name: "Pre-suasion",
        definition: "Mensen in de juiste mindset brengen vóór de boodschap wordt overgebracht."
    },
    {
        name: "Goal-setting nudge",
        definition: "Doelen stellen verhoogt motivatie en actie."
    },
    {
        name: "Gamification",
        definition: "Spelmechanismen gebruiken om gedrag te stimuleren."
    },
    {
        name: "Personalization",
        definition: "Berichten of opties afstemmen op individuen verhoogt de impact."
    },
    {
        name: "Salience",
        definition: "Opvallende informatie trekken meer aandacht en actie."
    },
    {
        name: "Descriptive norms",
        definition: "Laten zien wat de meeste mensen doen om gedrag te beïnvloeden."
    },
    {
        name: "Reminder nudge",
        definition: "Herinneringen verhogen de kans dat mensen iets doen."
    },
    {
        name: "Immediate rewards",
        definition: "Kleine beloningen direct na gewenst gedrag stimuleren herhaling."
    },
    {
        name: "Implementation intentions",
        definition: "Specifieke plannen maken (Als X, dan Y) verhoogt de kans dat mensen handelen."
    },
    {
        name: "Social comparisons",
        definition: "Mensen motiveren door hen met hun peers te vergelijken."
    },
    {
        name: "Micro-incentives",
        definition: "Kleine beloningen of voordelen aanbieden voor gewenst gedrag."
    },
    {
        name: "Representativeness heuristic",
        definition: "Beslissen op basis van hoe goed iets in een stereotype past."
    },
    {
        name: "Affect heuristic",
        definition: "Oordelen baseren op emoties in plaats van feiten."
    },
    {
        name: "Familiarity heuristic",
        definition: "Bekende opties worden als beter of veiliger beschouwd."
    },
    {
        name: "Recognition heuristic",
        definition: "De meest herkenbare optie wordt gekozen."
    },
    {
        name: "Scarcity heuristic",
        definition: "Schaarse items lijken waardevoller."
    },
    {
        name: "Effort heuristic",
        definition: "Mensen zien iets als waardevoller als er meer moeite in zit."
    },
    {
        name: "Gaze heuristic",
        definition: "Bewegingen baseren op de blikrichting (bijvoorbeeld bij sport)."
    },
    {
        name: "Default heuristic",
        definition: "De standaardoptie wordt vaak gekozen."
    },
    {
        name: "Satisficing",
        definition: "De eerste optie die 'goed genoeg' lijkt, wordt gekozen."
    },
    {
        name: "Take-the-best heuristic",
        definition: "Alleen de belangrijkste factor overwegen bij een beslissing."
    },
    {
        name: "Tit-for-tat heuristic",
        definition: "Samenwerken zolang de ander dat ook doet."
    },
    {
        name: "Availability cascade",
        definition: "Een idee wordt geloofd omdat het herhaald wordt."
    },
    {
        name: "Substitution heuristic",
        definition: "Een moeilijke vraag vervangen door een gemakkelijkere vraag."
    },
    {
        name: "Temporal discounting",
        definition: "Mensen geven de voorkeur aan onmiddellijke beloningen boven toekomstige beloningen."
    },
    {
        name: "Escalation of commitment",
        definition: "Meer middelen investeren in een falend project."
    },
    {
        name: "Elimination by aspects",
        definition: "Opties elimineren op basis van specifieke kenmerken."
    },
    {
        name: "Hot-hand fallacy",
        definition: "Geloven dat succes in het verleden leidt tot succes in de toekomst."
    },
    {
        name: "Risk heuristic",
        definition: "Mensen nemen meer risico's als de kans op verlies lager lijkt."
    },
    {
        name: "Social utility heuristic",
        definition: "Beslissingen baseren op wat sociaal acceptabel lijkt."
    },
    {
        name: "Frequency heuristic",
        definition: "Beoordelingen maken op basis van hoe vaak iets voorkomt."
    },
    {
        name: "Fluency heuristic",
        definition: "Dingen die gemakkelijker te begrijpen zijn, lijken betrouwbaarder."
    },
    {
        name: "Similarity heuristic",
        definition: "Beslissingen nemen op basis van gelijkenissen met eerdere situaties."
    },
    {
        name: "Efficient market heuristic",
        definition: "Geloven dat markten altijd rationeel en efficiënt zijn."
    },
    {
        name: "Moral credential effect",
        definition: "Goed gedrag in het verleden gebruiken om nu iets minder ethisch te doen."
    },
    {
        name: "Surprise heuristic",
        definition: "Meer aandacht schenken aan onverwachte gebeurtenissen."
    },
    {
        name: "Affect labeling",
        definition: "Het benoemen van emoties om ze te reguleren."
    },
    {
        name: "Opportunity cost neglect",
        definition: "Het negeren van alternatieve kosten bij keuzes."
    },
    {
        name: "Default heuristic",
        definition: "Automatisch kiezen voor de optie die standaard is."
    },
    {
        name: "Rule of thumb",
        definition: "Simpele vuistregels gebruiken voor complexe problemen."
    },
    {
        name: "Peak-end rule",
        definition: "Beslissingen baseren op piek- en eindmomenten van ervaringen."
    },
    {
        name: "Ambiguity heuristic",
        definition: "Keuzes vermijden die onzekerheid bevatten."
    },
    {
        name: "Recognition-primed decision",
        definition: "Snelle beslissingen nemen op basis van herkenning."
    },
    {
        name: "Hot-cold empathy gap",
        definition: "Niet begrijpen hoe emoties keuzes beïnvloeden tijdens stress."
    },
    {
        name: "Probability neglect",
        definition: "Kleine kansen over- of onderschatten."
    },
    {
        name: "Rapid intuition",
        definition: "Snel oordelen zonder bewuste redenatie."
    },
    {
        name: "Serial position effect",
        definition: "De eerste en laatste items in een reeks onthouden mensen beter."
    },
    {
        name: "Storytelling heuristic",
        definition: "Geloven dat dingen waar zijn omdat ze een logisch verhaal vormen."
    },
    {
        name: "Fast-and-frugal heuristic",
        definition: "Snelle beslissingen nemen met minimale informatie."
    },
    {
        name: "Representative matching",
        definition: "Voorbeelden kiezen die het meest representatief lijken, zelfs als ze niet accuraat zijn."
    }
]; 
