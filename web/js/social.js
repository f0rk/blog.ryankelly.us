/* Copyright 2016, Ryan Kelly. All Rights Reserved. */

function twitter(elem) {

    var getTweetText = function(name) {
        var tags = document.getElementsByName(name);
        if (tags.length > 0) {
            return tags[0].getAttribute("content");
        }

        return null;
    };

    var tweetText = getTweetText("twitter:tweet");
    if (tweetText === null) {
        tweetText = getTweetText("twitter:title");
    }

    var getUrl = function() {
        var tags = document.getElementsByName("twitter:url");
        if (tags.length > 0) {
            return tags[0].getAttribute("content");
        }

        tags = document.querySelectorAll('[property="og:url"]');
        if (tags.length > 0) {
            return tags[0].getAttribute("content");
        }

        return window.location.href;
    };

    var base = "https://twitter.com/intent/tweet?";

    var params = [];

    params.push("original_referrer=" + encodeURIComponent(window.location.href));
    params.push("ref_src=" + encodeURIComponent("twsrc^tfw"));
    params.push("tw_p=" + encodeURIComponent("tweetbutton"));
    params.push("url=" + encodeURIComponent(getUrl()));
    params.push("text=" + encodeURIComponent(tweetText));

    var url = base + params.join("&");

    elem.setAttribute("href", url);
}

function socialize() {

    var twitterButton = document.getElementById("twitter-button");
    if (twitterButton !== null) {
        twitter(twitterButton);
    }

}

socialize();
