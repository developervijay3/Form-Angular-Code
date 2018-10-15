import express from "express";
import fs from "fs";
import { checkSchema, validationResult } from "express-validator/check";

import user from "../mongoose/user";
import loginValidationSchema from "../validations/login";

const router = express.Router();

function handleError(res, error) {
  const message = typeof error === "object" ? error.message : error;
  res.status(500).json({ status: "N", errors: [{ msg: message }] });
}

router.get("/userlist", (req, res) => {
  user.find({}, function(err, result) {
    if (err) throw err;
    res.send(result)
  })
});

router.post("/login", checkSchema(loginValidationSchema), (req, res) => {
  // check if validation failed
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "N", errors: errors.array() });
  }
  const userData = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.emailGroup.email,
    confirmEmail:req.body.emailGroup.Confirmemail,
    password:req.body.password,
    subscription:req.body.subScription
  });

  userData.save((err, result) => {
    if (err) {
      console.error("Operation failed while saving ToDoItem" + err);

      handleError(res, err);
      return;
    }

    res.status(200).json({ status: "Y" });
  });
});

export default router;
