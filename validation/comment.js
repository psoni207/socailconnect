const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is requrired";
  } else if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Comment must be between 4 and 100 charcters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
