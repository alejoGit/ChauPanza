
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap-sass');
} catch(e) {}

//window.Vue = require('vue');

require('jquery.nicescroll');
require('select2');
require('datatables.net-bs');
require('bootstrap-datepicker');
require('bootstrap-timepicker');
require('jquery-validation');
require('jquery-validation/dist/localization/messages_es_AR.js');
require('./modernizr-custom');

require('./megadin/megadin');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});*/

$(document).ready(function(){
	var formValidate = $(".form-validate");
    formValidate.each(function(){ $(this).validate({ignore: ".ignore",lang: 'es'}) });
	formValidate.each(function () {
        if ($(this).data('validator'))
            $(this).data('validator').settings.ignore = ".note-editor *";
    });
	$('.data-table').DataTable({
		"aaSorting": [],
        "pageLength": 100,
		"columnDefs": [ {
	          "targets": 'no-sort',
	          "orderable": false,
	    } ],
        "language": {
            "lengthMenu": "Mostrar  _MENU_  registros por página",
            "zeroRecords": "No hay registros encontrados - Disculpe!",
            "info": "Mostrando página _PAGE_ de _PAGES_ <br> <b>Total:</b> _TOTAL_ registros",
            "infoEmpty": "No se encontraron resultados",
            "infoFiltered": "(filtered from _MAX_ total records)",
            "sSearch" : "Buscar:",
            "paginate": {
              "previous": "Anterior",
              "next"  : "Siguiente"
            }
        }
	});
	$('.js-datepicker').datepicker({
        autoclose: true,
        format: 'yyyy-mm-dd',
    });
   	if(jQuery.ui){
        var btnUpdatePositions = $(".btn-update-positions");
        $( ".tbody-sortable" ).sortable({
            update:function(){

                btnUpdatePositions.removeClass("hide");
                var self = $(this);
                var cont = 1;
                /*bucle que cambia la posicion de las categorias*/
                var dictionaryAux = {};
                self.find('tr').each(function(){
                    var self = $(this);
                    self.find(".num-sort").html(cont);
                    dictionaryAux[self.attr('data-id')] = cont;
                    cont++;
                    
                    
                });
                console.log(dictionaryAux);
                var dataTextareaId = self.attr("data-textarea");
                $("#"+dataTextareaId).text(JSON.stringify(dictionaryAux));
            }
        });
    }
    
});


