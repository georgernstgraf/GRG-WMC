# infos zu cors

Cors ist ein Sicherheitsfeature, mit welchem ein Server dem Client helfen kann,
evtl. den Content nicht zu akzeptieren. (Ja, das ist komisch ..)

Der Server setzt den `Access-Control-Allow-Origin` Header auf `*` um anzuzeigen,
der Inhalt ist für jeden bestimmt und möglich. Jeder aktuelle Browser würdigt
dies und leht den Content ab, wenn er ursprünglich von einer anderen Site kommt.

Will man dennoch ein API im Browser verwenden, welches diesen Header nicht
setzt, so gibt es "CORS" Plugins für den Browser, zumindest für Firefox. Ich
glaube nicht, daß man javascript-seitig viel machen kann, außer

```javascript
fetch(url, {
    mode: 'no-cors', // 'cors' ist default
});
```

CORS https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS **Cross Origin
Resource Sharing**

Cors Videos:

-   akshai: https://youtu.be/tcLW5d0KAYE
-   wds: https://youtu.be/PNtFSVU-YTI
-   fireship: https://youtu.be/4KHiSt0oLJ0
