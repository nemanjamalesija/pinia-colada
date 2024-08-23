/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/contacts': RouteRecordInfo<'/contacts', '/contacts', Record<never, never>, Record<never, never>>,
    '/contacts/[id]': RouteRecordInfo<'/contacts/[id]', '/contacts/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/ecom/': RouteRecordInfo<'/ecom/', '/ecom', Record<never, never>, Record<never, never>>,
    '/ecom/item/[id]': RouteRecordInfo<'/ecom/item/[id]', '/ecom/item/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/warnings/': RouteRecordInfo<'/warnings/', '/warnings', Record<never, never>, Record<never, never>>,
    '/warnings/duped-[contactId]': RouteRecordInfo<'/warnings/duped-[contactId]', '/warnings/duped-:contactId', { contactId: ParamValue<true> }, { contactId: ParamValue<false> }>,
    '/warnings/usage-one-[contactId]': RouteRecordInfo<'/warnings/usage-one-[contactId]', '/warnings/usage-one-:contactId', { contactId: ParamValue<true> }, { contactId: ParamValue<false> }>,
    '/warnings/usage-two-[contactId]': RouteRecordInfo<'/warnings/usage-two-[contactId]', '/warnings/usage-two-:contactId', { contactId: ParamValue<true> }, { contactId: ParamValue<false> }>,
  }
}
