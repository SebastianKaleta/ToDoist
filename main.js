const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const doneUl = document.querySelector('doneUl');
let doneListCheck;



const create = (e) => {
    e.preventDefault();
    const text = input.value;
    const li = document.createElement("li");
    const check = document.createElement("input");
    const span = document.createElement("span");

    if (input.value !== "") {

        check.type = "checkbox";

        ul.appendChild(li);
        li.appendChild(check);
        li.appendChild(span);
        doneListCheck = span.textContent = text;
        li.insertBefore(check, span)
        input.value = "";
    } else {
        alert("Nie można dodać pustego zadania!");
    }

    check.addEventListener('click', () => {
        check.classList.toggle("checked");
        span.classList.toggle("checked");
        check.checked = true;
        if (check.classList.contains("checked")) {
            span.style.textDecoration = "line-through";
            done();
            ul.removeChild(li);

        } else {
            span.style.textDecoration = "none";
            check.checked = false;
        }
    })

}

const done = () => {
    const doneUl = document.getElementById("doneUl");
    const li = document.createElement("li");
    const check = document.createElement("input");
    const span = document.createElement("span");
    const spanElement = document.querySelector("span");
    check.type = "checkbox";
    check.checked = true;
// dopisz funkcje z warunkiem wywołującą 2 funkcje do zrobienia i zrobione

    if (check.checked = true) {
        // check.checked = true;
        if (check.checked = true) {
            doneUl.appendChild(li);
            li.appendChild(check);
            li.appendChild(span);
            span.textContent = doneListCheck;
            li.insertBefore(check, span)
            input.value = "";
            span.style.textDecoration = "line-through";
        }

    } else {
        check.checked = false;
        doneUl.removeChild(li);
    }

}



form.addEventListener('submit', create)