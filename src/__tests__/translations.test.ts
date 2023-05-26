import mockRequests from "./lib/mock-requests";

import { CourierClient } from "..";

const mockTranslation = "po content";

describe("CourierTranslations", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "GET",
        path: "/translations/default/en_US",
        response: {
          body: "po content",
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
        domain: "default",
        locale: "en_US",
      });
      expect(response).toMatchObject(mockTranslation);
    });
  });

  describe("put", () => {
    it("resolves with a translation", async () => {
      expect.assertions(1);

      const response = await translation.getTranslation({
        domain: "default",
        locale: "en_US",
      });
      expect(response).toMatchObject(mockTranslation);
    });
  });
});
