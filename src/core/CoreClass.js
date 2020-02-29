class CoreClass {
  constructor() {
    this.core = this.executeFactorys(listFactorys);

    const configContent = new LoaderClass(this.core.getData('config'));

    this.core.setData('config', configContent.get());
  }

  executeFactorys(factorys) {
    return new FactoryClass(factorys.map(factory => {
      const FactoryInstance = eval(factory.name + "Factory");
      const f = new FactoryInstance(factory.params);

      return f.resolve();
    }));
  }

  run() {
      
  }
}
