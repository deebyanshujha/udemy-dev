function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("The data has been fetched!");
      } else {
        reject("The data is not fetched!");
      }
    },3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return "Deebyanshu";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
