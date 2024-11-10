export default () => {
  return {
    js: {
      code: localStorage.getItem("codepan.js") || "",
      transformer: "babel",
    },
    html: {
      code: localStorage.getItem("codepan.html") || "",
      transformer: "html",
    },
    css: {
      code: localStorage.getItem("codepan.css") || "",
      transformer: "css",
    },
    showPans: ["js", "output"],
  };
};
