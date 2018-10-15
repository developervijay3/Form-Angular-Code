import moment from "node-moment";

export default {
  firstName: {
    in: ["body"],
    isLength: {
      errorMessage: "Please provide a firstname.",
      options: { min: 1 }
    }
  },
  lastName: {
    in: ["body"],
    isLength: {
      errorMessage: "Please provide a lastname.",
      options: { min: 1 }
    }
  },
  password: {
    in: ["body"],
    isLength: {
      errorMessage: "Please provide a password.",
      options: { min: 1 }
    }
  },
  subScription: {
    in: ["body"],
    isLength: {
      errorMessage: "Please provide a subscription.",
      options: { min: 1 }
    }
  }

};
