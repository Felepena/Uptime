


const comments = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ];
const container = document.getElementById('result');
let delitel = comments.length*3/2
let mujcelek = 0

comments.forEach((koment, index) => {

    mojenovecislo =  Math.floor(Math.random()*3)
    let text = document.createElement('a');
    text.textContent = '-'
    switch (mojenovecislo+1) {
        case 1:

            text.style.color = 'red';

            break;

        case 2:
            text.style.color = 'lightgreen';

            break;

        case 3:
            text.style.color = 'yellow';

            break;
        default:
            text.style.color = 'black';
    }
    mujcelek = mojenovecislo+mujcelek

    container.appendChild(text);;
});
function precentagenumber(){
    return Math.floor(mujcelek/delitel*100)
}
const procento = document.getElementById('precent');
procento.textContent=precentagenumber()+"%"

const  listener = document.getElementById("alert")

window.onload = function() {
    let button = document.getElementById('buttonallert');
    let customAlert = document.getElementById('customAlert');

    button.addEventListener("click", function() {
        customAlert.style.display = "block";

        setTimeout(function() {
            customAlert.style.display = "none";
        }, 3000);
    });
};

