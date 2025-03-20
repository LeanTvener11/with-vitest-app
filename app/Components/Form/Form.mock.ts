export const mockFormProps = {
  namePlaceholder: "Enter your full name",
  emailPlaceholder: "Enter your email address", 
  headline: "Contact Us",
  text: "Fill out the form below and we'll get back to you as soon as possible.",
  buttonLabel: "Submit",
  nameErrorText: "Please enter your name",
  emailErrorText: "Please enter a valid email address"
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
