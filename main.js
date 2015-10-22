var tabris = require('tabris');

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
    var Password = page.children("#passInput").get("text");
    var Username = page.children("#usernameInput").get("text");
    var xhr = new tabris.XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            tabris.create("TextView", {
                layoutData: {left: 10, right: 10, top: "prev() 10"},
                text: JSON.parse(xhr.responseText)[1].join(", ")
            }).appendTo(page);
        }
    };
    xhr.open("GET", "http://student.sstu.ru/test.php?username"+Username+"&password="+Password+"");
    xhr.send();
}).appendTo(page);

page.apply({
    "#usernameLabel": {layoutData: {left: 10, top: 18, width: 120}},
    "#usernameInput": {layoutData: {left: "#usernameLabel 10", right: 10, baseline: "#usernameLabel"}},
    "#passLabel": {layoutData: {left: 10, top: 50, width: 120}},
    "#passInput": {layoutData: {left: "#passLabel 10", right: 10, baseline: "#passLabel"}},
    "#done": {layoutData: {left: 10, right: 10, top: 100}}
});

page.open();
