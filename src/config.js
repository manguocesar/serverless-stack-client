const config = {
    s3: {
      REGION: "eu-west-1",
      BUCKET: "great-notes-bucket",
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://ft1oqykdd6.execute-api.eu-west-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_yJDUCbgVh",
      APP_CLIENT_ID: "758s057k5ltr7qid8s6f195960",
      IDENTITY_POOL_ID: "eu-west-1:d5271acc-b860-4210-99d6-e2cfe7ba1591",
    },
  };
  
  export default config;
  