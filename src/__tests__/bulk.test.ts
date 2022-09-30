import mockRequests from "./lib/mock-requests";

import { CourierClient } from "../index";
import {
  ICourierBulkCreateJobResponse,
  ICourierBulkGetJobResponse,
  ICourierBulkGetJobUsersResponse,
  ICourierBulkIngestUsersResponse
} from "../bulk/types";

const mockCreateJobResponse: ICourierBulkCreateJobResponse = {
  jobId: "1-61eb3d79-55abd6f73597a7afc3a6e11d"
};

const mockIngestUsersResponse: ICourierBulkIngestUsersResponse = {
  total: 1,
  errors: []
};

const mockGetJobResponse: ICourierBulkGetJobResponse = {
  job: {
    definition: {
      event: "foo"
    },
    enqueued: 1,
    failures: 0,
    received: 1,
    status: "COMPLETED"
  }
};

const mockGetJobUsersResponse: ICourierBulkGetJobUsersResponse = {
  items: [
    {
      profile: {
        email: "foo@bar.com"
      },
      data: {
        recipientName: "John Doe"
      },
      recipient: "iamC8st6OQVvngG_7ORgP",
      status: "ENQUEUED"
    }
  ],
  paging: {
    more: false
  }
};

describe("CourierBulk", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "POST",
        path: "/bulk",
        status: 201,
        body: mockCreateJobResponse
      },
      {
        method: "POST",
        path: /\/bulk\/.*/,
        body: mockIngestUsersResponse
      },
      {
        method: "POST",
        path: /\/bulk\/.*\/run/,
        status: 204
      },
      {
        method: "GET",
        path: /\/bulk\/.*\/users/,
        body: mockGetJobUsersResponse
      },
      {
        method: "GET",
        path: /\/bulk\/.*/,
        body: mockGetJobResponse
      }
    ]);
  });

  test(".createJob", async () => {
    const { bulk } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      bulk.createJob({
        message: {
          event: "foo"
        }
      })
    ).resolves.toMatchObject(mockCreateJobResponse);
  });

  test(".ingestUsers", async () => {
    const { bulk } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      bulk.ingestUsers({
        jobId: "1-61eb3d79-55abd6f73597a7afc3a6e11d",
        users: [
          {
            profile: {
              email: "foo@bar.com"
            },
            data: {
              recipientName: "John Doe"
            }
          }
        ]
      })
    ).resolves.toMatchObject(mockIngestUsersResponse);
  });

  test(".runJob", async () => {
    const { bulk } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      bulk.runJob({
        jobId: "1-61eb3d79-55abd6f73597a7afc3a6e11d"
      })
    ).resolves.toBeUndefined();
  });

  test(".getJob", async () => {
    const { bulk } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      bulk.getJob({
        jobId: "1-61eb3d79-55abd6f73597a7afc3a6e11d"
      })
    ).resolves.toMatchObject(mockGetJobResponse);
  });

  test(".getJobUsers", async () => {
    const { bulk } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      bulk.getJobUsers({
        jobId: "1-61eb3d79-55abd6f73597a7afc3a6e11d"
      })
    ).resolves.toMatchObject(mockGetJobUsersResponse);
  });
});
