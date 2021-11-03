import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("I am a hello world server");
})
app.get("/profile", (req, res) => {
    res.send("here is your profile");
})
app.get("/about", (req, res) => {
    res.send("some information about me");
})
app.listen(PORT, () => {
    console.log("Port is running");
});

// create folder 
// "npm -v" check krny k lea node ka version 16 say above hona chye,
// terminal may gay or hum nay command chalaya "npm i express" express server ko dowload krny k lea 
//  "npm init" use kea node modules ko apne project may fatch krny k lea 
// package.json may ja kr 1 line dd krni ho gi script k portion may jo k
// " "start" : "node (File ka name).mjs" is sy fida ye ho ga k hamy bs ak command chalana ho ga srf vo "npm start" hay "