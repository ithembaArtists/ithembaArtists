var createElement=(function(){if(false){var attrTranslations={"class":"className","for":"htmlFor"};var setAttribute=function(element,attr,value){if(attrTranslations.hasOwnProperty(attr)){element[attrTranslations[attr]]=value;}
else if(attr=="style"){element.style.cssText=value;}
else{element.setAttribute(attr,value);}};return function(tagName,attributes){attributes=attributes||{};if(attributes.hasOwnProperty("name")||attributes.hasOwnProperty("checked")||attributes.hasOwnProperty("multiple")){var tagParts=["<"+tagName];if(attributes.hasOwnProperty("name")){tagParts[tagParts.length]=' name="'+attributes.name+'"';delete attributes.name;}
if(attributes.hasOwnProperty("checked")&&""+attributes.checked=="true"){tagParts[tagParts.length]=" checked";delete attributes.checked;}
if(attributes.hasOwnProperty("multiple")&&""+attributes.multiple=="true"){tagParts[tagParts.length]=" multiple";delete attributes.multiple;}
tagParts[tagParts.length]=">";var element=document.createElement(tagParts.join(""));}
else{var element=document.createElement(tagName);}
for(var attr in attributes){if(attributes.hasOwnProperty(attr)){setAttribute(element,attr,attributes[attr]);}}
return element;};}
else{return function(tagName,attributes){attributes=attributes||{};var element=document.createElement(tagName);for(var attr in attributes){if(attributes.hasOwnProperty(attr)){element.setAttribute(attr,attributes[attr]);}}
return element;};}})();function postToURL(url,values){values=values||{};var form=createElement("form",{action:url,method:"POST",style:"display: none"});for(var property in values){if(values.hasOwnProperty(property)){var value=values[property];if(value instanceof Array){for(var i=0,l=value.length;i<l;i++){form.appendChild(createElement("input",{type:"hidden",name:property,value:value[i]}));}}
else{form.appendChild(createElement("input",{type:"hidden",name:property,value:value}));}}}
document.body.appendChild(form);form.submit();document.body.removeChild(form);}
function getParameter(parameterName){var parameterName=parameterName+"=";var queryString=window.location.href.slice(window.location.href.indexOf('?')+1);if(queryString.length>0){begin=queryString.indexOf(parameterName);if(begin!=-1){begin+=parameterName.length;end=queryString.indexOf("&",begin);if(end==-1){end=queryString.length;}
return unescape(queryString.substring(begin,end));}
return "null";}}
function validatePayFastResponse(payFastUrl,merchantId){if(merchantId!=getParameter('merchant_id')){alert('Invalid merchant ID in the response.');return false;}}
function quickPostPaymentToPayFast(payFastUrl){postPaymentToPayFast(payFastUrl,document.getElementById('merchant_id').value,document.getElementById('merchant_key').value,document.getElementById('return_url').value,document.getElementById('cancel_url').value,document.getElementById('notify_url').value,document.getElementById('name_first').value,document.getElementById('name_last').value,document.getElementById('email_address').value,document.getElementById('payment_id').value,document.getElementById('amount').value,document.getElementById('item_name').value,document.getElementById('item_description').value,document.getElementById('email_confirmation').value,document.getElementById('confirmation_address').value);}
function postPaymentToPayFast(payFastUrl,merchantId,merchantKey,returnUrl,cancelUrl,notifyUrl,nameFirst,nameLast,emailAddress,paymentId,amount,itemName,itemDescription,emailConfirmation,confirmationAddress){if(merchantId=='10000100'){}
postToURL(payFastUrl,{'merchant_id':merchantId,'merchant_key':merchantKey,'return_url':returnUrl,'cancel_url':cancelUrl,'notify_url':notifyUrl,'name_first':nameFirst,'name_last':nameLast,'email_address':emailAddress,'m_payment_id':paymentId,'amount':amount,'item_name':itemName,'item_description':itemDescription,'email_confirmation':emailConfirmation,'confirmation_address':confirmationAddress});}


// alert('Use the password \'clientpass\' to login and make the test purchase.');