document.getElementById("chat-form").addEventListener("submit", (e) => {
	e.preventDefault();
	window.api.sendMessage();
})
document.getElementById("get-friends").addEventListener("click", async (e) => {
	const friends = await window.api.getFriends();
	const friendList = document.getElementById("friend-list");
	friendList.innerHTML = "";
	friendList.append(...friends.map(x => {
		const li = document.createElement("li");
		li.innerText = `[${x.id}] ${x.name}`;
		return li;
	}));
})