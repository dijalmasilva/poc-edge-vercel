import {get} from "@vercel/edge-config";

export default async function handler(req, res) {
    const params = req.query
    const { key } = params
    const response = await get(key)
    res.json(response)
}