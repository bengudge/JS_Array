
// async function getData(url) {
//     const data = await axios.get(url)
//     .then(response => {
//         //response.data;
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });
//     return data;
    
//     // return response.data;
// }


const submitBtn = document.getElementById("submit-btn");
const inputEmail = document.getElementById("input-email");

var assignedImgs = {};
var rand;
newImage();


const email = document.getElementById('input-email');
//const emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener('click', (event) => {
    if(email.value.match(emailValidate)) {
        if(Object.hasOwn(assignedImgs, inputEmail.value)) {
            assignedImgs[inputEmail.value].push(rand); 
            console.log(assignedImgs)
            addToTable();
        } else {
            let randArr = [rand];
            assignedImgs[inputEmail.value] = randArr; 
            console.log(assignedImgs)
            addToTable();
        }
        newImage();
        inputEmail.value = '';
    } else {
        alert("A valid Email address is required!");
    }
});

function addToTable() {
    
    let tableContainer = document.getElementById("assign-table");
    tableContainer.style.display = 'table';

    // Checking if property holds only 1 image, then sets the inital entry. The next else if will add 
    // additional images from a property.
    if(assignedImgs[inputEmail.value].length === 1) {
        let table = document.getElementById("assign-table");

        let row = table.insertRow(-1);

        let emailCol = row.insertCell(0);
        let imgCol = row.insertCell(1);

        emailCol.innerText = inputEmail.value;
        imgCol.innerHTML = `<img src="https://picsum.photos/id/${rand}/100" alt="Lorem Picsum random picture">`

    } else if(assignedImgs[inputEmail.value].length > 1) {

        let table = document.getElementById("assign-table");
        for( var i = 1, row; row = table.rows[i]; i++) {

            if(row.cells[0].textContent === inputEmail.value) {
                row.cells[1].innerHTML += `<img src="https://picsum.photos/id/${rand}/100" alt="Lorem Picsum random picture">`;
            }
        }
    } else {
        
    }
}

function newImage() {

    rand = Math.floor(Math.random() * 1084);

    var imageOld = document.querySelector(".random-image");
    imageOld.parentNode.removeChild(imageOld);

    var newImage = document.createElement('img');
    newImage.setAttribute("class", "random-image");
    newImage.setAttribute("src", `https://picsum.photos/id/${rand}/600`);
    // newImage.setAttribute("src", getData(`https://picsum.photos/id/${rand}/600`));
    newImage.setAttribute("alt", "Lorem Picsum random picture");
    var imgGenerator = document.querySelector(".img-container");
    imgGenerator.insertAdjacentElement("afterbegin", newImage);


    console.log(rand);
}