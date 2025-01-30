import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    console.log("---poc99---start-handler");
    console.log("---poc99---event", event);
    
    let TableName = "poc99_pool";
    let body;

    try {
        if(event.body){
            try{
                body = JSON.parse(event.body);
            } catch(e){
                body = event.body;
            }
        } else {
            body = event;
        }
        console.log("---poc99---body", body);

        if(!body.email){
            return "where is your email!";
        } else if(!body.phone){
            return "where is your phone!";
        }if(!body.name){
            return "where is your name!";
        }
        
         
        const command = new PutCommand({
            TableName: TableName,
            Item: {
              email: body.email,
              phone: body.phone,
              name: body.name,
              won: "no"
            },
        });
          
        const dynamo_response = await docClient.send(command);
        console.log("---poc99---dynamo-response", dynamo_response);
        return "Thanks, Your data may have been received;)";
          
    } catch (e) {
        console.log("---poc99---e", e);
        return e.message;
    }
};