class ConfigFactory {
  constructor({ name }) {
    this.config_name = name;
    this.data = [];
  }

  resolve() {
    const configurationInformations = eval("factory" + this.config_name.capitalize())

    this.data = configurationInformations.map(conf => new FileClass(conf.name, conf.path))

    return this;
  }
}
