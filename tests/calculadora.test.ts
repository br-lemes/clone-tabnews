import { somar } from '../models/calculadora';

test('Somar 2 + 2 deve retornar 4', () => {
    expect(somar(2, 2)).toBe(4);
});

test('Somar 5 + 100 deve retornar 105', () => {
    expect(somar(5, 100)).toBe(105);
});
