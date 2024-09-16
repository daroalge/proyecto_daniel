"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users_controller");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post('/api/login', users_controller_1.generateToken);
exports.userRoutes.post('/user/register', users_controller_1.createUser);
