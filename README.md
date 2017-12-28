## futaba form image previewer
このUserscriptはふたば☆ちゃんねるの返信フォームの添付ファイル欄に添付ファイルのプレビューとクリアボタンを追加するものです。添付ファイルの確認や間違って添付したファイルをクリアするのに役に立ちます。  

Firefoxの場合、[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)を先にインスールしてからスクリプトをインストールして下さい。  
（GreasemonkeyやViolentmonkeyでの動作は未確認です）  
Chromeの場合、[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)を先にインスールしてからスクリプトをインストールして下さい。  

※他のUserscriptやFirefoxアドオン[KOSHIAN](https://addons.mozilla.org/ja/firefox/user/anonymous-a0bba9187b568f98732d22d51c5955a6/)の派生版は[こちら](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)の一覧からどうぞ。  

## 使い方
* ふたばのレス画面の返信フォームの添付ファイルを選択すると自動でプレビューが表示されます。  
（最大表示サイズ：250px×250px）  
* ［クリア」ボタンを押すと添付ファイルが消去され、プレビューも消えます。  
* [KOSHIAN 返信フォーム拡張](https://addons.mozilla.org/ja/firefox/addon/koshian-%E8%BF%94%E4%BF%A1%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E6%8B%A1%E5%BC%B5/)使用時にレス送信後添付ファイルが残るときはクリアボタンで消去できるので便利です。  
* (v0.3)添付ファイルのドラッグ＆ドロップに対応しました。  
  添付ファイルのボタン（Firefoxは「参照...」・Chromeは「ファイルを選択」）とその横のファイル名の表示欄がドロップ可能な範囲です。高さが狭くてドロップしにくいときは後述の設定でドロップエリアを拡大することが可能です。  
* (v0.3)WebMのプレビュー表示で自動再生とループ再生が設定可能になりました。  
* (v0.3)プレビューのに下に添付ファイルの縦横サイズ・ファイルサイズ・ファイルタイプが表示されるようになりました。  

## インストール

[GreasyFork](https://greasyfork.org/ja/scripts/36659-futaba-form-image-previewer)　[GitHub](https://github.com/akoya-tomo/futaba_form_image_previewer/raw/master/futaba_form_image_previewer.user.js)  

## 設定
機能の動作はスクリプト冒頭の大文字変数をエディタで編集すれば変更することができます。  

* PREVIEW\_MIN\_SIZE:ファイル未選択時のドロップエリアの高さ（単位:px）（0で非表示）  
  - 添付ファイルのボタンの下に幅250pxで高さがこの設定値の水色の枠のドロップエリアが表示されます。この部分にもファイルをドロップすることが可能になります。
* PREVIEW\_MAX\_SIZE:プレビュー最大サイズ（単位:px）（最大250）  
  - このプレビュー最大サイズより縦や横が大きい画像や動画はこの設定値まで縮小されてプレビュー表示されます。  
* WEBM\_AUTOPLAY:WebMのプレビューを自動再生する（true = 自動再生する : false = 自動再生しない）  
* WEBM\_LOOP:WebMのプレビューをループ再生する（true = ループ再生する : false = ループ再生しない）  
  - ループ再生は自動再生有効時のみ有効になります。  

## 注意事項
* バージョン表記の通り開発途中なので環境によっては不具合発生の可能性があります。  
* [KOSHIAN 返信フォームを固定](https://addons.mozilla.org/ja/firefox/addon/koshian-float-form/)使用時にファイル添付すると設定によってはフォーカスが外れて返信フォームが閉じることがあります。再度フォームを開けばファイルは添付された状態です。  
* プレビューの上にファイルをドロップするとドロップしたファイルが新しい添付ファイルとなります。（ドロップエリアと同じ扱い）
* ドラッグ＆ドロップの対応の影響で添付ファイルボタンの表示がマウスオーバーで反応しません。  
* WebMプレビューは手動で再生を制御することはできません。また無音での自動再生となります。  

## 今後の予定
* 添付ファイルのコピーペーストは実験で貼り付け送信出来ましたが、送信できるファイルに制限があったので別の手段をテスト中です。  

## 更新履歴
* v0.3.0 2017-12-28
  - 添付ファイルのドラッグ＆ドロップに対応  
  - WebMプレビューの自動再生とループ再生に対応  
  - 添付ファイルの縦横サイズ・ファイルサイズ・ファイルタイプを表示
* v0.2.0 2017-12-24
  - WebMのプレビューに対応  
* v0.1.1 2017-12-24
  - WebMが貼れなくなっていたのを修正  
* v0.1.0 2017-12-24
  - 開発版リリース  

