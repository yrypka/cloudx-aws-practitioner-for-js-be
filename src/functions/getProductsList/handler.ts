import { APIGatewayProxyHandler } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { products } from '../../mock-data';

const getProductsList: APIGatewayProxyHandler = async (_event, _context) => {
  return formatJSONResponse({ products });
};

export const main = middyfy(getProductsList);
