export interface IVersions {
  node: () => string;
  chrome: () => string;
  electron: () => string;
}

export interface IApi {
  ping: () => Promise<string>;
}

declare global {
  interface Window {
    versions: IVersions;
    api: IApi;
  }
}
