"use strict"; //이크마 스크립트 문법을 준수하겠다.

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

module.exports = router; //라우터를 외부 파일에서 사용할 수 있도록 외부로 내보내기하는 명령어
