class CoreClass {
  constructor() {
    this.executeFactorys(listFactorys)
      // this.loader = new LoaderClass([
      //   './config/database.json'
      // ]);
  }

  executeFactorys(factorys) {
    factorys.map(factory => {
      const FactoryInstance = eval(factory.name + "Factory");
      const f = new FactoryInstance(factory.params);

      f.resolve();
    })
  }

  run() {
      // this.loader.run();
  }
}
