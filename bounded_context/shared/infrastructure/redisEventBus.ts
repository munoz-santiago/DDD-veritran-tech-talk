const redis = require('redis');

import EventBus from '../domain/EventBus';
import DomainEvent from '../domain/DomainEvent';


class RedisEventBus implements EventBus {
    async publish(events: Array<DomainEvent>) {
        const client = redis.createClient({
            host: 'redis',
            port: 6379
        });

        await client.connect();

        events.forEach((event) => {
            const message = JSON.stringify({
                // id: event.id(),
                // aggreateId: event.aggreateId(),
                // occurredOn: event.occurredOn().toString(),
                // eventName: event.eventName(),
                // data: JSON.stringify(event.data() || {}),
            });
            client.publish('domain.event.was_published', message);

            console.info('|- Publish Event -----> ', message);
        });
    }

}

export default RedisEventBus;
