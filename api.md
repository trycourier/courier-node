# Send

Types:

- <code><a href="./src/resources/send.ts">BaseMessage</a></code>
- <code><a href="./src/resources/send.ts">BaseMessageSendTo</a></code>
- <code><a href="./src/resources/send.ts">Content</a></code>
- <code><a href="./src/resources/send.ts">Message</a></code>
- <code><a href="./src/resources/send.ts">MessageContext</a></code>
- <code><a href="./src/resources/send.ts">MsTeamsBaseProperties</a></code>
- <code><a href="./src/resources/send.ts">Recipient</a></code>
- <code><a href="./src/resources/send.ts">RoutingMethod</a></code>
- <code><a href="./src/resources/send.ts">SlackBaseProperties</a></code>
- <code><a href="./src/resources/send.ts">Utm</a></code>
- <code><a href="./src/resources/send.ts">SendMessageResponse</a></code>

Methods:

- <code title="post /send">client.send.<a href="./src/resources/send.ts">message</a>({ ...params }) -> SendMessageResponse</code>

# Audiences

Types:

- <code><a href="./src/resources/audiences.ts">Audience</a></code>
- <code><a href="./src/resources/audiences.ts">Filter</a></code>
- <code><a href="./src/resources/audiences.ts">FilterConfig</a></code>
- <code><a href="./src/resources/audiences.ts">NestedFilterConfig</a></code>
- <code><a href="./src/resources/audiences.ts">Paging</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceUpdateResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceListResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceListMembersResponse</a></code>

Methods:

- <code title="get /audiences/{audience_id}">client.audiences.<a href="./src/resources/audiences.ts">retrieve</a>(audienceID) -> Audience</code>
- <code title="put /audiences/{audience_id}">client.audiences.<a href="./src/resources/audiences.ts">update</a>(audienceID, { ...params }) -> AudienceUpdateResponse</code>
- <code title="get /audiences">client.audiences.<a href="./src/resources/audiences.ts">list</a>({ ...params }) -> AudienceListResponse</code>
- <code title="delete /audiences/{audience_id}">client.audiences.<a href="./src/resources/audiences.ts">delete</a>(audienceID) -> void</code>
- <code title="get /audiences/{audience_id}/members">client.audiences.<a href="./src/resources/audiences.ts">listMembers</a>(audienceID, { ...params }) -> AudienceListMembersResponse</code>

# AuditEvents

Types:

- <code><a href="./src/resources/audit-events.ts">AuditEvent</a></code>
- <code><a href="./src/resources/audit-events.ts">AuditEventListResponse</a></code>

Methods:

- <code title="get /audit-events/{audit-event-id}">client.auditEvents.<a href="./src/resources/audit-events.ts">retrieve</a>(auditEventID) -> AuditEvent</code>
- <code title="get /audit-events">client.auditEvents.<a href="./src/resources/audit-events.ts">list</a>({ ...params }) -> AuditEventListResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthIssueTokenResponse</a></code>

Methods:

- <code title="post /auth/issue-token">client.auth.<a href="./src/resources/auth.ts">issueToken</a>({ ...params }) -> AuthIssueTokenResponse</code>

# Automations

Methods:

- <code title="post /automations/invoke">client.automations.<a href="./src/resources/automations/automations.ts">invokeAdHoc</a>({ ...params }) -> AutomationInvokeResponse</code>
- <code title="post /automations/{templateId}/invoke">client.automations.<a href="./src/resources/automations/automations.ts">invokeByTemplate</a>(templateID, { ...params }) -> AutomationInvokeResponse</code>

## Invoke

Types:

- <code><a href="./src/resources/automations/invoke.ts">AutomationInvokeParams</a></code>
- <code><a href="./src/resources/automations/invoke.ts">AutomationInvokeResponse</a></code>
- <code><a href="./src/resources/automations/invoke.ts">AutomationStep</a></code>
- <code><a href="./src/resources/automations/invoke.ts">MergeAlgorithm</a></code>

# Brands

Types:

- <code><a href="./src/resources/brands.ts">Brand</a></code>
- <code><a href="./src/resources/brands.ts">BrandSettings</a></code>
- <code><a href="./src/resources/brands.ts">BrandSnippets</a></code>
- <code><a href="./src/resources/brands.ts">BrandListResponse</a></code>

Methods:

- <code title="post /brands">client.brands.<a href="./src/resources/brands.ts">create</a>({ ...params }) -> Brand</code>
- <code title="get /brands/{brand_id}">client.brands.<a href="./src/resources/brands.ts">retrieve</a>(brandID) -> Brand</code>
- <code title="put /brands/{brand_id}">client.brands.<a href="./src/resources/brands.ts">update</a>(brandID, { ...params }) -> Brand</code>
- <code title="get /brands">client.brands.<a href="./src/resources/brands.ts">list</a>({ ...params }) -> BrandListResponse</code>
- <code title="delete /brands/{brand_id}">client.brands.<a href="./src/resources/brands.ts">delete</a>(brandID) -> void</code>

# Bulk

Types:

- <code><a href="./src/resources/bulk.ts">InboundBulkMessage</a></code>
- <code><a href="./src/resources/bulk.ts">InboundBulkMessageUser</a></code>
- <code><a href="./src/resources/bulk.ts">UserRecipient</a></code>
- <code><a href="./src/resources/bulk.ts">BulkCreateJobResponse</a></code>
- <code><a href="./src/resources/bulk.ts">BulkListUsersResponse</a></code>
- <code><a href="./src/resources/bulk.ts">BulkRetrieveJobResponse</a></code>

Methods:

- <code title="post /bulk/{job_id}">client.bulk.<a href="./src/resources/bulk.ts">addUsers</a>(jobID, { ...params }) -> void</code>
- <code title="post /bulk">client.bulk.<a href="./src/resources/bulk.ts">createJob</a>({ ...params }) -> BulkCreateJobResponse</code>
- <code title="get /bulk/{job_id}/users">client.bulk.<a href="./src/resources/bulk.ts">listUsers</a>(jobID, { ...params }) -> BulkListUsersResponse</code>
- <code title="get /bulk/{job_id}">client.bulk.<a href="./src/resources/bulk.ts">retrieveJob</a>(jobID) -> BulkRetrieveJobResponse</code>
- <code title="post /bulk/{job_id}/run">client.bulk.<a href="./src/resources/bulk.ts">runJob</a>(jobID) -> void</code>

# Inbound

Types:

- <code><a href="./src/resources/inbound.ts">InboundTrackEventResponse</a></code>

Methods:

- <code title="post /inbound/courier">client.inbound.<a href="./src/resources/inbound.ts">trackEvent</a>({ ...params }) -> InboundTrackEventResponse</code>

# Lists

Types:

- <code><a href="./src/resources/lists/lists.ts">List</a></code>
- <code><a href="./src/resources/lists/lists.ts">ListListResponse</a></code>

Methods:

- <code title="get /lists/{list_id}">client.lists.<a href="./src/resources/lists/lists.ts">retrieve</a>(listID) -> List</code>
- <code title="put /lists/{list_id}">client.lists.<a href="./src/resources/lists/lists.ts">update</a>(listID, { ...params }) -> List</code>
- <code title="get /lists">client.lists.<a href="./src/resources/lists/lists.ts">list</a>({ ...params }) -> ListListResponse</code>
- <code title="delete /lists/{list_id}">client.lists.<a href="./src/resources/lists/lists.ts">delete</a>(listID) -> void</code>
- <code title="put /lists/{list_id}/restore">client.lists.<a href="./src/resources/lists/lists.ts">restore</a>(listID) -> void</code>

## Subscriptions

Types:

- <code><a href="./src/resources/lists/subscriptions.ts">PutSubscriptionsRecipient</a></code>
- <code><a href="./src/resources/lists/subscriptions.ts">RecipientPreferences</a></code>
- <code><a href="./src/resources/lists/subscriptions.ts">SubscriptionListResponse</a></code>

Methods:

- <code title="get /lists/{list_id}/subscriptions">client.lists.subscriptions.<a href="./src/resources/lists/subscriptions.ts">list</a>(listID, { ...params }) -> SubscriptionListResponse</code>
- <code title="post /lists/{list_id}/subscriptions">client.lists.subscriptions.<a href="./src/resources/lists/subscriptions.ts">add</a>(listID, { ...params }) -> void</code>
- <code title="put /lists/{list_id}/subscriptions">client.lists.subscriptions.<a href="./src/resources/lists/subscriptions.ts">subscribe</a>(listID, { ...params }) -> void</code>
- <code title="put /lists/{list_id}/subscriptions/{user_id}">client.lists.subscriptions.<a href="./src/resources/lists/subscriptions.ts">subscribeUser</a>(userID, { ...params }) -> void</code>
- <code title="delete /lists/{list_id}/subscriptions/{user_id}">client.lists.subscriptions.<a href="./src/resources/lists/subscriptions.ts">unsubscribeUser</a>(userID, { ...params }) -> void</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageDetails</a></code>
- <code><a href="./src/resources/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageGetContentResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageHistoryResponse</a></code>

Methods:

- <code title="get /messages/{message_id}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(messageID) -> MessageRetrieveResponse</code>
- <code title="get /messages">client.messages.<a href="./src/resources/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>
- <code title="post /messages/{message_id}/cancel">client.messages.<a href="./src/resources/messages.ts">cancel</a>(messageID) -> MessageDetails</code>
- <code title="get /messages/{message_id}/output">client.messages.<a href="./src/resources/messages.ts">getContent</a>(messageID) -> MessageGetContentResponse</code>
- <code title="get /messages/{message_id}/history">client.messages.<a href="./src/resources/messages.ts">history</a>(messageID, { ...params }) -> MessageHistoryResponse</code>

# Requests

Methods:

- <code title="put /requests/{request_id}/archive">client.requests.<a href="./src/resources/requests.ts">archive</a>(requestID) -> void</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications/notifications.ts">MessageRouting</a></code>
- <code><a href="./src/resources/notifications/notifications.ts">MessageRoutingChannel</a></code>
- <code><a href="./src/resources/notifications/notifications.ts">NotificationGetContent</a></code>
- <code><a href="./src/resources/notifications/notifications.ts">NotificationListResponse</a></code>

Methods:

- <code title="get /notifications">client.notifications.<a href="./src/resources/notifications/notifications.ts">list</a>({ ...params }) -> NotificationListResponse</code>
- <code title="get /notifications/{id}/content">client.notifications.<a href="./src/resources/notifications/notifications.ts">retrieveContent</a>(id) -> NotificationGetContent</code>

## Draft

Methods:

- <code title="get /notifications/{id}/draft/content">client.notifications.draft.<a href="./src/resources/notifications/draft.ts">retrieveContent</a>(id) -> NotificationGetContent</code>

## Checks

Types:

- <code><a href="./src/resources/notifications/checks.ts">BaseCheck</a></code>
- <code><a href="./src/resources/notifications/checks.ts">Check</a></code>
- <code><a href="./src/resources/notifications/checks.ts">CheckUpdateResponse</a></code>
- <code><a href="./src/resources/notifications/checks.ts">CheckListResponse</a></code>

Methods:

- <code title="put /notifications/{id}/{submissionId}/checks">client.notifications.checks.<a href="./src/resources/notifications/checks.ts">update</a>(submissionID, { ...params }) -> CheckUpdateResponse</code>
- <code title="get /notifications/{id}/{submissionId}/checks">client.notifications.checks.<a href="./src/resources/notifications/checks.ts">list</a>(submissionID, { ...params }) -> CheckListResponse</code>
- <code title="delete /notifications/{id}/{submissionId}/checks">client.notifications.checks.<a href="./src/resources/notifications/checks.ts">delete</a>(submissionID, { ...params }) -> void</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles/profiles.ts">ProfileCreateResponse</a></code>
- <code><a href="./src/resources/profiles/profiles.ts">ProfileRetrieveResponse</a></code>
- <code><a href="./src/resources/profiles/profiles.ts">ProfileReplaceResponse</a></code>

Methods:

- <code title="post /profiles/{user_id}">client.profiles.<a href="./src/resources/profiles/profiles.ts">create</a>(userID, { ...params }) -> ProfileCreateResponse</code>
- <code title="get /profiles/{user_id}">client.profiles.<a href="./src/resources/profiles/profiles.ts">retrieve</a>(userID) -> ProfileRetrieveResponse</code>
- <code title="patch /profiles/{user_id}">client.profiles.<a href="./src/resources/profiles/profiles.ts">update</a>(userID, { ...params }) -> void</code>
- <code title="delete /profiles/{user_id}">client.profiles.<a href="./src/resources/profiles/profiles.ts">delete</a>(userID) -> void</code>
- <code title="put /profiles/{user_id}">client.profiles.<a href="./src/resources/profiles/profiles.ts">replace</a>(userID, { ...params }) -> ProfileReplaceResponse</code>

## Lists

Types:

- <code><a href="./src/resources/profiles/lists.ts">ListRetrieveResponse</a></code>
- <code><a href="./src/resources/profiles/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/profiles/lists.ts">ListSubscribeResponse</a></code>

Methods:

- <code title="get /profiles/{user_id}/lists">client.profiles.lists.<a href="./src/resources/profiles/lists.ts">retrieve</a>(userID, { ...params }) -> ListRetrieveResponse</code>
- <code title="delete /profiles/{user_id}/lists">client.profiles.lists.<a href="./src/resources/profiles/lists.ts">delete</a>(userID) -> ListDeleteResponse</code>
- <code title="post /profiles/{user_id}/lists">client.profiles.lists.<a href="./src/resources/profiles/lists.ts">subscribe</a>(userID, { ...params }) -> ListSubscribeResponse</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants/tenants.ts">DefaultPreferences</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">Tenant</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantListResponse</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantListUsersResponse</a></code>

Methods:

- <code title="get /tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">retrieve</a>(tenantID) -> Tenant</code>
- <code title="put /tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">update</a>(tenantID, { ...params }) -> Tenant</code>
- <code title="get /tenants">client.tenants.<a href="./src/resources/tenants/tenants.ts">list</a>({ ...params }) -> TenantListResponse</code>
- <code title="delete /tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">delete</a>(tenantID) -> void</code>
- <code title="get /tenants/{tenant_id}/users">client.tenants.<a href="./src/resources/tenants/tenants.ts">listUsers</a>(tenantID, { ...params }) -> TenantListUsersResponse</code>

## DefaultPreferences

### Items

Types:

- <code><a href="./src/resources/tenants/default-preferences/items.ts">ChannelClassification</a></code>
- <code><a href="./src/resources/tenants/default-preferences/items.ts">SubscriptionTopicNew</a></code>

Methods:

- <code title="put /tenants/{tenant_id}/default_preferences/items/{topic_id}">client.tenants.defaultPreferences.items.<a href="./src/resources/tenants/default-preferences/items.ts">update</a>(topicID, { ...params }) -> void</code>
- <code title="delete /tenants/{tenant_id}/default_preferences/items/{topic_id}">client.tenants.defaultPreferences.items.<a href="./src/resources/tenants/default-preferences/items.ts">delete</a>(topicID, { ...params }) -> void</code>

# Translations

Types:

- <code><a href="./src/resources/translations.ts">TranslationRetrieveResponse</a></code>

Methods:

- <code title="get /translations/{domain}/{locale}">client.translations.<a href="./src/resources/translations.ts">retrieve</a>(locale, { ...params }) -> string</code>
- <code title="put /translations/{domain}/{locale}">client.translations.<a href="./src/resources/translations.ts">update</a>(locale, { ...params }) -> void</code>

# Users

## Preferences

Types:

- <code><a href="./src/resources/users/preferences.ts">PreferenceStatus</a></code>
- <code><a href="./src/resources/users/preferences.ts">TopicPreference</a></code>
- <code><a href="./src/resources/users/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/users/preferences.ts">PreferenceRetrieveTopicResponse</a></code>
- <code><a href="./src/resources/users/preferences.ts">PreferenceUpdateOrCreateTopicResponse</a></code>

Methods:

- <code title="get /users/{user_id}/preferences">client.users.preferences.<a href="./src/resources/users/preferences.ts">retrieve</a>(userID, { ...params }) -> PreferenceRetrieveResponse</code>
- <code title="get /users/{user_id}/preferences/{topic_id}">client.users.preferences.<a href="./src/resources/users/preferences.ts">retrieveTopic</a>(topicID, { ...params }) -> PreferenceRetrieveTopicResponse</code>
- <code title="put /users/{user_id}/preferences/{topic_id}">client.users.preferences.<a href="./src/resources/users/preferences.ts">updateOrCreateTopic</a>(topicID, { ...params }) -> PreferenceUpdateOrCreateTopicResponse</code>

## Tenants

Types:

- <code><a href="./src/resources/users/tenants.ts">TenantAssociation</a></code>
- <code><a href="./src/resources/users/tenants.ts">TenantListResponse</a></code>

Methods:

- <code title="get /users/{user_id}/tenants">client.users.tenants.<a href="./src/resources/users/tenants.ts">list</a>(userID, { ...params }) -> TenantListResponse</code>
- <code title="put /users/{user_id}/tenants">client.users.tenants.<a href="./src/resources/users/tenants.ts">addMultiple</a>(userID, { ...params }) -> void</code>
- <code title="put /users/{user_id}/tenants/{tenant_id}">client.users.tenants.<a href="./src/resources/users/tenants.ts">addSingle</a>(tenantID, { ...params }) -> void</code>
- <code title="delete /users/{user_id}/tenants">client.users.tenants.<a href="./src/resources/users/tenants.ts">removeAll</a>(userID) -> void</code>
- <code title="delete /users/{user_id}/tenants/{tenant_id}">client.users.tenants.<a href="./src/resources/users/tenants.ts">removeSingle</a>(tenantID, { ...params }) -> void</code>

## Tokens

Types:

- <code><a href="./src/resources/users/tokens.ts">UserToken</a></code>
- <code><a href="./src/resources/users/tokens.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/users/tokens.ts">TokenRetrieveSingleResponse</a></code>

Methods:

- <code title="patch /users/{user_id}/tokens/{token}">client.users.tokens.<a href="./src/resources/users/tokens.ts">update</a>(token, { ...params }) -> void</code>
- <code title="get /users/{user_id}/tokens">client.users.tokens.<a href="./src/resources/users/tokens.ts">list</a>(userID) -> TokenListResponse</code>
- <code title="delete /users/{user_id}/tokens/{token}">client.users.tokens.<a href="./src/resources/users/tokens.ts">delete</a>(token, { ...params }) -> void</code>
- <code title="put /users/{user_id}/tokens">client.users.tokens.<a href="./src/resources/users/tokens.ts">addMultiple</a>(userID) -> void</code>
- <code title="put /users/{user_id}/tokens/{token}">client.users.tokens.<a href="./src/resources/users/tokens.ts">addSingle</a>(pathToken, { ...params }) -> void</code>
- <code title="get /users/{user_id}/tokens/{token}">client.users.tokens.<a href="./src/resources/users/tokens.ts">retrieveSingle</a>(token, { ...params }) -> TokenRetrieveSingleResponse</code>
