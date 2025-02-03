const { sumar, restar, multiplicar, dividir, raiz } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Suma -5 + 12 y devuelve 7', () => {
    expect(sumar(-5,12)).toBe(7);
});

test('Resta -8 - (-3) y devuelve -5', () => {
    expect(restar(-8, -3)).toBe(-5);
});

test('Multiplica 7 * 8 y devuelve 56', () => {
    expect(multiplicar(7, 8)).toBe(56);
});

test('Divide  76 / 4 y devuelve 19', () => {
    expect(dividir(76, 4)).toBe(19);
});

test('Haz la raiz cuadrada de 121 y que devuelva 11', () => {
    expect(raiz(121)).toBe(11);
});