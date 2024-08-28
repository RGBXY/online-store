const arr = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Filter
const hai = arr.filter((iyah) => iyah >= 3);

// Map
const hlo = arr.map((halo) => halo * 2);

// Reduce
const hla = arr.reduce((total, iyah) => total + iyah, 0);

// Method Chain
const hli = arr
  .filter((iyah) => iyah > 5)
  .map((iyoh) => iyoh * 3)
  .reduce((total, ha) => total + ha, 0);
console.log(hli);
