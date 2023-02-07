// Add your code here
//////////////////////////
////example code along////
//////////////////////////
// const configurationObject = {
// method: "POST",
// headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",

// },
// body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
// })
// };

// fetch ("http://localhost:3000/dogs", configurationObject);

// if we wanted to pass in the 2nd argument in as an annonymous object
// we could do the following:

// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });
//////////////////////////

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        } )
    })

.then(function (resp) {
    return resp.json()
  })
.then(function (object) {
    document.body.innerHTML = object ["id'"]
  })
.catch(function (error) {
    document.body.innerHTML = error.message
  });

};