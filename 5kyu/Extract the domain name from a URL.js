function domainName(url) {
    return (/^(?:https?:\/\/)?(?:www[0-9]*\.)?(.*?)\./gm).exec(url)[1]
}

console.log(domainName('https://www.1-ebg3m3zartldio7ys0yj9ipl.jp/users'))
