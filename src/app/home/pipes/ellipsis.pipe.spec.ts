import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });

  it(`transforms 'random' to 'random...'`, () => {
    const pipe = new EllipsisPipe();
    expect(pipe.transform('random')).toBe('random...');
  })
});
