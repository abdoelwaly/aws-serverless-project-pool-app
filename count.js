import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event, context) => {
    console.log("---poc99---start-handler");
    console.log("---poc99---event", event);
    let TableName = "poc99_pool";
    try {
        const command = new ScanCommand({
            TableName: TableName,
            Select: "calculate"
        });
        
        const response = await client.send(command);

        console.log("---poc99---calculate", response);
        return response.calculate;
    } catch (e) {
        console.log("---poc99---e", e);
        return e.message;
    }
};

