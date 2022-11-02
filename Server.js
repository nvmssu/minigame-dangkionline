const Express = require("express");
const { socket } = require("socket.io");
const App = Express();
App.use(Express.static("./public"));
App.set("view engine", "ejs");
App.set("views", "./views");
const server = require("http").Server(App);
const io = require("socket.io")(server);
server.listen(process.env.PORT || 2222);
// const socket=io()
//server muon gui lai danh sach thong tin gi data phai co arrays
const Arrs = [];
io.on("connection", function (socket) {
  console.log("co khach mua hang  " + socket.id);
  socket.on("hocvienguithongtin", function (data) {
    function Userr(hoten_, email_, sdt_) {
      this.HOTEN = hoten_;
      this.EMAIL = email_;
      this.SDT = sdt_;
    }
    const user1 = new Userr(data.hoten, data.email, data.sdt);
    Arrs.push(user1);
    //  console.log(data.hoten);
    //  console.log(data.email);
    //  console.log(data.sdt);
    console.log(data.hoten);
    io.sockets.emit("Server_send_list", Arrs);
  });
});
App.get("/", (req, res) => {
  res.render("trangchu");
});
