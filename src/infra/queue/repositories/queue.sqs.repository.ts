export interface QueueRepository {
  sendMessageToQueue: (message: string) => Promise<SendResult>;
}

export interface SendResult {
  message: string;
  messageId?: string;
}
