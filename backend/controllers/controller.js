//////////////////////////////////////
/***********   Auth Controller   *************/
/////////////////////////////////////

import { login, register } from "../services/authServices.js";

export const regiterController = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const user = await register(email, password, name);
        return res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

export const loginController = async (req, res) => {
    const {email, password} = req.body;

    try {
        const result = await login(email, password);

        res.cookie("token", result.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        return res.status(200).json({ success: true, ...result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

//////////////////////////////////////
/***********   Document Controller   *************/
/////////////////////////////////////

import { createnewDocument } from "../services/documentServices.js";

export const createDocument = async (req, res) => {
    const {title, content} = req.body;
    const userId = req.user.id;

    try {
        const document = await createnewDocument(title, content, userId);
        return res.status(201).json({ success: true, document });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}