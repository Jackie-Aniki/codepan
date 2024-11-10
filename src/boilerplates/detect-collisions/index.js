export default async () => {
  const htmlCode = await import("!raw-loader!./codepan.html");

  return {
    html: {
      code: htmlCode,
      transformer: "html",
    },
    showPans: ["html", "console"],
  };
};
