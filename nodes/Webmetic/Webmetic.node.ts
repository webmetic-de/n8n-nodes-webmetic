import {
  INodeType,
  INodeTypeDescription,
  NodeConnectionType,
} from "n8n-workflow";

export class Webmetic implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Webmetic",
    name: "webmetic",
    icon: "file:webmetic.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: "Get new company visits data from Webmetic",
    defaults: {
      name: "Webmetic",
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [
      {
        name: "webmeticApi",
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: "https://hub.webmetic.de",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    properties: [
      {
        displayName: "Resource",
        name: "resource",
        type: "options",
        noDataExpression: true,
        options: [
          {
            name: "New Visits",
            value: "newVisits",
            description:
              "Get companies that have visited a domain for the first time",
          },
        ],
        default: "newVisits",
      },
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        noDataExpression: true,
        displayOptions: {
          show: {
            resource: ["newVisits"],
          },
        },
        options: [
          {
            name: "Get",
            value: "get",
            action: "Get new visits",
            description:
              "Get a list of companies that have visited the specified domain for the first time",
            routing: {
              request: {
                method: "GET",
                url: "/new-visits",
              },
            },
          },
        ],
        default: "get",
      },
      {
        displayName: "Domain",
        name: "domain",
        type: "string",
        required: true,
        displayOptions: {
          show: {
            resource: ["newVisits"],
            operation: ["get"],
          },
        },
        default: "",
        placeholder: "example.com",
        description: "The domain name for retrieving new company visit data",
        routing: {
          request: {
            qs: {
              domain: "={{$value}}",
            },
          },
        },
      },
    ],
  };
}
