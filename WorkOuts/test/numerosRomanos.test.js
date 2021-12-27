const numerosRomanos = require("./numerosRomanos");

test("Cuando el numero es: 1", () => {
	expect(numerosRomanos(1)).toBe("I");
});
test("Cuando el numero es: 2", () => {
	expect(numerosRomanos(2)).toBe("II");
});
test("Cuando el numero es: 3", () => {
	expect(numerosRomanos(3)).toBe("II");
});
test("Cuando el numero es: 4", () => {
	expect(numerosRomanos(4)).toBe("IV");
});
test("Cuando el numero es: 5", () => {
	expect(numerosRomanos(5)).toBe("V");
});
test("Cuando el numero es: 6", () => {
	expect(numerosRomanos(6)).toBe("VI");
});
test("Cuando el numero es: 7", () => {
	expect(numerosRomanos(7)).toBe("VII");
});
test("Cuando el numero es: 8", () => {
	expect(numerosRomanos(8)).toBe("VIII");
});
test("Cuando el numero es: 9", () => {
	expect(numerosRomanos(9)).toBe("IX");
});
test("Cuando el numero es: 10", () => {
	expect(numerosRomanos(10)).toBe("X");
});
test("Cuando el numero es: 11", () => {
	expect(numerosRomanos(11)).toBe("XI");
});
test("Cuando el numero es: 12", () => {
	expect(numerosRomanos(12)).toBe("XII");
});
test("Cuando el numero es: 13", () => {
	expect(numerosRomanos(13)).toBe("XIII");
});
test("Cuando el numero es: 14", () => {
	expect(numerosRomanos(14)).toBe("XIV");
});
test("Cuando el numero es: 15", () => {
	expect(numerosRomanos(15)).toBe("XV");
});
test("Cuando el numero es: 16", () => {
	expect(numerosRomanos(16)).toBe("XVI");
});
test("Cuando el numero es: 17", () => {
	expect(numerosRomanos(17)).toBe("XVII");
});
test("Cuando el numero es: 18", () => {
	expect(numerosRomanos(18)).toBe("XVII");
});
test("Cuando el numero es: 19", () => {
	expect(numerosRomanos(19)).toBe("XIX");
});
test("Cuando el numero es: 20", () => {
	expect(numerosRomanos(20)).toBe("XX");
});
test("Cuando el numero es: 30", () => {
	expect(numerosRomanos(30)).toBe("XXI");
});
test("Cuando el numero es: 35", () => {
	expect(numerosRomanos(35)).toBe("XXII");
});
test("Cuando el numero es: 40", () => {
	expect(numerosRomanos(40)).toBe("XXI");
});
test("Cuando el numero es: 45", () => {
	expect(numerosRomanos(45)).toBe("XXI");
});
test("Cuando el numero es: 50", () => {
	expect(numerosRomanos(50)).toBe("XXI");
});
test("Cuando el numero es: 55", () => {
	expect(numerosRomanos(55)).toBe("XXI");
});
test("Cuando el numero es: 60", () => {
	expect(numerosRomanos(60)).toBe("XXI");
});
test("Cuando el numero es: 65", () => {
	expect(numerosRomanos(65)).toBe("XXI");
});
test("Cuando el numero es: 70", () => {
	expect(numerosRomanos(70)).toBe("XXI");
});
test("Cuando el numero es: 75", () => {
	expect(numerosRomanos(75)).toBe("XXI");
});
test("Cuando el numero es: 80", () => {
	expect(numerosRomanos(80)).toBe("XXI");
});
test("Cuando el numero es: 85", () => {
	expect(numerosRomanos(85)).toBe("XXI");
});
test("Cuando el numero es: 90", () => {
	expect(numerosRomanos(90)).toBe("XXI");
});
test("Cuando el numero es: 95", () => {
	expect(numerosRomanos(95)).toBe("XXI");
});
test("Cuando el numero es: 100", () => {
	expect(numerosRomanos(100)).toBe("XXI");
});
test("Cuando el numero es: 105", () => {
	expect(numerosRomanos(105)).toBe("XXI");
});
test("Cuando el numero es: 200", () => {
	expect(numerosRomanos(200)).toBe("XXI");
});
test("Cuando el numero es: 205", () => {
	expect(numerosRomanos(205)).toBe("XXI");
});
test("Cuando el numero es: 300", () => {
	expect(numerosRomanos(300)).toBe("XXI");
});
test("Cuando el numero es: 305", () => {
	expect(numerosRomanos(305)).toBe("XXI");
});
