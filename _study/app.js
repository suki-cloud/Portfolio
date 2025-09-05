console.log("JavaScript에 오신 걸 환영합니다!");

const title = document.getElementById("title");
title.textContent = "Hello, JavaScript 👋";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
	alert("버튼이 클릭되었습니다!");
});


const toggleBtn = document.getElementById("toggleBtn");
const panel = document.getElementById("panel");

toggleBtn.addEventListener("click", () => {
	const isHidden = panel.hasAttribute("hidden");
	panel.toggleAttribute("hidden");
	toggleBtn.textContent = isHidden ? "닫기" : "자세히 보기";
});