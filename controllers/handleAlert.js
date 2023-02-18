const AT = require("../configs/africastalking");

const sendSMS = (phoneNumber) => {
  //send an sms
  const respondent_phone = "+254768879348";
  const sms = AT.SMS;
  sms
    .send({
      to: respondent_phone,
      message: `FGM ALERT from ${phoneNumber}. Please respond to the danger ASAP!!!`,
    })
    .then((resp) => {
      console.log(resp);
      // res.set("Content-Type: text/plain");
      // return res.send(response)
    })
    .catch((err) => {
      console.trace({ err });
      // res.status(500).json(error.message);
    });
};

const handleAlert = (req, res) => {
  try {
    //handle respondind to alert
    const { phoneNumber, serviceCode, text, sessionId } = req.body;
    console.log("hello");

    let response = '';

    if (text == '') {
      console.log(text);
      response = `CON Your alert request has been received
  1. Alert`;
    } else if (text == "1") {
      console.log(text);
      response = `END Your alert request has been received`;
    }
    sendSMS(phoneNumber)
    res.set("Content-Type: text/plain");
    res.send(response);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  handleAlert,
};
