import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from "@nestjs/websockets";
import {Logger} from "@nestjs/common";
import { OnEvent } from '@nestjs/event-emitter'
import { RequestValidation, UserAccount } from '@xact-wallet-sdk/client'

@WebSocketGateway(3001, {
  cors: {origin: "*"},
  handlePreflightRequest: (req, res) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": req.headers.origin,
      "Access-Control-Allow-Credentials": true
    };
    res.writeHead(200, headers);
    res.end();
  }
})
export class EventGateway implements OnGatewayConnection {
  @WebSocketServer() server;
  private logger: Logger = new Logger("EventGateway");

  @OnEvent("xactCheckout.auth")
  handleMessage(user: RequestValidation<UserAccount>) {
    this.server.to(user.socketId).emit("xactCheckout.auth", user);
  }

  handleConnection(client, ...args: any[]) {
    this.server.to(client.id).emit("xactCheckout.connexion", client.id);
  }

}
