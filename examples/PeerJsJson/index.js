
/**
 ## IWC + JSON Example
 Here, I will give a short overview on how to use the IwcJson Framework in Role-SDK widgets.
 First you have to include the following libraries in your widget file:
 ```
<script src="http://open-app.googlecode.com/files/openapp.js"></script>
<script src="http://dbis.rwth-aachen.de/gadgets/iwc/lib/iwc.js"></script>
<script src="http://dbis.rwth-aachen.de/~jahns/role-widgets/widgetbundles/libraries/DUIClient.js"></script>
<script src="../../build/browser/Frameworks/JsonYatta.min.js"></script>
<script src="../../build/browser/Connectors/PeerJsConnector.min.js"></script>
<script src="./index.js"></script>
 ```
A working widget implementation is [IwcJson.xml](./IwcJson.xml) and the js-file is [index.js](./index.js)
 */
function init(){
    Y.createPeerJsConnector(function(Connector, user_id){
      /**
       yatta is the shared json object. If you change something on this object,
       it will be instantly shared with all the other collaborators.
      */
      Y.yatta = new JsonYatta(user_id, Connector);


    });
}
window.onload = init
