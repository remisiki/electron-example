const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
	sendMessage: () => {
		const chatBox = document.getElementById("chat-box");
		ipcRenderer.send("send-message", chatBox.value);
		chatBox.value = "";
	},
	getFriends: () => {
		return ipcRenderer.invoke("get-friends");
	}
})

window.addEventListener("DOMContentLoaded", () => {
	ipcRenderer.send("main-window-ready");
})
