import type { AWS } from "@serverless/typescript";

import create from "@functions/create";

const serverlessConfiguration: AWS = {
  service: "serverless-typescript-dynamodb-template",
  frameworkVersion: "3",

  plugins: [
    "serverless-domain-manager",
    "serverless-esbuild",
    "serverless-dynamodb-local",
    "serverless-offline",
  ],

  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "eu-west-1",

    deploymentBucket: {
      name: "my-deployment-bucket-${param:region}",
      blockPublicAccess: true,
    },

    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },

    environment: {
      DYNAMODB_TABLE: "${param:dynamodbTable}",
      ALLOW_ORIGIN: "${param:allowOrigin}",
    },

    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: [
          "dynamodb:GetItem",
          "dynamodb:PutItem",
          "dynamodb:Scan",
          "dynamodb:Query",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
        ],
        Resource: [
          "arn:aws:dynamodb:${param:region}:${param:accountId}:table/${param:dynamodbTable}",
        ],
      },
    ],
  },

  params: {
    default: {
      stage: "${opt:stage, self:provider.stage, 'dev'}",
      accountId: "${aws:accountId}",
      region: "${opt:region, self:provider.region}",
      dynamodbTable: "${self:service}-${param:stage}",

      dynamodbTableReadThroughput: 1,
      dynamodbTableWriteThroughput: 1,
    },

    dev: {
      domainName: "my-dev-domain",
      allowOrigin: "*",
    },

    staging: {
      domainName: "my-staging-domain",
      allowOrigin: "*",
    },

    prod: {
      domainName: "my-prod-domain",
      allowOrigin: "${env:ALLOW_ORIGIN, ''}",
    },
  },

  package: { individually: true },

  // import the function via paths
  functions: { create },

  custom: {
    customDomain: {
      domainName: "${param:domainName}",
      basePath: "my-base-path",
      stage: "${param:stage}",
      createRoute53Record: true,
    },

    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },

    dynamodb: {
      stages: ["dev"],
      start: {
        port: 8000,
        inMemory: true,
        heapInitial: "200m",
        heapMax: "1g",
        migrate: true,
        seed: true,
        convertEmptyValues: true,
        // Uncomment only if you already have a DynamoDB running locally
        noStart: true,
        docker: true,
        host: "localhost",
      },

      seed: {
        domain: {
          sources: [
            {
              table: "${param:dynamodbTable}",
              sources: ["./offline/seed-data.json"],
            },
          ],
        },
      },
    },

    ["serverless-offline"]: {
      httpPort: 8080,
      babelOptions: {
        presets: ["env"],
      },
    },
  },

  resources: {
    Resources: {
      UsersTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "${param:dynamodbTable}",

          AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],

          KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],

          ProvisionedThroughput: {
            ReadCapacityUnits: "${param:dynamodbTableReadThroughput}",
            WriteCapacityUnits: "${param:dynamodbTableWriteThroughput}",
          },
        },
      },

      GatewayResponseDefault4XX: {
        Type: "AWS::ApiGateway::GatewayResponse",
        Properties: {
          ResponseParameters: {
            "gatewayresponse.header.Access-Control-Allow-Origin":
              "'${param:allowOrigin}'",
          },
          ResponseType: "DEFAULT_4XX",
          RestApiId: {
            Ref: "ApiGatewayRestApi",
          },
        },
      },

      GatewayResponseDefault5XX: {
        Type: "AWS::ApiGateway::GatewayResponse",
        Properties: {
          ResponseParameters: {
            "gatewayresponse.header.Access-Control-Allow-Origin":
              "'${param:allowOrigin}'",
          },
          ResponseType: "DEFAULT_5XX",
          RestApiId: {
            Ref: "ApiGatewayRestApi",
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
