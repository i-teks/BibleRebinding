if(jQuery("body").on("click",".field:not(.toggleable) > h5",function(e){if("mi delete"!==e.target.className.toLowerCase()){var t=jQuery(jQuery(this).parents(".fields-draggable")[0]),i=jQuery(jQuery(this).parents(".field")[0]);if(i.hasClass("open"))return t.find(".field > h5 span.prefix").text("+"),void t.find(".field").removeClass("open");t.find(".field").removeClass("open"),t.find(".field > h5 span.prefix").text("+"),i.toggleClass("open"),jQuery(this).find("span.prefix").text("-")}}),jQuery("body").on("click",".language-toggle",function(e){jQuery(this).parent().hasClass("open")?jQuery(".translate-input").removeClass("open"):(jQuery(".translate-input").removeClass("open"),jQuery(this).parent().addClass("open"))}),function(){var e={primary:{family:"",weight:!1},secondary:{family:"",weight:!1},body:{family:"",weight:!1},accent:{family:"",weight:!1}};function t(){elementor.$preview.contents().find("#case27-elementor-preview-styles").length||elementor.$preview.contents().find("#case27-custom-styles").after('<style id="case27-elementor-preview-styles" type="text/css"></style>');elementor.$preview.contents().find("#case27-elementor-preview-styles");var t="";["primary","secondary","body","accent"].forEach(function(i,a){var n=".case27-"+i+"-text",s="font-family: '"+e[i].family+"', 'Poppins', sans-serif",o="font-weight: "+e[i].weight;e[i].family&&(t+=n+" { "+s+" !important; "+o+" !important; }","primary"==i&&(t+=".featured-section .fc-description h1, .featured-section .fc-description h2, .featured-section .fc-description h3, ",t+=".featured-section .fc-description h4, .featured-section .fc-description h5, .featured-section .fc-description h6 ",t+="{ "+s+" !important; "+o+" !important; }"),"secondary"==i&&(t+=".title-style-1 h5 { "+s+" !important; "+o+" !important; }"),"body"==i&&(t+="body, p { "+s+"; }",t+="p { "+o+" !important; }"))}),elementor.$preview.contents().find("#case27-elementor-preview-styles").html(t)}jQuery("body").on("change",'select.elementor-panel-scheme-typography-item-field[name="font_family"]',function(i){var a=jQuery(this),n=a.index('select.elementor-panel-scheme-typography-item-field[name="font_family"]');["primary","secondary","body","accent"].forEach(function(i,s){parseInt(n,10)===s&&""!=a.val().trim()&&a.val().trim()!==e[i].family&&(e[i].family=a.val().trim(),t())})}).change(),jQuery("body").on("change",'select.elementor-panel-scheme-typography-item-field[name="font_weight"]',function(i){var a=jQuery(this),n=a.index('select.elementor-panel-scheme-typography-item-field[name="font_weight"]');["primary","secondary","body","accent"].forEach(function(i,s){parseInt(n,10)===s&&""!=a.val().trim()&&a.val().trim()!==e[i].weight&&(e[i].weight=a.val().trim(),t())})}).change()}(),Vue.component("iconpicker",{props:["value"],data:function(){return{selected:"",icon_packs:{},active_pack:"",filter:"",expanded:!1}},template:document.getElementById("cts-icon-picker-template")?document.getElementById("cts-icon-picker-template").innerHTML:"",mounted:function(){this.selected=this.value,void 0===CASE27.icon_packs&&(this.icon_packs={}),this.icon_packs=CASE27.icon_packs,this.active_pack=Object.keys(this.icon_packs)[0]},watch:{selected:function(){this.$emit("input",this.selected)},value:function(){this.selected=this.value}},computed:{activeIcons:function(){var e=this;if(this.filter.length){var t=[];return Object.keys(this.icon_packs).forEach(function(i){e.icon_packs[i].forEach(function(i){-1!==i.indexOf(e.filter)&&t.push(i)})}),t}if(this.active_pack)return this.icon_packs[this.active_pack]}}}),Vue.component("atwho",{props:["value","placeholder","data"],template:'<div class="atwho-wrapper">\t\t\t\t<textarea :value="value" :placeholder="placeholder"></textarea>\t\t\t   </div>',mounted:function(){var e=this,t={at:"[[",data:this.data.map(function(e,t){return CASE27_TypeDesigner.fieldAliases[e.slug]&&(e.slug=CASE27_TypeDesigner.fieldAliases[e.slug]),e}),insertTpl:"[[${slug}]]",displayTpl:"<li>${label}</li>",limit:1e6,startWithSpace:!1,searchKey:"label"};jQuery(this.$el).find("textarea").atwho(t).atwho(jQuery.extend(t,{at:"@"})),jQuery(this.$el).find("textarea").on("input change",function(t){e.$emit("input",t.target.value)}),jQuery(this.$el).find("textarea").on("blur",function(t){e.$emit("blur",t.target.value)})}}),jQuery("body").on("click",".c27-reset-icon-picker",function(e){e.preventDefault();var t=jQuery(this);new Vue({el:jQuery(this).data("id"),data:{value:jQuery(this).data("value")},mounted:function(){t.siblings(".c27-icon-picker").find(".selected-icon").click()}})}),jQuery(document).ready(function(e){e(".submit-listing-datepicker-wrapper").each(function(t,i){var a=e(this),n=e(i).find(".picker"),s=e(i).find(".display-value"),o=e(i).find("i"),r={submitted:e(this).hasClass("datetime-picker")?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD",displayed:e(this).hasClass("datetime-picker")?CASE27.l10n.datepicker.dateTimeFormat:CASE27.l10n.datepicker.format};n.change(function(e){if(a.hasClass("datetime-picker"))var t=moment(n.val()).toDate();else t=moment(n.val()+" 00:00:00").toDate();isNaN(t.getTime())?(o.removeClass("c-show").addClass("c-hide"),s.val("")):(s.val(moment(t).format(r.displayed)),o.removeClass("c-hide").addClass("c-show"))}).change(),n.daterangepicker({autoUpdateInput:!1,singleDatePicker:!0,locale:e.extend({},CASE27.l10n.datepicker,{format:r.submitted}),timePicker24Hour:CASE27.l10n.datepicker.timePicker24Hour,showDropdowns:!0,timePicker:e(this).hasClass("datetime-picker")},function(e){n.val(e.format(r.submitted)).trigger("change")}),o.click(function(e){e.preventDefault(),n.val("").trigger("change"),o.removeClass("c-show").addClass("c-hide")})}),e(".repeater").each(function(t,i){$rep=e(i).repeater({initEmpty:!0,show:function(){e(this).show()}}),$rep.setList(e(i).data("list"))}),e(".c27-tabs .tab-switch").on("click",function(t){t.preventDefault();var i=e(this).parents(".c27-tabs");e(this).siblings().removeClass("active"),e(this).addClass("active"),i.find(".tab").removeClass("active"),i.find(e(this).attr("href")+".tab").addClass("active")}),e("body").on("change",'.c27-work-hours .day-wrapper .work-hours-type input[type="radio"]',function(t){e(this).val();e(this).parents(".day-wrapper").removeClass(["day-status-enter-hours","day-status-closed-all-day","day-status-open-all-day","day-status-by-appointment-only"].join(" ")).addClass("day-status-"+e(this).val())})}),jQuery(document).ready(function(e){if(!e(".c27-comment-gallery-input").length||!e(".c27-edit-comment-review").length)return!1;jQuery("#post")[0].encoding="multipart/form-data",e("body").on("click",".review-gallery-image-remove",function(t){t.preventDefault(),e(this).parents(".review-gallery-image").remove()})}),jQuery(document).ready(function(e){var t,i;t={},i=function(t){e(".cts-tip-wrapper .cts-tip-container .tip-content").html(t),e(".cts-tip-wrapper").removeClass("tip-loading").addClass("tip-loaded")},e("body").on("click",".cts-show-tip",function(a){a.preventDefault();var n=e(this).data("tip");if(!n)return!1;e(".cts-tip-wrapper").addClass("tip-visible tip-loading"),void 0!==t[n]?i(t[n]):e.get(ajaxurl+"?action=cts_get_tip&tip="+n,function(e){t[n]=e,i(t[n])})}),e(".cts-tip-wrapper .cts-tip-container").on("click",function(e){e.stopPropagation()}),e(".cts-tip-wrapper, .cts-tip-wrapper .close-dialog").on("click",function(t){e(".cts-tip-wrapper").addClass("tip-closing"),setTimeout(function(){e(".cts-tip-wrapper").removeClass("tip-visible tip-loaded tip-closing")},200)}),function(){function t(t){["custom_css","custom_js","custom_code"].indexOf(t)<0&&(t="custom_css"),e(".cts-custom-code-tab:not(.cts-custom-code-tab-"+t+")").hide(),e(".cts-custom-code-tab.cts-custom-code-tab-"+t).show()}var i=e("#cts-custom-code-switcher");if(!i.length)return!1;var a=i.find('.acf-button-group input[type="radio"]:checked').val();a||(a="custom_css"),t(a),i.find('.acf-button-group input[type="radio"]').on("change",function(e){t(e.target.value)})}()}),document.getElementById("case27-shortcode-generator"))var CASE27_Shortcode_Generator=new Vue({el:"#case27-shortcode-generator",data:{shortcode:null,shortcodes:[]},created:function(){this.shortcodes=jQuery("#case27-shortcode-generator").data("shortcodes"),this.shortcode=this.shortcodes[0]},methods:{},computed:{generated_shortcode:function(){var e=this,t="";return e.shortcode&&(t="["+e.shortcode.name,e.shortcode.attributes&&Object.keys(e.shortcode.attributes).forEach(function(i){"string"==typeof e.shortcode.attributes[i]&&e.shortcode.attributes[i].length&&(t+=" "+i+'="'+e.shortcode.attributes[i]+'"'),jQuery.isArray(e.shortcode.attributes[i])&&e.shortcode.attributes[i].length&&(t+=" "+i+'="'+e.shortcode.attributes[i].join(",")+'"')}),e.shortcode.content&&(t+="]"+e.shortcode.content+"[/"+e.shortcode.name)),t+="]"}}});
//# sourceMappingURL=admin.js.map