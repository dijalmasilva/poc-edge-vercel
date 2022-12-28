import {useEffect, useState} from "react";

export async function get<T>(key: string): Promise<T | undefined> {
    const response = await fetch(`/api/feature-flag?key=${key}`)
    return await response.json() as T
}

const useEdgeConfig = <T = any,>(key: string): T | undefined => {
    const [value, setValue] = useState<T | undefined>(undefined)

    useEffect(() => {
        (async () => {
            const response = await get<T>(key)
            setValue(response)
        })()
    }, [key])

    return value
}

export default useEdgeConfig
