const usersUrl = "https://jsonplaceholder.typicode.com/users";
const colorsUrl = "https://jsonplaceholder.typicode.com/users";

function fetchData(url) {
    return fetch(url)
    .then((resp) => {
        if (!resp.ok) {
            throw new Error("Cannot get data from: ", url);
        }
        return resp.json();
    });
}

//Randomly assigning the usernames as "colors" to the users
function assignColors(users, colors) {
    return users.map((user) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return {
            id: user.id,
            name: user.name,
            color: randomColor.username
        };
    });
}

function fetchAndAssign() {
    fetchData(usersUrl)
        .then((users) => {
            return fetchData(colorsUrl)
                .then((colors) => {
                    return assignColors(users, colors);
                });
        })
        .then((result) => {
            console.log("Result: ", result);
            return result;
        })
        .catch((error) => {
            console.error("Error: ", error);
        })
        .finally(() => {
            console.log("Data fetching is complete!");
        });
}

fetchAndAssign();