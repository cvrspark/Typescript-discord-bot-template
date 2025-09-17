# TypeScript Bot Template

This is a TypeScript bot template created by washuu (@swaglimit on Discord).

## Configuration

Edit the `config.json` file:

```json
{
    "token": "your-bot-token", // Bot token
    "private": true, // Set to true for guild-specific commands, false otherwise
    "clientId": "your-client-id", // Client ID
    "guildId": "your-guild-id", // Guild ID
    "dbToken": "your-db-token", // MongoDB token
    "logs": false // Set to true for command execute logging for debugging
}
```

## Installation

Install the required dependencies using npm:

```bash
npm install # Install bot dependencies
npm install -g bun # Install Bun globally to run the bot directly from TypeScript
```

## Scripts

Here are the available scripts:

```bash
bun start       # Starts the bot
bun run deploy  # Deploys the commands
bun run comp    # Deploys and starts the bot
```

## Project Structure

The bot template has a well-organized structure as follows:

```
src/
├── events/
│   ├── client/
│   │   ├── interactionCreate.ts
│   │   └── ready.ts
│   └── db/
│       └── db.ts
├── functions/
│   ├── data/
│   │   └── databaseFunctions.ts
│   └── handlers/
│       ├── handleCommands.ts
│       ├── handleComponents.ts
│       ├── handleEvents.ts
│       └── handleInteractions.ts
├── interactions/
│   └── interactionGroup (example: vault)/
│       ├── commands/
│       │   ├── balance.ts
│       │   ├── give.ts
│       │   └── transactions.ts
│       └── components/
│           ├── buttons/
│           │   └── button.ts
│           ├── modals/
│           │   └── modal.ts
│           └── selectMenus/
│               └── selectMenu.ts
├── services/
│   └── deploy.ts
├── types/
│   └── client.ts
└── index.ts
```

## Tips

To use wildcards (store data in custom IDs), use the following structure:

```typescript
export default {
    data: {
        customId: "confirmBan-*" // The "*" will be replaced with the actual ID.
    },
    async execute(interaction: InteractionType) {
        const userId = (interaction as any).data[0];
    }
};
```
