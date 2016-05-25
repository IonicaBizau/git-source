
# git-source

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/git-source.svg)](https://www.npmjs.com/package/git-source) [![Downloads](https://img.shields.io/npm/dt/git-source.svg)](https://www.npmjs.com/package/git-source) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Parse and stringify git urls in a friendly way.

## :cloud: Installation

```sh
$ npm i --save git-source
```


## :clipboard: Example



```js
const gitSource = require("git-source");

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
```

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`git-cloner`](https://github.com/IonicaBizau/git-cloner#readme)—Clone multiple git repositories.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`package.json`](https://github.com/IonicaBizau/package.json#readme)—Get the package.json content either from npm or from a git repository.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
