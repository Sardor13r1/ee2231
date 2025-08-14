// 1. Random son chiqarish (от 1 до 100)
let son = Math.floor(Math.random() * 100) + 1;
alert("Random son: " + son);

// 2. Randomdan chiqqan son 2 ga ko'paytirish
let kopaytma = son * 2;
alert("Ko'paytirilgan (x2): " + kopaytma);

// 3. Randomdan chiqqan son 2 ga bo'lish
let bolish = son / 2;
alert("2 ga bo'lingan natija: " + bolish);

// 4. Qoldiq hisoblash
let qoldiq = son % 2;
alert("Qoldiq: " + qoldiq);

// 5. Yakuniy natijalar bitta alertda
alert(
  "Random son: " + son +
  "\nKo'paytirilgan (x2): " + kopaytma +
  "\n2 ga bo'lingan natija: " + bolish +
  "\nQoldiq: " + qoldiq
);