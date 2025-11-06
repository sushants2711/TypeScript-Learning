enum Role {
    user = "User",
    admin = "Admin"
};

type LoginDetails = {
    name?: string,
    email: string,
    password: string,
    role: Role
};

const user1: LoginDetails = {
    name: "Sushant",
    email: "sushants@gmail.com",
    password: "oppo1234",
    role: Role.admin
};

const user2: LoginDetails = {
    email: "sushant@gmail.com",
    password: "oppo",
    role: Role.user
};

const multipleUser: LoginDetails[] = [
    { name: "sushant", email: "gma@gmail.com", password: "oppo", role: Role.admin },
    { name: "Rahul", email: "rahul@gmail.com", password: "rahul", role: Role.admin },
    { name: "Abhijeet", email: "sushant@gmail.com", password: "oppo", role: Role.user },
    { name: "sushant", email: "gma@gmail.com", password: "oppo", role: Role.admin },
    { name: "Rahul", email: "rahul@gmail.com", password: "rahul", role: Role.admin },
    { name: "Abhijeet", email: "sushant@gmail.com", password: "oppo", role: Role.user },
];


const isAdmin = (data: LoginDetails): boolean => {
    if (data.role === "Admin") {
        return true;
    } else {
        return false;
    };
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));


for (let key of multipleUser) {
    console.log(isAdmin(key));
};
