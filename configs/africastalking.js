const africastalking = require("africastalking");

// Initialize the SDK
const AT = require("africastalking")({
  apiKey: process.env.AT_KEY,
  username: process.env.AT_USER,
});

module.exports = AT;
