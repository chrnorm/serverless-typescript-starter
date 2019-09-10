import { APIGatewayEvent, Context, ProxyResult } from "aws-lambda"; // tslint:disable-line no-implicit-dependencies (Using only the type information from the @types package.)

// Type aliases to hide the 'aws-lambda' package and have consistent, short naming.
export type ApiContext = Context;
export type ApiEvent = APIGatewayEvent;
export type ApiResponse = ProxyResult;
export type ApiHandler = (
  event: APIGatewayEvent,
  context: Context
) => Promise<ApiResponse>;
