import express from "express";
import { userControllers } from "~/controllers/userController";

const Router = express.Router();

// API đăng nhập.
Router.route("/login").post(userControllers.login);

// API đăng xuất.
Router.route("/logout").delete(userControllers.logout);

// API Refresh Token - Cấp lại Access Token mới.
Router.route("/refresh_token").put(userControllers.refreshToken);

export const UserRoute = Router;
