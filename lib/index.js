"use strict";

const gitUrlParse = require("git-url-parse");

const PROVIDERS = {
        gist: "https://gist.github.com"
      , github: "https://github.com"
      , bitbucket: "https://bitbucket.org"
    }
  , PROVIDERS_LIST = Object.keys(PROVIDERS)
  ;

module.exports = function gitSource(input) {
    let parsed = gitUrlParse(input);
    if (input.startsWith("~") || input.startsWith("/") || input.startsWith(".")) {
        return parsed;
    }

    let splits = input.split(":");

    if (parsed.protocol === "file" || parsed.protocol === "ssh") {
        let source = splits[0]
          , target = splits[1]
          , targetSplits = null
          ;

        if (~source.indexOf("@")) {
            return parsed;
        }

        if (splits.length === 1) {
            target = source;
            source = "github";
        }

        if (source === "file") {
            parsed.protocol = source;
            return parsed;
        }

        targetSplits = target.split("/");
        if (source !== "gist" && targetSplits.length !== 2) {
            return parsed;
        }

        if (~PROVIDERS_LIST.indexOf(source)) {
            return gitSource(`${PROVIDERS[source]}/${target}`);
        }

        return parsed;
    }

    return parsed;
};
