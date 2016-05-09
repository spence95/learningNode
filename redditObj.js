var method = redditObj.prototype;

function redditObj(title, url, commentsUrl) {
    this.title = title;
    this.url = url;
    this.commentsUrl = commentsUrl;
}

module.exports = redditObj;
