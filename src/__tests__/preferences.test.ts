import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { CourierClient } from "../index";

import {
  ICourierPreferencesGetResponse,
  ICourierPreferencesListResponse,
  ICourierPreferencesPutResponse
} from "../preferences/types";

const mockGetResponse: ICourierPreferencesGetResponse = {
  notifications: {
    "0089248b-2ce8-423e-838e-f29f938d658b": {
      status: "OPTED_OUT"
    }
  },
  categories: {
    "1341fdf3-f34r-fss3-fs23-fsfdsv233be3": {
      status: "OPTED_IN"
    }
  }
};

const mockListResponse: ICourierPreferencesListResponse = {
  uncategorized: [
    {
      id: "9e5bb2cf-1ad4-4151-8f57-78e9754ce7dc",
      title: "Untitled Notification",
      config: {
        type: "OPT_IN"
      }
    }
  ],
  categories: [
    {
      id: "6ab6f268-d60c-43d9-9987-93f6ed835b94",
      title: "New Category",
      config: {
        type: "REQUIRED"
      }
    }
  ]
};

const mockPutResponse: ICourierPreferencesPutResponse = {
  status: "SUCCESS"
};

describe("CourierPreference", () => {
  let mock: MockAdapter;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onPut(/\/preferences\/.*/).reply(200, mockPutResponse);
    mock.onGet(/\/preferences\/.*/).reply(200, mockGetResponse);
    mock.onGet("/preferences").reply(200, mockListResponse);
  });

  test(".get", async () => {
    const { preferences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(preferences.get("RECIPIENT_ID")).resolves.toMatchObject(
      mockGetResponse
    );
  });

  test(".list", async () => {
    const { preferences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(preferences.list()).resolves.toMatchObject(mockListResponse);
  });

  test(".put", async () => {
    const { preferences } = CourierClient({
      authorizationToken: "AUTH_TOKEN"
    });

    await expect(
      preferences.put("RECIPIENT_ID", {
        notifications: {
          "9e5bb2cf-1ad4-4151-8f57-78e9754ce7dc": {
            status: "OPTED_IN"
          }
        }
      })
    ).resolves.toMatchObject(mockPutResponse);
  });
});
