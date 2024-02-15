class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                target.res += this.magnitude;
            }else if(this.stat == "power"){
                target.power += this.magnitude;
            }
        }else{
            throw new Error("Target must be a unit!");
        }
    }
}


const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
console.log("Player 1 plays Red Belt Ninja");

const hardAlgo = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
hardAlgo.play(redBeltNinja);
console.log("Player 1 plays Hard Algorithm on Red Belt Ninja");

const blackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
console.log("Player 2 plays Black Belt Ninja");

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
unhandledPromiseRejection.play(redBeltNinja);
console.log("Player 2 plays Unhandled Promise Rejection on Red Belt Ninja");

const pairProgramming = new Effect("Pair Programming",3,"increase target's power by 2","power",2);
pairProgramming.play(redBeltNinja);
console.log("Player 1 plays Pair Programming on Red Belt Ninja");
redBeltNinja.attack(blackBeltNinja);
console.log("Red Belt Ninja attacks Black Belt Ninja");

