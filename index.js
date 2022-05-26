// Add your Circle class here
class  Circle{
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter(){
        return this.radius * 2;
    };
    get circumference(){
        return this.diameter * Math.PI;
    };
    get area(){
        return Math.PI * this.radius**2;
    };
  
    set diameter(PIdiameter) {
        this.radius = PIdiameter/2;
    };
    set circumference(PIcircumference){
        this.radius = PIcircumference/2/Math.PI;
    };
    set area(PIarea){
        this.radius = Math.sqrt(PIarea/Math.PI);
    };
  }
  
  let circle = new Circle();
  circle.radius; 
  circle.diameter;
  circle.circumference;
  circle.area;