// Dag 1: Variabler, typer och villkor. Följ README.md steg för steg.
// Resultatet syns i Console (F12). Spara, så laddas sidan om av sig själv.
// Röda understrykningar i VS Code är TypeScript som varnar. Håll musen över dem och läs.
import "./kalibrering";

// STEG 1 ------------------------------------------------------------
console.log("Hej från Kafé Kardemumma");

// STEG 2 ------------------------------------------------------------
const kafeNamn: string = "Kafé Kardemumma";
const prisBulle: number = 35;
const prisKaffe: number = 32;
let antalBullar: number = 2;
let antalKaffe: number = 1;
console.log(kafeNamn);

// STEG 3 ------------------------------------------------------------
const text: string = "hej";
let tal: number = 42;
const sant: boolean = true;
let inget: undefined;
const tomt: null = null;
console.log(typeof text, typeof tal, typeof sant, typeof inget, typeof tomt);
// Min gissning på typeof null: FILIP FYLLER I (före du kör)

// Prova att ge number-variabeln en text. TypeScript klagar direkt:
// "Type 'string' is not assignable to type 'number'". Raden körs ändå, därför
// kommenterar jag ut den:
// tal = "text";

// STEG 4 ------------------------------------------------------------
// Typen behövs inte: TypeScript ser (inferens) att summa och momsDel är number.
const summa = antalBullar * prisBulle + antalKaffe * prisKaffe;
const momsDel = (summa * 0.12) / 1.12;
console.log(`Summa: ${summa} kr`);
console.log(`Varav moms (12 %): ${momsDel.toFixed(2)} kr`); // toFixed ger en string

// STEG 5 ------------------------------------------------------------
const ärStudent: boolean = true;
let attBetala: number = summa;
if (ärStudent === true) {
  attBetala = summa * 0.9;
}
console.log(`Att betala: ${attBetala.toFixed(2)} kr`);

// STEG 6 ------------------------------------------------------------
const veckodag: string = "lördag";
const klockslag: number = 15;
let öppet: boolean;
if (veckodag === "lördag" || veckodag === "söndag") {
  öppet = klockslag >= 9 && klockslag < 16;
} else {
  öppet = klockslag >= 7 && klockslag < 18;
}
console.log(`Öppet just nu: ${öppet ? "ja" : "nej"}`);
// Testfall (ändra veckodag/klockslag): lördag 8 = nej, lördag 15 = ja,
// måndag 6 = nej, måndag 17 = ja.

// STEG 7 ------------------------------------------------------------
// Gissa först i forutsagelser.md, kör sedan.
// Ingen varning: string + number är tillåtet i TypeScript (blir text)
const r1 = "5" + 3;
// @ts-expect-error
const r2 = "5" - 3;
// @ts-expect-error
const r3 = true + 1;
const r4 = 0.1 + 0.2;
// @ts-expect-error
const r5 = "" === 0;
// Ingen varning: null == undefined är tillåtet
const r6 = null == undefined;
console.log(r1, r2, r3, r4, r5, r6);

