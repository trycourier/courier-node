import mockRequests from "./lib/mock-requests";

import { CourierClient } from "..";
import { IUserToken } from "../token-management/types";

const mockToken: IUserToken = {
  token: "abc",
  provider_key: "apn"
};

describe("CourierAudiences", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "PUT",
        path: "/users/me/tokens",
        response: { status: 204 }
      },
      {
        method: "PUT",
        path: "/users/me/tokens/abc",
        response: { status: 204 }
      },
      {
        method: "PATCH",
        path: "/users/me/tokens/abc",
        response: { status: 204 }
      },
      {
        method: "GET",
        path: "/users/me/tokens/abc",
        response: { body: mockToken }
      },
      {
        method: "GET",
        path: "/users/me/tokens",
        response: { body: { tokens: [mockToken] } }
      },
      {
        method: "DELETE",
        path: "/users/me/tokens/abc",
        response: { status: 204 }
      }
    ]);
  });

  const { tokenManagement } = CourierClient({
    authorizationToken: "AUTH_TOKEN"
  });

  describe("putUserTokens", () => {
    it("resolves void when the put call succeeds", async () => {
      expect.assertions(1);

      const prom = tokenManagement.putUserTokens({
        user_id: "me",
        tokens: [mockToken]
      });
      await expect(prom).resolves.not.toThrow();
    });
  });

  describe("putUserToken", () => {
    it("resolves void when the put call succeeds", async () => {
      expect.assertions(1);

      const prom = tokenManagement.putUserToken({
        user_id: "me",
        token: mockToken
      });
      await expect(prom).resolves.not.toThrow();
    });
  });

  describe("patchUserToken", () => {
    it("resolves void when the put call succeeds", async () => {
      expect.assertions(1);

      const prom = tokenManagement.patchUserToken({
        user_id: "me",
        token: "abc",
        patch: [{ op: "replace", path: "status", value: "revoked" }]
      });
      await expect(prom).resolves.not.toThrow();
    });
  });

  describe("getUserToken", () => {
    it("resolves with the token when the get call succeeds", async () => {
      expect.assertions(1);

      const result = await tokenManagement.getUserToken({
        user_id: "me",
        token: "abc"
      });
      expect(result).toMatchObject(mockToken);
    });
  });

  describe("getUserTokens", () => {
    it("resolves with the tokens when the get call succeeds", async () => {
      expect.assertions(1);

      const result = await tokenManagement.getUserTokens({
        user_id: "me"
      });
      expect(result).toMatchObject({ tokens: [mockToken] });
    });
  });

  describe("deleteUserToken", () => {
    it("resolves with the token when the delete call succeeds", async () => {
      expect.assertions(1);

      const prom = tokenManagement.deleteUserToken({
        user_id: "me",
        token: "abc"
      });
      await expect(prom).resolves.not.toThrow();
    });
  });
});
