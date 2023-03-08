// Exercice 0  => Done

// Exercice 1  
const address: string = "FBG Montmélian";
const zipcode: number = 73000;

function myAddress(){
    const addressFull: string = address + ", " + zipcode; 
    console.log(addressFull);
}
myAddress();


// Exercice 2
const myFavoriteContries: string[] = ['USA', 'France', 'Sweden', 'Iran', 'Japon']; 

function contries() {
    for( let i = 0 ; i < myFavoriteContries.length ; i++){
        console.log(myFavoriteContries[i]);
    };
};
contries();


// Exercice 3 
const myName: string= "Mahdi";

function magic(){
    console.log(myName.split(""));
};
magic();


// Exercice 4
const nameDecomposee: string[] = ["M", "a", "h", "d", "i"];
function fullName (){
    const resultat: string = nameDecomposee.join("");
    console.log(resultat);
} 
fullName();