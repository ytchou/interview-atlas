window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
  svg: { fontCache: "global" },
};

document$.subscribe(() => {
  if (!window.MathJax || !MathJax.typesetPromise) return;
  if (MathJax.startup && MathJax.startup.output && MathJax.startup.output.clearCache) MathJax.startup.output.clearCache();
  if (MathJax.typesetClear) MathJax.typesetClear();
  if (MathJax.texReset) MathJax.texReset();
  MathJax.typesetPromise();
});
