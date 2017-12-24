// ==UserScript==
// @name           futaba form image previewer
// @namespace      https://github.com/akoya-tomo
// @description    ふたばの返信フォームの添付ファイル機能を拡張
// @author         akoya_tomo
// @include        http://*.2chan.net/*/res/*
// @include        https://*.2chan.net/*/res/*
// @include        http://*.2chan.net/*/futaba.htm
// @include        https://*.2chan.net/*/futaba.htm
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @version        0.1.0
// @grant          none
// @license        MIT
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

(function ($) {

	makeButton();

	function makeButton() {
//		var $clipPasteButton = $("<label>", {
//			id: "clipPaste",
//			text: "[貼り付け]",
//			contenteditable: "true"
//		});
		var $fileClearButton = $("<label>", {
			id: "fileClear",
			text: "[クリア]",
			css: {
				cursor: "pointer",
			},
			click: function() {
				clearFile();
			}
		});
		var $upfileTd = $(".ftdc b:contains('添付File')").parent("td").next("td");

		if (!$upfileTd.length) return;

		$upfileTd.children("input").attr({
			"id" : "upfile",
		});
		$("#upfile").next("label").remove();
		var html = $upfileTd.html();
		$upfileTd.html(
			html.replace("[]","")
		);
		$("#upfile").after(
//			$clipPasteButton,
			$fileClearButton);

		preview();

	}

//	function pasteClipFile() {
//		$("#upfile").val("");
//	}

	function clearFile() {
		$("#upfile").val("");
		$("#preview").html('');
	}

	function preview(){
		$("#fileClear").after("<div id='preview'></div>");

		// アップロードするファイルを選択
		$("#upfile").change(function() {
			var file = $(this).prop('files')[0];

			// 画像以外は処理を停止
			if (! file.type.match("image.*")) {
				// クリア
				$(this).val("");
				$("#preview").html("");
				return;
			}

			// 画像表示
			var reader = new FileReader();
			reader.onload = function() {
				var img_src = $("<img style='max-width:250px; max-height:250px;'>").attr("src", reader.result);
				$("#preview").html(img_src);
			};
			reader.readAsDataURL(file);
		});
	}

})(jQuery);
