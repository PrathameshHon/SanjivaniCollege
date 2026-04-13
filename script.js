
  let chatBox = document.getElementById("chatBox");

  // Load old messages
  function loadChat() {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.forEach(m => addMessageToScreen(m.text, m.type, m.image));
  }
  loadChat();


  function saveMessage(text, type, image) {
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.push({ text, type, image });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }


  function addMessageToScreen(text, type, image) {
    let div = document.createElement("div");
    div.className = "msg " + type;

    if(image) {
      div.innerHTML = `<img src="${image}">`;
    } else {
      div.textContent = text;
    }

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  }


  function sendMessage() {
    let text = document.getElementById("msgInput").value.trim();
    if(text === "") return;

    addMessageToScreen(text, "mine", null);
    saveMessage(text, "mine", null);

    document.getElementById("msgInput").value = "";
  }


  function selectImage() {
    document.getElementById("imgInput").click();
  }

  document.getElementById("imgInput").addEventListener("change", function() {
    let file = this.files[0];
    if(!file) return;

    let reader = new FileReader();
    reader.onload = function() {
      addMessageToScreen("", "mine", reader.result);
      saveMessage("", "mine", reader.result);
    };
    reader.readAsDataURL(file);
  });
