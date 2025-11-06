var Role;
(function (Role) {
    Role["user"] = "User";
    Role["admin"] = "Admin";
})(Role || (Role = {}));
;
var user1 = {
    name: "Sushant",
    email: "sushants@gmail.com",
    password: "oppo1234",
    role: Role.admin
};
var user2 = {
    email: "sushant@gmail.com",
    password: "oppo",
    role: Role.user
};
var multipleUser = [
    { name: "sushant", email: "gma@gmail.com", password: "oppo", role: Role.admin },
    { name: "Rahul", email: "rahul@gmail.com", password: "rahul", role: Role.admin },
    { name: "Abhijeet", email: "sushant@gmail.com", password: "oppo", role: Role.user },
    { name: "sushant", email: "gma@gmail.com", password: "oppo", role: Role.admin },
    { name: "Rahul", email: "rahul@gmail.com", password: "rahul", role: Role.admin },
    { name: "Abhijeet", email: "sushant@gmail.com", password: "oppo", role: Role.user },
];
var isAdmin = function (data) {
    if (data.role === "Admin") {
        return true;
    }
    else {
        return false;
    }
    ;
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
for (var _i = 0, multipleUser_1 = multipleUser; _i < multipleUser_1.length; _i++) {
    var key = multipleUser_1[_i];
    console.log(isAdmin(key));
}
;
