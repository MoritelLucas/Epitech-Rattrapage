export async function login(username, password) {
    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: username, password: password })
    });
    const data = await response.json();
    if (!response.ok) {
        alert("Register failed: " + JSON.stringify(response.status));
        throw new Error("Register Request Failed");
    }
    if (data.token === "-1") {
        alert("Register failed: " + "Wrong email or password");
        throw new Error("Register Request Failed");
    }

    await localStorage.setItem("sessionToken", data.jwtToken);
}

export async function register(username, password) {
    const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: username, password: password })
    });
    const data = await response.json();
    if (!response.ok) {
        alert("Register failed: " + JSON.stringify(response.status));
        throw new Error("Register Request Failed");
    }
    if (data.token === "-1") {
        alert("Register failed: " + "Email already in use");
        throw new Error("Register Request Failed");
    }

    await localStorage.setItem("sessionToken", data.jwtToken);
}