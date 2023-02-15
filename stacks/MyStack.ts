import { StackContext, Api, NextjsSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}

export default function MyStack({ stack }: StackContext) {

  // ... existing constructs

  // Create the Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "my-next-app/",
  });

  const siteURL = site.url as string

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: siteURL,
  });
}
