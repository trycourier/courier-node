import { ICourierClientConfiguration } from "../types";
import {
  IGetTranslationOpts,
  IPutTranslationOpts,
  ITranslation,
} from "./types";

const getTranslation = (options: ICourierClientConfiguration) => {
  return async (opts: IGetTranslationOpts): Promise<ITranslation> => {
    const res = await options.httpClient.get(
      `/translations/${opts.app}/${opts.locale}`
    );
    return res.data as ITranslation;
  };
};

const putTranslation = (options: ICourierClientConfiguration) => {
  return async (opts: IPutTranslationOpts): Promise<ITranslation> => {
    const res = await options.httpClient.put(
      `/translations/${opts.app}/${opts.locale}`,
      Object(opts.translation)
    );
    return res.data as ITranslation;
  };
};

export const translation = (options: ICourierClientConfiguration) => {
  return {
    getTranslation: getTranslation(options),
    putTranslation: putTranslation(options),
  };
};
