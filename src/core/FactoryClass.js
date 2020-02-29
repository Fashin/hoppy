class FactoryClass {
  constructor(data) {
    this.data = data;
  }

  getData(name) {
    return this.data.filter(factory => factory.config_name === name)[0];
  }
}
