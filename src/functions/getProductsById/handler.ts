import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { products } from '@mocks';

const getProductsById: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context): Promise<APIGatewayProxyResult> => {
  const product = products.find((p) => p.id === event.pathParameters?.productId);
  if (!product) {
    return formatJSONResponse({ message: `Product ${event.pathParameters?.productId} not found` }, 404);
  }
  return formatJSONResponse(product);
};

export const main = middyfy(getProductsById);
