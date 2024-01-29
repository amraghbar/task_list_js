let formdata = document.querySelector(".formadd");

formdata.onsubmit = function (e) {
    e.preventDefault();
    const elements = e.target.elements;
    let data = {
        list: elements['listad'].value,
    }

    let listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox"> ${data.list} </br>`;
    listItem.classList.add("chek")
    document.querySelector("ul").appendChild(listItem);

    if (listItem.querySelector('input[type="checkbox"]').checked) {
        listItem.classList.add("checkd");
        listItem.classList.remove("chek");

    } else {
        listItem.classList.remove("checkd");
        listItem.classList.add("chek");   
     }



}



