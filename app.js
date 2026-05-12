// ============================================
// DATENBANK - ALLE THEORIEN & FRAGEN
// ============================================

const theoriesData = {
    "freuds-instanzenmodell": {
        title: "Freuds Instanzenmodell",
        category: "Psychoanalyse",
        content: `
            <h4>Übersicht</h4>
            <p>Sigmund Freud entwickelte das Strukturmodell der Psyche, das die menschliche Persönlichkeit in drei Instanzen unterteilt: Das Es, das Ich und das Über-Ich.</p>
            
            <h4>Die drei Instanzen:</h4>
            <ul>
                <li><strong>Das Es:</strong> Unbewusster Kern der Psyche, handelt nach dem Lustprinzip, möchte sofortige Befriedigung von Trieben</li>
                <li><strong>Das Über-Ich:</strong> Moralisches Gegenstück, enthält Werte, Verbote und Idealvorstellungen</li>
                <li><strong>Das Ich:</strong> Steht zwischen beiden, folgt dem Realitätsprinzip, balanciert Triebwünsche mit moralischen Forderungen</li>
            </ul>
            
            <h4>Konflikte & Abwehrmechanismen</h4>
            <p>Wenn der Ausgleich nicht gelingt, entstehen Konflikte, die durch Abwehrmechanismen wie Verdrängung kompensiert werden und psychische Störungen verursachen können.</p>
        `,
        questions: [
            {
                question: "Welche drei Instanzen umfasst Freuds Strukturmodell?",
                answers: [
                    { text: "Es, Ich, Über-Ich", correct: true },
                    { text: "Unbewusstes, Bewusstes, Vorbewusstes", correct: false },
                    { text: "Id, Ego, Superego (englische Begriffe)", correct: false },
                    { text: "Trieb, Abwehr, Konflikt", correct: false }
                ]
            },
            {
                question: "Nach welchem Prinzip handelt das Es?",
                answers: [
                    { text: "Lustprinzip", correct: true },
                    { text: "Realitätsprinzip", correct: false },
                    { text: "Moralprinzip", correct: false },
                    { text: "Verantwortungsprinzip", correct: false }
                ]
            },
            {
                question: "Welche Instanz repräsentiert das Gewissen?",
                answers: [
                    { text: "Das Über-Ich", correct: true },
                    { text: "Das Es", correct: false },
                    { text: "Das Ich", correct: false },
                    { text: "Die Abwehr", correct: false }
                ]
            }
        ]
    },

    "freuds-phasenmodell": {
        title: "Freuds Phasenmodell (psychosexuelle Entwicklung)",
        category: "Entwicklungspsychologie",
        content: `
            <h4>Die 5 Phasen:</h4>
            <ul>
                <li><strong>Orale Phase (0–1,5 J.):</strong> Mund als primäre erogene Zone, Saugen und Trinken</li>
                <li><strong>Anale Phase (1,5–3 J.):</strong> Kontrolle des Schließmuskels, Autonomie und eigener Wille</li>
                <li><strong>Phallische Phase (3–6 J.):</strong> Genitalien als Lustzone, Ödipuskomplex</li>
                <li><strong>Latenzphase (6–12 J.):</strong> Sexuelle Impulse treten in den Hintergrund, schulische Leistung</li>
                <li><strong>Genitale Phase (ab Pubertät):</strong> Reifung einer auf andere gerichteten Sexualität</li>
            </ul>
            
            <h4>Fixierungen</h4>
            <p>Bleibt eine Phase unabgeschlossen, kommt es zu Fixierungen und späteren psychischen Störungen.</p>
        `,
        questions: [
            {
                question: "Wie lange dauert die orale Phase?",
                answers: [
                    { text: "0–1,5 Jahre", correct: true },
                    { text: "1,5–3 Jahre", correct: false },
                    { text: "3–6 Jahre", correct: false },
                    { text: "6–12 Jahre", correct: false }
                ]
            },
            {
                question: "Was kennzeichnet die phallische Phase?",
                answers: [
                    { text: "Der Ödipuskomplex", correct: true },
                    { text: "Kontrolle des Schließmuskels", correct: false },
                    { text: "Saugen und Trinken", correct: false },
                    { text: "Schulische Leistung", correct: false }
                ]
            },
            {
                question: "Wann tritt die Latenzphase auf?",
                answers: [
                    { text: "6–12 Jahre", correct: true },
                    { text: "0–1,5 Jahre", correct: false },
                    { text: "3–6 Jahre", correct: false },
                    { text: "Ab der Pubertät", correct: false }
                ]
            }
        ]
    },

    "eriksons-modell": {
        title: "Eriksons Stufenmodell der psychosozialen Entwicklung",
        category: "Entwicklungspsychologie",
        content: `
            <h4>Grundlagen</h4>
            <p>Erik Erikson beschreibt die Persönlichkeitsentwicklung als einen lebenslangen Prozess in 8 Phasen. Grundlage ist das epigenetische Prinzip: Alle Stufen sind angelegt und entfalten sich in einer fest vorgegebenen Reihenfolge.</p>
            
            <h4>Drei Prozesse der Persönlichkeitsentwicklung:</h4>
            <ul>
                <li><strong>Somatischer Prozess:</strong> Biologische Reifung und körperliche Entwicklung</li>
                <li><strong>Psychischer Prozess:</strong> Inneres Erleben, Gefühlswelt, Ich-Entwicklung</li>
                <li><strong>Gesellschaftlicher Prozess:</strong> Einbettung in soziale und kulturelle Strukturen</li>
            </ul>
            
            <h4>Die 8 Phasen (Auswahl):</h4>
            <ul>
                <li>Phase 1: Urvertrauen vs. Urmisstrauen</li>
                <li>Phase 2: Autonomie vs. Scham und Zweifel</li>
                <li>Phase 3: Initiative vs. Schuldgefühl</li>
                <li>Phase 4: Werksinn vs. Minderwertigkeitsgefühl</li>
                <li>Phase 5: Identität vs. Identitätsdiffusion (Adoleszenz)</li>
                <li>Phase 6: Intimität vs. Isolation</li>
                <li>Phase 7: Generativität vs. Stagnation</li>
                <li>Phase 8: Ich-Integrität vs. Verzweiflung</li>
            </ul>
        `,
        questions: [
            {
                question: "Wie viele Phasen hat Eriksons Modell?",
                answers: [
                    { text: "8 Phasen", correct: true },
                    { text: "5 Phasen", correct: false },
                    { text: "6 Phasen", correct: false },
                    { text: "10 Phasen", correct: false }
                ]
            },
            {
                question: "Was ist das epigenetische Prinzip?",
                answers: [
                    { text: "Alle Stufen sind angelegt und entfalten sich in fest vorgegebener Reihenfolge", correct: true },
                    { text: "Entwicklung ist chaotisch und ungeordnet", correct: false },
                    { text: "Jeder Mensch hat eine eigene Entwicklungsreihenfolge", correct: false },
                    { text: "Entwicklung stoppt nach der Kindheit", correct: false }
                ]
            },
            {
                question: "In welcher Phase findet die zentrale Identitätsfindung statt?",
                answers: [
                    { text: "Phase 5 - Identität vs. Identitätsdiffusion (Adoleszenz)", correct: true },
                    { text: "Phase 1 - Urvertrauen vs. Urmisstrauen", correct: false },
                    { text: "Phase 4 - Werksinn vs. Minderwertigkeitsgefühl", correct: false },
                    { text: "Phase 7 - Generativität vs. Stagnation", correct: false }
                ]
            }
        ]
    },

    "etikettierungstheorie": {
        title: "Etikettierungstheorie nach Dollard",
        category: "Sozialpsychologie",
        content: `
            <h4>Grundkonzept</h4>
            <p>Bei der Etikettierungstheorie wird einer Person ein Etikett zugetragen - immer von anderen, nie von sich selbst. Die Person wird stigmatisiert.</p>
            
            <h4>3 mögliche Reaktionen auf ein Etikett:</h4>
            <ul>
                <li><strong>Abwehr:</strong> Versuchen, das Etikett abzuwehren (sehr schwierig)</li>
                <li><strong>Übernahme:</strong> Das Fremdbild übernehmen, die zugeschriebene Rolle werden</li>
                <li><strong>Rückzug:</strong> Sich zurückziehen und mit seinesgleichen treffen</li>
            </ul>
            
            <h4>Devianzformen:</h4>
            <ul>
                <li><strong>Primäre Devianz:</strong> Anfängliche abweichende Verhaltensweise</li>
                <li><strong>Sekundäre Devianz:</strong> Verfestigung durch Übernahme des Etiketts (Selbststigmatisierung)</li>
            </ul>
        `,
        questions: [
            {
                question: "Wer trägt einer Person ein Etikett zu?",
                answers: [
                    { text: "Andere Personen, nie die Person selbst", correct: true },
                    { text: "Immer die Person selbst", correct: false },
                    { text: "Nur Fachleute und Ärzte", correct: false },
                    { text: "Keine oder alle gleichzeitig", correct: false }
                ]
            },
            {
                question: "Was passiert bei Übernahme des Etiketts?",
                answers: [
                    { text: "Selbststigmatisierung, das deviante Verhalten verfestigt sich", correct: true },
                    { text: "Die Person wird von der Gesellschaft akzeptiert", correct: false },
                    { text: "Das Etikett wird automatisch gelöscht", correct: false },
                    { text: "Primäre Devianz verschwindet", correct: false }
                ]
            }
        ]
    },

    "teufelskreistheorie": {
        title: "Teufelskreistheorie nach Quenzel",
        category: "Sozialpsychologie",
        content: `
            <h4>Ablauf des Teufelskreises:</h4>
            <ol>
                <li>Person erlebt ein schwerwiegendes Problem</li>
                <li>Deviantes Verhalten als Lösungsversuch</li>
                <li>Person wird von Gesellschaft abgelehnt und bestraft</li>
                <li>Person zeigt weiteres abweichendes Verhalten</li>
                <li>Gesellschaft zeigt noch größeres abstoßendes Verhalten</li>
                <li>Person sucht nach weiteren abweichenden Verhaltensweisen</li>
                <li>Eskalation folgt mit weiteren abweichenden Verhaltensweisen</li>
            </ol>
            
            <h4>Kernidee</h4>
            <p>Ein initialer Auslöser führt zu einem sich selbstverstärkenden negativen Kreislauf zwischen individueller Abweichung und sozialer Ablehnung.</p>
        `,
        questions: [
            {
                question: "Wie beginnt der Teufelskreis nach Quenzel?",
                answers: [
                    { text: "Mit einem schwerwiegenden Problem und devantem Verhalten als Lösungsversuch", correct: true },
                    { text: "Mit sozialer Ablehnung", correct: false },
                    { text: "Mit Eskalation", correct: false },
                    { text: "Mit Gesellschaftlicher Akzeptanz", correct: false }
                ]
            }
        ]
    },

    "frustrations-aggressions-kette": {
        title: "Frustrations-Aggressionskette nach Dollard",
        category: "Verhaltenspsychologie",
        content: `
            <h4>Der Ablauf:</h4>
            <ol>
                <li>Ereignis wird negativ bewertet</li>
                <li>Negative Bewertung führt zu Ärger</li>
                <li>Umgang mit Ärger hängt ab von:
                    <ul>
                        <li>Aggressivem Verhaltensrepertoire</li>
                        <li>Fehlender Hemmung</li>
                        <li>Modellen und Signalen</li>
                    </ul>
                </li>
                <li>Verwendung dieser Umgangsmöglichkeiten führt zu Aggression</li>
            </ol>
            
            <h4>Wichtiger Hinweis</h4>
            <p>Frustration führt nicht zwangsläufig zu Aggression! Es ist abhängig von:
                <ul>
                    <li>Individueller Frustrationstoleranz</li>
                    <li>Erlernten Verhaltensmustern</li>
                </ul>
            </p>
        `,
        questions: [
            {
                question: "Was ist der erste Schritt in der Frustrations-Aggressions-Kette?",
                answers: [
                    { text: "Negative Bewertung eines Ereignisses", correct: true },
                    { text: "Ärger", correct: false },
                    { text: "Aggression", correct: false },
                    { text: "Hemmung", correct: false }
                ]
            },
            {
                question: "Führt Frustration immer zu Aggression?",
                answers: [
                    { text: "Nein, abhängig von Frustrationstoleranz und erlernten Verhaltensmustern", correct: true },
                    { text: "Ja, immer", correct: false },
                    { text: "Nur bei Männern", correct: false },
                    { text: "Nur bei starker Frustration", correct: false }
                ]
            }
        ]
    },

    "dimensionsmodell-tausch": {
        title: "Dimensionsmodell nach Tausch und Tausch",
        category: "Erziehungswissenschaft",
        content: `
            <h4>Die beiden Dimensionen:</h4>
            <ul>
                <li><strong>Lenkung:</strong> Wie stark die Erziehende Person in das Handeln der zu erziehenden Person eingreift
                    <ul>
                        <li>Stark lenken (direktiv)</li>
                        <li>Schwach lenken (permissiv)</li>
                    </ul>
                </li>
                <li><strong>Emotionalität:</strong> Wieviel Wärme und Fürsorge dem Kind zuteil wird
                    <ul>
                        <li>Warm (emotional positiv)</li>
                        <li>Kalt (emotional negativ)</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Kombination der Dimensionen</h4>
            <p>Die verschiedenen Erziehungsformen unterscheiden sich je nach Ausprägung dieser beiden Dimensionen.</p>
        `,
        questions: [
            {
                question: "Welche zwei Dimensionen unterscheidet das Tausch-Modell?",
                answers: [
                    { text: "Lenkung und Emotionalität", correct: true },
                    { text: "Strafe und Belohnung", correct: false },
                    { text: "Kompetenz und Vertrauen", correct: false },
                    { text: "Struktur und Freiheit", correct: false }
                ]
            }
        ]
    },

    "erziehungsstile-lewin": {
        title: "Erziehungsstile nach Lewin",
        category: "Erziehungswissenschaft",
        content: `
            <h4>Die 3 Erziehungsstile:</h4>
            
            <h5>1. Autoritärer Erziehungsstil</h5>
            <ul>
                <li>Klare Anweisungen</li>
                <li>Keine Mitbestimmung</li>
                <li>Strikte Kontrolle</li>
                <li>Lob ohne nachvollziehbare Begründung</li>
                <li>Kinder arbeiten in Anwesenheit produktiv, aber nicht qualitativ</li>
                <li>Wenig Eigeninitiative</li>
            </ul>
            
            <h5>2. Demokratischer Erziehungsstil</h5>
            <ul>
                <li>Gemeinsame Entscheidungsfindung</li>
                <li>Orientierung mit Raum für Mitgestaltung</li>
                <li>Sachliches Lob und Kritik mit Begründung</li>
                <li>Kinder arbeiten motiviert und kreativ</li>
                <li>Auch ohne Aufsicht aktiv</li>
                <li>Positives Gruppenklima</li>
            </ul>
            
            <h5>3. Laissez-faire-Erziehungsstil</h5>
            <ul>
                <li>Geringer Eingriff des Erziehers</li>
                <li>Wenig Struktur</li>
                <li>Kinder sind sich selbst überlassen</li>
                <li>Geringe Produktivität</li>
                <li>Orientierungslosigkeit</li>
                <li>Frustration</li>
            </ul>
            
            <h4>Fazit</h4>
            <p>Der demokratische Stil wird als entwicklungsförderlichsten angesehen, da er Selbstständigkeit und Sicherheit ermöglicht. In der Praxis treten meist Mischformen auf.</p>
        `,
        questions: [
            {
                question: "Wie viele Erziehungsstile beschreibt Lewin?",
                answers: [
                    { text: "3", correct: true },
                    { text: "2", correct: false },
                    { text: "5", correct: false },
                    { text: "7", correct: false }
                ]
            },
            {
                question: "Welcher Erziehungsstil gilt als entwicklungsförderlichst?",
                answers: [
                    { text: "Demokratischer Erziehungsstil", correct: true },
                    { text: "Autoritärer Erziehungsstil", correct: false },
                    { text: "Laissez-faire-Stil", correct: false },
                    { text: "Alle sind gleich förderlich", correct: false }
                ]
            },
            {
                question: "Was kennzeichnet den Laissez-faire-Stil?",
                answers: [
                    { text: "Geringer Eingriff, wenig Struktur, Orientierungslosigkeit", correct: true },
                    { text: "Strikte Kontrolle und klare Anweisungen", correct: false },
                    { text: "Gemeinsame Entscheidungsfindung", correct: false },
                    { text: "Viel Belohnung und Bestrafung", correct: false }
                ]
            }
        ]
    },

    "tschoepse-scheffler": {
        title: "Entwicklungsfördernde/-hemmende Erziehung nach Tschöpe-Scheffler",
        category: "Erziehungswissenschaft",
        content: `
            <h4>Die 5 Säulen der fördernden Erziehung:</h4>
            
            <h5>1. Emotionale Wärme</h5>
            <p>Zuwendung, Aufmerksamkeit, Trost und echte Anteilnahme. Das Kind erlebt Annahme und kann sichere Bindung aufbauen.</p>
            
            <h5>2. Achtung und Respekt</h5>
            <p>Das Kind wird als eigenständige Person wahrgenommen, darf anders sein, wird ernst genommen und in seiner Individualität akzeptiert.</p>
            
            <h5>3. Kooperation</h5>
            <p>Zusammenarbeit, Gespräche und gegenseitiges Verstehen. Erwachsene behalten Verantwortung, beziehen das Kind aber in Entscheidungen ein.</p>
            
            <h5>4. Struktur und Verbindlichkeit</h5>
            <p>Klare Regeln, nachvollziehbare Grenzen und verlässliche Abläufe geben dem Kind Sicherheit und Orientierung.</p>
            
            <h5>5. Allseitige Förderung</h5>
            <p>Anregung in verschiedenen Bereichen (sprachlich, geistig, motorisch, sinnlich, sozial).</p>
            
            <h4>Die 5 Säulen der hemmenden Erziehung:</h4>
            
            <h5>1. Emotionale Kälte oder Überhitzung</h5>
            <p>Fehlende Zuwendung oder Übernahme und Einengung der Freiheit.</p>
            
            <h5>2. Missachtung</h5>
            <p>Abwertung oder Lächerlichmachen von Kind und Gefühlen.</p>
            
            <h5>3. Dirigismus</h5>
            <p>Erwachsene bestimmt alles allein, Kind hat kaum Mitspracherecht.</p>
            
            <h5>4. Chaos und Beliebigkeit</h5>
            <p>Unklar, inkonsistent oder widersprüchliche Regeln.</p>
            
            <h5>5. Einseitige Überförderung oder mangelnde Förderung</h5>
            <p>Zu viel Leistungsdruck oder kaum Anregung.</p>
        `,
        questions: [
            {
                question: "Wie viele Säulen der fördernden Erziehung gibt es?",
                answers: [
                    { text: "5", correct: true },
                    { text: "3", correct: false },
                    { text: "7", correct: false },
                    { text: "4", correct: false }
                ]
            },
            {
                question: "Welche ist NICHT eine fördernde Säule?",
                answers: [
                    { text: "Emotionale Kälte", correct: true },
                    { text: "Emotionale Wärme", correct: false },
                    { text: "Struktur und Verbindlichkeit", correct: false },
                    { text: "Kooperation", correct: false }
                ]
            }
        ]
    },

    "gewalt-tillmann": {
        title: "Arten von Gewalt nach Tillmann",
        category: "Erziehungswissenschaft",
        content: `
            <h4>Die 4 Formen der Gewalt:</h4>
            
            <h5>1. Körperliche Attacke</h5>
            <p>Konflikt zwischen zwei oder mehreren Personen, bei dem mindestens eine Person physische Mittel einsetzt. Folge: unmittelbare, sichtbare körperliche Verletzung. Beispiele: Prügeleien, körperliche Übergriffe.</p>
            
            <h5>2. Verbale Attacke</h5>
            <p>Beleidigungen, Beschimpfungen, Bedrohungen, verbale sexuelle Belästigung. Keine körperliche Verletzung, aber schwerwiegende psychische Schäden möglich. Dazu gehört auch Mobbing.</p>
            
            <h5>3. Institutionaler Zwang</h5>
            <p>Ergibt sich aus Strukturen und Regeln einer Institution, nicht von einer einzelnen Person. In der Schule: Leistungsdruck, Stigmatisierung, Selektionsprinzip. Unsichtbar, belastet aber ganze Gruppen psychisch.</p>
            
            <h5>4. Strukturelle Gewalt</h5>
            <p>In gesellschaftlichen Verhältnissen, Machtstrukturen und sozialen Ungleichheiten eingebettet. Manifestiert sich in Armut, Diskriminierung, Ausgrenzung, die bestimmten Gruppen systematisch Lebenschancen verwehren.</p>
        `,
        questions: [
            {
                question: "Wie viele Formen von Gewalt unterscheidet Tillmann?",
                answers: [
                    { text: "4", correct: true },
                    { text: "2", correct: false },
                    { text: "3", correct: false },
                    { text: "5", correct: false }
                ]
            },
            {
                question: "Was ist institutionaler Zwang?",
                answers: [
                    { text: "Gewalt, die sich aus Institutionsstrukturen ergibt, nicht von einer Person", correct: true },
                    { text: "Körperliche Aggression", correct: false },
                    { text: "Verbale Beleidigung", correct: false },
                    { text: "Gesellschaftliche Diskriminierung", correct: false }
                ]
            }
        ]
    },

    "klassische-konditionierung": {
        title: "Klassische Konditionierung nach Pawlow",
        category: "Lerntheorie",
        content: `
            <h4>Grundbegriffe:</h4>
            <ul>
                <li><strong>Unkonditionierter Stimulus (US):</strong> Löst reflexartig eine angeborene Reaktion aus</li>
                <li><strong>Unkonditionierte Reaktion (UR):</strong> Angeborene, nicht erlernte Reaktion</li>
                <li><strong>Neutraler Stimulus (NS):</strong> Ursprünglich wirkungslos</li>
                <li><strong>Konditionierter Stimulus (CS):</strong> Der neutrale Reiz wird wirksam</li>
                <li><strong>Konditionierte Reaktion (CR):</strong> Gelernte Reaktion auf den CS</li>
            </ul>
            
            <h4>Der Konditionierungsprozess:</h4>
            <p>Der neutrale Stimulus wird wiederholt zeitgleich oder kurz vor dem US präsentiert. Nach mehrfacher Paarung wird der neutrale Stimulus selbst wirksam und löst die gelernte Reaktion aus. Dies ist <strong>Reizsubstitution</strong>.</p>
            
            <h4>Weitere Phänomene:</h4>
            <ul>
                <li><strong>Extinktion:</strong> CS wird ohne US präsentiert → CR schwächt ab und verschwindet</li>
                <li><strong>Generalisierung:</strong> Ähnliche Reize lösen CR aus</li>
                <li><strong>Diskriminierung:</strong> Individuum lernt, nur auf spezifischen CS zu reagieren</li>
            </ul>
        `,
        questions: [
            {
                question: "Was ist ein unkonditionierter Stimulus (US)?",
                answers: [
                    { text: "Ein Reiz, der reflexartig eine angeborene Reaktion auslöst", correct: true },
                    { text: "Ein erlernter Reiz", correct: false },
                    { text: "Ein neutraler Reiz", correct: false },
                    { text: "Eine gelernte Reaktion", correct: false }
                ]
            },
            {
                question: "Was ist Reizsubstitution?",
                answers: [
                    { text: "Der neue Reiz ersetzt funktional den ursprünglichen", correct: true },
                    { text: "Das Löschen einer Reaktion", correct: false },
                    { text: "Die Verallgemeinerung von Reizen", correct: false },
                    { text: "Die Unterscheidung zwischen Reizen", correct: false }
                ]
            },
            {
                question: "Was ist Extinktion?",
                answers: [
                    { text: "CS wird ohne US präsentiert, CR schwächt ab und verschwindet", correct: true },
                    { text: "Die Verallgemeinerung auf ähnliche Reize", correct: false },
                    { text: "Die Bildung einer neuen Reaktion", correct: false },
                    { text: "Das Lernen von Unterscheidungen", correct: false }
                ]
            }
        ]
    },

    "operante-konditionierung": {
        title: "Operante Konditionierung nach Skinner",
        category: "Lerntheorie",
        content: `
            <h4>Grundprinzip</h4>
            <p>Verhalten wird primär durch seine Konsequenzen gesteuert. Das Individuum agiert aktiv auf seine Umwelt ein (= operiert an ihr).</p>
            
            <h4>Kontingenz</h4>
            <p>Eine Konsequenz muss <strong>kontingent</strong> sein: zeitlich unmittelbar und logisch eindeutig auf das Verhalten folgen, damit sie verhaltenssteuernd wirkt.</p>
            
            <h4>Die 4 Grundprinzipien der Verhaltenssteuerung:</h4>
            
            <h5>1. Positive Verstärkung</h5>
            <p>Auf ein Verhalten folgt ein angenehmer Reiz → Auftretenswahrscheinlichkeit steigt</p>
            
            <h5>2. Negative Verstärkung</h5>
            <p>Unangenehmer Reiz wird entfernt, wenn gewünschtes Verhalten gezeigt wird → Verhalten wird verstärkt</p>
            
            <h5>3. Positive Bestrafung</h5>
            <p>Auf ein Verhalten folgt ein unangenehmer Reiz → Verhalten wird gehemmt</p>
            
            <h5>4. Negative Bestrafung</h5>
            <p>Angenehmer Reiz wird entzogen → Reduktion des Verhaltens</p>
            
            <h4>Weitere wichtige Konzepte:</h4>
            <ul>
                <li><strong>Extinktion:</strong> Verhalten bleibt ganz ohne Konsequenz</li>
                <li><strong>Intermittierende Verstärkung:</strong> Unregelmäßige Verstärkung führt zu stabilerem, schwerer zu löschendem Verhalten</li>
            </ul>
        `,
        questions: [
            {
                question: "Was ist Kontingenz bei Skinner?",
                answers: [
                    { text: "Zeitlich unmittelbar und logisch eindeutige Folge der Konsequenz auf Verhalten", correct: true },
                    { text: "Zufällige Konsequenzen", correct: false },
                    { text: "Verspätete Konsequenzen", correct: false },
                    { text: "Wiederholung ohne Konsequenz", correct: false }
                ]
            },
            {
                question: "Was ist der Unterschied zwischen positiver und negativer Verstärkung?",
                answers: [
                    { text: "Positiv: angenehmer Reiz hinzufügen / Negativ: unangenehmer Reiz entfernen", correct: true },
                    { text: "Positiv: stärker wirksam / Negativ: schwächer wirksam", correct: false },
                    { text: "Positiv: Belohnung / Negativ: Strafe", correct: false },
                    { text: "Es gibt keinen Unterschied", correct: false }
                ]
            },
            {
                question: "Was ist intermittierende Verstärkung?",
                answers: [
                    { text: "Unregelmäßige Verstärkung, führt zu stabilem, schwer zu löschen Verhalten", correct: true },
                    { text: "Kontinuierliche Verstärkung", correct: false },
                    { text: "Sofortige Bestrafung", correct: false },
                    { text: "Gelegentliche Extinction", correct: false }
                ]
            }
        ]
    },

    "modelllernen-bandura": {
        title: "Lernen am Modell nach Bandura",
        category: "Lerntheorie",
        content: `
            <h4>Grundidee</h4>
            <p>Menschen lernen nicht nur durch eigene Erfahrungen, sondern auch durch Beobachtung anderer Personen (Modelle). Dies ist <strong>sozial-kognitives Lernen oder Modelllernen</strong>.</p>
            
            <h4>Was ist ein Modell?</h4>
            <p>Eine Person, die für die lernende Person eine bewunderte Fähigkeit besitzt, die die lernende Person auch erlernen möchte.</p>
            
            <h4>Die 3 Effekte des Modelllernens:</h4>
            
            <h5>1. Modellierender Effekt</h5>
            <p>Vollständig neues Verhalten wird erlernt, das dem Beobachter zuvor unbekannt war.</p>
            
            <h5>2. Hemmender/Enthemmender Effekt</h5>
            <p>Die Hemmschwelle gegenüber einem Verhalten sinkt (Enthemmung) oder steigt (Hemmung) durch Beobachtung eines Modells.</p>
            
            <h5>3. Auslösender Effekt</h5>
            <p>Ein bereits im Verhaltensrepertoire vorhandenes Verhalten wird durch Modellbeobachtung reaktiviert und ausgelöst.</p>
            
            <h4>Banduras berühmtes Experiment</h4>
            <p>Vorschulkinder beobachteten Erwachsene, die aggressiv waren (Versuchsgruppen) oder nicht aggressiv waren (Kontrollgruppe). Ergebnis: Kinder, die aggressive Modelle beobachteten, zeigten deutlich häufiger aggressives Verhalten.</p>
        `,
        questions: [
            {
                question: "Was ist sozial-kognitives Lernen?",
                answers: [
                    { text: "Lernen durch Beobachtung von Modellen", correct: true },
                    { text: "Lernen nur durch eigene Erfahrungen", correct: false },
                    { text: "Lernen durch Konditionierung", correct: false },
                    { text: "Lernen durch Bestrafung", correct: false }
                ]
            },
            {
                question: "Was ist der modellierende Effekt?",
                answers: [
                    { text: "Vollständig neues, unbekanntes Verhalten wird erlernt", correct: true },
                    { text: "Die Hemmschwelle verändert sich", correct: false },
                    { text: "Bestehendes Verhalten wird ausgelöst", correct: false },
                    { text: "Verhalten wird vergessen", correct: false }
                ]
            }
        ]
    },

    "bindungstheorie": {
        title: "Bindungstheorie nach Bowlby und Ainsworth",
        category: "Entwicklungspsychologie",
        content: `
            <h4>Grundkonzept</h4>
            <p>Die Bindungstheorie beschreibt den Einfluss früher emotionaler Beziehungen auf die Persönlichkeitsentwicklung. Das Kind hat von Geburt an ein biologisch verankertes <strong>Bindungsbedürfnis</strong>.</p>
            
            <h4>Bindung als Verhaltenssystem</h4>
            <p>Bindung ist nicht erlernt, sondern angeboren. Sie wird durch Stress, Angst oder Gefahr aktiviert und führt dazu, dass das Kind Nähe zur Bezugsperson sucht.</p>
            
            <h4>Innere Arbeitsmodelle</h4>
            <p>Auf Basis seiner Bindungserfahrungen entwickelt das Kind internalisierte Vorstellungen davon, wie Bindungspersonen reagieren und wie es selbst wahrgenommen wird. Diese Modelle beeinflussen spätere Beziehungen.</p>
            
            <h4>Die 4 Phasen der Bindungsentwicklung:</h4>
            
            <h5>1. Vorphase (0–3 Monate)</h5>
            <p>Kind reagiert undifferenziert auf alle Menschen.</p>
            
            <h5>2. Entstehungsphase (3–6 Monate)</h5>
            <p>Kind unterscheidet vertraute von fremden Personen.</p>
            
            <h5>3. Bindungsphase (ab ca. 6 Monate bis 3 Jahre)</h5>
            <p>Klare Bindung an Hauptbezugsperson, Trennungsangst und Fremdeln.</p>
            
            <h5>4. Phase der zielkorrigierten Partnerschaft (ab ca. 3 Jahren)</h5>
            <p>Kind toleriert Trennungen und berücksichtigt Perspektive der Bezugsperson.</p>
            
            <h4>Die 4 Bindungstypen:</h4>
            
            <h5>Typ B - Sichere Bindung</h5>
            <p>Sucht aktiv Nähe, lässt sich beruhigen. Grundlage für gesunde Entwicklung.</p>
            
            <h5>Typ A - Unsicher-vermeidende Bindung</h5>
            <p>Unterdrückt Bindungsverhalten, meidet Nähe auch in Belastungssituationen.</p>
            
            <h5>Typ C - Unsicher-ambivalente Bindung</h5>
            <p>Widersprüchlich: sucht Nähe, zeigt aber Wut, lässt sich kaum beruhigen.</p>
            
            <h5>Typ D - Desorganisierte Bindung</h5>
            <p>Inkohärentes, desorientiertes Verhalten ohne eindeutiges Muster.</p>
        `,
        questions: [
            {
                question: "Ist Bindung erlernt oder angeboren?",
                answers: [
                    { text: "Angeboren - biologisch verankertes Verhaltenssystem", correct: true },
                    { text: "Erlernt durch Konditionierung", correct: false },
                    { text: "Teils erlernt, teils angeboren", correct: false },
                    { text: "Weder noch", correct: false }
                ]
            },
            {
                question: "Wann beginnt die eigentliche Bindungsphase?",
                answers: [
                    { text: "Ab ca. 6 Monaten", correct: true },
                    { text: "Von Geburt an", correct: false },
                    { text: "Ab 12 Monaten", correct: false },
                    { text: "Ab 3 Jahren", correct: false }
                ]
            },
            {
                question: "Welcher Bindungstyp gilt als Grundlage für gesunde Entwicklung?",
                answers: [
                    { text: "Typ B - Sichere Bindung", correct: true },
                    { text: "Typ A - Unsicher-vermeidend", correct: false },
                    { text: "Typ C - Unsicher-ambivalent", correct: false },
                    { text: "Typ D - Desorganisiert", correct: false }
                ]
            }
        ]
    }
};

// ============================================
// APP STATE
// ============================================

let appState = {
    currentView: 'home',
    currentQuiz: null,
    quizQuestions: [],
    quizAnswers: {},
    quizProgress: 0,
    stats: JSON.parse(localStorage.getItem('quizStats')) || {}
};

// ============================================
// INITIALISIERUNG
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    populateTheorySelects();
    renderTheoryOverview();
    setupEventListeners();
    updateStats();
}

// ============================================
// NAVIGATION
// ============================================

function switchView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(viewName).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
    
    appState.currentView = viewName;
}

function setupEventListeners() {
    document.querySelectorAll('[data-view]').forEach(btn => {
        btn.addEventListener('click', function() {
            switchView(this.getAttribute('data-view'));
        });
    });
}

// ============================================
// HOME VIEW
// ============================================

function renderTheoryOverview() {
    const container = document.getElementById('theory-overview');
    container.innerHTML = '';
    
    Object.entries(theoriesData).forEach(([key, theory]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${theory.title}</strong> <span class="category-badge">${theory.category}</span>`;
        container.appendChild(li);
    });
}

// ============================================
// LERN VIEW
// ============================================

function populateTheorySelects() {
    const selectors = ['theory-select', 'quiz-theory-select'];
    
    selectors.forEach(selectId => {
        const select = document.getElementById(selectId);
        Object.entries(theoriesData).forEach(([key, theory]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = theory.title;
            select.appendChild(option);
        });
    });
}

function loadTheory() {
    const select = document.getElementById('theory-select');
    const theoryKey = select.value;
    
    if (!theoryKey) {
        document.getElementById('theory-detail').classList.add('hidden');
        return;
    }
    
    const theory = theoriesData[theoryKey];
    document.getElementById('theory-title').textContent = theory.title;
    document.getElementById('theory-content').innerHTML = theory.content;
    document.getElementById('theory-detail').classList.remove('hidden');
}

function downloadTheory() {
    const select = document.getElementById('theory-select');
    const theoryKey = select.value;
    const theory = theoriesData[theoryKey];
    
    const doc = `
${theory.title}
${'='.repeat(theory.title.length)}

${theory.content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ')}
    `;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(doc));
    element.setAttribute('download', `${theoryKey}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// ============================================
// QUIZ VIEW
// ============================================

function updateQuizPreview() {
    const select = document.getElementById('quiz-theory-select');
    const theoryKey = select.value;
    
    if (!theoryKey) {
        document.getElementById('quiz-preview').classList.add('hidden');
        document.getElementById('start-quiz-btn').disabled = true;
        return;
    }
    
    const theory = theoriesData[theoryKey];
    const questionCount = theory.questions.length;
    document.getElementById('question-count').textContent = questionCount;
    document.getElementById('quiz-preview').classList.remove('hidden');
    document.getElementById('start-quiz-btn').disabled = false;
}

function startQuiz() {
    const select = document.getElementById('quiz-theory-select');
    const theoryKey = select.value;
    
    if (!theoryKey) return;
    
    appState.currentQuiz = theoryKey;
    appState.quizQuestions = theoriesData[theoryKey].questions;
    appState.quizAnswers = {};
    appState.quizProgress = 0;
    
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    
    document.getElementById('total-questions').textContent = appState.quizQuestions.length;
    
    showQuestion(0);
}

function showQuestion(index) {
    if (index < 0 || index >= appState.quizQuestions.length) return;
    
    appState.quizProgress = index;
    const question = appState.quizQuestions[index];
    
    document.getElementById('current-question').textContent = index + 1;
    document.getElementById('question-text').textContent = question.question;
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, answerIndex) => {
        const div = document.createElement('div');
        div.className = 'answer-option';
        
        const isSelected = appState.quizAnswers[index] === answerIndex;
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question-${index}`;
        input.value = answerIndex;
        input.checked = isSelected;
        input.onchange = () => {
            appState.quizAnswers[index] = answerIndex;
        };
        
        const label = document.createElement('label');
        label.textContent = answer.text;
        
        div.appendChild(input);
        div.appendChild(label);
        answersContainer.appendChild(div);
    });
    
    updateQuizControls(index);
    updateProgressBar(index);
}

function updateQuizControls(index) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = index === 0;
    
    if (index === appState.quizQuestions.length - 1) {
        nextBtn.textContent = '✓ Quiz beenden';
        nextBtn.onclick = finishQuiz;
    } else {
        nextBtn.textContent = 'Weiter →';
        nextBtn.onclick = () => nextQuestion();
    }
}

function updateProgressBar(index) {
    const progress = ((index + 1) / appState.quizQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function nextQuestion() {
    const nextIndex = appState.quizProgress + 1;
    if (nextIndex < appState.quizQuestions.length) {
        showQuestion(nextIndex);
    }
}

function previousQuestion() {
    const prevIndex = appState.quizProgress - 1;
    if (prevIndex >= 0) {
        showQuestion(prevIndex);
    }
}

function finishQuiz() {
    calculateResults();
}

function calculateResults() {
    let correctCount = 0;
    
    appState.quizQuestions.forEach((question, index) => {
        const userAnswerIndex = appState.quizAnswers[index];
        if (userAnswerIndex !== undefined && question.answers[userAnswerIndex].correct) {
            correctCount++;
        }
    });
    
    const percentage = Math.round((correctCount / appState.quizQuestions.length) * 100);
    
    // Statistik speichern
    const theoryTitle = theoriesData[appState.currentQuiz].title;
    if (!appState.stats[appState.currentQuiz]) {
        appState.stats[appState.currentQuiz] = [];
    }
    appState.stats[appState.currentQuiz].push({
        score: percentage,
        date: new Date().toLocaleString('de-DE')
    });
    localStorage.setItem('quizStats', JSON.stringify(appState.stats));
    
    showResults(correctCount, percentage);
}

function showResults(correctCount, percentage) {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');
    
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('total-answers').textContent = appState.quizQuestions.length;
    document.getElementById('final-score').textContent = percentage;
    
    renderResultsReview();
    updateStats();
}

function renderResultsReview() {
    const container = document.getElementById('results-review');
    container.innerHTML = '<h4>Deine Antworten:</h4>';
    
    appState.quizQuestions.forEach((question, index) => {
        const userAnswerIndex = appState.quizAnswers[index];
        const userAnswer = question.answers[userAnswerIndex];
        const correctAnswer = question.answers.find(a => a.correct);
        const isCorrect = userAnswer && userAnswer.correct;
        
        const div = document.createElement('div');
        div.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        div.innerHTML = `
            <h5>${index + 1}. ${question.question}</h5>
            <p><strong>Deine Antwort:</strong> ${userAnswer ? userAnswer.text : 'Nicht beantwortet'} 
            <span class="result-badge">${isCorrect ? '✓ Richtig' : '✗ Falsch'}</span></p>
            ${!isCorrect ? `<p><strong>Korrekte Antwort:</strong> ${correctAnswer.text}</p>` : ''}
        `;
        
        container.appendChild(div);
    });
}

function resetQuiz() {
    document.getElementById('quiz-start').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-theory-select').value = '';
    updateQuizPreview();
}

// ============================================
// STATISTIK VIEW
// ============================================

function updateStats() {
    const stats = appState.stats;
    
    let totalPoints = 0;
    let allScores = [];
    let quizCount = 0;
    
    Object.entries(stats).forEach(([key, results]) => {
        if (Array.isArray(results)) {
            results.forEach(result => {
                totalPoints += result.score;
                allScores.push(result.score);
                quizCount++;
            });
        }
    });
    
    const average = quizCount > 0 ? Math.round(allScores.reduce((a, b) => a + b, 0) / quizCount) : 0;
    const bestScore = quizCount > 0 ? Math.max(...allScores) : 0;
    
    document.getElementById('total-points').textContent = totalPoints;
    document.getElementById('quizzes-completed').textContent = quizCount;
    document.getElementById('average-score').textContent = average + '%';
    document.getElementById('best-score').textContent = bestScore + '%';
    
    renderTheoryStats();
}

function renderTheoryStats() {
    const container = document.getElementById('theory-stats');
    container.innerHTML = '';
    
    Object.entries(appState.stats).forEach(([key, results]) => {
        if (!Array.isArray(results) || results.length === 0) return;
        
        const theory = theoriesData[key];
        const scores = results.map(r => r.score);
        const average = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        const best = Math.max(...scores);
        
        const div = document.createElement('div');
        div.className = 'theory-stat-item';
        div.innerHTML = `
            <h5>${theory.title}</h5>
            <p>Versuche: ${results.length} | Ø: ${average}% | Best: ${best}%</p>
            <div class="mini-bar">
                <div class="mini-fill" style="width: ${average}%"></div>
            </div>
        `;
        
        container.appendChild(div);
    });
}

function resetStats() {
    if (confirm('Alle Statistiken wirklich löschen?')) {
        appState.stats = {};
        localStorage.removeItem('quizStats');
        updateStats();
    }
}