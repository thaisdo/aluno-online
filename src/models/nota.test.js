const Nota = require("../models/nota");

describe("Calculo da média final", () => {
  test("a media é zero se não tem notas", () => {
    let nota = new Nota(null, 0, 0, 0);
    expect(nota.mediaFinal()).toEqual(0);
    nota = new Nota(null, null, null, null);
    expect(nota.mediaFinal()).toEqual(0);
  });

  test("a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2", () => {
    let nota = new Nota(null, 3, 5, null);
    expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
    nota = new Nota(null, 7, 4, null);
    expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
  });

  test("a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1", () => {
    let nota = new Nota(null, 0, 5, 3);
    expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
    nota = new Nota(null, 2, 5, 3);
    expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
    nota = new Nota(null, 2, 5, 6);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
  });

  test("a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2", () => {
    let nota = new Nota(null, 6, 0, 5);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    nota = new Nota(null, 6, 4, 5);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    nota = new Nota(null, 6, 4, 7);
    expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
  });

  test('nota 9.5 deve retornar "SS - Superior"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(9.5)).toBe("SS - Superior");
  });

  test('nota 7.8 deve retornar "MS - Médio Superior"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(7.8)).toBe("MS - Médio Superior");
  });

  test('nota 6.3 deve retornar "MM - Médio"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(6.3)).toBe("MM - Médio");
  });

  test('nota 4.2 deve retornar "MI - Médio Inferior"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(4.2)).toBe("MI - Médio Inferior");
  });

  test('nota 2.0 deve retornar "II - Inferior"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(2.0)).toBe("II - Inferior");
  });

  test('nota 0 deve retornar "SR - Sem rendimento"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(0)).toBe("SR - Sem rendimento");
  });

  test('nota fora das faixas deve retornar "Nota inválida"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA(11)).toBe("Nota inválida");
    expect(nota.mediaCA(-1)).toBe("Nota inválida");
  });

  test('nota inválida deve retornar "Nota inválida"', () => {
    const nota = new Nota(null, null, null, null);
    expect(nota.mediaCA("abc")).toBe("Nota inválida");
    expect(nota.mediaCA(null)).toBe("Nota inválida");
    expect(nota.mediaCA(undefined)).toBe("Nota inválida");
  });
});
