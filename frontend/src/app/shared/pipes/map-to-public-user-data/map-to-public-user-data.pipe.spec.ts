import { MapToPublicUserDataPipe } from './map-to-public-user-data.pipe';

describe('MapToPublicUserDataPipe', () => {
  it('create an instance', () => {
    const pipe = new MapToPublicUserDataPipe();
    expect(pipe).toBeTruthy();
  });
});
