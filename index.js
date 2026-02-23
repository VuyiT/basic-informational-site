#!/usr/bin/env node

const express = require("express");
const path = require("node:path");
const app = express();

app.get("/", (req, res, next) => {
    const options = {
        root: path.join(__dirname, "views"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };

    let fileName = "index.html";
    
    res.sendFile(fileName, options, (err) => {
    if (err) {
        next(err);
    } else {
        console.log("Sent:", fileName);
    }
})});

app.get("/about", (req, res, next) => {
    const options = {
        root: path.join(__dirname, "views"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };
    
    let fileName = "about.html";
    
    res.sendFile(fileName, options, (err) => {
    if (err) {
        next(err);
    } else {
        console.log("Sent:", fileName);
    }
})});

app.get("/contact-me", (req, res, next) => {
    const options = {
        root: path.join(__dirname, "views"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true
        }
    };
    
    let fileName = "contact-me.html";
    
    res.sendFile(fileName, options, (err) => {
    if (err) {
        next(err);
    } else {
        console.log("Sent:", fileName);
    }
})});

app.use((req, res) => {
    res.status(404).sendFile("404.html", { root: "./views" });
});

const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`listening for requests on port ${PORT}`);
});