'use strict';

import { AxiosError } from "axios";

export const ErrorHandlerFunction = (error: AxiosError) => {
  if (error.response) {
    throw new CourierAPIError(error.response.status, error.response.data);
  } else if (error.request) {
    throw new CourierNoResponseError(404, error.request);
  } else {
    throw new CourierInputError(400, "Bad Request");
  }
}
/**
 * CourierError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
export class CourierError extends Error {
  statusCode: number;
  message: any;

  constructor(code: number, response: any) {
    super(response);

    this.statusCode = code;
    this.message = response;
  }
}

// Specific Stripe Error types:
export class CourierInputError extends CourierError { };

/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export class CourierAPIError extends CourierError { };

export class CourierNoResponseError extends CourierError { };
