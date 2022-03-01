const User = require("../models/User");
const axios = require("axios").default;

exports.getUser = (req, res) => {
  const { email } = req.params;
  const { type, data, intanceChoice } = req.body;
  const instance1 = "http://ec2-3-86-116-46.compute-1.amazonaws.com";
  const instance2 = "http://ec2-34-201-173-67.compute-1.amazonaws.com";

  User.findOne({ email }).exec((err, user) => {
    if (err) console.log(err);

    let instance = "";
    switch (type) {
      // type:0:submissions
      // type:1:fetchResult
      case 0:
        const { source_code, language_id } = data;
        if (intanceChoice === 1) instance = instance1;
        else instance = instance2;

        return axios({
          url: `${instance}/submissions`,
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          data: JSON.stringify({ source_code, language_id }),
        })
          .then((response) => {
            return res
              .status(200)
              .json({ response: JSON.stringify(response.data) });
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      case 1:
        if (intanceChoice === 1) instance = instance1;
        else instance = instance2;
        const { token } = data;

        return axios({
          url: `${instance}/submissions/${token}`,
          method: "GET",
        })
          .then((response) => {
            return res
              .status(200)
              .json({ response: JSON.stringify(response.data) });
          })
          .catch((err) => {
            console.log(err);
          });
        break;
    }
  });
};
