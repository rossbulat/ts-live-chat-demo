import io from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';

export class SocketService {
  private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

  public init (): SocketService {
    console.log('iniating socket service');
    this.socket = io('localhost:8080');
    return this;
  }

  // send a message for the server to broadcast
  public send (message: string): void {
    console.log('emitting message: ' + message);
    this.socket.emit('message', message);
  }

  // link message event to rxjs data source
  public onMessage (): Observable<string> {
    return fromEvent(this.socket, 'message');
  }

  // disconnect - used when unmounting
  public disconnect (): void {
    this.socket.disconnect();
  }
}
