import express from "express";
import { TestControllers } from "~/controllers/testController";

const Router = express.Router();

// API đăng nhập.
Router.route("/create").post(TestControllers.create);

// API đăng xuất.
Router.route("/get-data").get(TestControllers.findAll);

// API Refresh Token - Cấp lại Access Token mới.

export const TestRoute = Router;
