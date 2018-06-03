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
// @version        0.3.1
// @grant          GM_addStyle
// @license        MIT
// @noframes
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

(function ($) {
	/*
	 *	設定
	 */
	var PREVIEW_MIN_SIZE = 0;		//ファイル未選択時のドロップエリアの高さ（単位:px）（0で非表示）
	var PREVIEW_MAX_SIZE = 250;		//プレビュー最大サイズ（単位:px）（最大250）
	var WEBM_AUTOPLAY = true;		//WebMのプレビューを自動再生する（true = 自動再生する : false = 自動再生しない）
	var WEBM_LOOP = true;			//WebMのプレビューをループ再生する（true = ループ再生する : false = ループ再生しない）

	var fileNameWidth = 190;
	var previewBorderStyle = (PREVIEW_MIN_SIZE > 0 ? "border:2px deepskyblue solid;" : "");
	var inputButtonText = "参照...";
	var inputFilenameText = "ファイルが選択されていません。";
	var fileType,fileSize;
	var imgWidth = 0;
	var imgHeight = 0;
	var webmAutoplay = (WEBM_AUTOPLAY ? " autoplay" : "");
	var webmLoop = (WEBM_LOOP ? " loop" : "");

	setInputButtonText();
	setStyle();
	makeButton();

	/*
	 *ボタン設定
	 */
	function makeButton() {
		var inputFileButton =
			"<div id='ffip_input_file' class='ffip-input-file'>" +
			  "<div id='ffip_input_file_view' class='ffip-input-file-view'>" +
			    "<div id='ffip_button' class='ffip-button'>" + inputButtonText + "</div>" +
			    "<div id='ffip_filename' class='ffip-filename'>" + inputFilenameText + "</div>" +
			  "</div>" +
			  "<div id='ffip_preview' class='ffip-preview'></div>" +
			  "<div id='ffip_file_info' class='ffip-file-info'></div>" +
			  "<input type='file' id='ffip_upfile' class='ffip-upfile' name='upfile'>"+
			"</div>";
		var $fileClearButton = $("<div>", {
			id: "ffip_file_clear",
			class: "ffip-file-clear",
			text: "[クリア]",
			click: function() {
				clearFile();
			}
		});
		var $upfileTd = $(".ftdc b:contains('添付File')").parent("td").next("td");

		if (!$upfileTd.length) return;

		$upfileTd.empty();
		$upfileTd.append(inputFileButton);
		$("#ffip_filename").after($fileClearButton);

		preview();

	}

	/*
	 *入力ファイルクリア
	 */
	function clearFile() {
		$("#ffip_upfile").val("");
		$("#ffip_preview").replaceWith("<div id='ffip_preview' class='ffip-preview'></div>");
		$("#ffip_file_info").empty();
		$("#ffip_filename").text(inputFilenameText);
		imgWidth =0;
		imgHeight =0;
	}

	/*
	 *プレビュー表示
	 */
	function preview(){
		// アップロードするファイルを選択
		$("#ffip_upfile").change(function() {
			var file = $(this).prop("files")[0];
			fileType = file.type.split("/");
			var previewTag = "";
			if (fileType[0] == "image") {
				previewTag = "<img id='ffip_preview' class='ffip-preview'></img>";
			} else if (fileType[1] == "webm" || fileType[1] == "mp4") {
				previewTag = "<video id='ffip_preview' class='ffip-preview' muted" + webmAutoplay + webmLoop + "></video>";
			// 画像とWebM以外は処理を停止
			} else {
				clearFile();
				return;
			}

			fileSize = file.size;

			// filenameの表示幅を計算
			var buttonWidth = $("#ffip_button").outerWidth(true);
			fileNameWidth = Math.max(250 - buttonWidth,50);
			setFileNameStyle();

			$("#ffip_filename").text(file.name);
			$("#ffip_preview").replaceWith(previewTag);

			// WebMの幅と高さ取得
			if (fileType[1] == "webm" || fileType[1] == "mp4") {
				var video = $("#ffip_preview")[0];
				// メタデータ読み込み完了
				video.addEventListener("loadedmetadata",function (e){
					imgWidth = video.videoWidth;
					imgHeight = video.videoHeight;
					fileInformation();
				});
			}

			// プレビュー表示
			var reader = new FileReader();
			reader.onload = function() {
				$("#ffip_preview").attr("src",reader.result);
			};
			reader.readAsDataURL(file);

			// 画像の幅と高さ取得
			if (fileType[0] == "image") {
				var image = new Image();
				image.onload = function() {
					imgWidth = image.naturalWidth;
					imgHeight = image.naturalHeight;
					fileInformation();
				};
				image.src = URL.createObjectURL(file);
			}
		});
	}

	/*
	 *ファイル情報表示
	 */
	function fileInformation() {
		$("#ffip_file_info").empty();

		var imgSizeTag = "<span class='ffip-img-size'> " + imgWidth + "×" + imgHeight + "</span>／";
		$("#ffip_file_info").append(imgSizeTag);

		var fileSizeSep = ("" + fileSize).replace(/(\d)(?=(\d\d\d)+$)/g, "$1,");
		var fileSizeTag = "<span class='ffip-file-size'>" + fileSizeSep + "byte</span>／";
		$("#ffip_file_info").append(fileSizeTag);

		var fileTypeTag = "<span class='ffip-file-type'>" + fileType[1] + "</span>";
		$("#ffip_file_info").append(fileTypeTag);
	}

	/*
	 *入力ボタン文字列設定
	 */
	function setInputButtonText() {
		var agent = window.navigator.userAgent.toLowerCase();
		//Chrome
		if (agent.indexOf("chrome") > -1){
			inputButtonText = "ファイルを選択";
			inputFilenameText = "選択されていません";
			fileNameWidth = 133;
		}
	}

	/*
	 *スタイル設定
	 */
	function setStyle() {
		var css =
			//ファイル入力全体
			".ffip-input-file{" +
			"  position:relative;" +
			"}" +
			//ファイル入力表示
			".ffip-input-file-view{" +
			"  padding: 1px 0px;" +
			"  font-size: 13px;" +
			"  white-space: nowrap;" +
			"}" +
			//ファイル入力ボタン（ダミー）
			".ffip-button{" +
			"  display:inline-block;" +
			"  margin-right:6px;" +
			"  padding:1px 9px;" +
			"  border:1px solid #adadad;" +
			"  background-color:#e1e1e1;" +
			"  color:black;" +
			"}" +
			//ファイル入力名
			".ffip-filename{" +
			"  display:inline-block;" +
			"  width:" + fileNameWidth + "px;" +
			"  font-size:12px;" +
			"  vertical-align:middle;" +
			"  overflow: hidden;" +
			"  text-overflow: ellipsis;" +
			"}" +
			//ファイルプレビュー
			".ffip-preview{" +
			"  min-width:" + PREVIEW_MIN_SIZE + "px;" +
			"  min-height:" + PREVIEW_MIN_SIZE + "px;" +
			"  max-width:" + PREVIEW_MAX_SIZE + "px;" +
			"  max-height:" + PREVIEW_MAX_SIZE + "px;" +
			   previewBorderStyle +
			"}" +
			//ファイル入力本体（透明）
			".ffip-upfile{" +
			"  position:absolute;" +
			"  width:100%;" +
			"  height:100%;" +
			"  left:0;" +
			"  top:0;" +
			"  opacity:0;" +
			"  cursor:pointer;" +
			"}" +
			//クリアボタン
			".ffip-file-clear{" +
			"  display:inline-block;" +
			"  margin-left:5px;" +
			"  font-size:16px;" +
			"  white-space: nowrap;" +
			"  cursor:pointer;" +
			"}" +
			//ファイル情報
			".ffip-file-info{" +
			"  font-size:12px;" +
			"  white-space: nowrap;" +
			"}";
		GM_addStyle(css);
	}

	/*
	 *ファイル名スタイル設定
	 */
	function setFileNameStyle() {
		var fileNameCss =
			".ffip-filename{" +
			"  width:" + fileNameWidth + "px;" +
			"}";
		GM_addStyle(fileNameCss);
	}

})(jQuery);
