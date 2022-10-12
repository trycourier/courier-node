import mockRequests from "./lib/mock-requests";

import { CourierClient } from "..";
import { IAuditEvent } from "../audit-events/types";

const mockAuditEvent: IAuditEvent = {
  auditEventId: "foo",
  source: "studio",
  timestamp: "123",
  type: "mock"
};

describe("CourierAudiences", () => {
  beforeAll(() => {
    mockRequests([
      {
        method: "GET",
        path: "/audit-events",
        response: {
          body: { paging: { more: false }, results: [mockAuditEvent] }
        }
      },
      {
        method: "GET",
        path: "/audit-events/foo",
        response: { body: mockAuditEvent }
      }
    ]);
  });

  const { auditEvents } = CourierClient({
    authorizationToken: "AUTH_TOKEN"
  });

  describe("list", () => {
    it("resolves with a list of audit events", async () => {
      expect.assertions(1);

      const response = await auditEvents.list({});
      expect(response).toMatchObject({
        paging: { more: false },
        results: [mockAuditEvent]
      });
    });
  });

  describe("get", () => {
    it("resolves with an audit event", async () => {
      expect.assertions(1);

      const response = await auditEvents.get({ auditEventId: "foo" });
      expect(response).toMatchObject(mockAuditEvent);
    });
  });
});
