const gitSource = require("../lib");

console.log(gitSource("owner/repo"));
// { protocols: [ 'https' ],
//   protocol: 'https',
//   port: null,
//   resource: 'github.com',
//   user: '',
//   pathname: '/owner/repo',
//   hash: '',
//   search: '',
//   href: 'https://github.com/owner/repo',
//   token: '',
//   toString: [Function],
//   source: 'github.com',
//   name: 'repo',
//   owner: 'owner',
//   organization: '',
//   full_name: 'owner/repo' }

console.log(gitSource("owner/repo").toString());
// https://github.com/owner/repo

console.log(gitSource("gist:id").toString());
// https://gist.github.com/id

console.log(gitSource("gist:owner/id").toString());
// https://gist.github.com/owner/id

console.log(gitSource("bitbucket:owner/repo").toString("ssh"));
// git@bitbucket.org:owner/repo.git

console.log(gitSource("git@github.com:IonicaBizau/git-url-parse.git"));
// { protocols: [],
//   protocol: 'ssh',
//   port: null,
//   resource: 'github.com',
//   user: 'git',
//   pathname: '/IonicaBizau/git-url-parse.git',
//   hash: '',
//   search: '',
//   href: 'git@github.com:IonicaBizau/git-url-parse.git',
//   token: '',
//   toString: [Function],
//   source: 'github.com',
//   name: 'git-url-parse',
//   owner: 'IonicaBizau',
//   organization: 'git',
//   full_name: 'IonicaBizau/git-url-parse' }
