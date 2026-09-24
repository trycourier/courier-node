// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Render a template's email content on real email clients and read back the screenshots, so you can check how it looks before you send it.
 */
export class Previews extends APIResource {
  /**
   * Archive a device set. This is a soft delete — the archived set is returned and
   * no longer appears in list results. Runs already created against it keep their
   * own copy of the device list and are unaffected. The Courier-provided default set
   * cannot be archived and returns 409.
   *
   * @example
   * ```ts
   * const deviceSet = await client.previews.archiveDeviceSet(
   *   'deviceSetId',
   * );
   * ```
   */
  archiveDeviceSet(deviceSetID: string, options?: RequestOptions): APIPromise<DeviceSet> {
    return this._client.delete(path`/previews/device-sets/${deviceSetID}`, options);
  }

  /**
   * Create a named, reusable set of preview devices. Every id must be one listed by
   * `GET /previews/devices`; any other is a 422.
   *
   * @example
   * ```ts
   * const deviceSet = await client.previews.createDeviceSet({
   *   device_ids: ['pvd_1w6dgafr3aaycvv9a8bm996pkc'],
   *   name: 'Mobile',
   * });
   * ```
   */
  createDeviceSet(body: PreviewCreateDeviceSetParams, options?: RequestOptions): APIPromise<DeviceSet> {
    return this._client.post('/previews/device-sets', { body, ...options });
  }

  /**
   * List the workspace's preview sets. Archived sets are not returned.
   *
   * @example
   * ```ts
   * const deviceSetListResponse =
   *   await client.previews.listDeviceSets();
   * ```
   */
  listDeviceSets(options?: RequestOptions): APIPromise<DeviceSetListResponse> {
    return this._client.get('/previews/device-sets', options);
  }

  /**
   * List the devices a preview can be rendered on. Reference data, identical for
   * every workspace — these ids are what a device set is built from and what a run
   * reports results for.
   *
   * @example
   * ```ts
   * const previewDeviceListResponse =
   *   await client.previews.listDevices();
   * ```
   */
  listDevices(options?: RequestOptions): APIPromise<PreviewDeviceListResponse> {
    return this._client.get('/previews/devices', options);
  }

  /**
   * Retrieve a preview set by ID. Archived sets return 404.
   *
   * @example
   * ```ts
   * const deviceSet = await client.previews.retrieveDeviceSet(
   *   'deviceSetId',
   * );
   * ```
   */
  retrieveDeviceSet(deviceSetID: string, options?: RequestOptions): APIPromise<DeviceSet> {
    return this._client.get(path`/previews/device-sets/${deviceSetID}`, options);
  }

  /**
   * Replace a device set. This is a full replace, not a patch — both the name and
   * the device list are always written. The Courier-provided default set cannot be
   * changed and returns 409.
   *
   * @example
   * ```ts
   * const deviceSet = await client.previews.updateDeviceSet(
   *   'deviceSetId',
   *   {
   *     device_ids: [
   *       'pvd_1w6dgafr3aaycvv9a8bm996pkc',
   *       'pvd_34qvmj6p4dbqaa5mpys1ekt9jx',
   *     ],
   *     name: 'Mobile and desktop',
   *   },
   * );
   * ```
   */
  updateDeviceSet(
    deviceSetID: string,
    body: PreviewUpdateDeviceSetParams,
    options?: RequestOptions,
  ): APIPromise<DeviceSet> {
    return this._client.put(path`/previews/device-sets/${deviceSetID}`, { body, ...options });
  }
}

/**
 * Request body for creating or replacing a device set. A full replace, not a patch
 * — both fields are always written.
 */
export interface CreateDeviceSetRequest {
  /**
   * The devices the set contains, by `PreviewDevice.id`. At least one is required.
   */
  device_ids: Array<string>;

  /**
   * Human-readable name.
   */
  name: string;
}

/**
 * A named, reusable list of preview devices.
 */
export interface DeviceSet {
  /**
   * Unique identifier for the device set.
   */
  id: string;

  /**
   * ISO-8601 timestamp of when the set was created.
   */
  created_at: string;

  /**
   * The devices in this set, by `PreviewDevice.id`.
   */
  device_ids: Array<string>;

  /**
   * Human-readable name.
   */
  name: string;

  /**
   * ISO-8601 timestamp of when the set was last written.
   */
  updated_at: string;

  /**
   * ISO-8601 timestamp of when the set was archived. Present only on the archive
   * response, which is the one place the state is observable.
   */
  archived_at?: string;
}

/**
 * The workspace's active device sets. Not paginated.
 */
export interface DeviceSetListResponse {
  results: Array<DeviceSet>;
}

/**
 * One mail app on one platform, operating system and theme that a preview can be
 * rendered on. Reference data, identical for every workspace. Every field is
 * always present; `platform` and `platform_version` are null where they do not
 * apply.
 */
export interface PreviewDevice {
  /**
   * The device's identifier, used in `device_ids` when creating a device set or a
   * run.
   */
  id: string;

  /**
   * The mail app. For webmail it is the service (`outlook_com`, `gmail_com`); for
   * mobile the app (`apple_mail`, `gmail`); for desktop the app together with the
   * version it is sold under (`outlook_2019`, `outlook_microsoft_365`,
   * `apple_mail_16`), because that version is what separates one desktop Outlook
   * from another.
   */
  app: string;

  /**
   * Where the app runs.
   */
  category: 'webmail' | 'mobile' | 'desktop';

  /**
   * Display name. Render it as-is rather than parsing it. It is also what separates
   * the two 120-dpi Outlook renders from their 100% siblings, which are otherwise
   * identical field for field.
   */
  name: string;

  /**
   * The operating system.
   */
  os: string;

  /**
   * The operating system's version. Always set.
   */
  os_version: string;

  /**
   * What the app runs on — the browser for webmail (`chrome`, `edge`, `firefox`),
   * the phone for mobile (`iphone`, `pixel`). Null for desktop, where the app runs
   * on nothing but the OS.
   */
  platform: string | null;

  /**
   * Which one of the platform — the phone model for mobile (`15_pro_max`, `10`).
   * Null for webmail, which always renders in the current browser, and for desktop.
   */
  platform_version: string | null;

  /**
   * Whether the email is rendered in light or dark mode.
   */
  theme: 'light' | 'dark';
}

/**
 * The full catalog of renderable devices. Not paginated.
 */
export interface PreviewDeviceListResponse {
  results: Array<PreviewDevice>;
}

export interface PreviewCreateDeviceSetParams {
  /**
   * The devices the set contains, by `PreviewDevice.id`. At least one is required.
   */
  device_ids: Array<string>;

  /**
   * Human-readable name.
   */
  name: string;
}

export interface PreviewUpdateDeviceSetParams {
  /**
   * The devices the set contains, by `PreviewDevice.id`. At least one is required.
   */
  device_ids: Array<string>;

  /**
   * Human-readable name.
   */
  name: string;
}

export declare namespace Previews {
  export {
    type CreateDeviceSetRequest as CreateDeviceSetRequest,
    type DeviceSet as DeviceSet,
    type DeviceSetListResponse as DeviceSetListResponse,
    type PreviewDevice as PreviewDevice,
    type PreviewDeviceListResponse as PreviewDeviceListResponse,
    type PreviewCreateDeviceSetParams as PreviewCreateDeviceSetParams,
    type PreviewUpdateDeviceSetParams as PreviewUpdateDeviceSetParams,
  };
}
