/**
@license
Copyright (c) 2019 elifents. All rights reserved.
*/
import {html, PolymerElement} from '@polymer/polymer/polymer-element';


/**
 * @customElement
 * @polymer
 * @elifent
 */

 /*
    url-params is a polymer element which is the best way to read params from params directly from url.
    If you employ app-route or app-location, these are two way binded elements and soon as value changes it
    gets mutated to url, which effects in the desired performance of web app.

    url-params is specifically build for multipage app approach, because in single page app everything is passed
    to inner page via parent routes.

    There are two ways to use url-params.
        1. To get tails
        2. To read GET params

    To read tails, simply give the pattern that the page will be loaded and then tails that need to be read.
    eg pattern: cars/:build/:year
    eg url: cars/volvo/2017
    You can read value in build through params.build
    Any tail that comes after /:year will be neglected

    To read GET params from url give the patten as '?', all GET will be converted to key value pairs.
    eg pattern: '?'
    eg url: cars?build=volovo&year=2017
     

 */

class UrlParams extends PolymerElement {
  static get properties() {
    return {
      pattern: {
        type: String,
        value: null
      },
      data:{
        type: Object,
        value: null,
        notify: true,
      }
    };
  }

  ready(){
    
    //If pattern to be tested is given as /path/:key/:anotherkey
    if(this.pattern.search(':') != -1){

        const url = window.location.pathname;
        
        //find the position of : given in pattern
        const pos = (this.pattern).indexOf(':')-1;
      
        //now test whether pattern given and substring of url is same or not
        if(url.substring(0, pos) == (this.pattern).substring(0, pos)){

          //If pattern and url is same then split other parts of pattern and url and then push each as key: value
          //on to data.
          let keys = (this.pattern).substring(pos);
          let values = url.substring(pos);

          keys = keys.split('/:');
          values = values.split('/');
          let data = {};
          for(let i=1;i<keys.length;i++){
            data[keys[i]] = values[i]
          }
          this.data = data;
        }
    
    //If pattern to be tested is given as ?, then split everything in url as key value pair
    }else if(this.pattern == '?'){

      const url = window.location.href;

      const pos = (url).indexOf('?')+1;
      const urlValues =  url.substring(pos);
      const keyValuePairs = urlValues.split('&');
      let data = {};
      for(let i=0;i<keyValuePairs.length;i++){
        let keyValue = keyValuePairs[i].split('=');
        data[keyValue[0]] = keyValue[1]
      }
      this.data = data;
    }
  }

  
}

window.customElements.define('url-params', UrlParams);
