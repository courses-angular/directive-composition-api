class Disposable {
  isDispose: boolean = false;

  dispose(){
    this.isDispose = true;
  }
}
class Activable{
  isActive: boolean = false;
  active(){
    this.isActive = true
  }
  deactive(){
    this.isActive = false;
  }
}
// Not allowed to inherit from more than one class;
// class MyClass extends Disposable,Activable{}

type Constructor = new (...args: any[]) => {};

// Mixin in TS
export function DisposableMixin<Base extends Constructor>(base:Base) {
 return class Disposable {
   isDispose: boolean = false;

   dispose(){
     this.isDispose = true;
   }
 }

}

export function ActivableMixin<Base extends Constructor>(base:Base) {
  return class Activable extends base{
    isActive: boolean = false;
    active(){
      this.isActive = true
    }
    deactive(){
      this.isActive = false;
    }
  }

}
class myClass extends ActivableMixin(DisposableMixin(class {})){
  constructor() {
    super();
  }


}
