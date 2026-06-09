function loadCommands() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  let cmds = JSON.parse(localStorage.getItem("commands")) || [];

  cmds.forEach((c, index) => {
    list.innerHTML += `
      <div class="command">
        <b>${c.name}</b><br>
        ${c.desc}
        <button onclick="deleteCommand(${index})">❌</button>
      </div>
    `;
  });
}

function addCommand() {
  let name = document.getElementById("cmdName").value;
  let desc = document.getElementById("cmdDesc").value;

  if (!name || !desc) return;

  let cmds = JSON.parse(localStorage.getItem("commands")) || [];

  cmds.push({ name, desc });
  localStorage.setItem("commands", JSON.stringify(cmds));

  document.getElementById("cmdName").value = "";
  document.getElementById("cmdDesc").value = "";

  loadCommands();
}

function deleteCommand(index) {
  let cmds = JSON.parse(localStorage.getItem("commands")) || [];
  cmds.splice(index, 1);
  localStorage.setItem("commands", JSON.stringify(cmds));
  loadCommands();
}

loadCommands();