import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import "dotenv/config";
const getAll = async (req, res) => {
    try {
        const data = await User.findAll();
        return res.status(200).json({
            status: 200,
            data: data,
            message: "fetched all users succesfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
};
const get = async (req, res) => {
    try {
        const data = await User.findOne({
            where: {
                id: req.query.id,
            },
        });
        return res.status(200).json({
            status: 200,
            data: data,
            message: "fetched requested user succesfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
};
const post = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({
            where: {
                email: email,
            },
        });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "user already registered",
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const user = await User.create(req.body);
        return res.status(200).json({
            status: 200,
            data: user,
            message: "created user succesfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
};
const put = async (req, res) => {
    try {
        const updateUser = await User.update(req.body, {
            where: {
                id: req.query.id,
            },
        });
        console.log(updateUser);
        return res.status(200).json({
            status: 200,
            data: null,
            message: "user updated succesfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
};
const remove = async (req, res) => {
    try {
        const data = await User.destroy({
            where: {
                id: req.query.id,
            },
        });
        return res.status(200).json({
            status: 200,
            data: null,
            message: "user deleted succesfully",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error,
        });
    }
};
export { getAll, get, post, put, remove };
