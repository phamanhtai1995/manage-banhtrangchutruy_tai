import { StatusCodes } from "http-status-codes";
import { MOCK_DATABASE } from "~/mock/database";
import { JwtProvider } from "~/providers/JwtProvider";
import { env } from "~/config/enviroment";
import ms from "ms";

const { ACCESS_TOKEN_SECRET_SIGNATURE, REFRESH_TOKEN_SECRET_SIGNATURE } = env;

const login = async (req, res) => {
	try {
		if (
			req.body.email !== MOCK_DATABASE.USER.EMAIL ||
			req.body.password !== MOCK_DATABASE.USER.PASSWORD
		) {
			res.status(StatusCodes.UNAUTHORIZED).json({
				message: "Your email or password is correct !",
			});

			return;
		}

		const _userInfo = {
			id: MOCK_DATABASE.USER.ID,
			email: req.body.email,
		};

		// generate token (access and refresh) for client
		const accessToken = await JwtProvider.generateToken(
			_userInfo,
			ACCESS_TOKEN_SECRET_SIGNATURE,
			"1h"
		);

		const refreshToken = await JwtProvider.generateToken(
			_userInfo,
			REFRESH_TOKEN_SECRET_SIGNATURE,
			"14 days"
		);

		/**
		 * Xử lý trường hợp trả về HTTP ONLY COOKIE cho phía trình duyệt
		 * Về cái maxAge và thư viện ms
		 * Đối với maxAge - thời gian sống của cookie thì chúng ta sẽ để tối đa 14 ngày, tuỳ dự án. Lưu ý
		 * Thời gian sống của cookie khác hoàn toàn với thời gian sống của refreshToken. Không nhầm lẫn cái này nhé !!!
		 */

		res.cookie("accessToken", accessToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: ms("14 days"),
		});

		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			secure: true,
			sameSite: "none",
			maxAge: ms("14 days"),
		});

		res.status(StatusCodes.OK).json({ ..._userInfo, accessToken, refreshToken });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const logout = async (req, res) => {
	try {
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

const refreshToken = async (req, res) => {
	try {
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
	}
};

export const userControllers = {
	login,
	logout,
	refreshToken,
};
