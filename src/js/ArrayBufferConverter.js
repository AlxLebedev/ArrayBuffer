export default class ArrayBufferConverter {
  load(data) {
    const buffer = new ArrayBuffer(data.length * 2);
    this.uint16Array = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i += 1) {
      this.uint16Array[i] = data.charCodeAt(i);
    }
  }

  toString() {
    let string = '';
    for (let i = 0; i < this.uint16Array.length; i += 1) {
      string += String.fromCharCode(this.uint16Array[i]);
    }
    return string;
  }
}
