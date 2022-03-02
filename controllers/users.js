const axios = require("axios").default;

exports.code_execution = (req, res) => {
  const { secret_key } = req.params;
  const { type, data, intanceChoice } = req.body;
  const instance1 = "http://ec2-3-86-116-46.compute-1.amazonaws.com";
  const instance2 = "http://ec2-34-201-173-67.compute-1.amazonaws.com";

  if (secret_key == 1234) {
    let instance = "";
    switch (type) {
      case "submissions":
        const { source_code, language_id } = data;
        try {
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
              return res.status(200).json({ token: response.data.token });
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
        break;
      case "fetchResult":
        try {
          if (intanceChoice === 1) instance = instance1;
          else instance = instance2;
          const { token } = data;

          return axios({
            url: `${instance}/submissions/${token}`,
            method: "GET",
          })
            .then((response) => {
              return res.status(200).json(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
        break;
    }
  } else {
    res.status(401).json({ message: "ACCESS DENIED" });
  }
};
