import { User } from "../models/user.model.js"

//get api
export const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)

    } catch (error) {
        res.status(500).json({ error: "Falied to fetch error" })

    }

}

// post api
export const createUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const newUser = await User.create({ username, email })
        res.status(201).json({ newUser });

    } catch (error) {
        res.status(400).json({ error: "Falied to create user" })
    }
}

