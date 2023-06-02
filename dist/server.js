"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { env } from 'node:process';
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const server = http_1.default.createServer(app_1.default);
dotenv_1.default.config({ path: 'config.env' });
const port = process.env.PORT;
server.listen(port, () => {
    console.log(`server is live on ${port} .... `);
});
//# sourceMappingURL=server.js.map