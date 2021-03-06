// -----------------------------------------------------------------------------------
// Copyright (c) Microsoft Open Technologies (Shanghai) Co. Ltd.  All rights reserved.
//  
// The MIT License (MIT)
//  
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//  
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//  
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// -----------------------------------------------------------------------------------

;
(function($, oh) {
    var currentHackathon = oh.comm.getCurrentHackathon();

    function pageLoad(){
        var list = $('#registe_list');
        oh.api.admin.registration.list.get({
            header: {
                hackathon_name: currentHackathon
            }
        }, function(data) {
            list.empty().append($('#register_list_template').tmpl(data));
            list.find('.editable').editable({
                url: function(params) {
                    var id = $(this).parents('tr').data('tmplItem').data.id;
                    var d = new $.Deferred;
                    oh.api.admin.registration.put({
                        body: {
                            id: id,
                            status: params.value
                        },
                        header: {
                            hackathon_name: currentHackathon
                        }
                    }, function(data) {
                        if (data.error) {
                            d.reject(data.message)
                        } else {
                            d.resolve();
                        }
                    });
                    return d.promise();
                }
            });
        });
    }

    function init(){
        pageLoad();
    }

    $(function() {
        init();
    });
})(jQuery, window.oh);
