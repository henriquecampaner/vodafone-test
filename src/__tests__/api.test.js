import api from '../services/api';

describe('Api', () => {
  test('Api fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const { data } = await api.get();
    expect(data[0].name).toEqual('Leanne Graham');
  });
});
