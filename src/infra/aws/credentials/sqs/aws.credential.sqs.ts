
import dotenv  from "dotenv"
dotenv.config();


export interface ISQSCredentials {
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
  queueUrl: string;
}

const sqsCredentials: ISQSCredentials = {
  region: String(process.env.AWS_REGION),
  credentials: {
    accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
    secretAccessKey: String(process.env.AWS_SECRET_ACCESS_KEY),
  },
  queueUrl: String(process.env.AWS_QUEUE_URL)
};

export default sqsCredentials 