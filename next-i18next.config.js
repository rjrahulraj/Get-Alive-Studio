const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "pt", "hi", "id", "tr", "ar"],
  },
  ns: ["common", "nav", "hero", "services", "contact", "footer"],
  defaultNS: "common",
  localePath: path.resolve("./public/locales"),
};
