function displayList() {
    const fruits = document.getElementById("fruits");
    const items = Array.from(fruits.getElementsByTagName("p"));

    const ul = document.createElement("ul");

    for (const item of items) {
        const li = document.createElement("li");
        li.textContent = item.textContent;
        ul.appendChild(li);
    }

    fruits.innerHTML = "";
    fruits.appendChild(ul);
}