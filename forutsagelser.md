# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck | Min gissning | Det som hände | Vad sa TypeScript? | Hade jag rätt? |
|---|---|---|---|---|
| `"5" + 3` | 53, plus med text slår ihop | 53 | Inget fel (blir text) | Ja |
| `"5" - 3` | 2, minus kan bara räkna | 2 | Fel TS2362: vänstra sidan måste vara number | Ja |
| `true + 1` | 2, true räknas som 1 | 2 | Fel TS2365: + går inte på boolean och number | Ja |
| `0.1 + 0.2` | 0.30000000000000004, decimaltal lagras inte exakt | 0.30000000000000004 | Inget fel | Ja |
| `"" === 0` | false, olika typer | false | Fel TS2367: string och number överlappar inte | Ja |
| `null == undefined` | true, == tycker de är lika | true | Inget fel | Ja |

## Min regel för det jag missade

Jag hade rätt på alla sex. Regeln jag tar med mig: `+` med text slår ihop, `-` kan bara räkna, och decimaltal lagras inte exakt.

## Tänk efter

Tre av raderna ger ett typfel i TypeScript, men JavaScript kör dem ändå. Vilka tre, och vad säger det om vad TypeScript kan och inte kan göra?

Svar: `"5" - 3`, `true + 1` och `"" === 0`. TypeScript varnar i editorn, men Vite tar bara bort typerna och kör vanlig JavaScript, så raderna körs ändå. TypeScript kan alltså varna men inte stoppa koden från att köras.
