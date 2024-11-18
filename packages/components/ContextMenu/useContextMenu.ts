import { ref, onUnmounted } from "vue"
import { useClickOutside } from "@ym-UI/hooks"

export const useContextMenu = (container: HTMLElement) => {
  const x = ref(0)
  const y = ref(0)
  const visible = ref(false)
  //  代开菜单
  const openMenu = (e: MouseEvent) => {
    // 阻止默认行为
    e.preventDefault()
    // 阻止冒泡
    e.stopPropagation()
    // 显示菜单
    visible.value = true
    // 获取鼠标位置
    x.value = e.clientX
    y.value = e.clientY
  }
  // 关闭菜单
  const closeMenu = () => {
    console.log("xaxa")

    visible.value = false
  }

  container.addEventListener("contextmenu", openMenu)
  window.addEventListener("click", closeMenu)
  window.addEventListener("contextmenu", closeMenu)
  window.addEventListener("scroll", closeMenu)
  useClickOutside(container as any, closeMenu)
  onUnmounted(() => {
    // 移除事件
    container.removeEventListener("contextmenu", openMenu)
    window.removeEventListener("click", closeMenu)
    window.removeEventListener("contextmenu", closeMenu)
  })
  return {
    x,
    y,
    visible
  }
}
