﻿function attach_ReportContentType(app) {
    app.service('contentTypeService', [function () {
            var service = {};
            
            service.types = {
                html: 'html',
                text: 'text'
            }

            service.contentTypes = {
                html: 'text/html',
                text: 'text/plain',
            }

            service.contentTypesConverter = {
                'text/html': service.types.html,
                'text/plain': service.types.text
            }

            var type = 'html';

            function getContentTypeFromLocation(propertyName) {
                return type;
            }

            function setContentType(contentType,propertyName) {
                type = contentType;
            }

            service.defaultContentType = 'text/html, text/plain';

            service.isHtmlContentType = function (contentType) {
                return contentType == service.contentTypes.html;
            }

            service.isTextContentType = function (contentType) {
                return contentType == service.contentTypes.text;
            }


            service.getTypeFromContentType = function (contentType) {
                return service.contentTypesConverter[contentType];
            }

            function ContentTypeProperty(propertyName) {
                this.propertyName = propertyName;
            }

            ContentTypeProperty.prototype = {
                init: function(type){
                    this.set(type);
                },
                setToText: function () {
                    this.set(service.types.text);
                },
                setToHtml: function () {
                    this.set(service.types.html);
                },
                getOther: function(){
                    if (this.isText()) {
                        return service.types.html;
                    }
                    return service.types.text;
                },
                isText: function () {
                    return this.get() == service.types.text;
                },
                isHtml: function () {
                    return this.get() == service.types.html;
                },
                isHtmlOrDefault: function () {
                    var type = this.get() 
                    return type == service.types.html || !type;
                },
                set: function (contentType) {
                    setContentType(contentType, this.propertyName);
                },
                get: function(){
                    return getContentTypeFromLocation(this.propertyName);
                },
                getOrDefault: function () {
                    var result = getContentTypeFromLocation(this.propertyName);
                    if (result ) return result;
                    return service.types.html;
                },
                hasValue: function () {
                    var result = getContentTypeFromLocation(this.propertyName);
                    return !!result;
                },
                switch: function () {
                    if (this.isHtmlOrDefault())
                        this.setToText();
                    else
                        this.setToHtml();
                }
            };

            service.contentType = new ContentTypeProperty('mode');
            
            // #endregion

            service.getOtherType = function (contentType) {
                if (service.isHtmlContentType(contentType)) return service.contentTypes.html;
                return service.contentTypes.text;
            }

            service.isHtmlContentType = function (contentType) {
                return contentType == service.contentTypes.html;
            }

            service.isTextContentType = function (contentType) {
                return contentType == service.contentTypes.text;
            }

            return service;
        }]);
}
