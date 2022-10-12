import fetchMock from "jest-fetch-mock";

jest.setMock("cross-fetch", fetchMock);
jest
  .spyOn(globalThis, "fetch")
  .mockImplementation((...args) =>
    fetchMock(...(args as Parameters<typeof fetchMock>))
  );
