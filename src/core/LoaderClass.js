import fs from 'fs';

class LoaderClass {
  constructor(listFiles) {
      this.listFiles = listFiles;
  }

  run() {
    this.listFiles.map(path => {
        const file = fs.readFileSync(this.listFiles[0], "utf8")
        console.log(JSON.parse(file));
    })
  }
}
