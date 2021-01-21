const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;

const { GiveawaysManager } = require("discord-giveaways");
const db = require("quick.db");
if(!db.get("giveaways")) db.set("giveaways", []);



// Login
client.login(config.token);
