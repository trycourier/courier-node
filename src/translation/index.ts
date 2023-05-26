import { ICourierClientConfiguration } from "../types";
import { IGetTranslationOpts, IPutTranslationOpts } from "./types";

const getTranslation = (options: ICourierClientConfiguration) => {
  return async (opts: IGetTranslationOpts): Promise<string> => {
    const res = await options.httpClient.get(
      `/translations/${opts.domain}/${opts.locale}`
    );
    return res.data as string;
  };
};

const putTranslation = (options: ICourierClientConfiguration) => {
  return async (opts: IPutTranslationOpts): Promise<string> => {
    const res = await options.httpClient.put(
      `/translations/${opts.domain}/${opts.locale}`,
      Object(opts.translation)
    );
    return res.data as string;
  };
};

export const translation = (options: ICourierClientConfiguration) => {
  return {
    getTranslation: getTranslation(options),
    putTranslation: putTranslation(options),
  };
};
