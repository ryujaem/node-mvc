"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./home.control");// 경로에서 메서드 받아서 사용

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router;