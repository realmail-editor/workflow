import { Connection, WorkflowClient } from '@temporalio/client';

const connection = new Connection({
  // // Connect to localhost with default ConnectionOptions.
  // // In production, pass options to the Connection constructor to configure TLS and other settings:
  // address: 'foo.bar.tmprl.cloud', // as provisioned
  // tls: {} // as provisioned
});

const client = new WorkflowClient(connection.service, {
  // namespace: 'default', // change if you have a different namespace
});

export { client, connection };
