// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************

//Task 1
abstract class Car1 {
  protected mileage: number;
  protected fuel: number;
  
  constructor (mileage: number, fuel: number){
  this.mileage = mileage;
  this.fuel = fuel;
  }

  public abstract drive(path:number): void;
  public abstract refuel(gas: number): number | void;

}
//__________________________________________________________________________________________
abstract class Car2 {  
  constructor ( protected mileage: number,  protected fuel: number){
  }

  public abstract drive(): void;
  public abstract refuel(): number | void;

}
// В чем разница этих двух методов записи класа и можно ли так поступать с абстрактными классами?

//Task 2
class Volvo extends Car1{
    constructor(mileage: number, fuel: number){
      super(mileage, fuel);
    }
    public drive(path:number) {
      let maxPath: number = this.fuel/0.06;

      if(path <= maxPath){
        this.mileage += path;
        this.fuel -= path*0.06;
      } else {
        let needFuel = (path-maxPath)*0.06
        console.log(`Топлива достаточно только на ${maxPath} километров, пожалуста дозаправте ${needFuel} литров!`)
      }
    }  
    public refuel(gas: number): number {
      this.fuel += gas;
      return this.fuel;
    }
}

let firstCar = new Volvo(10, 15);
firstCar.drive(100);
firstCar.refuel(25);
console.log(firstCar)



//Task 3
class Volkswagen extends Car1{
  constructor(mileage: number, fuel: number){
    super(mileage, fuel);
  }
  
  public drive(path:number) {
    let maxPath: number = this.fuel/0.08;

    if(path <= maxPath){
      this.mileage += path;
      this.fuel -= path*0.08;
    } else {
      let needFuel = (path-maxPath)*0.08
      console.log(`Топлива достаточно только на ${maxPath} километров, пожалуста дозаправте ${needFuel} литров!`)
    }
  } 

  public refuel(gas: number) {
    this.fuel += gas;
  }

  public get AmonthOfFuel(){
    return this.fuel;
  }

  public get totalMileage(){
    return this.mileage;
  }
}