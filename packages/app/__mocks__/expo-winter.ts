type ExpoImportMetaRegistry = {
  url: string | null;
};

const globalObject = globalThis as typeof globalThis & {
  __ExpoImportMetaRegistry?: ExpoImportMetaRegistry;
};

if (!globalObject.__ExpoImportMetaRegistry) {
  Object.defineProperty(globalObject, '__ExpoImportMetaRegistry', {
    value: { url: null },
    writable: true,
    configurable: true,
    enumerable: false,
  });
}

export {};
