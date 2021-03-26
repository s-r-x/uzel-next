export abstract class Storage {
  public static get<T>(key: string, defaultValue?: T): T {
    try {
      const item = localStorage.getItem(key);
      if (!item) {
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (_e) {
      return null;
    }
  }
  public static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public static remove(key: string) {
    localStorage.removeItem(key);
  }
}
