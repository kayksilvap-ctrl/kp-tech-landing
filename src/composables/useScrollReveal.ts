import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const observer = ref<IntersectionObserver | null>(null)

  const observe = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
      observer.value?.observe(el)
    })
  }

  onMounted(() => {
    setTimeout(observe, 100)
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observe }
}