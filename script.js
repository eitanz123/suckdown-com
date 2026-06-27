const countdown = document.querySelector("[data-countdown]");

if (countdown) {
  const target = new Date("2026-07-04T12:00:00-04:00");
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    countdown.textContent = "it is on";
  } else {
    const days = Math.ceil(diff / 86400000);
    countdown.textContent = `${days} day${days === 1 ? "" : "s"}`;
  }
}
