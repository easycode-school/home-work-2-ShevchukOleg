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
  /**
   * drive - абстрактный метод прохождения пути транспортным стредством
   * @param {number} path - путь
   * @return {void}
   */
  public abstract drive(path:number): void;
  /**
   * refuel - абстрактный метод заправки топлива
   * @param {number} gas - путь
   * @return {void}
   */
  public abstract refuel(gas: number): number | void;

}
//__________________________________________________________________________________________
abstract class Car2 {
  /**
   * constructor - инициализатор объекта класса
   * @param mileage 
   * @param fuel 
   */ 
  constructor ( protected mileage: number,  protected fuel: number){
  }
  /**
   * drive - абстрактный метод прохождения пути транспортным стредством
   * @param {number} path - путь
   * @return {void}
   */
  public abstract drive(): void;
/**
   * refuel - абстрактный метод заправки топлива
   * @param {number} gas - путь
   * @return {void}
   */
  public abstract refuel(): number | void;

}
//  можно ли так поступать с абстрактными классами?

//Task 2
class Volvo extends Car1{
  protected mileage: number;
  protected fuel: number;

  constructor(mileage: number, fuel: number){
    super(mileage, fuel);
  }
  /**
   * drive - метод прохождения пути транспортным стредством
   * @param {number} path - путь
   * @return {void}
   */
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
  /**
   * refuel -  метод заправки топлива
   * @param {number} gas - путь
   * @return {void}
   */
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
  protected mileage: number;
  protected fuel: number;
  
  constructor(mileage: number, fuel: number){
    super(mileage, fuel);
  }
  /**
   * drive - метод прохождения пути транспортным стредством
   * @param {number} path - путь
   * @return {void}
   */
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
  /**
   * refuel - метод заправки топлива
   * @param {number} gas - путь
   * @return {void}
   * @public
   */
  public refuel(gas: number) {
    this.fuel += gas;
  }
  /**
   * get AmonthOfFuel - показать количество топлива
   * @return {number}
   * @public
   */
  public get AmonthOfFuel(){
    return this.fuel;
  }
   /**
   * get totalMileage - общий пробег
   * @return {number}
   * @public
   */
  public get totalMileage(){
    return this.mileage;
  }
}