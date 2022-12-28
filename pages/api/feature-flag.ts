import {get} from "@vercel/edge-config";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const params = req.query
    const { key } = params
    const response = await get(key as string)
    res.json(response)
}
