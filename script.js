// 切换页面函数
function switchPage(fromIndex, toIndex) {
  if (isAnimating) return; // 如果正在动画，则忽略

  isAnimating = true; // 开始动画

  const currentPage = pages[fromIndex];
  const nextPage = pages[toIndex];

  // 设置模糊背景为当前页面的背景图片
  const currentBackground =
    currentPage.querySelector(".background").style.backgroundImage;
  blurBackground.style.backgroundImage = currentBackground;

  // 显示模糊背景
  blurBackground.classList.add("active");

  // 判断切换方向
  if (fromIndex < toIndex) {
    // 向下切换
    currentPage.classList.add("slide-out-up"); // 当前页面向上滑出
    nextPage.classList.add("slide-in-down"); // 新页面从下方滑入
  } else {
    // 向上切换
    currentPage.classList.add("slide-out-down"); // 当前页面向下滑出
    nextPage.classList.add("slide-in-up"); // 新页面从上方滑入
  }

  // 下一页面滑入
  setTimeout(() => {
    nextPage.classList.add("active");

    // 隐藏模糊背景
    blurBackground.classList.remove("active");

    // 动画结束后重置状态
    setTimeout(() => {
      currentPage.classList.remove("active", "slide-out-up", "slide-out-down");
      nextPage.classList.remove("slide-in-down", "slide-in-up");
      isAnimating = false; // 结束动画
    }, 800); // 与 CSS 过渡时间一致
  }, 800); // 等待当前页面滑出完成
}
