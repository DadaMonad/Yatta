(function(){var e,t,n,o;o=require("../Types/TextTypes"),t=require("../HistoryBuffer"),e=require("../Engine"),n=function(){function n(n,r){var i,u;this.HB=new t(n),u=o(this.HB),this.engine=new e(this.HB,u.parser),this.connector=new r(this.engine,this.HB,u.execution_listener),i=new u.types.Word(void 0),this.HB.addOperation(i).execute(),this.root_element=i}return n.prototype.getRootElement=function(){return this.root_element},n.prototype.getEngine=function(){return this.engine},n.prototype.getConnector=function(){return this.connector},n.prototype.getHistoryBuffer=function(){return this.HB},n.prototype.getUserId=function(){return this.HB.getUserId()},n.prototype.val=function(){return this.root_element.val()},n.prototype.insertText=function(e,t){return this.root_element.insertText(e,t)},n.prototype.deleteText=function(e,t){return this.root_element.deleteText(e,t)},n.prototype.replaceText=function(e){return this.root_element.replaceText(e)},n}(),module.exports=n,"undefined"!=typeof window&&null!==window&&(null==window.Y&&(window.Y={}),window.Y.TextYatta=n)}).call(this);
//# sourceMappingURL=../Frameworks/TextYatta.js.map