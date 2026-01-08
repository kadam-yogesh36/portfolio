 
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("hero-title");
  const text = title.innerText;
  title.innerHTML = "";

  let i = 0;
  const typing = setInterval(() => {
    const char = text.charAt(i);
    title.innerHTML += (char === " ") ? "&nbsp;" : char;
    i++;

    if (i === text.length) {
      clearInterval(typing);
    }
  }, 60);
});
