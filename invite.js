(function () {
  function guestNameFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var raw = params.get("name");
    if (!raw) return "";
    try {
      return decodeURIComponent(raw.replace(/\+/g, " ")).trim();
    } catch (e) {
      return raw.trim();
    }
  }

  var name = guestNameFromQuery();
  var display = name || "friend";

  var greetEl = document.getElementById("guest-name");
  var thanksEl = document.getElementById("thanks-name");
  if (greetEl) greetEl.textContent = display;
  if (thanksEl) thanksEl.textContent = display;

  var pending = document.getElementById("rsvp-pending");
  var done = document.getElementById("rsvp-done");
  var btn = document.getElementById("accept-btn");

  if (!btn || !pending || !done) return;

  btn.addEventListener("click", function () {
    // TODO: append row to Google Sheet (name, timestamp, etc.)
    pending.hidden = true;
    done.hidden = false;
  });
})();
