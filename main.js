// const randoRaqam = [1,2,3,4,5,6,7,8,9,10];
// const juft = [];
// const toq = [];

// randoRaqam.forEach(toqSonlar => {
//     if(randoRaqam % 2 == 0){
//         juft.push(toqSonlar);
//     }else{
//         toq.push(toqSonlar);
//     }
    
// })
// console.log(juft);
// console.log(toq);




// const numbers = Math.round(Math.random() * 100);

// alert(`Random raqam: ${numbers}`)

// if(numbers % 3 ==0 && numbers % 5 == 0){
//     alert(`${numbers} soni 5 ga bo'linadi va 3 ga bo'linadi`)
// }else if(numbers % 3 == 0){
//     alert(` Random raqam : ${numbers} 3 ga bo'inmidi`)
// }else if(numbers % 5 == 0){
//     alert(` Random raqam : ${numbers} 5 ga bo'linmidi`)
// }
// else{
//     alert(` Random raqam : ${numbers} "5" ga va "3" ga  bo'linmidi`)
// // }
const fruits = ["non", "banan", "moshina"];
const items = ["olma", "gilos", "gul", "tom"];
const a = [];
const b = [];

// Fruits massivini tekshirish
fruits.forEach(mevalar => {
    if (mevalar.includes("n")) {     
        a.push(`${mevalar} - "n" harfi mavjud`);
    } else {
        b.push(`${mevalar} - "n" harfi mavjud emas`);
    }
});

// Items massivini tekshirish
items.forEach(narsala => {
    if (narsala.includes("n")) {     
        a.push(`${narsala} - "n" harfi mavjud`);
    } else {
        b.push(`${narsala} - "n" harfi mavjud emas`);
    }
});

console.log(fruits, " n harfi mavjud");
console.log(items, " n harfi mavjud emas");



  








   
