## futaba form image previewer
このUserscriptはふたば☆ちゃんねるの返信フォームの添付ファイル欄に添付ファイルのプレビューとクリアボタンを追加するものです。添付ファイルの確認や間違って添付したファイルをクリアするのに役に立ちます。  

Firefoxの場合、[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)を先にインスールしてからスクリプトをインストールして下さい。  
（GreasemonkeyやViolentmonkeyでの動作は未確認です）  
Chromeでの動作は未確認ですが、難しいことはしていないので最新版にTampermonkeyを先にインストールすれば動作すると思います。  

※このUserscriptはFirefoxアドオン[KOSHIAN](https://addons.mozilla.org/ja/firefox/user/anonymous-a0bba9187b568f98732d22d51c5955a6/)シリーズとの併用を想定して作成されています。  

※他のUserscriptやKOSHIANアドオン派生版は[こちら](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)の一覧からどうぞ。  

## 想定動作環境
* Firefox 57以上  

以下はインストールしていても本スクリプトが問題無く動作することをことを確認しています。  
（本スクリプト自体はFirefoxとTampermonkeyがあれば動作します）  

* [KOSHIAN](https://addons.mozilla.org/ja/firefox/user/anonymous-a0bba9187b568f98732d22d51c5955a6/)アドオン及びその[派生版](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)  
* [KOSHIANアドオン用ふたば支援ユーザースクリプト](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki#%E3%81%93%E3%81%97%E3%81%82%E3%82%93%E7%94%A8%E3%81%B5%E3%81%9F%E3%81%B0%E6%94%AF%E6%8F%B4%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)  

## 使い方
* ふたばのレス画面の返信フォームの添付ファイルを選択すると自動でプレビューが表示されます。  
（最大表示サイズ：250px×250px）  
* ［クリア」ボタンを押すと添付ファイルが消去され、プレビューも消えます。  
* [KOSHIAN 返信フォーム拡張](https://addons.mozilla.org/ja/firefox/addon/koshian-%E8%BF%94%E4%BF%A1%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E6%8B%A1%E5%BC%B5/)使用時にレス送信後添付ファイルが残るときはクリアボタンで消去できるので便利です。  

## インストール

[GreasyFork](https://greasyfork.org/ja/scripts/36659-futaba-form-image-previewer)　[GitHub](https://github.com/akoya-tomo/futaba_form_image_previewer/raw/master/futaba_form_image_previewer.user.js)  

## 注意事項
* バージョン表記の通り開発途中なので環境によっては不具合発生の可能性があります。  
* [KOSHIAN 返信フォームを固定](https://addons.mozilla.org/ja/firefox/addon/koshian-float-form/)使用時にファイル添付すると設定によってはフォーカスが外れて返信フォームが閉じることがあります。再度フォームを開けばファイルは添付された状態です。  

## 今後の予定
* 添付ファイルをドロップやペーストできるといいな…  

## 更新履歴
* v0.1.0 2017-12-24
  - 開発版リリース  

