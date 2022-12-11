const { app, BrowserWindow } = require("electron");
const path = require("path");

const mainWindow = () => {
	const window = new BrowserWindow({
		width: 1280,
		height: 720,
		webPreferences: {
			enableRemoteModule: true,
			nodeIntegration: true,
			preload: path.join(__dirname, "./preload.js")
		}
	});

	window.on("ready-to-show", window.show);

	window.loadFile("index.html");

}

app.whenReady().then(() => {
	mainWindow();
})

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
})