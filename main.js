const persons = [
  {
    id: 1,
    firstname: "Dan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.1990",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 2,
    firstname: "Fan",
    lastname: "Tiger",
    image: "url",
    birthday: "03.18.2005",
    gender: "male",
    hobbie: ["Football", "Reading"],
    nationality: "switzerland",
    friends: [325330, 325334],
    residence: 10041,
  },
  {
    id: 3,
    firstname: "Frank",
    lastname: "Lion",
    image: "url",
    birthday: "10.05.1991",
    gender: "male",
    hobbie: ["walking", "basketball"],
    nationality: "syria",
    friends: ["", "", ""],
    residence: 10041,
  },
  {
    id: 4,
    firstname: "Bilal",
    lastname: "Zakki",
    image: "url",
    birthday: "08.19.1999",
    gender: "female",
    hobbie: ["swimming", "walking"],
    nationality: "canda",
    friends: [325330, 325326],
    residence: 10012,
  },
];

// Find user
let userId = 2;
console.log("Information of user (ID): ");
console.log(persons.find((item) => item.id == userId));

//Gender
let userGender = "male";
console.log("Information of user (Gender): ");
console.log(persons.filter((item) => item.gender == userGender));

// Add obj
console.log("ADD USERS : ");

let fifthUser = {
  id: 5,
  firstname: "Zaur",
  lastname: "Zakki",
  image: "url",
  birthday: "08.19.2009",
  gender: "male",
  hobbie: ["swimming", "walking"],
  nationality: "Nigeria",
  friends: [325330, 325326],
  residence: 10012,
};

let sixthUser = {
  id: 6,
  firstname: "Tehmine",
  lastname: "Zakki",
  image: "url",
  birthday: "08.19.1909",
  gender: "female",
  hobbie: ["swimming", "walking"],
  nationality: "Nigeria",
  friends: [325330, 325326],
  residence: 10012,
};

persons.push(fifthUser);
persons.unshift(sixthUser);
console.log(persons);

// some vs every
function genderOfUser(str) {
  let genderUser = persons.some((item) => item.gender == str);
  let genderUser2 = persons.every((item) => item.gender == str);
  return {
    genderUser,
    genderUser2,
  };
}
console.log(genderOfUser("female"));
