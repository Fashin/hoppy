import fs from 'fs';

class LoaderClass {
  constructor(files) {
      this.files = files;
  }

  get() {
    return this.files.map(file => {
      const content = fs.readFileSync(file.path, "utf8")

      return ({
        name: file.name,
        content: JSON.parse(content)
      })
    })
  }
}
