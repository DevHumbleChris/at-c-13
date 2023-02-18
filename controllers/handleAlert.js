const AT = require("../configs/africastalking");

module.exports = {
  handleAlert: (req, res) => {
    //handle respondind to alert
    const { phoneNumber, serviceCode, text, sessionId } = req.body;
    console.log(text);

    const respondent_phone = "+254708392326";
    let response = "";

    if (text === "") {
      response = "END Your alert request has been received";
    }

    //send an sms
    const sms = AT.SMS;
    sms
      .send({
        to: respondent_phone,
        message: `FGM ALERT from ${phoneNumber}. Please respond to the danger ASAP!!!`,
      })
      .then((resp) => {
        console.log(resp);
        res.set("Content-Type: text/plain");
        return res.send(response)
      })
      .catch((err) => {
        console.trace({err})
        // res.status(500).json(error.message);
      });

  },
};
