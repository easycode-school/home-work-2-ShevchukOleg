// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************
//Task 1
class Car1 {
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
}
//__________________________________________________________________________________________
class Car2 {
    /**
     * constructor - инициализатор объекта класса
     * @param mileage
     * @param fuel
     */
    constructor(mileage, fuel) {
        this.mileage = mileage;
        this.fuel = fuel;
    }
}
//  можно ли так поступать с абстрактными классами?
//Task 2
class Volvo extends Car1 {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    /**
     * drive - метод прохождения пути транспортным стредством
     * @param {number} path - путь
     * @return {void}
     */
    drive(path) {
        let maxPath = this.fuel / 0.06;
        if (path <= maxPath) {
            this.mileage += path;
            this.fuel -= path * 0.06;
        }
        else {
            let needFuel = (path - maxPath) * 0.06;
            console.log(`Топлива достаточно только на ${maxPath} километров, пожалуста дозаправте ${needFuel} литров!`);
        }
    }
    /**
     * refuel -  метод заправки топлива
     * @param {number} gas - путь
     * @return {void}
     */
    refuel(gas) {
        this.fuel += gas;
        return this.fuel;
    }
}
let firstCar = new Volvo(10, 15);
firstCar.drive(100);
firstCar.refuel(25);
console.log(firstCar);
//Task 3
class Volkswagen extends Car1 {
    constructor(mileage, fuel) {
        super(mileage, fuel);
    }
    /**
     * drive - метод прохождения пути транспортным стредством
     * @param {number} path - путь
     * @return {void}
     */
    drive(path) {
        let maxPath = this.fuel / 0.08;
        if (path <= maxPath) {
            this.mileage += path;
            this.fuel -= path * 0.08;
        }
        else {
            let needFuel = (path - maxPath) * 0.08;
            console.log(`Топлива достаточно только на ${maxPath} километров, пожалуста дозаправте ${needFuel} литров!`);
        }
    }
    /**
     * refuel - метод заправки топлива
     * @param {number} gas - путь
     * @return {void}
     * @public
     */
    refuel(gas) {
        this.fuel += gas;
    }
    /**
     * get AmonthOfFuel - показать количество топлива
     * @return {number}
     * @public
     */
    get AmonthOfFuel() {
        return this.fuel;
    }
    /**
    * get totalMileage - общий пробег
    * @return {number}
    * @public
    */
    get totalMileage() {
        return this.mileage;
    }
}
