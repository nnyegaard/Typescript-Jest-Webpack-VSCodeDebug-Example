import middy from "middy";
import { httpErrorHandler } from "middy/middlewares";
import { Context, Callback } from "aws-lambda";
import { add } from "./handler";

export const controller = middy(async () => {
  const result = add(2, 2);

  return {
    result
  };
}).use(httpErrorHandler());

const ctx: Context = {
  awsRequestId: "",
  callbackWaitsForEmptyEventLoop: false,
  done: () => {},
  fail: () => {},
  functionName: "",
  functionVersion: "1",
  getRemainingTimeInMillis: () => 1,
  invokedFunctionArn: "",
  logGroupName: "",
  logStreamName: "",
  memoryLimitInMB: 1,
  succeed: () => {}
};

controller("", ctx, () => {});
