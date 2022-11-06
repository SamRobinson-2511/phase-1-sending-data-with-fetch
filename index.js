// Add your code here

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }


// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
// }
// const dogs = "http://localhost:3000/dogs"
// fetch(dogs, configurationObject)
//     .then(response => response.json())
//     .then(object => console.log(object))
//     // .then(function(response){
//     //     return response.json();
//     // })
//     // .then(function(object){
//     //     console.log(object);
//     // })

// const configurationObject = {
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
// };

// fetch(dogs, configurationObject)
//     .then(res => res.json())
//     .then(dog => console.log(dog))
//     .catch(error => {
//         alert('Bad Things')
//         console.log(error.message)
//     }
// )


// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData),
// }
const formObj = {
    userName: "sam",
    userEmail: "xxx@xxxx.com"
}

const config = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formObj)
}
const users = "http://localhost:3000/users"

    fetch(users, formObj)
        .then(response => response.json())
        .then(dat => {
            console.log(user)
        })

