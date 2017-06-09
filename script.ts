let objArray:  Array<Dice> = [];

class Dice {
    value: number;
    div: HTMLDivElement;
    

    constructor(){
        this.value = this.roll();
        this.div = document.createElement('div');
        this.div.innerText = String(this.value);
        this.div.className = 'dice';
        document.getElementById('container').appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.value = this.roll();
            this.div.innerText = String(this.value);
        })
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            objArray.splice(objArray.indexOf(this),1);
        })
    }

    roll(): number {
        return Math.floor(Math.random()*6) + 1;
    }
}



document.getElementById('getDie').addEventListener('click', function(){
    objArray.push(new Dice());
});

document.getElementById('rollDie').addEventListener('click', function(){
    for (let i =0; i<objArray.length;i++){
        objArray[i].value = objArray[i].roll();
        objArray[i].div.innerText = String(objArray[i].value);
    }
})

document.getElementById('sumDie').addEventListener('click', function(){
    let total = 0;
    for (let i = 0; i < objArray.length; i++ ){
        total += objArray[i].value;
    }
    alert(`The sum of all dice add up to ${total}`);
})