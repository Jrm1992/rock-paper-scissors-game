import useComputerPick from './useComputerPick';

describe('ComputerPick hook', () => {
  it('should be defined', () => {
    expect(useComputerPick).toBeDefined();
  });

  it('should return a random number beetween 1 and 4', () => {
    expect(useComputerPick()).toBeGreaterThanOrEqual(1);
    expect(useComputerPick()).toBeLessThanOrEqual(4);
  });
});
