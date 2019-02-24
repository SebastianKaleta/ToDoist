const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const doneUl = document.querySelector('doneUl');



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
        span.textContent = text;
        li.insertBefore(check, span)
        input.value = "";
    } else {
        alert("Nie można dodać pustego zadania!");
    }

    check.addEventListener('click', () => {
        check.classList.toggle("checked");
        span.classList.toggle("checked");
        check.classList.contains("checked") ? span.style.textDecoration = "line-through" : span.style.textDecoration = "none";
        done();
    })
    // done();
}

const done = () => {
    console.log("dupa");
    if (document.querySelector("span").classList.contains("checked")) {
        // document.querySelector();
        // debugger;
        let doneulll = document.getElementById("doneUl");
        debugger;
        const doneli = document.createElement("li");
        doneulll.appendChild(doneli);
    }

}



form.addEventListener('submit', create)