// const text = document.getElementById('typewriter');

// const textload = () =>{
//     setTimeout(() => {
//         text.innerText = ' Web Developer?';
//     }, 0);
//     setTimeout(() => {
//         text.textContent = ' SEO Specialist?';
//     }, 7500);
//     setTimeout(() => {
//         text.textContent = ' Shopify Expert?';
//     }, 15000);
// }

// // textload();
// // setInterval(textload, 22500);

// const string1 = "Web Developer?";
// const string2 = "SEO Specialist?";
// const string3 = "Shopify Expert?";
// const array = [...string1];


// const textload2 = () => {
//     let i = 0;
//     const timer = setInterval(() => {
//         if (i < array.length) {
//             text.innerText += array[i];
//             i++;
//         } else {
//             clearInterval(timer);
//         }
//     }, 200); // You can adjust the speed here (currently 100ms per character)
// }
// textload2();








// const array2 = "Hello, world!".split(''); // This array should contain the characters of the text you want to display, including spaces

// const textload5 = () => {
//     let index = 0;
//     const timer = setInterval(() => {
//         if (index < array2.length) {
//             text.innerText += array2[index];
//             index++;
//         } else {
//             clearInterval(timer);
//         }
//     }, 100); // You can adjust the speed here (currently 100ms per character)
// }




const text = document.getElementById("typewriter");
let stringIndex = 0;

const strings = [
    "Web Developer? ",
    "SEO Specialist? ",
    "Shopify Expert? "
];

const loopincrement = () => {
    loopTexts(stringIndex);
    stringIndex++;
};

const loopTexts = (index) => {
    if (index >= strings.length) {
        index = 0;
        stringIndex = 0;
    }
    addText(strings[index]);
}

const addText = (newText) => {
    let i = 0;
    const timer = setInterval(() => {
        if (i < newText.length) {
            text.innerText += newText[i];
            i++;
        } else {
            clearInterval(timer);
            textDelete();
        }
    }, 150); // You can adjust the speed here (currently 100ms per character)
}

const textDelete = () => {
    let x = text.innerText.length;
    const timer = setInterval(() => {
        if (x > 0) {
            text.innerText = text.innerText.slice(0, -1);
            x--;
        } else {
            clearInterval(timer);
            loopincrement();
        }
    }, 150); // You can adjust the speed here (currently 100ms per character)
}

loopincrement();


