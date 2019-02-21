const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');




const create = (e) => {
    e.preventDefault();
    const text = input.value;
    if (!input.value === "") {
        const li = document.createElement("li");
        const check = document.createElement("input");
        check.type = "checkbox";
        const span = document.createElement("span");
        ul.appendChild(li);
        li.appendChild(check);
        li.appendChild(span);
        span.textContent = text;
        li.insertBefore(check, span)
        input.value = "";
    } else {
        alert("Nie można dodać pustego zadania!");
    }

    check.addEventListener('click', () => {
        check.classList.toggle("checked");
        check.classList.contains("checked") ? span.style.textDecoration = "line-through" : span.style.textDecoration = "none";
    })
}






form.addEventListener('submit', create)