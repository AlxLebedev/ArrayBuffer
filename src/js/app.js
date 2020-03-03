
import ArrayBufferConverter from './ArrayBufferConverter';

const buffer = new ArrayBufferConverter();
const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

buffer.load(data);

console.log(buffer.toString());
