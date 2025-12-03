function addtask() {
  const task = document.getElementById("newtask").value.trim();
  console.log(task);
  if (task) {
    const l = document.createElement("li");
    l.classList.add("p-2", "d-flex", "align-items-center", "border-below");

    const d = document.createElement("div");
    d.classList.add("w-75");
    d.innerText = task;

    const b = document.createElement("button");
    b.classList.add("btn", "btn-danger", "ms-3");
    b.innerHTML = `<i class="bi", "bi-trash"></i> Delete`;
    b.onclick = () => {
      l.remove();
    };

    // const i = document.createElement("i");
    // i.classList.add("bi", "bi-dash");

    // b.appendChild(i);
    // b.appendChild(b);

    l.appendChild(d);
    l.appendChild(b);

    document.getElementById("TaskList").appendChild(l);
    document.getElementById("newtask").value = "";
  }
}
