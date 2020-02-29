class ConfigFactory {
  constructor({ name }) {
    this.name = name;
    this.data = [];
    this.content = null;
  }

  resolve() {
    const configurationInformations = eval("factory" + this.name.capitalize())

    this.data = configurationInformations.map(conf => new FileClass(conf.name, conf.path))

    return this;
  }
}
