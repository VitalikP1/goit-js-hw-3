const countProps = function (obj) {
  const quantityObjects = Object.keys(obj);
  const total = quantityObjects.length;
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
