function number(ogArray) {
  var newArray = ogArray.map((value) =>
    value.replace(/-/g, "").split("").map((value) =>
      parseInt(value)
    )
  );
  newArray = newArray.map((value) => value.reduce((prev, curr) => prev + curr));
console.log("Last Largest Index in the Array is:",newArray.lastIndexOf(Math.max.apply(null, newArray)))
  return "The Largest Phone Number in the Array is: " + ogArray[newArray.lastIndexOf(Math.max.apply(null, newArray))] + " fuck yea thats right";
}
number(['123-456-7777', '963-481-7945', '111-222-3333','963-481-7945']);
