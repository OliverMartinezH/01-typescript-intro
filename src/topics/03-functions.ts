
function addNumbers(a: any, b: any) {
return a + b;

}

const result: number = addNumbers(1,2);
//console.log(result);

const addNumbersFlecha = (a: number, b: number): string => {

    //return a + b.toString();
    return `${a + b}`;
}
const resultFlecha = addNumbersFlecha(1,2);
//console.log(resultFlecha);


function multiply(firstNumber: number, secondNumber? : number, base: number = 2): number {

    return firstNumber * base ;
}
const multiplyResult = multiply(5);
//console.log({multiplyResult});




//interfaces
//leccion 15 clases como parametros

interface Character{
    name: string,   
    hp:number,
    showHp: () => void; // define funcion y tipo de retorno
    //healCharacter: (character: Character, amount: number) => void;
}

const healCharacter = (character: Character, amount: number): number =>{

    character.hp += amount;
    showHp:  {
        console.log(character.hp);
    }
    return character.hp;
}
 const strider : Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
    }
 } 

 healCharacter(strider,10);
 healCharacter(strider,3);
 healCharacter(strider,50);

 const CharacterHp = strider.showHp();


export {}