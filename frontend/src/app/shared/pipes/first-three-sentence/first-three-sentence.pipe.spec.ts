import { FirstThreeSentencePipe } from './first-three-sentence.pipe';

describe('FirstThreeSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstThreeSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
