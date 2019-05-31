// src/server.ts

import { ChatServer } from './ChatServer';

let app = new ChatServer().app;

export { app };
