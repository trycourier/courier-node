import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "..";
import { IUserToken } from "../token-management/types";

const mock = new MockAdapter(axios);
const mockToken: IUserToken = {
  token: "abc",
  provider_key: "apn"
};

describe("CourierAudiences", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mock.reset();
  });

  const { tokenManagement } = CourierClient({
    authorizationToken: "AUTH_TOKEN"
  });

  describe("putUserTokens", () => {
    it("resolves void when the put call succeeds", async () => {
      expect.assertions(1);

      mock.onPut("/users/me/tokens").reply(204);
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

      mock.onPut("/users/me/tokens/abc").reply(204);
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

      mock.onPatch("/users/me/tokens/abc").reply(204);
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

      mock.onGet("/users/me/tokens/abc").reply(200, mockToken);
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

      mock.onGet("/users/me/tokens").reply(200, { tokens: [mockToken] });
      const result = await tokenManagement.getUserTokens({
        user_id: "me"
      });
      expect(result).toMatchObject({ tokens: [mockToken] });
    });
  });

  describe("deleteUserToken", () => {
    it("resolves with the token when the delete call succeeds", async () => {
      expect.assertions(1);

      mock.onDelete("/users/me/tokens/abc").reply(204);
      const prom = tokenManagement.deleteUserToken({
        user_id: "me",
        token: "abc"
      });
      await expect(prom).resolves.not.toThrow();
    });
  });
});
