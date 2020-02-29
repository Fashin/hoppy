class CoreClass {
  constructor() {
    this.core = this.executeFactorys(listFactorys)

    console.log(this.core.getData('config'));
      // this.loader = new LoaderClass([
      //   './config/database.json'
      // ]);
  }

  executeFactorys(factorys) {
    return new FactoryClass(factorys.map(factory => {
      const FactoryInstance = eval(factory.name + "Factory");
      const f = new FactoryInstance(factory.params);

      return f.resolve();
    }));
  }

  run() {
      // this.loader.run();
  }
}
