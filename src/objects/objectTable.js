class objectTables {
    constructor(options){
      // some defaults
      this.X = options.X || 0;
      this.Y = options.Y || 0;
      this.objMain = options.objMain || null;
      this.draw = options.draw ||function name() {};
    }

    setOptions(options){
      // some defaults
      this.X = options.X || 0;
      this.Y = options.Y || 0;
      this.objMain = options.objMain || null;
      this.draw = options.draw ||function name() {};
    }

}
export {objectTables}