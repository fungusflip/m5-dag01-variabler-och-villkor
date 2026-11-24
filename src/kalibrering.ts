// 1. Förnamn
const namn = "Filip";
console.log(namn);

// 2. Summa av två tal
const a = 4;
const b = 7;
console.log(a + b);

// 3. if / else
const tal = 12;
if (tal > 10) {
  console.log("Stort");
} else {
  console.log("Litet");
}

// 4. Loop 1 till 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5. Funktion: tal gånger två
function gangerTva(n: number) {
  return n * 2;
}
console.log(gangerTva(5));
