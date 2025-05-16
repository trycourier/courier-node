# Reference

<details><summary><code>client.<a href="/src/Client.ts">send</a>({ ...params }) -> Courier.SendMessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Use the send API to send a message to one or more recipients.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.send({
    message: {
        to: {
            email: "email@example.com",
        },
        content: {
            title: "Welcome!",
            body: "Thanks for signing up, {{name}}",
        },
        data: {
            name: "Peter Parker",
        },
        routing: {
            method: "single",
            channels: ["email"],
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.SendMessageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CourierClient.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## Audiences

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">get</a>(audienceId) -> Courier.Audience</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified audience by id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.get("audience_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**audienceId:** `string` — A unique identifier representing the audience_id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">update</a>(audienceId, { ...params }) -> Courier.AudienceUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates audience.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.update("audience_id", {
    name: undefined,
    description: undefined,
    filter: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**audienceId:** `string` — A unique identifier representing the audience id

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.AudienceUpdateParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">delete</a>(audienceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified audience.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.delete("audience_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**audienceId:** `string` — A unique identifier representing the audience id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">listMembers</a>(audienceId, { ...params }) -> Courier.AudienceMemberListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get list of members of an audience.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.listMembers("audience_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**audienceId:** `string` — A unique identifier representing the audience id

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.AudienceMembersListParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">listAudiences</a>({ ...params }) -> Courier.AudienceListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the audiences associated with the authorization token.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.audiences.listAudiences();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.AudiencesListParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AuditEvents

<details><summary><code>client.auditEvents.<a href="/src/api/resources/auditEvents/client/Client.ts">list</a>({ ...params }) -> Courier.ListAuditEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the list of audit events

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auditEvents.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.ListAuditEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auditEvents.<a href="/src/api/resources/auditEvents/client/Client.ts">get</a>(auditEventId) -> Courier.AuditEvent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a specific audit event by ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auditEvents.get("audit-event-id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**auditEventId:** `string` — A unique identifier associated with the audit event you wish to retrieve

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditEvents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AuthTokens

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">issueToken</a>({ ...params }) -> Courier.IssueTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a new access token.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.issueToken({
    scope: "scope",
    expires_in: "expires_in",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.IssueTokenParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Automations

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">invokeAutomationTemplate</a>(templateId, { ...params }) -> Courier.AutomationInvokeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Invoke an automation run from an automation template.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.invokeAutomationTemplate("templateId", {
    brand: undefined,
    data: undefined,
    profile: undefined,
    recipient: undefined,
    template: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**templateId:** `string` — A unique identifier representing the automation template to be invoked. This could be the Automation Template ID or the Automation Template Alias.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.AutomationInvokeParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.automations.<a href="/src/api/resources/automations/client/Client.ts">invokeAdHocAutomation</a>({ ...params }) -> Courier.AutomationInvokeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Invoke an ad hoc automation run. This endpoint accepts a JSON payload with a series of automation steps. For information about what steps are available, checkout the ad hoc automation guide [here](https://www.courier.com/docs/automations/steps/).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.automations.invokeAdHocAutomation({
    data: {
        name: "Foo",
    },
    profile: {
        tenant_id: "abc-123",
    },
    recipient: "user-yes",
    automation: {
        cancelation_token: "delay-send--user-yes--abc-123",
        steps: [
            {
                action: "delay",
                until: "20240408T080910.123",
            },
            {
                action: "send",
                template: "64TP5HKPFTM8VTK1Y75SJDQX9JK0",
            },
        ],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.AutomationAdHocInvokeParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Automations.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Brands

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">create</a>({ ...params }) -> Courier.Brand</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.create({
    id: undefined,
    name: "name",
    settings: {
        colors: undefined,
        inapp: undefined,
        email: undefined,
    },
    snippets: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.BrandParameters`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">get</a>(brandId) -> Courier.Brand</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a specific brand by brand ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.get("brand_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**brandId:** `string` — A unique identifier associated with the brand you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">list</a>({ ...params }) -> Courier.BrandsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list of brands.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.ListBrandsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">delete</a>(brandId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a brand by brand ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.delete("brand_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**brandId:** `string` — A unique identifier associated with the brand you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">replace</a>(brandId, { ...params }) -> Courier.Brand</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace an existing brand with the supplied values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.replace("brand_id", {
    name: "name",
    settings: undefined,
    snippets: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**brandId:** `string` — A unique identifier associated with the brand you wish to update.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.BrandUpdateParameters`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Bulk

<details><summary><code>client.bulk.<a href="/src/api/resources/bulk/client/Client.ts">createJob</a>({ ...params }) -> Courier.BulkCreateJobResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulk.createJob({
    message: {
        brand: undefined,
        data: undefined,
        event: undefined,
        locale: undefined,
        override: undefined,
        message: undefined,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.BulkCreateJobParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bulk.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulk.<a href="/src/api/resources/bulk/client/Client.ts">ingestUsers</a>(jobId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ingest user data into a Bulk Job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulk.ingestUsers("job_id", {
    users: [
        {
            preferences: undefined,
            profile: undefined,
            recipient: undefined,
            data: undefined,
            to: undefined,
        },
        {
            preferences: undefined,
            profile: undefined,
            recipient: undefined,
            data: undefined,
            to: undefined,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — A unique identifier representing the bulk job

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.BulkIngestUsersParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bulk.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulk.<a href="/src/api/resources/bulk/client/Client.ts">runJob</a>(jobId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Run a bulk job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulk.runJob("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — A unique identifier representing the bulk job

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bulk.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulk.<a href="/src/api/resources/bulk/client/Client.ts">getJob</a>(jobId) -> Courier.BulkGetJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a bulk job

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulk.getJob("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — A unique identifier representing the bulk job

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bulk.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.bulk.<a href="/src/api/resources/bulk/client/Client.ts">getUsers</a>(jobId, { ...params }) -> Courier.BulkGetJobUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Bulk Job Users

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bulk.getUsers("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — A unique identifier representing the bulk job

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.BulkGetUsersParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Bulk.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Inbound

<details><summary><code>client.inbound.<a href="/src/api/resources/inbound/client/Client.ts">track</a>({ ...params }) -> Courier.TrackAcceptedResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.inbound.track({
    event: "New Order Placed",
    messageId: "4c62c457-b329-4bea-9bfc-17bba86c393f",
    userId: "1234",
    type: "track",
    properties: {
        order_id: 123,
        total_orders: 5,
        last_order_id: 122,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.InboundTrackEvent`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Inbound.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Lists

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">list</a>({ ...params }) -> Courier.ListGetAllResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns all of the lists, with the ability to filter based on a pattern.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.GetAllListsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">get</a>(listId) -> Courier.List</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list based on the list ID provided.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.get("list_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">update</a>(listId, { ...params }) -> Courier.List</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or replace an existing list with the supplied values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.update("list_id", {
    name: "name",
    preferences: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.ListPutParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">delete</a>(listId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a list by list ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.delete("list_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">restore</a>(listId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Restore a previously deleted list.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.restore("list_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">getSubscribers</a>(listId, { ...params }) -> Courier.ListGetSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the list's subscriptions.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.getSubscribers("list_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.GetSubscriptionForListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">updateSubscribers</a>(listId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Subscribes the users to the list, overwriting existing subscriptions. If the list does not exist, it will be automatically created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.updateSubscribers("list_id", {
    recipients: [
        {
            recipientId: "recipientId",
            preferences: undefined,
        },
        {
            recipientId: "recipientId",
            preferences: undefined,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.SubscribeUsersToListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">addSubscribers</a>(listId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Subscribes additional users to the list, without modifying existing subscriptions. If the list does not exist, it will be automatically created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.addSubscribers("list_id", {
    recipients: [
        {
            recipientId: "recipientId",
            preferences: undefined,
        },
        {
            recipientId: "recipientId",
            preferences: undefined,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.AddSubscribersToList`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">subscribe</a>(listId, userId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Subscribe a user to an existing list (note: if the List does not exist, it will be automatically created).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.subscribe("list_id", "user_id", {
    preferences: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the recipient associated with the list

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.SubscribeUserToListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.lists.<a href="/src/api/resources/lists/client/Client.ts">unsubscribe</a>(listId, userId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a subscription to a list by list ID and user ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.lists.unsubscribe("list_id", "user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**listId:** `string` — A unique identifier representing the list you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the recipient associated with the list

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Lists.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">list</a>({ ...params }) -> Courier.ListMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the statuses of messages you've previously sent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.ListMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">get</a>(messageId) -> Courier.MessageDetailsExtended</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the status of a message you've previously sent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.get("message_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**messageId:** `string` — A unique identifier associated with the message you wish to retrieve (results from a send).

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">cancel</a>(messageId) -> Courier.MessageDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a message that is currently in the process of being delivered. A well-formatted API call to the cancel message API will return either `200` status code for a successful cancellation or `409` status code for an unsuccessful cancellation. Both cases will include the actual message record in the response body (see details below).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.cancel("message_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**messageId:** `string` — A unique identifier representing the message ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">getHistory</a>(messageId, { ...params }) -> Courier.MessageHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch the array of events of a message you've previously sent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.getHistory("message_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**messageId:** `string` — A unique identifier representing the message ID

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.GetMessageHistoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">getContent</a>(messageId) -> Courier.RenderOutputResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.getContent("message_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**messageId:** `string` — A unique identifier associated with the message you wish to retrieve (results from a send).

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">archive</a>(requestId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.archive("request_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestId:** `string` — A unique identifier representing the request ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notifications

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">list</a>({ ...params }) -> Courier.NotificationListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.NotificationListParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">getContent</a>(id) -> Courier.NotificationGetContentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.getContent("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">getDraftContent</a>(id) -> Courier.NotificationGetContentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.getDraftContent("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">getSubmissionChecks</a>(id, submissionId) -> Courier.SubmissionChecksGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.getSubmissionChecks("id", "submissionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**submissionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">replaceSubmissionChecks</a>(id, submissionId, { ...params }) -> Courier.SubmissionChecksReplaceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.replaceSubmissionChecks("id", "submissionId", {
    checks: [
        {
            id: "id",
            status: "RESOLVED",
            type: "custom",
        },
        {
            id: "id",
            status: "RESOLVED",
            type: "custom",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**submissionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.SubmissionChecksReplaceParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">cancelSubmission</a>(id, submissionId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.cancelSubmission("id", "submissionId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**submissionId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Profiles

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">get</a>(userId) -> Courier.ProfileGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the specified user profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.get("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">create</a>(userId, { ...params }) -> Courier.MergeProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Merge the supplied values with an existing profile or create a new profile if one doesn't already exist.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.create("user_id", {
    profile: {
        profile: {
            key: "value",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.MergeProfileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">replace</a>(userId, { ...params }) -> Courier.ReplaceProfileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When using `PUT`, be sure to include all the key-value pairs required by the recipient's profile.
Any key-value pairs that exist in the profile but fail to be included in the `PUT` request will be
removed from the profile. Remember, a `PUT` update is a full replacement of the data. For partial updates,
use the [Patch](https://www.courier.com/docs/reference/profiles/patch/) request.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.replace("user_id", {
    profile: {
        profile: {
            key: "value",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.ReplaceProfileRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">mergeProfile</a>(userId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.mergeProfile("user_id", {
    patch: [
        {
            op: "op",
            path: "path",
            value: "value",
        },
        {
            op: "op",
            path: "path",
            value: "value",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.ProfileUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">delete</a>(userId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified user profile.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.delete("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">getListSubscriptions</a>(userId, { ...params }) -> Courier.GetListSubscriptionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the subscribed lists for a specified user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.getListSubscriptions("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.GetListSubscriptionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">subscribeToLists</a>(userId, { ...params }) -> Courier.SubscribeToListsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Subscribes the given user to one or more lists. If the list does not exist, it will be created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.subscribeToLists("user_id", {
    lists: [
        {
            listId: "listId",
            preferences: undefined,
        },
        {
            listId: "listId",
            preferences: undefined,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.SubscribeToListsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.IdempotentRequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.profiles.<a href="/src/api/resources/profiles/client/Client.ts">deleteListSubscription</a>(userId) -> Courier.DeleteListSubscriptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes all list subscriptions for given user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.profiles.deleteListSubscription("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier representing the user associated with the requested profile.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Profiles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Templates

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">list</a>({ ...params }) -> Courier.ListTemplatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of notification templates

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.ListTemplatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Templates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tenants

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">createOrReplace</a>(tenantId, { ...params }) -> Courier.Tenant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.createOrReplace("tenant_id", {
    name: "name",
    parent_tenant_id: undefined,
    default_preferences: undefined,
    properties: undefined,
    user_profile: undefined,
    brand_id: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tenantId:** `string` — A unique identifier representing the tenant to be returned.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.TenantCreateOrReplaceParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">get</a>(tenantId) -> Courier.Tenant</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.get("tenant_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tenantId:** `string` — A unique identifier representing the tenant to be returned.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">list</a>({ ...params }) -> Courier.TenantListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Courier.ListTenantParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">delete</a>(tenantId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.delete("tenant_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tenantId:** `string` — Id of the tenant to be deleted.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">getUsersByTenant</a>(tenantId, { ...params }) -> Courier.ListUsersForTenantResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.getUsersByTenant("tenant_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tenantId:** `string` — Id of the tenant for user membership.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.ListUsersForTenantParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">createOrReplaceDefaultPreferencesForTopic</a>(tenantId, topicId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.createOrReplaceDefaultPreferencesForTopic("tenantABC", "HB529N49MD4D5PMX9WR5P4JH78NA", {
    status: "OPTED_IN",
    has_custom_routing: true,
    custom_routing: ["inbox"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tenantId:** `string` — Id of the tenant to update the default preferences for.

</dd>
</dl>

<dl>
<dd>

**topicId:** `string` — Id fo the susbcription topic you want to have a default preference for.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.SubscriptionTopicNew`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tenants.<a href="/src/api/resources/tenants/client/Client.ts">removeDefaultPreferencesForTopic</a>(tenantId, topicId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tenants.removeDefaultPreferencesForTopic("tenant_id", "topic_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**tenantId:** `string` — Id of the tenant to update the default preferences for.

</dd>
</dl>

<dl>
<dd>

**topicId:** `string` — Id fo the susbcription topic you want to have a default preference for.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Translations

<details><summary><code>client.translations.<a href="/src/api/resources/translations/client/Client.ts">get</a>(domain, locale) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get translations by locale

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.translations.get("domain", "locale");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domain:** `string` — The domain you want to retrieve translations for. Only `default` is supported at the moment

</dd>
</dl>

<dl>
<dd>

**locale:** `string` — The locale you want to retrieve the translations for

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Translations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.translations.<a href="/src/api/resources/translations/client/Client.ts">update</a>(domain, locale, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a translation

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.translations.update("domain", "locale", "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**domain:** `string` — The domain you want to retrieve translations for. Only `default` is supported at the moment

</dd>
</dl>

<dl>
<dd>

**locale:** `string` — The locale you want to retrieve the translations for

</dd>
</dl>

<dl>
<dd>

**request:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Translations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users Preferences

<details><summary><code>client.users.preferences.<a href="/src/api/resources/users/resources/preferences/client/Client.ts">list</a>(userId, { ...params }) -> Courier.UserPreferencesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch all user preferences.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preferences.list("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier associated with the user whose preferences you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.users.UserPreferencesParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Preferences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.preferences.<a href="/src/api/resources/users/resources/preferences/client/Client.ts">get</a>(userId, topicId, { ...params }) -> Courier.UserPreferencesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch user preferences for a specific subscription topic.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preferences.get("user_id", "topic_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier associated with the user whose preferences you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**topicId:** `string` — A unique identifier associated with a subscription topic.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.users.UserPreferencesTopicParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Preferences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.preferences.<a href="/src/api/resources/users/resources/preferences/client/Client.ts">update</a>(userId, topicId, { ...params }) -> Courier.UserPreferencesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update or Create user preferences for a specific subscription topic.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preferences.update("abc-123", "74Q4QGFBEX481DP6JRPMV751H4XT", {
    topic: {
        status: "OPTED_IN",
        has_custom_routing: true,
        custom_routing: ["inbox", "email"],
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — A unique identifier associated with the user whose preferences you wish to retrieve.

</dd>
</dl>

<dl>
<dd>

**topicId:** `string` — A unique identifier associated with a subscription topic.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.users.UserPreferencesUpdateParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Preferences.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users Tenants

<details><summary><code>client.users.tenants.<a href="/src/api/resources/users/resources/tenants/client/Client.ts">addMultple</a>(userId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to add a user to
multiple tenants in one call.
A custom profile can also be supplied for each tenant.
This profile will be merged with the user's main
profile when sending to the user with that tenant.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tenants.addMultple("user_id", {
    tenants: [
        {
            user_id: undefined,
            type: undefined,
            tenant_id: "tenant_id",
            profile: undefined,
        },
        {
            user_id: undefined,
            type: undefined,
            tenant_id: "tenant_id",
            profile: undefined,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.users.AddUserToMultipleTenantsParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tenants.<a href="/src/api/resources/users/resources/tenants/client/Client.ts">add</a>(userId, tenantId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to add a single tenant.

A custom profile can also be supplied with the tenant.
This profile will be merged with the user's main profile
when sending to the user with that tenant.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tenants.add("user_id", "tenant_id", {
    profile: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — Id of the user to be added to the supplied tenant.

</dd>
</dl>

<dl>
<dd>

**tenantId:** `string` — Id of the tenant the user should be added to.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.users.AddUserToSingleTenantsParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tenants.<a href="/src/api/resources/users/resources/tenants/client/Client.ts">removeAll</a>(userId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a user from any tenants they may have been associated with.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tenants.removeAll("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — Id of the user to be removed from the supplied tenant.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tenants.<a href="/src/api/resources/users/resources/tenants/client/Client.ts">remove</a>(userId, tenantId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a user from the supplied tenant.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tenants.remove("user_id", "tenant_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — Id of the user to be removed from the supplied tenant.

</dd>
</dl>

<dl>
<dd>

**tenantId:** `string` — Id of the tenant the user should be removed from.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tenants.<a href="/src/api/resources/users/resources/tenants/client/Client.ts">list</a>(userId, { ...params }) -> Courier.ListTenantsForUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a paginated list of user tenant associations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tenants.list("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — Id of the user to retrieve all associated tenants for.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.users.ListTenantsForUserParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tenants.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users Tokens

<details><summary><code>client.users.tokens.<a href="/src/api/resources/users/resources/tokens/client/Client.ts">addMultiple</a>(userId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds multiple tokens to a user and overwrites matching existing tokens.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tokens.addMultiple("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tokens.<a href="/src/api/resources/users/resources/tokens/client/Client.ts">add</a>(userId, token, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a single token to a user and overwrites a matching existing token.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tokens.add("user_id", "token", {
    token: undefined,
    provider_key: "firebase-fcm",
    expiry_date: undefined,
    properties: undefined,
    device: undefined,
    tracking: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**token:** `string` — The full token string.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.UserToken`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tokens.<a href="/src/api/resources/users/resources/tokens/client/Client.ts">update</a>(userId, token, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply a JSON Patch (RFC 6902) to the specified token.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tokens.update("user_id", "token", {
    patch: [
        {
            op: "op",
            path: "path",
            value: undefined,
        },
        {
            op: "op",
            path: "path",
            value: undefined,
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**token:** `string` — The full token string.

</dd>
</dl>

<dl>
<dd>

**request:** `Courier.PatchUserTokenOpts`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tokens.<a href="/src/api/resources/users/resources/tokens/client/Client.ts">get</a>(userId, token) -> Courier.GetUserTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get single token available for a `:token`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tokens.get("user_id", "token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**token:** `string` — The full token string.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tokens.<a href="/src/api/resources/users/resources/tokens/client/Client.ts">list</a>(userId) -> Courier.GetAllTokensResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all tokens available for a :user_id

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tokens.list("user_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.tokens.<a href="/src/api/resources/users/resources/tokens/client/Client.ts">delete</a>(userId, token) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.tokens.delete("user_id", "token");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**userId:** `string` — The user's ID. This can be any uniquely identifiable string.

</dd>
</dl>

<dl>
<dd>

**token:** `string` — The full token string.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
