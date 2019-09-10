import { ApiEvent, ApiContext, ApiResponse } from "../utils/api-interfaces";
import { successResponse } from "../utils/lambda-response";

export async function hello(
  event: ApiEvent,
  context: ApiContext
): Promise<ApiResponse> {
  return successResponse({
    message: "Go Serverless v1.0! Your function executed successfully!",
    input: event,
    context
  });
}
