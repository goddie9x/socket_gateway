const { activeServiceConsumer } = require('../utils/kafka');
const { kafkaClient } = require('../utils/kafka/init');
const { KAFKA_TOPICS } = require('../utils/constants/kafka');
const socketGatewayService = require('../services/socketGatewayService');

const activeSocketGatewayKafkaConsumer = ()=>{
    activeServiceConsumer({
        kafkaClient,
        topic: KAFKA_TOPICS.SOCKET_GATEWAY_TOPIC.REQUEST,
        serviceInstance: socketGatewayService
    });
}

module.exports = activeSocketGatewayKafkaConsumer;