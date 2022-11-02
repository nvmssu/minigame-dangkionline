const socket = io("http://localhost:399");
socket.on("Server_send_list", function (data) {
  $("#list").html("");
  data.map(function (usess) {
    // alert(usess.HOTEN);
    $("#list").append(
      ` <div class="user">
      <div class="dong1"> <span> Ho ten: ` +
        usess.HOTEN +
        `  ` +
        `email: ` +
        usess.EMAIL +
        `</span></div>
        <div class="dong2"></div>
      </div>`
    );
  });
});
$(document).ready(function () {
  $("#btnregister").click(function () {
    socket.emit("hocvienguithongtin", {
      hoten: $("#txtfulname").val(),
      email: $("#txtemail").val(),
      sdt: $("#txtphone").val(),
    });
  });
});
