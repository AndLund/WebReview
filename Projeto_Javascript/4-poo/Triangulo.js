class Triangulo{
    constructor(c1, c2){
        this.cateto1 = c1
        this.cateto2 = c2
    }
    

    hipotenusa(){
        return (this.cateto1**2 + this.cateto2**2)**1/2
    }
}