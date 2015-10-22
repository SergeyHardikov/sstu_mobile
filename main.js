var page = tabris.create("Page", {
    title: "Вход в систему",
    topLevel: true
});

tabris.create("TextView", {
    id: "usernameLabel",
    alignment: "left",
    text: "Имя пользователя:"
}).appendTo(page);

tabris.create("TextInput", {
    id: "usernameInput",
    message: "Имя пользователя"
}).appendTo(page);

tabris.create("TextView", {
    id: "passLabel",
    text: "Пароль:"
}).appendTo(page);

tabris.create("TextInput", {
    id: "passInput",
    type: "password",
    message: "Пароль"
}).appendTo(page);

tabris.create("Button", {
    id: "done",
    text: "Войти",
    background: "#8b0000",
    textColor: "white"
}).on("select", function() {

}).appendTo(page);

page.apply({
    "#usernameLabel": {layoutData: {left: 10, top: 18, width: 120}},
    "#usernameInput": {layoutData: {left: "#usernameLabel 10", right: 10, baseline: "#usernameLabel"}},
    "#passLabel": {layoutData: {left: 10, top: "#usernameLabel 18", width: 120}},
    "#passInput": {layoutData: {left: "#passLabel 10", right: 10, baseline: "#passLabel"}},
    "#done": {layoutData: {left: 10, right: 10, top: "#passLabel 18"}}
});

page.open();
