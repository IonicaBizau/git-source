const tester = require("tester")
    , gitSource = require("..")
    ;

tester.describe("git-source", test => {
    test.it("takes GitHub as default", () => {
        test.expect(gitSource("owner/repo").resource).toBe("github.com");
    });

    test.it("custom sources", () => {
        test.expect(gitSource("gist:hash").resource).toBe("gist.github.com");
        test.expect(gitSource("gist:ionicabizau/hash").resource).toBe("gist.github.com");
        test.expect(gitSource("bitbucket:owner/repo").resource).toBe("bitbucket.org");
        test.expect(gitSource("file:owner/repo").protocol).toBe("file");
        test.expect(gitSource("./path/to/foo").protocol).toBe("file");
        test.expect(gitSource("/absolute/path").protocol).toBe("file");
        test.expect(gitSource("foo").protocol).toBe("file");
    });

    test.it("handle commit-ish values", () => {
        test.expect(gitSource("foo/bar#foo").hash).toBe("foo");
    });

    test.it("handle full paths", () => {
        test.expect(gitSource("git@github.com:IonicaBizau/node-git-url-parse.git").source).toBe("github.com");
    });

    test.should("stringify correctly", () => {
        test.expect(gitSource("owner/repo").toString()).toBe("https://github.com/owner/repo");
        test.expect(gitSource("owner/repo").toString("ssh")).toBe("git@github.com:owner/repo.git");
        test.expect(gitSource("github:owner/repo").toString("ssh")).toBe("git@github.com:owner/repo.git");
        test.expect(gitSource("bitbucket:owner/repo").toString("ssh")).toBe("git@bitbucket.org:owner/repo.git");
        test.expect(gitSource("gist:id").toString()).toBe("https://gist.github.com/id");
    });
});
