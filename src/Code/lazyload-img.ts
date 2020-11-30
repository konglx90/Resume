/**
 * 图片懒加载写代码
 */

function lazyload(imgs: any[]) {
  const observe: IntersectionObserver = new IntersectionObserver(enteris => {
      enteris.forEach(entry => {
          const lazyImage: any = entry.target
          if (entry.isIntersecting && lazyImage.getAttribute('src') === 'loading.gif') {
              lazyImage.src = lazyImage.dataset.src
              observe.unobserve(lazyImage)
          }
      })
  })

  for (let i = 0; i < imgs.length; i++) {
      observe.observe(imgs[i])
  }
}


window.onload = function() {
  document.body.innerHTML = `
    <img style="margin-top:900px;" src="loading.gif" data-src="https://mirror-gold-cdn.xitu.io/168e0857f72d74d4a40?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" />
    <img src="loading.gif" data-src="https://mirror-gold-cdn.xitu.io/168e0857f72d74d4a40?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"/>
  `
  const imgs = Array.from(document.querySelectorAll('img'))
  lazyload(imgs)
}

export {
  lazyload
}