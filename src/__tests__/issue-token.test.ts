import { CourierClient } from "..";
import { ICourierAuthIssueTokenParameters, ICourierAuthIssueTokenResponse } from "../issue-token/types";
import mockRequests from "./lib/mock-requests";

const mockRequest: ICourierAuthIssueTokenParameters = {
  scope: "user_id:example_user_id read:messages",
  expires_in: "2 days"
}

const mockResponse: ICourierAuthIssueTokenResponse = {
  token: "example_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InVzZXJfaW"
};

describe("Courier Issue Token", () => {

  beforeEach(() => {
    mockRequests([
      {
        method: "POST",
        path: `/auth/issue-token`,
        response: { body: mockResponse }
      },
    ]);
  });

  test("should issue token", async () => {

    const { issueToken } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(issueToken(mockRequest)).resolves.toMatchObject(mockResponse);

  });

});