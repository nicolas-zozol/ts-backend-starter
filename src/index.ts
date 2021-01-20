export function forConfigurationTest() {
  return 2
}

class A{

}

interface HasName{
  name:string
}

class B extends A implements HasName{

  name:string
  constructor(){
    super()
    this.name ="John Doe"
  }
}

export function forClassAndCoverageTest(){
  return new B()
}