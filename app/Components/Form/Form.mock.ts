export const mockFormProps = {
  namePlaceholder: "Enter your name",
  emailPlaceholder: "Enter your email",
  headline: "Contact Us",
  text: "Fill out the form below",
  buttonLabel: "Submit",
  nameErrorText: "Name is required",
  emailErrorText: "Please enter a valid email"
};
export const mockFormInputs = {
  validInputs: {
    name: "John Smith",
    email: "john.smith@example.com"
  },
  invalidInputs: {
    name: "",
    email: "invalid-email"
  },
  partialInputs: {
    name: "Jane Doe",
    email: ""
  }
};
