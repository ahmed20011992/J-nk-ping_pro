fetch("http://localhost:3000/stores/all")
  .then((response) => response.json())
  .then((stores) => {
    console.log(stores);
  });

fetch("http://localhost:3000/stores/?storename=Bikupan")
  .then((response) => response.json())
  .then((store) => {
    console.log(store);
  });
