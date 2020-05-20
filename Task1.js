const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const addMood = function (user) {
  user.mood = "happy";
};

addMood(user);
console.log(user);

const changeHobby = function (user) {
  user.hobby = "skydiving";
};

changeHobby(user);
console.log(user);

const changeStatus = function (user) {
  if (user.premium) {
    user.premium = false;
  } // Лучше ведь как в прошлых примерах? Будет меньше кода. Или так интереснее?
};

changeStatus(user);
console.log(user);

const userBreakedown = Object.keys(user);

for (const item of userBreakedown) {
  console.log(`${item}: ${user[item]}`);
}
