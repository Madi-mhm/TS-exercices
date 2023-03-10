// Exercice # 1
interface studentInfo {
    name : string;
    age : number;
    major : boolean;
};
const students: studentInfo[] = [
    {
        name: 'Paul',
        age: 19,
        major: true
    },
    {
        name: 'Julie',
        age: 16,
        major: false
    },
    {
        name: 'Jacques',
        age: 49,
        major: true
    },
    {
        name: 'Marie',
        age: 12,
        major: false
    }
]
let studentMajor: studentInfo[]= []
let studentJunior: studentInfo[]= []

for(let i = 0; i < students.length ; i++){
    if(students[i].age < 18){
        studentJunior.push(students[i])
    }else{
        studentMajor.push(students[i])
    }
}
// console.log(studentJunior)
// console.log(studentMajor)



function studentsMoyenneAge(){
    let resu:number = 0 
    for(let i = 0 ; i < students.length ; i++){
        resu += students[i].age 
    }
    resu = resu / 4
    console.log(resu)
}
// studentsMoyenneAge()




// // Exercice 2
interface fruitsTypes {
    name : string; 
    expirationInDays : number; 
}
const fruits = [
    {
        name: 'Pomme',
        expirationInDays: 1
    },
    {
        name: 'Poire',
        expirationInDays: 16
    },
    {
        name: 'Citron',
        expirationInDays: 5
    },
    {
        name: 'Tomate',
        expirationInDays: 4
    }
]

function separator(){
    let moins_2_jours: fruitsTypes[] = []
    let entre_trois_jours_et_une_semaine: fruitsTypes[]= []
    let plus_dune_semaine: fruitsTypes[] = []

    for(let i = 0 ; i < fruits.length ; i++){
        if(fruits[i].expirationInDays < 2){
            moins_2_jours.push(fruits[i])
        }else if(fruits[i].expirationInDays >= 3 && fruits[i].expirationInDays <= 7){
            entre_trois_jours_et_une_semaine.push(fruits[i])
        }else if(fruits[i].expirationInDays > 7){
            plus_dune_semaine.push(fruits[i])
        }else{
            console.log('put it in garbitch')
        }
    }

    console.log(moins_2_jours)
    console.log(entre_trois_jours_et_une_semaine)
    console.log(plus_dune_semaine)
} 
// separator()







// Exercice 3

interface playersTypes {
    name : string; 
    cards : string[]; 
}

const players = [
    {
        name: 'Marie',
        cards: ['Dracofeu', 'Chenipan', 'Rondoudou']
    },
    {
        name: 'Bilal',
        cards: ['Mew', 'Tortank']
    },
    {
        name: 'Sarah',
        cards: ['Dracoloss', 'Dardagnan', 'Roucoul']
    },
    {
        name: 'Joe',
        cards: ['Roucoups', 'Colosinge', 'Insecateur', 'Tignon']
    }
]

// for(let i = 0 ; i < players.length ; i++){
//     console.log(`${players[i]['name']} has ${players[i]['cards']}`)
// }

