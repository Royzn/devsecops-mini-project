const { tambah, kurang } = require('./app');

test('tambah: 2 + 3 harus 5', () => {
  expect(tambah(2, 3)).toBe(5);
});

test('kurang: 5 - 3 harus 2', () => {
  expect(kurang(5, 3)).toBe(2);
});

test('tambah: 0 + 0 harus 0', () => {
  expect(tambah(0, 0)).toBe(0);
});

test('kurang: 10 - 20 harus -10', () => {
  expect(kurang(10, 20)).toBe(-10);
});
