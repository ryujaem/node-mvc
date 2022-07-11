"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.control");// 경로에서 메서드 받아서 사용

router.get("/", ctrl.output.home);

router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;