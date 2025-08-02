class WebSocketClient {
    constructor(host) {
        this.host = host || '127.0.0.1:24050';
        this.url = '/ws';
        this.socket = null;
        this.listeners = [];
    };

    connect() {
        // Connest to WebSocket Server
        console.log(`[WS] Connecting to ws://${this.host}${this.url}`);
        this.socket = new WebSocket(`ws://${this.host}${this.url}`);

        // WebSocket Event Handlers
        this.socket.onopen = () => console.log('[WS] Connection Established');
        this.socket.onclose = () => console.log('[WS] Connection Closed');
        this.socket.onerror = (error) => console.error(`[WS] Error:\n ${error}`);

        this.socket.onmessage = (event) => {
            console.log('[WS] Message Received');
            this.listeners.forEach((cb) => cb(event.data));
        };
    };

    subscribe(callback) {
        this.listeners.push(callback);
    };

    unsubscribe(callback) {
        this.listeners = this.listeners.filter((cb) => cb !== callback);
    };

    close() {
        if (this.socket) this.socket.close();
    };
};

export default new WebSocketClient();
