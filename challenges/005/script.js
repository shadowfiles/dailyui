var colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e",
  "#f1c40f", "#e67e22", "#e74c3c",
  "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3",
  "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39",
  "#FFEB3B", "#FFC107", "#FF9800", "#FF5722"/*,
  "#FF1744", "#F50057", "#D500F9", "#651FFF", "#3D5AFE", "#2979FF",
  "#00B0FF", "#00E5FF", "#1DE9B6", "#00E676", "#76FF03", "#C6FF00",
  "#FFEA00", "#FFC400", "#FF9100", "#FF3D00"*/];

var darkColors = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50",
  "#f39c12", "#d35400", "#c0392b",
  "#D32F2F", "#C2185B", "#7B1FA2", "#512DA8", "#303F9F", "#1976D2",
  "#0288D1", "#0097A7", "#00796B", "#388E3C", "#689F38", "#AFB42B",
  "#FBC02D", "#FFA000", "#F57C00", "#E64A19"/*,
  "#D50000", "#C51162", "#AA00FF", "#6200EA", "#304FFE", "#2962FF",
  "#0091EA", "#00B8D4", "#00BFA5", "#00C853", "#64DD17", "#AEEA00",
  "#FFD600", "#FFAB00", "#FF6D00", "#DD2C00"*/];

var icons = ["accessibility", "account_balance", "alarm", "android",
  "book", "bookmark", "bug_report", "build", "change_history", "delete",
  "event_seat", "explore", "extension", "face", "favorite", "favorite_border",
  "fingerprint", "flight_takeoff", "gavel", "grade", "group_work",
  "home", "hourglass_empty", "https", "info", "invert_colors", "language",
  "lightbulb_outline", "lock", "loyalty", "motorcycle", "opacity",
  "pan_tool", "payment", "pets", "polymer", "pregnant_woman", "print",
  "question_answer", "receipt", "record_voice_over", "redeem",
  "room", "rowing", "schedule", "search", "settings", "settings_phone",
  "shopping_basket", "shopping_cart", "store", "supervisor_account",
  "theaters", "thumb_up", "thumbs_up_down", "timeline", "touch_app",
  "trending_up", "visibility", "work"];

window.onload = function () {
  for (var i = 0; i < 16; i++) {
    var cont = document.getElementById("container");
    var icon = document.createElement("div");
    icon.className = "icon";
    icon.innerHTML = "<i class='material-icons'>"
      + icons[Math.floor(Math.random() * icons.length)] + "</i>";

    var c = Math.floor(Math.random() * colors.length);
    icon.style.backgroundColor = colors[c];
    icon.style.borderColor = darkColors[c];
    cont.appendChild(icon);
  }
};
