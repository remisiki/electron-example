"use strict"

require("./App");

const { ipcMain } = require("electron");

const getMyFriends = () => {
	return [
		{id: 6030, name: "Twilley"},
		{id: 967, name: "Wickkiser"},
		{id: 5073, name: "Essick"},
		{id: 8886, name: "Marotta"},
		{id: 7416, name: "Banh"}
	];
}

const sendMessage = (message) => {
	console.log(message);
}

ipcMain
	.on("main-window-ready", (e) => {
		console.log("Main window is ready");
	})
	.on("send-message", (e, message) => {
		sendMessage(message);
	})

ipcMain.handle("get-friends", (e) => {
	return getMyFriends();
})