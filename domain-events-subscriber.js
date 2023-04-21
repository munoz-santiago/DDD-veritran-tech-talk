const redis = require('redis');

const waitUntil = (time = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, time));
};

const EVENTS_TO_LISTEN = [
    'domain.event.was_published'
];

const run = async () => {
    const client = redis.createClient({
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379
    });

    client.on('connect', () => {
        console.log('Listening events');
    });

    client.on('error', function (err) {
        console.log('Error:', err);
    });

    client.on('message', function (channel, message) {
        console.log('Received message:', message, 'on channel:', channel);
    });
    
    EVENTS_TO_LISTEN.forEach((eventName) => {
        client.subscribe(eventName);
        console.info(`Subscribed to: ${eventName}`);
    });

    await client.connect();
}

async function main() {
    await run();

    while (true) {
        await waitUntil(1000);
    }
}
  
main();
