const express = require('express')
const app = express()
const port = 8080
const mongoose = require("mongoose");
const cors = require('cors')
const UserModel = require("./models/UserModel");

//db 
const database = "mongodb+srv://auth2:test1@cluster0.eomab.mongodb.net/Dashboard?retryWrites=true&w=majority"
const connectDb = async () => {
    await mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
connectDb()

// postbody
app.use(express.json({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

async function checkmaillogin(email, password) {
    const user = await UserModel.findOne({ email });
    const pass = await UserModel.findOne({ password });
    if (user) {
        if (pass) {
            return (0)
        }
    }
    return (1)
}

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let c = await checkmaillogin(email, password)
    //check db for email 
    if (c === -1)
        res.json({ token: ("-1") })
    else {
        res.json({ token: ("123456789") })
    }
    //return res.send('router connard!')
})

async function checkmail(email) {
    const user = await UserModel.findOne({ email });
    if (user) {
        return (-1)
        //return res.status(500).json(data);
    }
    return (0)
}

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    let c = await checkmail(email)
    //check db for email 
    if (c === -1)
        res.json({ token: ("-1") })
    else {
        const user = new UserModel({
            email,
            password,
        });

        const saveUser = await user.save();
        res.json({ token: ("123456789") })
    }
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})