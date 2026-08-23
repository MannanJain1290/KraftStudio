/**
 * Socket.io singleton
 * Initialize once in server.js, then import `io` anywhere to emit events.
 */

let io;

export const initSocket = (httpServer) => {
    const { Server } = import('socket.io');
    io = new Server(httpServer, {
        cors: {
            origin: process.env.CLIENT_URL || 'http://localhost:5173',
            methods: ['GET', 'POST'],
            credentials: true,
        },
    });

    io.on('connection', (socket) => {
        console.log(`[Socket] Client connected: ${socket.id}`);

        // Customer joins a private room for their specific order
        socket.on('join_order_room', (orderId) => {
            socket.join(`order_${orderId}`);
            console.log(`[Socket] ${socket.id} joined order room: order_${orderId}`);
        });

        socket.on('disconnect', () => {
            console.log(`[Socket] Client disconnected: ${socket.id}`);
        });
    });

    return io;
};

/**
 * Emit a live status update to all clients watching a specific order
 */
export const emitOrderStatusUpdate = (orderId, status) => {
    if (!io) {
        console.warn('[Socket] io not initialized yet');
        return;
    }
    io.to(`order_${orderId}`).emit('order_status_updated', { orderId, status, timestamp: new Date().toISOString() });
    console.log(`[Socket] Emitted status '${status}' to order_${orderId}`);
};

export const getIO = () => io;
