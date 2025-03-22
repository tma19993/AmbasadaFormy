import { DietStatusPipe } from './diet-status.pipe';

describe('DietStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new DietStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
