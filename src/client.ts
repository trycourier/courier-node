import { accounts } from "./accounts";
import { audiences } from "./audiences";
import { auditEvents } from "./audit-events";
import { automations } from "./automations";
import {
  createBrand,
  deleteBrand,
  getBrand,
  getBrands,
  replaceBrand,
} from "./brands";
import { bulk } from "./bulk";
import { lists } from "./lists";
import { notifications } from "./notifications";
import { preferences } from "./preferences";
import {
  addRecipientToLists,
  deleteProfile,
  getProfile,
  getRecipientSubscriptions,
  mergeProfile,
  removeRecipientFromAllLists,
  replaceProfile,
} from "./profile";
import { send } from "./send";
import { tokenManagement } from "./token-management";
import { users } from "./users";

import {
  ICourierClient,
  ICourierClientConfiguration,
  ICourierMessageGetHistoryResponse,
  ICourierMessageGetOutputResponse,
  ICourierMessageGetResponse,
  ICourierMessagesGetParameters,
  ICourierMessagesGetResponse,
} from "./types";

const getMessage = (options: ICourierClientConfiguration) => {
  return async (messageId: string): Promise<ICourierMessageGetResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetResponse>(
      `/messages/${messageId}`
    );
    return res.data;
  };
};

const getMessageHistory = (options: ICourierClientConfiguration) => {
  return async (
    messageId: string
  ): Promise<ICourierMessageGetHistoryResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetHistoryResponse>(
      `/messages/${messageId}/history`
    );
    return res.data;
  };
};

const getMessageOutput = (options: ICourierClientConfiguration) => {
  return async (
    messageId: string
  ): Promise<ICourierMessageGetOutputResponse> => {
    const res = await options.httpClient.get<ICourierMessageGetOutputResponse>(
      `/messages/${messageId}/output`
    );
    return res.data;
  };
};

const getMessages = (options: ICourierClientConfiguration) => {
  return async (
    params?: ICourierMessagesGetParameters
  ): Promise<ICourierMessagesGetResponse> => {
    const res = await options.httpClient.get<ICourierMessagesGetResponse>(
      "/messages",
      {
        params: {
          cursor: params?.cursor,
          event: params?.eventId,
          list: params?.listId,
          messageId: params?.messageId,
          notification: params?.notificationId,
          recipient: params?.recipientId,
          status: params?.status,
          tags: params?.tags,
        },
      }
    );
    return res.data;
  };
};

export const client = (
  options: ICourierClientConfiguration
): ICourierClient => {
  return {
    accounts: accounts(options),
    addRecipientToLists: addRecipientToLists(options),
    audiences: audiences(options),
    auditEvents: auditEvents(options),
    automations: automations(options),
    bulk: bulk(options),
    createBrand: createBrand(options),
    deleteBrand: deleteBrand(options),
    deleteProfile: deleteProfile(options),
    getBrand: getBrand(options),
    getBrands: getBrands(options),
    getMessage: getMessage(options),
    getMessageHistory: getMessageHistory(options),
    getMessageOutput: getMessageOutput(options),
    getMessages: getMessages(options),
    getProfile: getProfile(options),
    getRecipientSubscriptions: getRecipientSubscriptions(options),
    lists: lists(options),
    mergeProfile: mergeProfile(options),
    notifications: notifications(options),
    preferences: preferences(options),
    removeRecipientFromAllLists: removeRecipientFromAllLists(options),
    replaceBrand: replaceBrand(options),
    replaceProfile: replaceProfile(options),
    send: send(options),
    tokenManagement: tokenManagement(options),
    users: users(options),
  };
};
