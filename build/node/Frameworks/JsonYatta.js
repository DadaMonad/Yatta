(function(){var t,e,n,o;o=require("../Types/JsonTypes"),e=require("../HistoryBuffer"),t=require("../Engine"),n=function(){function n(n,r){var i,u;this.HB=new e(n),u=o(this.HB),this.engine=new t(this.HB,u.parser),this.connector=new r(this.engine,this.HB,u.execution_listener,this),i=new u.types.JsonType(this.HB.getReservedUniqueIdentifier()),this.HB.addOperation(i).execute(),this.root_element=i}return n.prototype.getRootElement=function(){return this.root_element},n.prototype.getEngine=function(){return this.engine},n.prototype.getConnector=function(){return this.connector},n.prototype.getHistoryBuffer=function(){return this.HB},n.prototype.setMutableDefault=function(t){return this.root_element.setMutableDefault(t)},n.prototype.getUserId=function(){return this.HB.getUserId()},n.prototype.val=function(t,e,n){return this.root_element.val(t,e,n)},Object.defineProperty(n.prototype,"value",{get:function(){return this.root_element.value},set:function(t){var e,n,o;if(t.constructor==={}.constructor){o=[];for(e in t)n=t[e],o.push(this.val(e,n,"immutable"));return o}throw new Error("You must only set Object values!")}}),n}(),module.exports=n,"undefined"!=typeof window&&null!==window&&(null==window.Y&&(window.Y={}),window.Y.JsonYatta=n)}).call(this);
//# sourceMappingURL=../Frameworks/JsonYatta.js.map