import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from "@nestjs/websockets";
import {Logger} from "@nestjs/common";
import { OnEvent } from '@nestjs/event-emitter'
import { RequestValidation } from '@xact-wallet-sdk/client/lib/models/request.interface'
import { UserAccount } from '@xact-wallet-sdk/client/lib/models/user.interface'

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

  @OnEvent("app.auth")
  handleMessage(user: RequestValidation<UserAccount>, clientId: string) {
    this.server.to(clientId).emit("app.auth", user);
  }

  handleConnection(client, ...args: any[]) {
    this.server.to(client.id).emit("app.connexion", client.id);
  }

}
