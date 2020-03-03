import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBuffer to string convertation', () => {
  const received = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  received.load(data);
  expect(received.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
