function addTask() {
  const task = document.getElementById("addItems").value;
  if (task.trim() === "") {
    return;
  }
  console.log(task);

  const d = document.createElement("div");
  d.classList.add("border", "me-3", "d-flex", "justify-content-between");
  d.style.height = "60px";
  const d2 = document.createElement("div");
  d2.classList.add("mt-2", "ms-3");
  d2.id = "list";

  const l = document.createElement("li");
  l.innerText = task;
  d2.appendChild(l);

  const d3 = document.createElement("div");
  d3.classList.add("d-flex", "gap-1");
  const d4 = document.createElement("div");
  d4.classList.add("mt-2");
  const b = document.createElement("button");
  b.classList.add("btn", "btn-success", "text-light");
  b.innerHTML = "Edit";
  b.onclick = () => {
    const newtask = prompt("edit your task: ", l.innerText);
    if (newtask !== null && newtask.trim() !== "") {
      l.innerText = newtask;
    }
  };
  d4.appendChild(b);

  const d5 = document.createElement("div");
  d5.classList.add("mt-2", "me-3");
  const b2 = document.createElement("button");
  b2.classList.add("btn", "btn-danger", "text-light");
  b2.innerHTML = "Delete";
  b2.onclick = () => {
    d.remove();
  };
  d5.appendChild(b2);

  d3.appendChild(d4);
  d3.appendChild(d5);

  d.appendChild(d2);
  d.appendChild(d3);

  document.getElementById("TaskList").appendChild(d);
  document.getElementById("addItems").value = "";
}
