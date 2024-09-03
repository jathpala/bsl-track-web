import { error, redirect } from "@sveltejs/kit"
import { PUBLIC_SERVER_URL } from "$env/static/public"

export async function load({ fetch }) {

    const result = await fetch(`${PUBLIC_SERVER_URL}/bsl`)

    return {
        readings: await result.json()
    }
}


export const actions = {
    saveReading: async({ request, fetch }) => {
        const measurement = Object.fromEntries(await request.formData())

        const result = await fetch(`${PUBLIC_SERVER_URL}/bsl`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(measurement)
        })

        console.log(result)
    }
}