class BiCycle {
    constructor(brand) {
      this.BrandName = brand;
    }
    present() {
      return 'I have a ' + this.BrandName;
    }
  }
  
  class Model extends BiCycle {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myBiCycle = new Model("HERO", "1234KIKI");
  document.getElementById("demo").innerHTML = myBiCycle.show();