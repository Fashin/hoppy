class ConfigFactory {
  constructor({ name }) {
    this.config_name = name;
  }

  resolve() {
    const configurationInformations = eval("factory" + this.config_name.capitalize())

    configurationInformations.map(conf => new FileClass(conf.name, conf.path))
  }
}
