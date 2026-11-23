# Förutsägelser (steg 8)

Skriv din gissning FÖRST. Skriv sedan raden i STEG 7 i `src/main.ts`, kör den och fyll i vad som hände. Skriv också vad TypeScript sa (ofta understryker den raden).

| Uttryck | Min gissning | Det som hände | Vad sa TypeScript? | Hade jag rätt? |
|---|---|---|---|---|
| `"5" + 3` | | 53 | Inget fel (blir text) | |
| `"5" - 3` | | 2 | Fel TS2362: vänstra sidan måste vara number | |
| `true + 1` | | 2 | Fel TS2365: + går inte på boolean och number | |
| `0.1 + 0.2` | | 0.30000000000000004 | Inget fel | |
| `"" === 0` | | false | Fel TS2367: string och number överlappar inte | |
| `null == undefined` | | true | Inget fel | |

## Min regel för det jag missade

Skriv en mening med egna ord för varje uttryck du hade fel på.

## Tänk efter

Tre av raderna ger ett typfel i TypeScript, men JavaScript kör dem ändå. Vilka tre, och vad säger det om vad TypeScript kan och inte kan göra?
