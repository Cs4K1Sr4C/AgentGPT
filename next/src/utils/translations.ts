import { i18n } from "next-i18next";
import type nextI18NextConfig from "../../next-i18next.config.js";

type Namespace = (typeof nextI18NextConfig.ns)[number];

export const translate = (
  key: string,
  text?: string | undefined | null,
  ns?: Namespace | undefined | null
) => {
  const opts = !!ns ? { ns } : undefined;
  const defaultText = !!text ? text : undefined;
  return i18n?.t(key, defaultText || "", opts) ?? key;
};
