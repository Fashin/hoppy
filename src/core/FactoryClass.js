class FactoryClass {
  constructor(data) {
    this.data = data;
  }

  getData(name) {
    const factorys = this.data.filter(factory => factory.name === name);
    return factorys.length > 0 ? factorys[0].data : [];
  }

  setData(key, value) {
    const factory = this.data.filter(factory => factory.name === key)[0];

    factory.content = value;

    return this.setFactory(factory);
  }

  setFactory(nFactory) {
    this.data = this.data.map(factory => factory.name === nFactory.name ? nFactory : factory);

    return this;
  }
}
