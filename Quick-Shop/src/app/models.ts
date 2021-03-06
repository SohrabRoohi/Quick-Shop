export enum Action {
    JOINED,
    LEFT,
    RENAME
}

// Socket.io events
export enum Event {
    CONNECT = 'connect',
    DISCONNECT = 'disconnect'
}

export class User {
    x: number;
    y: number;
}

export class Message {
    positions: User[];
}

export class Item {
  section: string;
  items: string[];
}
