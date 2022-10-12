import { APIGatewayProxyHandler, APIGatewayProxyEvent } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { NotFoundError } from '@errors';
import { products } from '@mocks';

const getProductsById: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, _context) => {
  const product = products.find((p) => p.id === event.pathParameters?.productId);
  if (!product) {
    // throw new NotFoundError(`Product not found ${event.pathParameters?.productId}`);
  }
  return formatJSONResponse(product);
};

export const main = middyfy(getProductsById);
