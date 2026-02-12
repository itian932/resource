function loadClustrmaps() {
  // 防止重复加载
  if (document.getElementById("clustrmaps-script")) return;

  const script = document.createElement("script");
  script.id = "clustrmaps";
  script.type = "text/javascript";
  script.src =
    "https://clustrmaps.itian.site/map_v2.js?d=eIFyGRoc9a2p3sV6rsEfiBtY4sb1SWUsJuGQ5YE2ofg&cl=ffffff&w=a";

  document.getElementById("clustrmaps-container").appendChild(script);
}

// 首次加载执行
document.addEventListener("DOMContentLoaded", loadClustrmaps);

// PJAX 跳转后执行
document.addEventListener("pjax:complete", function () {
  // 清空容器，重新加载
  const container = document.getElementById("clustrmaps-container");
  if (container) {
    container.innerHTML = "";
    loadClustrmaps();
  }
});
