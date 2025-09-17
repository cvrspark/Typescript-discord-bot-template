import { Client } from 'discord.js';
import fs from 'fs';
import path from 'path';

function loadCommandsFromDirectory(client: Client, dirPath: string) {
    if (!fs.existsSync(dirPath)) {
        return;
    }

    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
            loadCommandsFromDirectory(client, itemPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
            try {
                const command = require(itemPath).default;
                
                if (command && 'data' in command && 'execute' in command) {
                    client.commands.set(command.data.name, command);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default async function handleCommands(client: Client) {
    const interactionPath = path.join(__dirname, '..', '..', 'interactions');
    
    if (fs.existsSync(interactionPath)) {
        const interactionFolders = fs.readdirSync(interactionPath);
        
        for (const folder of interactionFolders) {
            const commandsPath = path.join(interactionPath, folder, 'commands');
            if (fs.existsSync(commandsPath)) {
                loadCommandsFromDirectory(client, commandsPath);
            }
        }
    }
    
    const legacyCommandsPath = path.join(__dirname, '..', '..', 'commands');
    if (fs.existsSync(legacyCommandsPath)) {
        loadCommandsFromDirectory(client, legacyCommandsPath);
    }
    
}