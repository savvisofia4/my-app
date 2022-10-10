export class Point{
   constructor(private x?: number, public y?: number){

   }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    getX(){return this.x;}
    
    setX(value: any){
        if(value<0)
            throw new Error('value cannot be less than 0');
        this.x=value;
    }
}

let point= new Point(1,2);
point.draw();
let x=point.getX();
console.log(x);
point.setX(5);
console.log('new X:'+point.getX());
point.draw();