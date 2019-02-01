# &lt;url-params&gt;

url-params is a polymer element which is the best way to read params directly from url. If you employ app-route or app-location these are two way binded elements and soon as value changes it gets mutated to url, which effects in the desired performance of web app.

url-params is specifically build for multi page app approach, because in single page app everything is passed to inner page via parent routes.
# Usage

## Installation
npm install @elifent/url-params

## In an html file

```
<html>
  <head>
    <script type="module">
      import '@elifent/url-params/url-params.js';
    </script>
  </head>
  <body>
    <url-params
        pattern="/path/to/page/:data/:to/:parse"
        data="{{params}}"
    ></url-params>
    Value in data is {{params.data}} <br>
    Value in to is {{params.to}} <br>
    Value in parse is {{params.parse}} <br>
  </body>
</html>
```

## In polymer 3 element

```
import {PolymerElement, html} from '@polymer/polymer';
import '@elifent/url-params/url-params.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <url-params
        pattern="/path/to/page/:data/:to/:parse"
        data="{{params}}"
    ></url-params>
    Value in data is {{params.data}} <br>
    Value in to is {{params.to}} <br>
    Value in parse is {{params.parse}} <br>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```
## Other methods
Alternatively you can read all params from a GET request. To do it use pattern as ?
```
import {PolymerElement, html} from '@polymer/polymer';
import '@elifent/url-params/url-params.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <url-params
        pattern="?"
        data="{{params}}"
    ></url-params>
    Value in data is {{params.data}} <br>
    Value in to is {{params.to}} <br>
    Value in parse is {{params.parse}} <br>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

In this case if your url is path/to/page?data=a&to=b&parse=c then you will be able to get params.data as a.

## Contributing

Please make a branch and make change. <br>
Found issues? Let me know