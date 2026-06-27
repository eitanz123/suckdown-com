const captcha = document.querySelector("[data-captcha]");
const openCaptcha = document.querySelector("[data-open-captcha]");
const verify = document.querySelector("[data-verify]");
const result = document.querySelector("[data-captcha-result]");
const balance = document.querySelector("[data-balance]");
const terminal = document.querySelector("[data-terminal]");

openCaptcha?.addEventListener("click", () => {
  result.textContent = "";
  captcha?.showModal();
});

document.querySelectorAll(".captcha-grid button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  });
});

verify?.addEventListener("click", () => {
  const excuses = [
    "Verification failed: packed light is not a stable identity category.",
    "Verification failed: DomeCheck detected airport beer.",
    "Verification failed: correct answer changed while you were thinking.",
  ];
  result.textContent = excuses[Math.floor(Math.random() * excuses.length)];
});

document.querySelectorAll("[data-market]").forEach((market) => {
  market.querySelectorAll("[data-buy]").forEach((button) => {
    button.addEventListener("click", () => {
      const side = button.dataset.buy;
      const other = side === "yes" ? "no" : "yes";
      const current = Number(market.dataset[side]);
      const opposite = Number(market.dataset[other]);
      const next = Math.min(95, current + 3);
      const nextOther = Math.max(5, opposite - 3);

      market.dataset[side] = String(next);
      market.dataset[other] = String(nextOther);
      market.querySelector(`[data-buy="${side}"] span`).textContent = next;
      market.querySelector(`[data-buy="${other}"] span`).textContent = nextOther;

      if (balance) {
        balance.textContent = String(Math.max(0, Number(balance.textContent) - 1));
      }

      if (terminal) {
        const line = document.createElement("p");
        line.textContent = `> market order accepted: ${side.toUpperCase()} -1 SDT`;
        terminal.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
      }
    });
  });
});
