import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import type { FromSchema } from 'json-schema-to-ts';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> };
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

export const formatJSONResponse = (response: Record<string, unknown>, statusCode: number = 200) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': 'https://d2fgwa05hqvp7p.cloudfront.net',
    },
    statusCode,
    body: JSON.stringify(response),
  };
};
