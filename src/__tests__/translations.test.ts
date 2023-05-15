import mockRequests from "./lib/mock-requests";

import { CourierClient } from "..";
import { ITranslation } from "../translation/types";

const mockTranslation: ITranslation = {
  app: "default",
  createdAt: "",
  json: {},
  locale: "en_US",
  po: "",
  status: "DRAFT",
  updatedAt: "",
  version: "",
};

describe("CourierTranslations", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "GET",
        path: "/translations/default/en_US",
        response: {
          body: mockTranslation,
        },
      },
      {
        method: "PUT",
        path: /\/translations\/.*/,
        response: { body: mockTranslation },
      },
    ]);
  });

  const { translation } = CourierClient({
    authorizationToken: "AUTH_TOKEN",
  });

  describe("get", () => {
    it("resolves with a translation", async () => {
      expect.assertions(1);

      const response = await translation.getTranslation({
        app: "default",
        locale: "en_US",
      });
      expect(response).toMatchObject(mockTranslation);
    });
  });

  describe("put", () => {
    it("resolves with a translation", async () => {
      expect.assertions(1);

      const response = await translation.getTranslation({
        app: "default",
        locale: "en_US",
      });
      expect(response).toMatchObject(mockTranslation);
    });
  });
});
