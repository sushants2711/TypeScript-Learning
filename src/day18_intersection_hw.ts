type User = {
    name: string,
    email: string,
    age: number,
    isActive: boolean
};

type MyLocation = {
    address: string,
    pincode: number
};

type Info = User & MyLocation;

const createUserProfile: Info = {
    name: "Sushant Kumar Singh",
    email: "sushant@example.com",
    age: 22,
    isActive: true,
    address: "Dhanbad, Jharkhand",
    pincode: 828111
};

console.log(createUserProfile.name);
console.log(createUserProfile.isActive);
console.log(createUserProfile.address);