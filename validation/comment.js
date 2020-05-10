const Validator = require("validator");
const isEmpty = require("./is_empty");

module.exports = function validateCommentInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  } else if (!Validator.isLength(data.text, { min: 4, max: 300 })) {
    errors.text = "Comment must be between 4 and 100 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
