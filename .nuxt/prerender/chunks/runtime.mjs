import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeaders, setResponseHeader, removeResponseHeader, createError, setResponseStatus, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/node_modules/pathe/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/asafebymarques/Downloads/26837132-mitech-vue-nuxt-js-technology-blog-template/mitech-v1.0.7/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2deb0-dWid+UMuP56AyZrkB4HVd3DSSao\"",
    "mtime": "2024-04-15T21:17:35.933Z",
    "size": 188080,
    "path": "../../.output/public/favicon.ico"
  },
  "/_nuxt/AccordionTwo.77564b8d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a50-pGHGD4f60wsx3zNzxpTCqhCad4I\"",
    "mtime": "2024-04-15T21:17:35.867Z",
    "size": 2640,
    "path": "../../.output/public/_nuxt/AccordionTwo.77564b8d.js"
  },
  "/_nuxt/CtaThree.744277ed.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"484-aeqYbc1E6skYgppldj4LjoN6QIc\"",
    "mtime": "2024-04-15T21:17:35.867Z",
    "size": 1156,
    "path": "../../.output/public/_nuxt/CtaThree.744277ed.js"
  },
  "/_nuxt/OffCanvasMobileMenu.900e9b00.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1941e-iLMXSGxdDbBc5sypikc5Yoxbcf8\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 103454,
    "path": "../../.output/public/_nuxt/OffCanvasMobileMenu.900e9b00.js"
  },
  "/_nuxt/OffCanvasMobileMenu.abc3eaad.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ce6-TzzUHHgcmv76l3oj1lw1IPABvpQ\"",
    "mtime": "2024-04-15T21:17:35.867Z",
    "size": 3302,
    "path": "../../.output/public/_nuxt/OffCanvasMobileMenu.abc3eaad.css"
  },
  "/_nuxt/_slug_.dd4c1773.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23c2-I5ADwUTgWa55OIQaBKUNCXNT5Mw\"",
    "mtime": "2024-04-15T21:17:35.867Z",
    "size": 9154,
    "path": "../../.output/public/_nuxt/_slug_.dd4c1773.js"
  },
  "/_nuxt/blog-details.e1f21480.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22fb-3pDraPX952jigKRSS5iAn0vu1bA\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 8955,
    "path": "../../.output/public/_nuxt/blog-details.e1f21480.js"
  },
  "/_nuxt/blog.7cad24aa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"118e-RyWP8MFflCdbyGnVLpwCn0NGxHU\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 4494,
    "path": "../../.output/public/_nuxt/blog.7cad24aa.js"
  },
  "/_nuxt/cybersecurity.e7ece7ac.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c32-7F3Mq0bqi9pqS96+1O8XQOGzSag\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 3122,
    "path": "../../.output/public/_nuxt/cybersecurity.e7ece7ac.js"
  },
  "/_nuxt/default.89b94714.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b6-k+96w6mV0AAwfQBi6MWjjig3Wto\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 182,
    "path": "../../.output/public/_nuxt/default.89b94714.js"
  },
  "/_nuxt/digital-marketing.469d46aa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bf8-mG6o/OU132aNI8W9Yo3zWh0cpX8\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 3064,
    "path": "../../.output/public/_nuxt/digital-marketing.469d46aa.js"
  },
  "/_nuxt/ecommerces.77194808.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b63-ydt9QF1Tln5s8y9ILo8gCANt5ls\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 2915,
    "path": "../../.output/public/_nuxt/ecommerces.77194808.js"
  },
  "/_nuxt/entry.3da30842.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38b4d-D1dleuHtSgD8uhD1Vf1d/O/j/o0\"",
    "mtime": "2024-04-15T21:17:35.869Z",
    "size": 232269,
    "path": "../../.output/public/_nuxt/entry.3da30842.js"
  },
  "/_nuxt/entry.b8f56d06.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"77943-uf1ecdx4r1VS9iUa8BSDnRZ2S6k\"",
    "mtime": "2024-04-15T21:17:35.869Z",
    "size": 489795,
    "path": "../../.output/public/_nuxt/entry.b8f56d06.css"
  },
  "/_nuxt/error-component.12842598.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"195-aQY8cN54VER5G+edrR1FKf5M9TE\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 405,
    "path": "../../.output/public/_nuxt/error-component.12842598.css"
  },
  "/_nuxt/error-component.3ddff962.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49f-3JK9zXZuifeusRABi69JO+dEo98\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 1183,
    "path": "../../.output/public/_nuxt/error-component.3ddff962.js"
  },
  "/_nuxt/fa-brands-400.8ea87917.woff2": {
    "type": "font/woff2",
    "etag": "\"12bc0-BhPH67pV7kfvMCwPd2YyRpL4mac\"",
    "mtime": "2024-04-15T21:17:35.868Z",
    "size": 76736,
    "path": "../../.output/public/_nuxt/fa-brands-400.8ea87917.woff2"
  },
  "/_nuxt/fa-brands-400.9b3a8965.svg": {
    "type": "image/svg+xml",
    "etag": "\"b781c-t/0wNeg8I8cgyfWVevMdfiiPtOs\"",
    "mtime": "2024-04-15T21:17:35.871Z",
    "size": 751644,
    "path": "../../.output/public/_nuxt/fa-brands-400.9b3a8965.svg"
  },
  "/_nuxt/fa-brands-400.cda59d6e.ttf": {
    "type": "font/ttf",
    "etag": "\"20b64-irkHCD/sqqKp7JOyf4hK10VzcFw\"",
    "mtime": "2024-04-15T21:17:35.869Z",
    "size": 133988,
    "path": "../../.output/public/_nuxt/fa-brands-400.cda59d6e.ttf"
  },
  "/_nuxt/fa-brands-400.e4299464.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"20c96-0f/WNAzb9yiQzLZ/MgFer8XfUac\"",
    "mtime": "2024-04-15T21:17:35.870Z",
    "size": 134294,
    "path": "../../.output/public/_nuxt/fa-brands-400.e4299464.eot"
  },
  "/_nuxt/fa-brands-400.f9217f66.woff": {
    "type": "font/woff",
    "etag": "\"15f84-Hh8Cv6ieF5/i3RODJzuIEqqHNBg\"",
    "mtime": "2024-04-15T21:17:35.870Z",
    "size": 89988,
    "path": "../../.output/public/_nuxt/fa-brands-400.f9217f66.woff"
  },
  "/_nuxt/fa-regular-400.62f1f2b9.svg": {
    "type": "image/svg+xml",
    "etag": "\"2386b-Ip3sokZfqe/IwD0OvrmgHBVZgi4\"",
    "mtime": "2024-04-15T21:17:35.870Z",
    "size": 145515,
    "path": "../../.output/public/_nuxt/fa-regular-400.62f1f2b9.svg"
  },
  "/_nuxt/fa-regular-400.79d08806.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"84f2-Zw+wHkkwrkb+jW0rderSiPVOjmE\"",
    "mtime": "2024-04-15T21:17:35.870Z",
    "size": 34034,
    "path": "../../.output/public/_nuxt/fa-regular-400.79d08806.eot"
  },
  "/_nuxt/fa-regular-400.cb9e9e69.woff": {
    "type": "font/woff",
    "etag": "\"3f94-OtT05LH7Pt7j1Lol5s3+0vC4ilQ\"",
    "mtime": "2024-04-15T21:17:35.871Z",
    "size": 16276,
    "path": "../../.output/public/_nuxt/fa-regular-400.cb9e9e69.woff"
  },
  "/_nuxt/fa-regular-400.e42a8844.woff2": {
    "type": "font/woff2",
    "etag": "\"33a8-E1F1Ka/6OeJYXFkayubcM2tqqRc\"",
    "mtime": "2024-04-15T21:17:35.871Z",
    "size": 13224,
    "path": "../../.output/public/_nuxt/fa-regular-400.e42a8844.woff2"
  },
  "/_nuxt/fa-regular-400.e8711bbb.ttf": {
    "type": "font/ttf",
    "etag": "\"83c8-w0rNaBjfbba+QaLjMYhnZdYB8us\"",
    "mtime": "2024-04-15T21:17:35.871Z",
    "size": 33736,
    "path": "../../.output/public/_nuxt/fa-regular-400.e8711bbb.ttf"
  },
  "/_nuxt/fa-solid-900.25630646.svg": {
    "type": "image/svg+xml",
    "etag": "\"e1979-Aju0gbZd2M3rjEJMqQDzhmKSv7A\"",
    "mtime": "2024-04-15T21:17:35.873Z",
    "size": 924025,
    "path": "../../.output/public/_nuxt/fa-solid-900.25630646.svg"
  },
  "/_nuxt/fa-solid-900.373c04fd.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"31916-6oRcWb7kpcbbd0uNgGD1ZBt4muk\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 203030,
    "path": "../../.output/public/_nuxt/fa-solid-900.373c04fd.eot"
  },
  "/_nuxt/fa-solid-900.3f6d3488.woff": {
    "type": "font/woff",
    "etag": "\"18d10-oirNdpfzbn1MwxqFPHDndurFS7E\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 101648,
    "path": "../../.output/public/_nuxt/fa-solid-900.3f6d3488.woff"
  },
  "/_nuxt/fa-solid-900.9834b82a.woff2": {
    "type": "font/woff2",
    "etag": "\"131bc-DMssgUp+TKEsR3iCFjOAnLA2Hqo\"",
    "mtime": "2024-04-15T21:17:35.871Z",
    "size": 78268,
    "path": "../../.output/public/_nuxt/fa-solid-900.9834b82a.woff2"
  },
  "/_nuxt/fa-solid-900.af639750.ttf": {
    "type": "font/ttf",
    "etag": "\"317f8-64kU9rF5e0XuCIPmCJ2SaV2flEE\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 202744,
    "path": "../../.output/public/_nuxt/fa-solid-900.af639750.ttf"
  },
  "/_nuxt/index.57a25987.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"85b0-JxVCPoE6jgQ8JZ8Xu/2I/X0zdNU\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 34224,
    "path": "../../.output/public/_nuxt/index.57a25987.js"
  },
  "/_nuxt/index.6ec40fcd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"155b-covyudik8klyJpUIGP4IXktvBOw\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 5467,
    "path": "../../.output/public/_nuxt/index.6ec40fcd.js"
  },
  "/_nuxt/outsourcing.77a22694.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b39-PQoWCidoVDyYM6wlsnIeCWghIug\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 2873,
    "path": "../../.output/public/_nuxt/outsourcing.77a22694.js"
  },
  "/_nuxt/reply-comm.eb1f1a9f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"128-kva3OiNZEy5Dt5Ach8Y1MJsVd2k\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 296,
    "path": "../../.output/public/_nuxt/reply-comm.eb1f1a9f.js"
  },
  "/_nuxt/service.627b068f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2cd5-nNsIcIJaZbx8W6v79kceVoiKXwE\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 11477,
    "path": "../../.output/public/_nuxt/service.627b068f.js"
  },
  "/_nuxt/softwares-and-apps.6b4dd70c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"af1-9FJIBVV58P/xA7PdTqJrdrZGxv8\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 2801,
    "path": "../../.output/public/_nuxt/softwares-and-apps.6b4dd70c.js"
  },
  "/_nuxt/tech-consulting.411c4b54.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c14-GcgQuRc7ihQyaUMdxm6UrHUYOPc\"",
    "mtime": "2024-04-15T21:17:35.872Z",
    "size": 3092,
    "path": "../../.output/public/_nuxt/tech-consulting.411c4b54.js"
  },
  "/images/favicon.png": {
    "type": "image/png",
    "etag": "\"1e489-KV4ox5Q27KNRyDGbE700R9xIedY\"",
    "mtime": "2024-04-15T21:17:35.894Z",
    "size": 124041,
    "path": "../../.output/public/images/favicon.png"
  },
  "/images/loading.gif": {
    "type": "image/gif",
    "etag": "\"1052-Fadq8nOUgtjec1SrxtjcT8qNFF4\"",
    "mtime": "2024-04-15T21:17:35.890Z",
    "size": 4178,
    "path": "../../.output/public/images/loading.gif"
  },
  "/images/award/mitech-company-award-01-161x110.jpg": {
    "type": "image/jpeg",
    "etag": "\"556-d6CpCKJHhxTjMtZHHlYNYnpn9jA\"",
    "mtime": "2024-04-15T21:17:35.890Z",
    "size": 1366,
    "path": "../../.output/public/images/award/mitech-company-award-01-161x110.jpg"
  },
  "/images/award/mitech-company-award-02-161x116.jpg": {
    "type": "image/jpeg",
    "etag": "\"560-vm1MrvAPDzEcI153TdWq07ixcqM\"",
    "mtime": "2024-04-15T21:17:35.893Z",
    "size": 1376,
    "path": "../../.output/public/images/award/mitech-company-award-02-161x116.jpg"
  },
  "/images/award/mitech-company-award-03-161x112.jpg": {
    "type": "image/jpeg",
    "etag": "\"55e-zCHhY1X33nX6pr9XSsDtd1UEZE4\"",
    "mtime": "2024-04-15T21:17:35.893Z",
    "size": 1374,
    "path": "../../.output/public/images/award/mitech-company-award-03-161x112.jpg"
  },
  "/images/award/mitech-company-award-04-161x109.jpg": {
    "type": "image/jpeg",
    "etag": "\"562-kZrW1TG6bzZT9yPGE/F+mAJlyGk\"",
    "mtime": "2024-04-15T21:17:35.893Z",
    "size": 1378,
    "path": "../../.output/public/images/award/mitech-company-award-04-161x109.jpg"
  },
  "/images/box-image/blog-01-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2024-04-15T21:17:35.913Z",
    "size": 3474,
    "path": "../../.output/public/images/box-image/blog-01-330x330.jpg"
  },
  "/images/box-image/blog-01-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 4876,
    "path": "../../.output/public/images/box-image/blog-01-480x298.jpg"
  },
  "/images/box-image/box-image-04-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3474,
    "path": "../../.output/public/images/box-image/box-image-04-330x330.jpg"
  },
  "/images/box-image/box-image-05-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3474,
    "path": "../../.output/public/images/box-image/box-image-05-330x330.jpg"
  },
  "/images/box-image/box-image-06-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3474,
    "path": "../../.output/public/images/box-image/box-image-06-330x330.jpg"
  },
  "/images/box-image/home-processing-software-image-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"c1b-iipYUbnsvB1RwfulM70gwdKMM9U\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3099,
    "path": "../../.output/public/images/box-image/home-processing-software-image-01.jpg"
  },
  "/images/box-image/home-processing-software-image-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"16a0-fXCoHB+d/BB43u+DugJQCsDteeo\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 5792,
    "path": "../../.output/public/images/box-image/home-processing-software-image-02.jpg"
  },
  "/images/box-image/home-processing-software-image-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"c1b-iipYUbnsvB1RwfulM70gwdKMM9U\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3099,
    "path": "../../.output/public/images/box-image/home-processing-software-image-03.jpg"
  },
  "/images/box-image/home-processing-software-image-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"f19-YdQPKyENox4mbSKt+G+8xSLHR+M\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 3865,
    "path": "../../.output/public/images/box-image/home-processing-software-image-04.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-02-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3474,
    "path": "../../.output/public/images/box-image/mitech-home-infotechno-box-large-image-02-330x330.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 4876,
    "path": "../../.output/public/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-03-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"d92-TczwfI5cd8YT8ssJ8O4EHa7DBoM\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3474,
    "path": "../../.output/public/images/box-image/mitech-home-infotechno-box-large-image-03-330x330.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 4876,
    "path": "../../.output/public/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"f19-YdQPKyENox4mbSKt+G+8xSLHR+M\"",
    "mtime": "2024-04-15T21:17:35.908Z",
    "size": 3865,
    "path": "../../.output/public/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.jpg"
  },
  "/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"f19-YdQPKyENox4mbSKt+G+8xSLHR+M\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 3865,
    "path": "../../.output/public/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.jpg"
  },
  "/images/banners/home-cybersecurity-contact-bg-image.png": {
    "type": "image/png",
    "etag": "\"14fc-/AZLVHgMKAnPn8PkqTyvHo2atZs\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 5372,
    "path": "../../.output/public/images/banners/home-cybersecurity-contact-bg-image.png"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"47d2-exddq3RJyjP4Hzt8Qa6LH+bTglE\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 18386,
    "path": "../../.output/public/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"90d-brDWBFvkcUW64CKJLnOwwD4BP8Y\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 2317,
    "path": "../../.output/public/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d1-wZ/vKSghAONO4ih84mRbFfDvnLo\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 1489,
    "path": "../../.output/public/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d1-wZ/vKSghAONO4ih84mRbFfDvnLo\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 1489,
    "path": "../../.output/public/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg"
  },
  "/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg": {
    "type": "image/jpeg",
    "etag": "\"684-5hq8cKi2buFQ4W6peThMo0xykg8\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 1668,
    "path": "../../.output/public/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg"
  },
  "/images/banners/managed-it-services-book-cover.png": {
    "type": "image/png",
    "etag": "\"e03-0byNX06CF/WM18qZICWhZR+TWig\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 3587,
    "path": "../../.output/public/images/banners/managed-it-services-book-cover.png"
  },
  "/images/bg/bg-gird-pattern-repeat-alt.webp": {
    "type": "image/webp",
    "etag": "\"b0-jyFIpjERc3ckqUnDP8wcUr76Klg\"",
    "mtime": "2024-04-15T21:17:35.894Z",
    "size": 176,
    "path": "../../.output/public/images/bg/bg-gird-pattern-repeat-alt.webp"
  },
  "/images/bg/business-solution-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2024-04-15T21:17:35.890Z",
    "size": 28396,
    "path": "../../.output/public/images/bg/business-solution-hero-bg.jpg"
  },
  "/images/bg/contact-us-01-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2024-04-15T21:17:35.894Z",
    "size": 28396,
    "path": "../../.output/public/images/bg/contact-us-01-hero-bg.jpg"
  },
  "/images/bg/faqs-video-poster.jpg": {
    "type": "image/jpeg",
    "etag": "\"14d2-xtGzBgaAw3nncz6J9GvCHzAoqXs\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 5330,
    "path": "../../.output/public/images/bg/faqs-video-poster.jpg"
  },
  "/images/bg/home-appointment-contact-bg-image.png": {
    "type": "image/png",
    "etag": "\"9ec0-FmxArUvb8kW4Ut6xRbYvMQr9Rq0\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 40640,
    "path": "../../.output/public/images/bg/home-appointment-contact-bg-image.png"
  },
  "/images/bg/home-infotechno-contact-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"5289-XP6K/4JJ3329O7qE01Ym4Wr1qZU\"",
    "mtime": "2024-04-15T21:17:35.896Z",
    "size": 21129,
    "path": "../../.output/public/images/bg/home-infotechno-contact-bg.jpg"
  },
  "/images/bg/home-infotechno-video-intro-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"73ce-6IhnVLMfDcqmUPdPIcvEjRrAXUU\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 29646,
    "path": "../../.output/public/images/bg/home-infotechno-video-intro-bg.jpg"
  },
  "/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg": {
    "type": "image/jpeg",
    "etag": "\"290f4-R+k2vjpo4RunpKOm+wlCElB5xLg\"",
    "mtime": "2024-04-15T21:17:35.896Z",
    "size": 168180,
    "path": "../../.output/public/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg"
  },
  "/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x3502.jpg": {
    "type": "image/jpeg",
    "etag": "\"16bb-4D0yZUHDp5iXqJie9z04VJwPt3k\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 5819,
    "path": "../../.output/public/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x3502.jpg"
  },
  "/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a82-i25izXDHe33vu2txpAuouzy8JJ4\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 6786,
    "path": "../../.output/public/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x420.jpg"
  },
  "/images/bg/home-reputable-success-section-story-bg.webp": {
    "type": "image/webp",
    "etag": "\"83f6-gj1eQTWqI0YsBpEA50rNZlA9QGQ\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 33782,
    "path": "../../.output/public/images/bg/home-reputable-success-section-story-bg.webp"
  },
  "/images/bg/home-resolutions-hero-bg-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"968b-ZLl9eWDRPyIcsBZ6Zs0QdalK5QI\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 38539,
    "path": "../../.output/public/images/bg/home-resolutions-hero-bg-image.jpg"
  },
  "/images/bg/managed-it-services-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2024-04-15T21:17:35.895Z",
    "size": 28396,
    "path": "../../.output/public/images/bg/managed-it-services-hero-bg.jpg"
  },
  "/images/bg/marketing-bg.jpeg": {
    "type": "image/jpeg",
    "etag": "\"e63a-USixrTXp3Gco7XwK/oW/sDMkpzo\"",
    "mtime": "2024-04-15T21:17:35.897Z",
    "size": 58938,
    "path": "../../.output/public/images/bg/marketing-bg.jpeg"
  },
  "/images/bg/mitech-home-infotechno-box-large-image-03-540x320.jpg": {
    "type": "image/jpeg",
    "etag": "\"14d2-xtGzBgaAw3nncz6J9GvCHzAoqXs\"",
    "mtime": "2024-04-15T21:17:35.896Z",
    "size": 5330,
    "path": "../../.output/public/images/bg/mitech-home-infotechno-box-large-image-03-540x320.jpg"
  },
  "/images/bg/mitech-home-services-contact-bg.png": {
    "type": "image/png",
    "etag": "\"f5a5-4yQmOHJrE/VDQ3WFPGdC+jmI/00\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 62885,
    "path": "../../.output/public/images/bg/mitech-home-services-contact-bg.png"
  },
  "/images/bg/mitech-processing-contact-bg.png": {
    "type": "image/png",
    "etag": "\"10e6b-PP24D/zsmikSNIwPnIiZa/YJHuw\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 69227,
    "path": "../../.output/public/images/bg/mitech-processing-contact-bg.png"
  },
  "/images/bg/mitech-slider-cybersecurity-global-image.png": {
    "type": "image/png",
    "etag": "\"11fd2-/TpAF/HVZY810+rWfxhdpI66uhs\"",
    "mtime": "2024-04-15T21:17:35.897Z",
    "size": 73682,
    "path": "../../.output/public/images/bg/mitech-slider-cybersecurity-global-image.png"
  },
  "/images/bg/page-404-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"9281-o3Wx2G1zi3CLZL5KLbNM9fyoCcw\"",
    "mtime": "2024-04-15T21:17:35.897Z",
    "size": 37505,
    "path": "../../.output/public/images/bg/page-404-bg.jpg"
  },
  "/images/bg/single-case-study-bg-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"6eec-WL7WZWHVO2n2WmVzBS2xQXUtSgU\"",
    "mtime": "2024-04-15T21:17:35.897Z",
    "size": 28396,
    "path": "../../.output/public/images/bg/single-case-study-bg-01.jpg"
  },
  "/images/bg/title-bar-01-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"5d83-edqGVtgnVGJa7sEvlBzofd3iv0A\"",
    "mtime": "2024-04-15T21:17:35.897Z",
    "size": 23939,
    "path": "../../.output/public/images/bg/title-bar-01-bg.jpg"
  },
  "/images/brand/Alter.png": {
    "type": "image/png",
    "etag": "\"1038-lFnL8Q2X/bFqoTaI8gW98LuWQNA\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 4152,
    "path": "../../.output/public/images/brand/Alter.png"
  },
  "/images/brand/annexus.png": {
    "type": "image/png",
    "etag": "\"15c3-opeMIts7KxhINnTmOklj4wyadnA\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 5571,
    "path": "../../.output/public/images/brand/annexus.png"
  },
  "/images/brand/decskill.png": {
    "type": "image/png",
    "etag": "\"1754-pe0MBcwpB8VvV7ioHeS2cihVN1o\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 5972,
    "path": "../../.output/public/images/brand/decskill.png"
  },
  "/images/brand/defendy.png": {
    "type": "image/png",
    "etag": "\"1943-ACSCjHMTWmS2WpWS10pxEJ2k8hI\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 6467,
    "path": "../../.output/public/images/brand/defendy.png"
  },
  "/images/brand/dxc.png": {
    "type": "image/png",
    "etag": "\"1b8f-nohD8kliw97fK6AzOzqi1zEG+SQ\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 7055,
    "path": "../../.output/public/images/brand/dxc.png"
  },
  "/images/brand/edp.png": {
    "type": "image/png",
    "etag": "\"427d-cUlExq9C7023/C3CddRRPfICjJQ\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 17021,
    "path": "../../.output/public/images/brand/edp.png"
  },
  "/images/brand/fibra.png": {
    "type": "image/png",
    "etag": "\"121b-ULjWdDIJR9jvuyg4wYJHSNwj8DU\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 4635,
    "path": "../../.output/public/images/brand/fibra.png"
  },
  "/images/brand/galp.png": {
    "type": "image/png",
    "etag": "\"1f12-Me8ccN1lt+qI1eO3338qR5Nsrpo\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 7954,
    "path": "../../.output/public/images/brand/galp.png"
  },
  "/images/brand/itau.png": {
    "type": "image/png",
    "etag": "\"1087-u6YVyu/Lob/7cmuo5E4d0bRaVCc\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 4231,
    "path": "../../.output/public/images/brand/itau.png"
  },
  "/images/brand/protege.png": {
    "type": "image/png",
    "etag": "\"1fcc-HLGnY+0DA/eAUCgUw0Jah+GE0OE\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 8140,
    "path": "../../.output/public/images/brand/protege.png"
  },
  "/images/brand/softtek.png": {
    "type": "image/png",
    "etag": "\"278b-kq0ankqKfqR+19CeOgNBYf8ORbc\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 10123,
    "path": "../../.output/public/images/brand/softtek.png"
  },
  "/images/brand/sp.png": {
    "type": "image/png",
    "etag": "\"1908-lD3A1VViuazqZJZNeu6YKzIqjoY\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 6408,
    "path": "../../.output/public/images/brand/sp.png"
  },
  "/images/brand/su.png": {
    "type": "image/png",
    "etag": "\"16e3-QO4ajqhqCJP3+JQD8sd06H17oqs\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 5859,
    "path": "../../.output/public/images/brand/su.png"
  },
  "/images/brand/total.png": {
    "type": "image/png",
    "etag": "\"1e1d-BF3mCoEpHWHdDImWBRloj/7kiro\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 7709,
    "path": "../../.output/public/images/brand/total.png"
  },
  "/images/brand/unibanco.png": {
    "type": "image/png",
    "etag": "\"19aa-isae4/WXxXRmfgHiy8r/zogyWKs\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 6570,
    "path": "../../.output/public/images/brand/unibanco.png"
  },
  "/images/brand/vector.png": {
    "type": "image/png",
    "etag": "\"2de8-kEdQ08MtCC22RWQ1IZQb2VdY6SA\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 11752,
    "path": "../../.output/public/images/brand/vector.png"
  },
  "/images/features/case-study-image-01.png": {
    "type": "image/png",
    "etag": "\"1905-BEgj+6chfbu7zbKcEzx1YxPx2WQ\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 6405,
    "path": "../../.output/public/images/features/case-study-image-01.png"
  },
  "/images/features/case-study-image-02.png": {
    "type": "image/png",
    "etag": "\"1905-BEgj+6chfbu7zbKcEzx1YxPx2WQ\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 6405,
    "path": "../../.output/public/images/features/case-study-image-02.png"
  },
  "/images/blog/blog-01-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2024-04-15T21:17:35.890Z",
    "size": 3315,
    "path": "../../.output/public/images/blog/blog-01-370x230.jpg"
  },
  "/images/blog/blog-01-370x370.jpg": {
    "type": "image/jpeg",
    "etag": "\"1063-pviikBYu9qiSpPtPkTSyCp80vZA\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 4195,
    "path": "../../.output/public/images/blog/blog-01-370x370.jpg"
  },
  "/images/blog/blog-01-480x312.jpg": {
    "type": "image/jpeg",
    "etag": "\"1306-MAlgh29sBcVkRyOeG8yNb5KbKxg\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 4870,
    "path": "../../.output/public/images/blog/blog-01-480x312.jpg"
  },
  "/images/blog/blog-01-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 5616,
    "path": "../../.output/public/images/blog/blog-01-540x330.jpg"
  },
  "/images/blog/blog-02-1018x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"41db-kzbvgh+zhZwRmkz5Kp3q7J9oWos\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 16859,
    "path": "../../.output/public/images/blog/blog-02-1018x678.jpg"
  },
  "/images/blog/blog-02-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2024-04-15T21:17:35.899Z",
    "size": 17567,
    "path": "../../.output/public/images/blog/blog-02-1170x600.jpg"
  },
  "/images/blog/blog-02-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2024-04-15T21:17:35.899Z",
    "size": 3315,
    "path": "../../.output/public/images/blog/blog-02-370x230.jpg"
  },
  "/images/blog/blog-02-370x246.jpg": {
    "type": "image/jpeg",
    "etag": "\"d4d-2jwVhGm5LP+ZPITaPyroR6lzaUo\"",
    "mtime": "2024-04-15T21:17:35.898Z",
    "size": 3405,
    "path": "../../.output/public/images/blog/blog-02-370x246.jpg"
  },
  "/images/blog/blog-02-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 5354,
    "path": "../../.output/public/images/blog/blog-02-500x338.jpg"
  },
  "/images/blog/blog-02-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 5616,
    "path": "../../.output/public/images/blog/blog-02-540x330.jpg"
  },
  "/images/blog/blog-02-770x400.jpg": {
    "type": "image/jpeg",
    "etag": "\"217c-hDf4qjprReZlMfrZ0a04iWd91QY\"",
    "mtime": "2024-04-15T21:17:35.900Z",
    "size": 8572,
    "path": "../../.output/public/images/blog/blog-02-770x400.jpg"
  },
  "/images/blog/blog-02-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2024-04-15T21:17:35.900Z",
    "size": 9464,
    "path": "../../.output/public/images/blog/blog-02-770x420.jpg"
  },
  "/images/blog/blog-02-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2024-04-15T21:17:35.899Z",
    "size": 14535,
    "path": "../../.output/public/images/blog/blog-02-900x678.jpg"
  },
  "/images/blog/blog-03-1017x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"40f0-o9+kK4rHyHWnEymeRxesZ8bry+k\"",
    "mtime": "2024-04-15T21:17:35.899Z",
    "size": 16624,
    "path": "../../.output/public/images/blog/blog-03-1017x678.jpg"
  },
  "/images/blog/blog-03-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2024-04-15T21:17:35.900Z",
    "size": 17567,
    "path": "../../.output/public/images/blog/blog-03-1170x600.jpg"
  },
  "/images/blog/blog-03-370x120.jpg": {
    "type": "image/jpeg",
    "etag": "\"a35-hJVENJmM8c3bWQeb4XcDw6Bqj/w\"",
    "mtime": "2024-04-15T21:17:35.900Z",
    "size": 2613,
    "path": "../../.output/public/images/blog/blog-03-370x120.jpg"
  },
  "/images/blog/blog-03-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2024-04-15T21:17:35.901Z",
    "size": 3315,
    "path": "../../.output/public/images/blog/blog-03-370x230.jpg"
  },
  "/images/blog/blog-03-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2024-04-15T21:17:35.901Z",
    "size": 5354,
    "path": "../../.output/public/images/blog/blog-03-500x338.jpg"
  },
  "/images/blog/blog-03-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2024-04-15T21:17:35.901Z",
    "size": 5616,
    "path": "../../.output/public/images/blog/blog-03-540x330.jpg"
  },
  "/images/blog/blog-03-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2024-04-15T21:17:35.901Z",
    "size": 14535,
    "path": "../../.output/public/images/blog/blog-03-900x678.jpg"
  },
  "/images/blog/blog-04-1034x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"448f-4RuLxnzQvmHzKRtHeAzvyT8dbqc\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 17551,
    "path": "../../.output/public/images/blog/blog-04-1034x678.jpg"
  },
  "/images/blog/blog-04-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2024-04-15T21:17:35.901Z",
    "size": 17567,
    "path": "../../.output/public/images/blog/blog-04-1170x600.jpg"
  },
  "/images/blog/blog-04-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 5354,
    "path": "../../.output/public/images/blog/blog-04-500x338.jpg"
  },
  "/images/blog/blog-04-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 14535,
    "path": "../../.output/public/images/blog/blog-04-900x678.jpg"
  },
  "/images/blog/blog-05-1170x570.jpg": {
    "type": "image/jpeg",
    "etag": "\"4119-Ca0ZITwm/jgMC/i+DvCkoEHCDtk\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 16665,
    "path": "../../.output/public/images/blog/blog-05-1170x570.jpg"
  },
  "/images/blog/blog-05-1170x600.jpg": {
    "type": "image/jpeg",
    "etag": "\"449f-r60/D4low4lTKQ69D9hASUHpfl8\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 17567,
    "path": "../../.output/public/images/blog/blog-05-1170x600.jpg"
  },
  "/images/blog/blog-05-1206x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"4f28-J9M9izHPcjDG2M/y++efvboDRrQ\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 20264,
    "path": "../../.output/public/images/blog/blog-05-1206x678.jpg"
  },
  "/images/blog/blog-05-370x120.jpg": {
    "type": "image/jpeg",
    "etag": "\"a35-hJVENJmM8c3bWQeb4XcDw6Bqj/w\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 2613,
    "path": "../../.output/public/images/blog/blog-05-370x120.jpg"
  },
  "/images/blog/blog-05-370x208.jpg": {
    "type": "image/jpeg",
    "etag": "\"c45-GShRPkZrDbX50+3z6PFAdUTqjKE\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 3141,
    "path": "../../.output/public/images/blog/blog-05-370x208.jpg"
  },
  "/images/blog/blog-05-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 3315,
    "path": "../../.output/public/images/blog/blog-05-370x230.jpg"
  },
  "/images/blog/blog-05-500x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"14ea-yyqgSJGNywoMB3bBbRAf+vWFyjc\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 5354,
    "path": "../../.output/public/images/blog/blog-05-500x338.jpg"
  },
  "/images/blog/blog-05-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 5616,
    "path": "../../.output/public/images/blog/blog-05-540x330.jpg"
  },
  "/images/blog/blog-05-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 9464,
    "path": "../../.output/public/images/blog/blog-05-770x420.jpg"
  },
  "/images/blog/blog-05-900x678.jpg": {
    "type": "image/jpeg",
    "etag": "\"38c7-hygYiyNq5aYDat5mG5OpZ4BcI1A\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 14535,
    "path": "../../.output/public/images/blog/blog-05-900x678.jpg"
  },
  "/images/blog/blog-07-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 3315,
    "path": "../../.output/public/images/blog/blog-07-370x230.jpg"
  },
  "/images/blog/blog-07-480x312.jpg": {
    "type": "image/jpeg",
    "etag": "\"1306-MAlgh29sBcVkRyOeG8yNb5KbKxg\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 4870,
    "path": "../../.output/public/images/blog/blog-07-480x312.jpg"
  },
  "/images/blog/blog-07-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 5616,
    "path": "../../.output/public/images/blog/blog-07-540x330.jpg"
  },
  "/images/blog/blog-07-770x400.jpg": {
    "type": "image/jpeg",
    "etag": "\"217c-hDf4qjprReZlMfrZ0a04iWd91QY\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 8572,
    "path": "../../.output/public/images/blog/blog-07-770x400.jpg"
  },
  "/images/blog/blog-07-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2024-04-15T21:17:35.905Z",
    "size": 9464,
    "path": "../../.output/public/images/blog/blog-07-770x420.jpg"
  },
  "/images/blog/blog-08-370x230.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf3-KAIveVXqe8CoqrpnAtub90nyi1I\"",
    "mtime": "2024-04-15T21:17:35.902Z",
    "size": 3315,
    "path": "../../.output/public/images/blog/blog-08-370x230.jpg"
  },
  "/images/blog/blog-08-370x247.jpg": {
    "type": "image/jpeg",
    "etag": "\"d32-0i9rUFTku3vswtlfHhH4RRl7p7A\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 3378,
    "path": "../../.output/public/images/blog/blog-08-370x247.jpg"
  },
  "/images/blog/blog-08-480x312.jpg": {
    "type": "image/jpeg",
    "etag": "\"1306-MAlgh29sBcVkRyOeG8yNb5KbKxg\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 4870,
    "path": "../../.output/public/images/blog/blog-08-480x312.jpg"
  },
  "/images/blog/blog-08-540x330.jpg": {
    "type": "image/jpeg",
    "etag": "\"15f0-wAwLZJWIdz7VQUsT89ZbD/Wd174\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 5616,
    "path": "../../.output/public/images/blog/blog-08-540x330.jpg"
  },
  "/images/blog/blog-08-770x420.jpg": {
    "type": "image/jpeg",
    "etag": "\"24f8-2McnB7YSTIYJn+EzmpLz10vwqtI\"",
    "mtime": "2024-04-15T21:17:35.903Z",
    "size": 9464,
    "path": "../../.output/public/images/blog/blog-08-770x420.jpg"
  },
  "/images/blog/blog-sidebar-ads.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c0b-LsESa/5SZqOQVqqP2kwFUmIhEqY\"",
    "mtime": "2024-04-15T21:17:35.904Z",
    "size": 15371,
    "path": "../../.output/public/images/blog/blog-sidebar-ads.jpg"
  },
  "/images/flags/de.png": {
    "type": "image/png",
    "etag": "\"ac-bjGVp7VQrREWeVmk2uJLVcLZuIY\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 172,
    "path": "../../.output/public/images/flags/de.png"
  },
  "/images/flags/en.png": {
    "type": "image/png",
    "etag": "\"307-YIb8Ta8qMdtZp9CIUx1tmmCRvA4\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 775,
    "path": "../../.output/public/images/flags/en.png"
  },
  "/images/flags/fr.png": {
    "type": "image/png",
    "etag": "\"c3-i6ZckGOtmS/OATu/YWSyZ6AOlOs\"",
    "mtime": "2024-04-15T21:17:35.906Z",
    "size": 195,
    "path": "../../.output/public/images/flags/fr.png"
  },
  "/images/gallery/blog-06-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 19943,
    "path": "../../.output/public/images/gallery/blog-06-960x960.jpg"
  },
  "/images/gallery/blog-07-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 19943,
    "path": "../../.output/public/images/gallery/blog-07-960x960.jpg"
  },
  "/images/gallery/blog-08-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 19943,
    "path": "../../.output/public/images/gallery/blog-08-960x960.jpg"
  },
  "/images/gallery/careers-gallery-image-01-960x960.jpg": {
    "type": "image/jpeg",
    "etag": "\"4de7-8mvEUJUObwi7vaQAHGfM+uQ4Fi4\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 19943,
    "path": "../../.output/public/images/gallery/careers-gallery-image-01-960x960.jpg"
  },
  "/images/hero/appointment-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"f642e-t73FrQ9vK9EjeuXuV1wCaZlTgl0\"",
    "mtime": "2024-04-15T21:17:35.894Z",
    "size": 1008686,
    "path": "../../.output/public/images/hero/appointment-hero-bg.jpg"
  },
  "/images/hero/appointment-hero-bg2.jpg": {
    "type": "image/jpeg",
    "etag": "\"7954-xFEhEcorgdsDPzva+k98krUYH5E\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 31060,
    "path": "../../.output/public/images/hero/appointment-hero-bg2.jpg"
  },
  "/images/hero/home-reputable-success.png": {
    "type": "image/png",
    "etag": "\"220d7-ae6rQGt2+P1+M/gGtObovdPxP4c\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 139479,
    "path": "../../.output/public/images/hero/home-reputable-success.png"
  },
  "/images/hero/home-resolutions-hero-bg-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"968b-ZLl9eWDRPyIcsBZ6Zs0QdalK5QI\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 38539,
    "path": "../../.output/public/images/hero/home-resolutions-hero-bg-image.jpg"
  },
  "/images/hero/home-services-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"865a-JiAKThEREqquoRcoVLbB/mM+Vxk\"",
    "mtime": "2024-04-15T21:17:35.909Z",
    "size": 34394,
    "path": "../../.output/public/images/hero/home-services-hero-bg.jpg"
  },
  "/images/hero/infotechno-01.png": {
    "type": "image/png",
    "etag": "\"1c4c-0u0SdCYeu53ADFLbU4o/cOSGI6M\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 7244,
    "path": "../../.output/public/images/hero/infotechno-01.png"
  },
  "/images/hero/infotechno-02.png": {
    "type": "image/png",
    "etag": "\"1d0a-mwY6ixtEdiA/lcOzbU/ILQkFNTU\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 7434,
    "path": "../../.output/public/images/hero/infotechno-02.png"
  },
  "/images/hero/mitech-landing-main-slider-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"306a-mIE8DrpXXNCkyGLLwiKWo9nRv6I\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 12394,
    "path": "../../.output/public/images/hero/mitech-landing-main-slider-bg.jpg"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-01.png": {
    "type": "image/png",
    "etag": "\"b36-FhY/zgEc1zXqOI5GwAoAnU3wdBM\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 2870,
    "path": "../../.output/public/images/hero/mitech-landing-main-slider-slide-01-image-01.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-02.png": {
    "type": "image/png",
    "etag": "\"4b7-+jeKZPqBZDF/DiasFIIRqIitet0\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 1207,
    "path": "../../.output/public/images/hero/mitech-landing-main-slider-slide-01-image-02.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-03.png": {
    "type": "image/png",
    "etag": "\"ed9-wx2QuejBmiHYftCHN5UwTam3/EA\"",
    "mtime": "2024-04-15T21:17:35.911Z",
    "size": 3801,
    "path": "../../.output/public/images/hero/mitech-landing-main-slider-slide-01-image-03.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-04.png": {
    "type": "image/png",
    "etag": "\"20b0-pchPeCARll+GNdx/N1xT5+WelbE\"",
    "mtime": "2024-04-15T21:17:35.910Z",
    "size": 8368,
    "path": "../../.output/public/images/hero/mitech-landing-main-slider-slide-01-image-04.png"
  },
  "/images/hero/mitech-landing-main-slider-slide-01-image-05.png": {
    "type": "image/png",
    "etag": "\"841-JwNWNIje+syCCM1abGrOL6eugR0\"",
    "mtime": "2024-04-15T21:17:35.911Z",
    "size": 2113,
    "path": "../../.output/public/images/hero/mitech-landing-main-slider-slide-01-image-05.png"
  },
  "/images/hero/mitech-slider-cybersecurity-global-image.png": {
    "type": "image/png",
    "etag": "\"11fd2-/TpAF/HVZY810+rWfxhdpI66uhs\"",
    "mtime": "2024-04-15T21:17:35.912Z",
    "size": 73682,
    "path": "../../.output/public/images/hero/mitech-slider-cybersecurity-global-image.png"
  },
  "/images/hero/processing-hero-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"7300-tIyXiKGm1vnAsu+q3glWxtLP9uU\"",
    "mtime": "2024-04-15T21:17:35.911Z",
    "size": 29440,
    "path": "../../.output/public/images/hero/processing-hero-bg.jpg"
  },
  "/images/hero/slider-cybersecurity-slide-01-image-01.png": {
    "type": "image/png",
    "etag": "\"142b-L2QAAX/Hmmx+POZzKq9XXCjY6tU\"",
    "mtime": "2024-04-15T21:17:35.911Z",
    "size": 5163,
    "path": "../../.output/public/images/hero/slider-cybersecurity-slide-01-image-01.png"
  },
  "/images/hero/slider-processing-slide-01-image-01.png": {
    "type": "image/png",
    "etag": "\"1976-PEl8A8Izu0i2af/LZehFmYm5q08\"",
    "mtime": "2024-04-15T21:17:35.912Z",
    "size": 6518,
    "path": "../../.output/public/images/hero/slider-processing-slide-01-image-01.png"
  },
  "/images/icons/apple-store.jpg": {
    "type": "image/jpeg",
    "etag": "\"796-IzuMtNGz1Qy4dQoAlT1lDb2SvUw\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 1942,
    "path": "../../.output/public/images/icons/apple-store.jpg"
  },
  "/images/icons/black-apple-store.jpg": {
    "type": "image/jpeg",
    "etag": "\"8ee-FkAXYRecu8CP38eIWw4d+Vuxee8\"",
    "mtime": "2024-04-15T21:17:35.914Z",
    "size": 2286,
    "path": "../../.output/public/images/icons/black-apple-store.jpg"
  },
  "/images/icons/black-google-play.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b7-H8DV4RJj4jmhs45QVIP1eiahhrI\"",
    "mtime": "2024-04-15T21:17:35.913Z",
    "size": 1975,
    "path": "../../.output/public/images/icons/black-google-play.jpg"
  },
  "/images/icons/google-play.jpg": {
    "type": "image/jpeg",
    "etag": "\"5a0-DAhPNUX9yCQl7zG93mFSVGkXacs\"",
    "mtime": "2024-04-15T21:17:35.912Z",
    "size": 1440,
    "path": "../../.output/public/images/icons/google-play.jpg"
  },
  "/images/icons/green-curve-arrow.png": {
    "type": "image/png",
    "etag": "\"8df-vM4zA751KjqOHGJVwnRMwzrAotQ\"",
    "mtime": "2024-04-15T21:17:35.913Z",
    "size": 2271,
    "path": "../../.output/public/images/icons/green-curve-arrow.png"
  },
  "/images/icons/hero-selector-icon.png": {
    "type": "image/png",
    "etag": "\"e0-ETBlNLq0WX9T7U41F8dOh1ctMpI\"",
    "mtime": "2024-04-15T21:17:35.914Z",
    "size": 224,
    "path": "../../.output/public/images/icons/hero-selector-icon.png"
  },
  "/images/icons/home-reputable-success-client-logo-01.webp": {
    "type": "image/webp",
    "etag": "\"360-AnhSJn2rNL08Jz2RcFWy+PTMV4k\"",
    "mtime": "2024-04-15T21:17:35.914Z",
    "size": 864,
    "path": "../../.output/public/images/icons/home-reputable-success-client-logo-01.webp"
  },
  "/images/icons/home-reputable-success-client-logo-02.webp": {
    "type": "image/webp",
    "etag": "\"3fc-mtAAPs0bXOKr15Bj8RsPNumROl8\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 1020,
    "path": "../../.output/public/images/icons/home-reputable-success-client-logo-02.webp"
  },
  "/images/icons/home-reputable-success-client-logo-03.webp": {
    "type": "image/webp",
    "etag": "\"35a-TJrnNShsP64dRLH6xNK0qIgP1P0\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 858,
    "path": "../../.output/public/images/icons/home-reputable-success-client-logo-03.webp"
  },
  "/images/icons/home-reputable-success-client-logo-04.webp": {
    "type": "image/webp",
    "etag": "\"3e4-SU1OqBlQKbqDb22YCYjiiX/7mCo\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 996,
    "path": "../../.output/public/images/icons/home-reputable-success-client-logo-04.webp"
  },
  "/images/icons/home-reputable-success-client-logo-06.webp": {
    "type": "image/webp",
    "etag": "\"2fa-lltUuF7SV+ayQlBoQTDkTJmosTU\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 762,
    "path": "../../.output/public/images/icons/home-reputable-success-client-logo-06.webp"
  },
  "/images/icons/light-close.png": {
    "type": "image/png",
    "etag": "\"bb-x1nWUhrmWxp/5EGzssp66FSq+QM\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 187,
    "path": "../../.output/public/images/icons/light-close.png"
  },
  "/images/icons/map-marker-02.png": {
    "type": "image/png",
    "etag": "\"1e9-EIdTzQz1Z1Zd4DBumcz0D4Lh5u0\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 489,
    "path": "../../.output/public/images/icons/map-marker-02.png"
  },
  "/images/icons/map-marker.png": {
    "type": "image/png",
    "etag": "\"1e9-EIdTzQz1Z1Zd4DBumcz0D4Lh5u0\"",
    "mtime": "2024-04-15T21:17:35.915Z",
    "size": 489,
    "path": "../../.output/public/images/icons/map-marker.png"
  },
  "/images/icons/mitech-aqua-logo-83x108.png": {
    "type": "image/png",
    "etag": "\"be2-ZvrWDDLwo0E+E1xCGYhKf6cwviI\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 3042,
    "path": "../../.output/public/images/icons/mitech-aqua-logo-83x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-01-100x108.png": {
    "type": "image/png",
    "etag": "\"828-P9CyYMvXVsuJXeXtNRBwFoOWS8g\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 2088,
    "path": "../../.output/public/images/icons/mitech-box-image-style-01-image-01-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-02-100x108.png": {
    "type": "image/png",
    "etag": "\"a47-q2a6xNAPkkw1ln80o8YepUkiiKk\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 2631,
    "path": "../../.output/public/images/icons/mitech-box-image-style-01-image-02-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-03-100x108.png": {
    "type": "image/png",
    "etag": "\"952-VoNBUF2jyX2hJAciAaOr48hmNPk\"",
    "mtime": "2024-04-15T21:17:35.917Z",
    "size": 2386,
    "path": "../../.output/public/images/icons/mitech-box-image-style-01-image-03-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-04-100x108.png": {
    "type": "image/png",
    "etag": "\"9d0-FGoBbN9j3aN5NkTOz2OVRK0fs8Y\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 2512,
    "path": "../../.output/public/images/icons/mitech-box-image-style-01-image-04-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-05-100x108.png": {
    "type": "image/png",
    "etag": "\"a1f-hoZ82R4gzGI8GGJBA0CcbTt8CUQ\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 2591,
    "path": "../../.output/public/images/icons/mitech-box-image-style-01-image-05-100x108.png"
  },
  "/images/icons/mitech-box-image-style-01-image-06-100x108.png": {
    "type": "image/png",
    "etag": "\"986-43MjeqPZjEMxSChJNFx/K2XUN5M\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 2438,
    "path": "../../.output/public/images/icons/mitech-box-image-style-01-image-06-100x108.png"
  },
  "/images/icons/mitech-box-image-style-05-image-01-60x60.png": {
    "type": "image/png",
    "etag": "\"45c-Zj1XQCpQyTpOBXuPhkxsvlaixQo\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 1116,
    "path": "../../.output/public/images/icons/mitech-box-image-style-05-image-01-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-02-60x60.png": {
    "type": "image/png",
    "etag": "\"3fc-nTwHTCee6gnnCAeUv7EOLsK3/gA\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 1020,
    "path": "../../.output/public/images/icons/mitech-box-image-style-05-image-02-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-03-60x60.png": {
    "type": "image/png",
    "etag": "\"5ba-UD9UkeIwfsriKabJiAB3iXOTY9w\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 1466,
    "path": "../../.output/public/images/icons/mitech-box-image-style-05-image-03-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-04-60x60.png": {
    "type": "image/png",
    "etag": "\"413-yMQIokTTmX140dwwy3L/xFMCaVk\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 1043,
    "path": "../../.output/public/images/icons/mitech-box-image-style-05-image-04-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-05-60x60.png": {
    "type": "image/png",
    "etag": "\"367-mu5IX84cUzRrAlwTGNQBLW/6Xt8\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 871,
    "path": "../../.output/public/images/icons/mitech-box-image-style-05-image-05-60x60.png"
  },
  "/images/icons/mitech-box-image-style-05-image-06-60x60.png": {
    "type": "image/png",
    "etag": "\"2b1-By3ETAhZE7t1YkUf26vp9iqUk+E\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 689,
    "path": "../../.output/public/images/icons/mitech-box-image-style-05-image-06-60x60.png"
  },
  "/images/icons/mitech-box-image-style-06-image-01-120x120.png": {
    "type": "image/png",
    "etag": "\"e6a-fJepVuv+2wnv/AEEftiTMhd9R9I\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 3690,
    "path": "../../.output/public/images/icons/mitech-box-image-style-06-image-01-120x120.png"
  },
  "/images/icons/mitech-box-image-style-06-image-02-120x120.png": {
    "type": "image/png",
    "etag": "\"e33-Ro4DaB6yUBFqgmCKkWfEO7sZeug\"",
    "mtime": "2024-04-15T21:17:35.916Z",
    "size": 3635,
    "path": "../../.output/public/images/icons/mitech-box-image-style-06-image-02-120x120.png"
  },
  "/images/icons/mitech-box-image-style-06-image-03-120x120.png": {
    "type": "image/png",
    "etag": "\"6f5-/IAVXklVGVOmz1JHjuAsdpPTxa0\"",
    "mtime": "2024-04-15T21:17:35.917Z",
    "size": 1781,
    "path": "../../.output/public/images/icons/mitech-box-image-style-06-image-03-120x120.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-01-100x98.png": {
    "type": "image/png",
    "etag": "\"82c-ZWJcDylXXr2kyJklBMaBuH8XT8g\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 2092,
    "path": "../../.output/public/images/icons/mitech-home-resolutions-box-image-01-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-01-hover-100x98.png": {
    "type": "image/png",
    "etag": "\"6b7-FGIA6kVteN0w+F5A/80z+bQ6Cl4\"",
    "mtime": "2024-04-15T21:17:35.917Z",
    "size": 1719,
    "path": "../../.output/public/images/icons/mitech-home-resolutions-box-image-01-hover-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-02-100x98.png": {
    "type": "image/png",
    "etag": "\"994-xbRGydiZc4b0sTbiq4PRWXueYNE\"",
    "mtime": "2024-04-15T21:17:35.917Z",
    "size": 2452,
    "path": "../../.output/public/images/icons/mitech-home-resolutions-box-image-02-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-02-hover-100x98.png": {
    "type": "image/png",
    "etag": "\"87c-rKb3iWgYGTSLfutNky8R+eSKXgw\"",
    "mtime": "2024-04-15T21:17:35.917Z",
    "size": 2172,
    "path": "../../.output/public/images/icons/mitech-home-resolutions-box-image-02-hover-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-03-100x98.png": {
    "type": "image/png",
    "etag": "\"982-dIqPexvaajXw1b3FuMZHqVjQePg\"",
    "mtime": "2024-04-15T21:17:35.917Z",
    "size": 2434,
    "path": "../../.output/public/images/icons/mitech-home-resolutions-box-image-03-100x98.png"
  },
  "/images/icons/mitech-home-resolutions-box-image-03-hover-100x98.png": {
    "type": "image/png",
    "etag": "\"819-jsc1d6fzv1wO9lax8CrfE9vhqeI\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 2073,
    "path": "../../.output/public/images/icons/mitech-home-resolutions-box-image-03-hover-100x98.png"
  },
  "/images/icons/mitech-landing-theme-feature-01-68x68.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d1-Tnl1y8/6CdHq0Ei1X2gDdI0NaY0\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 1233,
    "path": "../../.output/public/images/icons/mitech-landing-theme-feature-01-68x68.jpg"
  },
  "/images/icons/mitech-landing-theme-feature-02-68x68.png": {
    "type": "image/png",
    "etag": "\"824-dl30DoguS6fT08AdsTghTFo4Cq0\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 2084,
    "path": "../../.output/public/images/icons/mitech-landing-theme-feature-02-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-03-68x68.png": {
    "type": "image/png",
    "etag": "\"907-LPSWNp+3M4SSlvYdyRbKA4AKwd8\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 2311,
    "path": "../../.output/public/images/icons/mitech-landing-theme-feature-03-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-04-68x68.png": {
    "type": "image/png",
    "etag": "\"32b-c/OLaj3ThO5p/Xnh8uYKZzlhBKw\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 811,
    "path": "../../.output/public/images/icons/mitech-landing-theme-feature-04-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-05-68x68.png": {
    "type": "image/png",
    "etag": "\"4c9-btYt2SoQ3vvTv/5kxo6ZmaXtAsM\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 1225,
    "path": "../../.output/public/images/icons/mitech-landing-theme-feature-05-68x68.png"
  },
  "/images/icons/mitech-landing-theme-feature-06-68x68.png": {
    "type": "image/png",
    "etag": "\"371-zsnK/MHBvYZpjni7KhhACFAiwoQ\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 881,
    "path": "../../.output/public/images/icons/mitech-landing-theme-feature-06-68x68.png"
  },
  "/images/icons/mitech-pricing-box-icon-01-90x90.png": {
    "type": "image/png",
    "etag": "\"b10-AxpT0dXAJnO5+KpPlRcZKaR6zfU\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 2832,
    "path": "../../.output/public/images/icons/mitech-pricing-box-icon-01-90x90.png"
  },
  "/images/icons/mitech-pricing-box-icon-02-88x88.png": {
    "type": "image/png",
    "etag": "\"be1-xUWICGuKzxHxUfy1xFmYp4I15zo\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 3041,
    "path": "../../.output/public/images/icons/mitech-pricing-box-icon-02-88x88.png"
  },
  "/images/icons/mitech-pricing-box-icon-03-90x90.png": {
    "type": "image/png",
    "etag": "\"8ea-hW+YROnBtVp+fvv3BtmhGbxEpnY\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 2282,
    "path": "../../.output/public/images/icons/mitech-pricing-box-icon-03-90x90.png"
  },
  "/images/icons/mitech-processing-service-image-01-80x83.png": {
    "type": "image/png",
    "etag": "\"45d-8qwnpYchTDLvQP/c+tS1LWpWkUM\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 1117,
    "path": "../../.output/public/images/icons/mitech-processing-service-image-01-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-02-80x83.png": {
    "type": "image/png",
    "etag": "\"6dc-RtAGTVx6dVrkoAZTqsEj1b60iE4\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 1756,
    "path": "../../.output/public/images/icons/mitech-processing-service-image-02-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-03-80x83.png": {
    "type": "image/png",
    "etag": "\"5e8-+HTdwnonpxWmbGdPj2W8r1TRcus\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 1512,
    "path": "../../.output/public/images/icons/mitech-processing-service-image-03-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-04-80x83.png": {
    "type": "image/png",
    "etag": "\"968-uIH2FOzyObGs96QvGKklUTf7gs0\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 2408,
    "path": "../../.output/public/images/icons/mitech-processing-service-image-04-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-05-80x83.png": {
    "type": "image/png",
    "etag": "\"636-0UPrz662Ak46rp4kmB9M2zG81ho\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 1590,
    "path": "../../.output/public/images/icons/mitech-processing-service-image-05-80x83.png"
  },
  "/images/icons/mitech-processing-service-image-06-80x83.png": {
    "type": "image/png",
    "etag": "\"5b8-/9TZREpVx3IMnp2HXY8qLB4F+GU\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 1464,
    "path": "../../.output/public/images/icons/mitech-processing-service-image-06-80x83.png"
  },
  "/images/icons/quote.png": {
    "type": "image/png",
    "etag": "\"551-fzjnEAfaOPLBGuUIVl8aqrxlSds\"",
    "mtime": "2024-04-15T21:17:35.918Z",
    "size": 1361,
    "path": "../../.output/public/images/icons/quote.png"
  },
  "/images/icons/selector-icon.png": {
    "type": "image/png",
    "etag": "\"86-iHkKoMz2YAu+UR5HZLGpQ0bwrY0\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 134,
    "path": "../../.output/public/images/icons/selector-icon.png"
  },
  "/images/logo/dark-logo-160x48.png": {
    "type": "image/png",
    "etag": "\"700-9BqCeaY8YI/GVHtmJeXY41vg0gE\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 1792,
    "path": "../../.output/public/images/logo/dark-logo-160x48.png"
  },
  "/images/logo/dark-logo.png": {
    "type": "image/png",
    "etag": "\"9b1d-G84j37vK7yL5fym861d2tkzDdyo\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 39709,
    "path": "../../.output/public/images/logo/dark-logo.png"
  },
  "/images/logo/light-logo.png": {
    "type": "image/png",
    "etag": "\"3df9-1bFHAVF88oADnh3Pu5wtRlGh7Lc\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 15865,
    "path": "../../.output/public/images/logo/light-logo.png"
  },
  "/images/logo/logo-dark.png": {
    "type": "image/png",
    "etag": "\"9b1d-G84j37vK7yL5fym861d2tkzDdyo\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 39709,
    "path": "../../.output/public/images/logo/logo-dark.png"
  },
  "/images/other/landing-plugin-image-cf7.jpg": {
    "type": "image/jpeg",
    "etag": "\"941-khRZD4i6v9KyW18UuKPSfIRpN0A\"",
    "mtime": "2024-04-15T21:17:35.891Z",
    "size": 2369,
    "path": "../../.output/public/images/other/landing-plugin-image-cf7.jpg"
  },
  "/images/other/landing-plugin-image-google-analytic.jpg": {
    "type": "image/jpeg",
    "etag": "\"a1d-80nlrVUCqUzPbBnf7hRiEcdWXo0\"",
    "mtime": "2024-04-15T21:17:35.924Z",
    "size": 2589,
    "path": "../../.output/public/images/other/landing-plugin-image-google-analytic.jpg"
  },
  "/images/other/landing-plugin-image-mailchimp.jpg": {
    "type": "image/jpeg",
    "etag": "\"ee9-XMOeuixuhWiuULdTnnJfnDDbkQ4\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 3817,
    "path": "../../.output/public/images/other/landing-plugin-image-mailchimp.jpg"
  },
  "/images/other/landing-plugin-image-revslider.jpg": {
    "type": "image/jpeg",
    "etag": "\"9e1-KRFcggzqYFRszxhPwY5E02mAPIc\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 2529,
    "path": "../../.output/public/images/other/landing-plugin-image-revslider.jpg"
  },
  "/images/other/landing-plugin-image-sass.jpg": {
    "type": "image/jpeg",
    "etag": "\"1072-SGxriBrmOZ1fwKPXPNyjk/d+fjg\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 4210,
    "path": "../../.output/public/images/other/landing-plugin-image-sass.jpg"
  },
  "/images/other/mitech-slider-client-logos-logo-01.png": {
    "type": "image/png",
    "etag": "\"1172-0LFE9gPJlMVFLdQ6H2lwgQAtNto\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 4466,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-01.png"
  },
  "/images/other/mitech-slider-client-logos-logo-02.png": {
    "type": "image/png",
    "etag": "\"1258-1xdhhuGIp7xqqacdT/QHNYCfPVk\"",
    "mtime": "2024-04-15T21:17:35.919Z",
    "size": 4696,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-02.png"
  },
  "/images/other/mitech-slider-client-logos-logo-03.png": {
    "type": "image/png",
    "etag": "\"142b-eV0R2IMyMKRL81+MlHU9gizM7h8\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 5163,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-03.png"
  },
  "/images/other/mitech-slider-client-logos-logo-04.png": {
    "type": "image/png",
    "etag": "\"109a-iSnMBMw++5K1E1PtgyMNra6W6Xs\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 4250,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-04.png"
  },
  "/images/other/mitech-slider-client-logos-logo-05.png": {
    "type": "image/png",
    "etag": "\"14a0-ifndQCALbpFf1O4cJt7YXJndEYA\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 5280,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-05.png"
  },
  "/images/other/mitech-slider-client-logos-logo-06.png": {
    "type": "image/png",
    "etag": "\"1110-jtVuFoDX8UTIl9nW2OY6z+rKoIg\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 4368,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-06.png"
  },
  "/images/other/mitech-slider-client-logos-logo-07.png": {
    "type": "image/png",
    "etag": "\"1132-+3sbaxNYPY8t3PwNw0FRYVtp2sg\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 4402,
    "path": "../../.output/public/images/other/mitech-slider-client-logos-logo-07.png"
  },
  "/images/other/page-404-image.png": {
    "type": "image/png",
    "etag": "\"c157-/udShd2sB/Jr/EONdptfYRD4bzM\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 49495,
    "path": "../../.output/public/images/other/page-404-image.png"
  },
  "/images/patterns/home-reputable-success-about-shape.webp": {
    "type": "image/webp",
    "etag": "\"19dc-O6veFScxVfJnwexXv7DmD3PNwwM\"",
    "mtime": "2024-04-15T21:17:35.892Z",
    "size": 6620,
    "path": "../../.output/public/images/patterns/home-reputable-success-about-shape.webp"
  },
  "/images/patterns/mitech-call-to-action-image-global.png": {
    "type": "image/png",
    "etag": "\"119ea-3EGe/dlUxbSegKqsWk2AAa8jf58\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 72170,
    "path": "../../.output/public/images/patterns/mitech-call-to-action-image-global.png"
  },
  "/images/patterns/mitech-home-appointment-call-to-action-bg-image.png": {
    "type": "image/png",
    "etag": "\"6565-mzQ4+C+3fx09DrDEMR7t3xNUc0U\"",
    "mtime": "2024-04-15T21:17:35.920Z",
    "size": 25957,
    "path": "../../.output/public/images/patterns/mitech-home-appointment-call-to-action-bg-image.png"
  },
  "/images/patterns/mitech-home-infotechno-case-study-section-bg.png": {
    "type": "image/png",
    "etag": "\"6ee7-Ujc02uUJhRIqCuqe6blkzb4Udzk\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 28391,
    "path": "../../.output/public/images/patterns/mitech-home-infotechno-case-study-section-bg.png"
  },
  "/images/patterns/mitech-home-infotechno-section-company-bg.png": {
    "type": "image/png",
    "etag": "\"1cd0-lJ55BKPyEvF1kfpMI72yqziN9TY\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 7376,
    "path": "../../.output/public/images/patterns/mitech-home-infotechno-section-company-bg.png"
  },
  "/images/preview/mitech-landing-blog-preview.jpg": {
    "type": "image/jpeg",
    "etag": "\"995a-u7Ye6RijwUmrD9oUOiJnUm+VxFE\"",
    "mtime": "2024-04-15T21:17:35.892Z",
    "size": 39258,
    "path": "../../.output/public/images/preview/mitech-landing-blog-preview.jpg"
  },
  "/images/preview/mitech-landing-case-study-preview.jpg": {
    "type": "image/jpeg",
    "etag": "\"7ac9-uA5tS3XRYJLN3yvwoDsJ+rhMZjc\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 31433,
    "path": "../../.output/public/images/preview/mitech-landing-case-study-preview.jpg"
  },
  "/images/preview/mitech-landing-extended-plugins-preview.png": {
    "type": "image/png",
    "etag": "\"1845c-e1XRPFTyKeu61ETOMC30FRg6SjM\"",
    "mtime": "2024-04-15T21:17:35.922Z",
    "size": 99420,
    "path": "../../.output/public/images/preview/mitech-landing-extended-plugins-preview.png"
  },
  "/images/preview/mitech-landing-footer-bg-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"ce15-0D1y6BKXP0f/Fb3ZvSmtQVaVgfo\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 52757,
    "path": "../../.output/public/images/preview/mitech-landing-footer-bg-01.jpg"
  },
  "/images/preview/mitech-landing-header-preview-bg.png": {
    "type": "image/png",
    "etag": "\"98e4-BJssRTSmy1n6MP4+aQ+63skDR1Y\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 39140,
    "path": "../../.output/public/images/preview/mitech-landing-header-preview-bg.png"
  },
  "/images/preview/mitech-landing-header-preview-image.png": {
    "type": "image/png",
    "etag": "\"7c65-vORRXFBpYEGgwdYGiUguN5JPUeA\"",
    "mtime": "2024-04-15T21:17:35.921Z",
    "size": 31845,
    "path": "../../.output/public/images/preview/mitech-landing-header-preview-image.png"
  },
  "/images/preview/mitech-landing-home-appointment-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"52a6-F3KSKKjtHrO5KXbXBa2diXdpbZM\"",
    "mtime": "2024-04-15T21:17:35.922Z",
    "size": 21158,
    "path": "../../.output/public/images/preview/mitech-landing-home-appointment-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-cybersecurity-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d0-kvOlWCm9hKZasvTYQlVw7HPGFrc\"",
    "mtime": "2024-04-15T21:17:35.922Z",
    "size": 12496,
    "path": "../../.output/public/images/preview/mitech-landing-home-cybersecurity-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-infotechno-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"3366-j+AjFMjLwYdFa2/AnEpilx+2/7I\"",
    "mtime": "2024-04-15T21:17:35.922Z",
    "size": 13158,
    "path": "../../.output/public/images/preview/mitech-landing-home-infotechno-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-processing-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"47cf-e99VYnQduUtt6QUdeFUzb9sSE9c\"",
    "mtime": "2024-04-15T21:17:35.922Z",
    "size": 18383,
    "path": "../../.output/public/images/preview/mitech-landing-home-processing-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-resolutions-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"5377-lqdbk8fvqShOt9mzI4HAbv1D02Y\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 21367,
    "path": "../../.output/public/images/preview/mitech-landing-home-resolutions-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-home-services-preview-480x338.jpg": {
    "type": "image/jpeg",
    "etag": "\"4425-5C0fkpcfcoSvPSfQlk8ab8AbnQk\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 17445,
    "path": "../../.output/public/images/preview/mitech-landing-home-services-preview-480x338.jpg"
  },
  "/images/preview/mitech-landing-plugin-font-awesome-86x86.png": {
    "type": "image/png",
    "etag": "\"44e-YE/FcIbwt6BN839pTjZKAwYcqOo\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 1102,
    "path": "../../.output/public/images/preview/mitech-landing-plugin-font-awesome-86x86.png"
  },
  "/images/preview/mitech-landing-plugin-slider-86x86.png": {
    "type": "image/png",
    "etag": "\"785-/KQefgrSysX68/CDQdKYXY4gITs\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 1925,
    "path": "../../.output/public/images/preview/mitech-landing-plugin-slider-86x86.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-01.png": {
    "type": "image/png",
    "etag": "\"89a-O4Qy5omHlLuFOdL2qr4GmLRDGKU\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 2202,
    "path": "../../.output/public/images/pricing/aeroland-branding-pricing-image-01.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-02.png": {
    "type": "image/png",
    "etag": "\"8a3-tRXb0a+PgqBiqwqESUfJio1U518\"",
    "mtime": "2024-04-15T21:17:35.892Z",
    "size": 2211,
    "path": "../../.output/public/images/pricing/aeroland-branding-pricing-image-02.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-03.png": {
    "type": "image/png",
    "etag": "\"8ac-KfC9FtAZYfI6EletXfhx2/4/Nuo\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 2220,
    "path": "../../.output/public/images/pricing/aeroland-branding-pricing-image-03.png"
  },
  "/images/pricing/aeroland-branding-pricing-image-04.png": {
    "type": "image/png",
    "etag": "\"8ef-4ceqGP7phhVTzoLoH8WM3VG0MPc\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 2287,
    "path": "../../.output/public/images/pricing/aeroland-branding-pricing-image-04.png"
  },
  "/images/pricing/aeroland-pricing-05-image-01.png": {
    "type": "image/png",
    "etag": "\"14ca-t25w8CV/yfFcm6vc8Lz4NP+IjN0\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 5322,
    "path": "../../.output/public/images/pricing/aeroland-pricing-05-image-01.png"
  },
  "/images/pricing/aeroland-pricing-05-image-02.png": {
    "type": "image/png",
    "etag": "\"1387-Ds7VlSnYZ5FnrQJPvvSytIn+Eeo\"",
    "mtime": "2024-04-15T21:17:35.923Z",
    "size": 4999,
    "path": "../../.output/public/images/pricing/aeroland-pricing-05-image-02.png"
  },
  "/images/pricing/aeroland-pricing-image-05.png": {
    "type": "image/png",
    "etag": "\"1cd1-IL2U/RiaBO15ioS+ueYNxNwfD5U\"",
    "mtime": "2024-04-15T21:17:35.924Z",
    "size": 7377,
    "path": "../../.output/public/images/pricing/aeroland-pricing-image-05.png"
  },
  "/images/pricing/aeroland-pricing-image-06.png": {
    "type": "image/png",
    "etag": "\"16f1-vL5i+kEDRADsqDoJndX211JSwC4\"",
    "mtime": "2024-04-15T21:17:35.924Z",
    "size": 5873,
    "path": "../../.output/public/images/pricing/aeroland-pricing-image-06.png"
  },
  "/images/pricing/aeroland-pricing-image-07.png": {
    "type": "image/png",
    "etag": "\"1903-ELn+PyR54S2P//ytApGkzJVTUCI\"",
    "mtime": "2024-04-15T21:17:35.924Z",
    "size": 6403,
    "path": "../../.output/public/images/pricing/aeroland-pricing-image-07.png"
  },
  "/images/projects/case-study-01-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.892Z",
    "size": 4876,
    "path": "../../.output/public/images/projects/case-study-01-480x298.jpg"
  },
  "/images/projects/case-study-02-120x80.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d6-UwN6CUuHCCz8RboiH+9hGBGJMok\"",
    "mtime": "2024-04-15T21:17:35.924Z",
    "size": 982,
    "path": "../../.output/public/images/projects/case-study-02-120x80.jpg"
  },
  "/images/projects/case-study-02-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4876,
    "path": "../../.output/public/images/projects/case-study-02-480x298.jpg"
  },
  "/images/projects/case-study-03-120x80.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d6-UwN6CUuHCCz8RboiH+9hGBGJMok\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 982,
    "path": "../../.output/public/images/projects/case-study-03-120x80.jpg"
  },
  "/images/projects/case-study-03-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4876,
    "path": "../../.output/public/images/projects/case-study-03-480x298.jpg"
  },
  "/images/projects/case-study-04-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4876,
    "path": "../../.output/public/images/projects/case-study-04-480x298.jpg"
  },
  "/images/projects/case-study-05-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4876,
    "path": "../../.output/public/images/projects/case-study-05-480x298.jpg"
  },
  "/images/projects/case-study-06-480x298.jpg": {
    "type": "image/jpeg",
    "etag": "\"130c-OAc40yS8Pn2bt4julILjeG9JsdI\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4876,
    "path": "../../.output/public/images/projects/case-study-06-480x298.jpg"
  },
  "/images/projects/success-client-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"a56d-iWHdxEvSP0fvzPFRYE2IEm/33ZQ\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 42349,
    "path": "../../.output/public/images/projects/success-client-01.jpg"
  },
  "/images/projects/success-client-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"62ab-pNx8gNgb8b3qBx2Kt4kVupC+CGY\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 25259,
    "path": "../../.output/public/images/projects/success-client-02.jpg"
  },
  "/images/projects/success-client-03.jpg": {
    "type": "image/jpeg",
    "etag": "\"5e02-j0wvLEm5uc5d9ceta6fVFIZA8Tw\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 24066,
    "path": "../../.output/public/images/projects/success-client-03.jpg"
  },
  "/images/svg/campanha-digital.svg": {
    "type": "image/svg+xml",
    "etag": "\"2494-6neTulHokmhCvbphD0nqp5tkgUg\"",
    "mtime": "2024-04-15T21:17:35.892Z",
    "size": 9364,
    "path": "../../.output/public/images/svg/campanha-digital.svg"
  },
  "/images/svg/ciber-seguranca.svg": {
    "type": "image/svg+xml",
    "etag": "\"129b-k5kLiVMhVjW+HsqKRxIoRLw3Kkw\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4763,
    "path": "../../.output/public/images/svg/ciber-seguranca.svg"
  },
  "/images/svg/consultor.svg": {
    "type": "image/svg+xml",
    "etag": "\"b80-LPDWLpotxk37SL0NoPvZSR4WRag\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 2944,
    "path": "../../.output/public/images/svg/consultor.svg"
  },
  "/images/svg/desenvolvedor-de-software.svg": {
    "type": "image/svg+xml",
    "etag": "\"1139-MlRwNiks7b1uBRASrwpgYxB85q4\"",
    "mtime": "2024-04-15T21:17:35.925Z",
    "size": 4409,
    "path": "../../.output/public/images/svg/desenvolvedor-de-software.svg"
  },
  "/images/svg/ecommerce.svg": {
    "type": "image/svg+xml",
    "etag": "\"1216-bYEPs0rj9jvampvwiNBUEBF/h58\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 4630,
    "path": "../../.output/public/images/svg/ecommerce.svg"
  },
  "/images/svg/midia-social.svg": {
    "type": "image/svg+xml",
    "etag": "\"1a20-Xameq/mO9KdRBDU4Bfww2AZFeAk\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 6688,
    "path": "../../.output/public/images/svg/midia-social.svg"
  },
  "/images/svg/outsourcing.svg": {
    "type": "image/svg+xml",
    "etag": "\"233d-CjF829t+hSMRfNjCJMM6mXjEDRo\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 9021,
    "path": "../../.output/public/images/svg/outsourcing.svg"
  },
  "/images/svg/servicos-de-consultor.svg": {
    "type": "image/svg+xml",
    "etag": "\"17b6-v8MqleKeguJ8BCd6fM14jnxQ7x4\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 6070,
    "path": "../../.output/public/images/svg/servicos-de-consultor.svg"
  },
  "/images/team/admin-02.jpeg": {
    "type": "image/jpeg",
    "etag": "\"38a-rYgBeb46ASQVod7iYzu0Ut/fxqg\"",
    "mtime": "2024-04-15T21:17:35.893Z",
    "size": 906,
    "path": "../../.output/public/images/team/admin-02.jpeg"
  },
  "/images/team/admin.jpeg": {
    "type": "image/jpeg",
    "etag": "\"38a-rYgBeb46ASQVod7iYzu0Ut/fxqg\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 906,
    "path": "../../.output/public/images/team/admin.jpeg"
  },
  "/images/team/avatar-06-90x90.jpeg": {
    "type": "image/jpeg",
    "etag": "\"3c0-Bj9hI4vEtFKVZFI5O2uhuilcEZk\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 960,
    "path": "../../.output/public/images/team/avatar-06-90x90.jpeg"
  },
  "/images/team/coment.jpeg": {
    "type": "image/jpeg",
    "etag": "\"350-zwkueEyDG1Vxnb121tnpL6RQv6E\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 848,
    "path": "../../.output/public/images/team/coment.jpeg"
  },
  "/images/team/comment-2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"350-zwkueEyDG1Vxnb121tnpL6RQv6E\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 848,
    "path": "../../.output/public/images/team/comment-2.jpeg"
  },
  "/images/team/comment-3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"350-zwkueEyDG1Vxnb121tnpL6RQv6E\"",
    "mtime": "2024-04-15T21:17:35.926Z",
    "size": 848,
    "path": "../../.output/public/images/team/comment-3.jpeg"
  },
  "/images/team/reply-comm.jpg": {
    "type": "image/jpeg",
    "etag": "\"312-qDShJ74ZN6xZAfVL7IG9XrKYhEY\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 786,
    "path": "../../.output/public/images/team/reply-comm.jpg"
  },
  "/images/team/team-member-01-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 3395,
    "path": "../../.output/public/images/team/team-member-01-370x250.jpg"
  },
  "/images/team/team-member-01-370x455.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f7-LUo0J94K0PGfrb1CozGxcwvmeP8\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 5111,
    "path": "../../.output/public/images/team/team-member-01-370x455.jpg"
  },
  "/images/team/team-member-02-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 3395,
    "path": "../../.output/public/images/team/team-member-02-370x250.jpg"
  },
  "/images/team/team-member-02-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 4723,
    "path": "../../.output/public/images/team/team-member-02-370x452.jpg"
  },
  "/images/team/team-member-03-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 4723,
    "path": "../../.output/public/images/team/team-member-03-370x452.jpg"
  },
  "/images/team/team-member-04-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 3395,
    "path": "../../.output/public/images/team/team-member-04-370x250.jpg"
  },
  "/images/team/team-member-04-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 4723,
    "path": "../../.output/public/images/team/team-member-04-370x452.jpg"
  },
  "/images/team/team-member-05-370x452.jpg": {
    "type": "image/jpeg",
    "etag": "\"1273-INzAzS2/v7niuUA7f5VGuwst/c4\"",
    "mtime": "2024-04-15T21:17:35.927Z",
    "size": 4723,
    "path": "../../.output/public/images/team/team-member-05-370x452.jpg"
  },
  "/images/team/team-member-06-370x455.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f7-LUo0J94K0PGfrb1CozGxcwvmeP8\"",
    "mtime": "2024-04-15T21:17:35.928Z",
    "size": 5111,
    "path": "../../.output/public/images/team/team-member-06-370x455.jpg"
  },
  "/images/team/team-member-07-370x250.jpg": {
    "type": "image/jpeg",
    "etag": "\"d43-BcRiqSYMCUvltbbuTFmtl3xTrXE\"",
    "mtime": "2024-04-15T21:17:35.928Z",
    "size": 3395,
    "path": "../../.output/public/images/team/team-member-07-370x250.jpg"
  },
  "/images/team/team-member-07-370x455.jpg": {
    "type": "image/jpeg",
    "etag": "\"13f7-LUo0J94K0PGfrb1CozGxcwvmeP8\"",
    "mtime": "2024-04-15T21:17:35.931Z",
    "size": 5111,
    "path": "../../.output/public/images/team/team-member-07-370x455.jpg"
  },
  "/images/testimonial/home-reputable-success-about-image.jpg": {
    "type": "image/jpeg",
    "etag": "\"c460-/wcNZUca7HJPLx4tIO4B1hBo1Uc\"",
    "mtime": "2024-04-15T21:17:35.893Z",
    "size": 50272,
    "path": "../../.output/public/images/testimonial/home-reputable-success-about-image.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-01-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 879,
    "path": "../../.output/public/images/testimonial/mitech-testimonial-avata-01-90x90.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-02-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 879,
    "path": "../../.output/public/images/testimonial/mitech-testimonial-avata-02-90x90.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-03-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2024-04-15T21:17:35.931Z",
    "size": 879,
    "path": "../../.output/public/images/testimonial/mitech-testimonial-avata-03-90x90.jpg"
  },
  "/images/testimonial/mitech-testimonial-avata-04-90x90.jpg": {
    "type": "image/jpeg",
    "etag": "\"36f-tYe66ly5gIhIK51+FkbVmYL/sEk\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 879,
    "path": "../../.output/public/images/testimonial/mitech-testimonial-avata-04-90x90.jpg"
  },
  "/images/testimonial/testimonial-01-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2024-04-15T21:17:35.931Z",
    "size": 781,
    "path": "../../.output/public/images/testimonial/testimonial-01-70x70.jpg"
  },
  "/images/testimonial/testimonial-02-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2024-04-15T21:17:35.930Z",
    "size": 781,
    "path": "../../.output/public/images/testimonial/testimonial-02-70x70.jpg"
  },
  "/images/testimonial/testimonial-03-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2024-04-15T21:17:35.931Z",
    "size": 781,
    "path": "../../.output/public/images/testimonial/testimonial-03-70x70.jpg"
  },
  "/images/testimonial/testimonial-04-70x70.jpg": {
    "type": "image/jpeg",
    "etag": "\"30d-sSohOVPt/Oq5cx+E4YFw6cp8QTM\"",
    "mtime": "2024-04-15T21:17:35.929Z",
    "size": 781,
    "path": "../../.output/public/images/testimonial/testimonial-04-70x70.jpg"
  },
  "/images/timeline/blog-07-500x350.jpg": {
    "type": "image/jpeg",
    "etag": "\"1547-/rKH+Q8o/VKFm6svpM+ZqosiMSo\"",
    "mtime": "2024-04-15T21:17:35.893Z",
    "size": 5447,
    "path": "../../.output/public/images/timeline/blog-07-500x350.jpg"
  },
  "/images/timeline/timeline-image-01.jpg": {
    "type": "image/jpeg",
    "etag": "\"1547-/rKH+Q8o/VKFm6svpM+ZqosiMSo\"",
    "mtime": "2024-04-15T21:17:35.930Z",
    "size": 5447,
    "path": "../../.output/public/images/timeline/timeline-image-01.jpg"
  },
  "/images/timeline/timeline-image-02.jpg": {
    "type": "image/jpeg",
    "etag": "\"1547-/rKH+Q8o/VKFm6svpM+ZqosiMSo\"",
    "mtime": "2024-04-15T21:17:35.931Z",
    "size": 5447,
    "path": "../../.output/public/images/timeline/timeline-image-02.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_BOPRxe = () => import('./_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_BOPRxe, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, closePrerenderer as c, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=runtime.mjs.map
