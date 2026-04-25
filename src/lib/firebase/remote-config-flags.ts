/**
 * Typed registry of Firebase Remote Config flags exposed to the client.
 *
 * To add a new flag:
 *   1. Add a `readonly <key>: <primitive>` entry to `RemoteFlags`.
 *   2. Add the matching default value to `defaultFlags`. The default ships
 *      in the bundle and is what runs before — or instead of — a successful
 *      Remote Config fetch.
 *   3. Mirror the key in the Firebase console (same name, same type).
 *
 * Constraints:
 *   - Only `boolean | number | string` are supported. The runtime coerces
 *     the Remote Config `Value` based on the type of the default.
 *   - Keep this file framework-agnostic (no React, no `firebase/*` imports)
 *     so it can be consumed from Server Components without pulling the
 *     Firebase Web SDK into the RSC bundle.
 */
export type RemoteFlagPrimitive = boolean | number | string;

/**
 * Registry of supported flags. Written as a mapped type so the registry can
 * start empty (no flags defined) without tripping
 * `@typescript-eslint/no-empty-object-type`. Replace the `never` key with the
 * literal union of real flag names as they get added, e.g.:
 *
 *   export type RemoteFlags = {
 *     readonly featureFoo: boolean;
 *     readonly heroVariant: string;
 *   };
 */
export type RemoteFlags = {
  readonly [K in never]: RemoteFlagPrimitive;
};

export type RemoteFlagKey = keyof RemoteFlags;

export const defaultFlags: RemoteFlags = {};
