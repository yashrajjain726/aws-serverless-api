import { APIGatewayProxyEvent } from "aws-lambda";

export async function hello(event: APIGatewayProxyEvent) {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event,
    }),
  };
  return response;
}
