
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

function newImage() {

    const rand = Math.floor(Math.random() * 1084);

    var imageOld = document.querySelector(".random-image");
    imageOld.parentNode.removeChild(imageOld);

    var newImage = document.createElement('img');
    newImage.setAttribute("class", "random-image");
    newImage.setAttribute("src", `https://picsum.photos/id/${rand}/600`);
    // newImage.setAttribute("src", getData(`https://picsum.photos/id/${rand}/600`));
    newImage.setAttribute("alt", "Lorem Picsum random picture");
    var imgGenerator = document.querySelector(".img-container");
    imgGenerator.insertAdjacentElement("afterbegin",newImage);


    console.log(document.querySelector(".random-image"));
}