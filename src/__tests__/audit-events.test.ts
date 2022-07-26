import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "..";
import { IAuditEvent } from "../audit-events/types";

const mock = new MockAdapter(axios);
const mockAuditEvent: IAuditEvent = {
  auditEventId: "foo",
  source: "studio",
  timestamp: "123",
  type: "mock"
};

describe("CourierAudiences", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mock.reset();
  });

  const { auditEvents } = CourierClient({
    authorizationToken: "AUTH_TOKEN"
  });

  describe("list", () => {
    it("resolves with a list of audit events", async () => {
      expect.assertions(1);

      mock
        .onGet("/audit-events")
        .reply(200, { paging: { more: false }, results: [mockAuditEvent] });
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

      mock.onGet("/audit-events/foo").reply(200, mockAuditEvent);
      const response = await auditEvents.get({ auditEventId: "foo" });
      expect(response).toMatchObject(mockAuditEvent);
    });
  });
});
