import { Readable } from 'node:stream';
const PORT = process.env.PORT;

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buff = Buffer.from(String(i));
        this.push(buff);
      }
    }, 1000);
  }
}

fetch(`http://localhost:${PORT}`, {
  method: 'POST',
  body: new OneToHundredStream(),
  duplex: 'half',
});
