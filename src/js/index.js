const users = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];

document.getElementById("createdAt").value = new Date().toLocaleDateString();
const formElements = document.getElementById("formUser").elements;

const getFormUser = () => {
  const formUser = {};

  for (let index = 0; index < formElements.length; index++) {
    const element = formElements[index];
    if (element.type !== "submit") {
      formUser[element.name] = element.value;
    }
  }
  return formUser;
};

const form = document.getElementById("formUser");

const handleSubmit = (e) => {
  e.preventDefault();
};
form.addEventListener("click", handleSubmit, false);

const getFormValueByName = (formElements, inputName) => formElements[inputName];

console.log("addId");
const addId = () =>
  users.map((item, i) => ({
    id: Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
    name: item.name,
    age: item.name,
  }));
console.table(addId());

console.log("getByName");
const getByName = (name) => users.filter((value) => value.name === name);
console.log(getByName("Gabriel Gomes")[0]);

console.log("getNames");
const getNames = () => users.map((user) => user.name);
console.table(getNames());

console.log("getByAge");
const getByAge = () => users.filter((value) => value.age >= 18);
console.log(getByAge());

console.log("avarageAge");
const avarageAge = () =>
  users.reduce((acc, i) => (acc += i.age), 0) / users.length;
console.log(avarageAge());
