fetch('https://api.github.com/users/nightzillla', {
    headers: {'Authorization': 'GITHUB_TOKEN'}
}).then(response => response.json())// accepts a callback that will run when the promise is resolved.
    .catch(error => console.log(error)) // accepts a callback that will urn when the promise is rejected.
    .then(username => console.log(username));

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
function lastPush(userName) {
  return fetch(`https://api.github.com/users/${userName}/events/public`, {
        headers: {
            'Authorization': 'GITHUB_TOKEN'
        }
    }).then(response => response.json())
        .catch(error => console.log(error)) // accepts a callback that will urn when the promise is rejected.
        .then(data => {
            const dayOfLastPush = new Date(data[0].created_at).toDateString();
            console.log(dayOfLastPush)
            return dayOfLastPush;
        });
}

console.log(lastPush("nightzillla"));





// fetch('https://api.github.com/users')
//     .then(response => {
//         response.json()
//             .then(users => {
//                 users.forEach(user => {
//                     console.log(user) // here get date of users last commit *CommitCommentEvent
//                 })
//             })
//     })



// function lastCommit(userName) {
//     fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': "GIT_TOKEN"}})
//         .then(response => response.json()
//             .then(events => {
//                 for(let event of events) {
//                     if (event.type === "PushEvent") {
//                         let lastPush = event
//                         console.log(lastPush[0]["created_at"]);
//                     }