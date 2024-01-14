const apiService = {

fetch : fetch('http://localhost:3000/tasks').then((response) => {
  return response.json();
}),

postNew : async function (task) {
  const response = await fetch('http://localhost:3000/tasks', {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(task), // body data type must match "Content-Type" header
  });
  return response.json()
}, // parses JSON response into native JavaScript objects,

update : async function (task) {
  const response = await fetch('http://localhost:3000/tasks', {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(task), // body data type must match "Content-Type" header
  });
  return response.json()
},

}


export default apiService;