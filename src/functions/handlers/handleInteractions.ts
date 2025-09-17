import { Client } from "discord.js";
import handleCommands from "./handleCommands";
import handleEvents from "./handleEvents";
import handleComponents from "./handleComponents";

export default async function handleInteractions(client: Client) {
    try {
        await handleEvents(client)   
        await handleCommands(client)   
        await handleComponents(client)   
    } catch (error) {
        console.log("Error in final handler", error)
    }
}