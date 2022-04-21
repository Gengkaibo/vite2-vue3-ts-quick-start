declare global {
  interface Window {
    [someAttr: string]: any;
    $: JQueryStatic
  }
}
export { }
