import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as AudienceTypes from "../audiences/types";
import { CourierClient } from "../index";

const mockAudienceId = "software-engineers-from-sf";
const mockAudienceName = "List of people who are software engineers";
const mockFilter: AudienceTypes.FilterConfig = {
  operator: "EQ",
  path: "title",
  value: "Software Engineer"
};

const mockPutAudienceResponse: AudienceTypes.IAudiencePutResponse = {
  audience: {
    created_at: "2020-01-01T00:00:00.000Z",
    description: "audience-description",
    filter: mockFilter,
    id: mockAudienceId,
    name: mockAudienceName,
    updated_at: "2020-01-01T00:00:00.000Z"
  }
};

const mockGetAudienceResponse: AudienceTypes.IAudience = {
  created_at: "2020-01-01T00:00:00.000Z",
  description: "audience-description",
  filter: mockFilter,
  id: mockAudienceId,
  name: mockAudienceName,
  updated_at: "2020-01-01T00:00:00.000Z"
};

const mockAudienceMembersResponse: AudienceTypes.IAudienceMemberListResponse = {
  items: [
    {
      added_at: "2022-03-22T19:13:13.137Z",
      audience_id: "software-engineers-from-sf",
      audience_version: 3,
      member_id: "courier-profile-id-1",
      reason: "EQ('title', 'Software Engineer') => true"
    }
  ],
  paging: {
    cursor: "",
    more: false
  }
};

const mockAudiencesResponse: AudienceTypes.IAudienceListResponse = {
  items: [
    {
      created_at: "2022-03-21T00:56:14.860Z",
      description: "Updated descriptionss",
      filter: mockFilter,
      id: mockAudienceId,
      name: mockAudienceName,
      updated_at: "2022-03-21T05:16:57.031Z"
    }
  ],
  paging: {
    cursor: "",
    more: false
  }
};

describe("CourierAudiences", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock
      .onPut(`/audiences/${mockAudienceId}`)
      .reply(200, mockPutAudienceResponse);
    mock.onDelete(`/audiences/${mockAudienceId}`).reply(204);

    mock.onGet(`/audiences/${mockAudienceId}`).reply(200, {
      audience: mockGetAudienceResponse
    });
    mock
      .onGet(`/audiences/${mockAudienceId}/members`)
      .reply(200, mockAudienceMembersResponse);

    mock.onGet("/audiences").reply(200, mockAudiencesResponse);
  });

  test(".putAudience", async () => {
    const { audiences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      audiences.put({
        filter: {
          operator: "EQ",
          path: "title",
          value: "Software Engineer"
        },
        id: mockAudienceId,
        name: "My favorite software engineers"
      })
    ).resolves.toMatchObject(mockPutAudienceResponse.audience);
  });

  test(".getAudience", async () => {
    const { audiences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(audiences.get(mockAudienceId)).resolves.toMatchObject(
      mockGetAudienceResponse
    );
  });

  test(".listAudiences", async () => {
    const { audiences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(audiences.listAudiences()).resolves.toMatchObject(
      mockAudiencesResponse
    );
  });

  test(".listMembers", async () => {
    const { audiences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(audiences.listMembers(mockAudienceId)).resolves.toMatchObject(
      mockAudienceMembersResponse
    );
  });

  test(".listMembers", async () => {
    const { audiences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(audiences.listMembers(mockAudienceId)).resolves.toMatchObject(
      mockAudienceMembersResponse
    );
  });

  test(".delete", async () => {
    const { audiences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(audiences.delete(mockAudienceId)).resolves.not.toThrow();
  });
});
