import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import { QueueRepository, SendResult } from "../repositories/queue.sqs.repository"
import { ISQSCredentials } from "../../aws/credentials/sqs/aws.credential.sqs";

class QueueSQSProvider implements QueueRepository {
  protected readonly sqs: SQSClient
  constructor(
    private readonly sqsConfig: ISQSCredentials,
    private readonly queueUrl: string
  ) {

    this.sqs = new SQSClient({
      region: this.sqsConfig.region,
      credentials: {
        accessKeyId: this.sqsConfig.credentials.accessKeyId,
        secretAccessKey: this.sqsConfig.credentials.secretAccessKey,
      }
    })
  }
  async sendMessageToQueue(
    message: string
  ): Promise<SendResult> {
    
    try {
      const command = new SendMessageCommand({
        QueueUrl: this.queueUrl,
        MessageBody: message
      });
  
      const sendedMessage = await this.sqs.send(command)
  
      console.log('sendedMessage', sendedMessage)
      return { message, messageId: sendedMessage.MessageId};

    } catch (error) {
      throw new Error(String(error))
    }
  }

};


export { QueueSQSProvider }