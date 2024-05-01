import type { TestInfo } from '@playwright/test';

export async function duration(testInfo: TestInfo, actions: () => Promise<unknown>) {
  const start = performance.now();
  await actions();
  const duration = performance.now() - start;

  overrideProperty(testInfo, 'duration', () => duration);
}

function overrideProperty<T>(o: T, propName: keyof T, getter: () => unknown) {
  Object.defineProperty(o, propName, {
    get() {
      return getter();
    },
    set() {},
  });
}
