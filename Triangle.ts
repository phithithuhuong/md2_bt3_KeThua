export class Shape {
     name: string;
     color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getColor(): string {
        return this.color;
    }

    setColor(value: string) {
        this.color = value;
    }
}
export class Triangle extends Shape{
    size1 :number;
    size2 :number;
    size3 :number;

    constructor(name: string, color: string, size1: number, size2: number, size3: number) {
        super(name, color);
        this.size1 = size1;
        this.size2 = size2;
        this.size3 = size3;
    }

    getSize1(): number {
        return this.size1;
    }

    setSize1(value: number) {
        this.size1 = value;
    }

    getSize2(): number {
        return this.size2;
    }

    setSize2(value: number) {
        this.size2 = value;
    }

    getSize3(): number {
        return this.size3;
    }

    setSize3(value: number) {
        this.size3 = value;
    }
    getArea(){
        let p=(this.size1+this.size2+this.size3)/2
        let h=2*Math.sqrt(p*(p-this.size1)*(p-this.size2)*(p-this.size3))/2
        return (this.size1*h)/2
    }
    getPerimeter(){
        return (this.size1+this.size2+this.size3)
    }
}
let myTriangle= new Triangle('my Triangle','violet',4,5,6);
console.log(myTriangle)
console.log(myTriangle.getArea());
console.log(myTriangle.getPerimeter())