function sum(a: number, b: number): number {
  return a + b;
}

describe('sum()', () => {
  it('should return 5 for 2 and 3', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
