import { describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { Loading } from "./methods";

export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null);
        await nextTick();
      });
    });
  });
};

describe("Loading", () => {
  it("1.调用函数创建一个实例对象", () => {
    const instance = Loading();
    expect(instance).toBeTruthy();
  });
  it('2. 渲染遮罩层',async()=>{
    Loading();
    await rAF();
    expect(document.querySelector('.ym-loading__mask')).toBeTruthy()
  })
  it('3.关闭loading时需要移除遮罩层',async()=>{
    const instance = Loading();

    await rAF();
    expect(document.querySelector('.ym-loading')).toBeTruthy()
    instance.close()
    await rAF();

    expect(document.querySelector('.ym-loading')).toBeFalsy()
  })
});