## futaba form image previewer
����Userscript�͂ӂ��΁������˂�̕ԐM�t�H�[���̓Y�t�t�@�C�����ɓY�t�t�@�C���̃v���r���[�ƃN���A�{�^����ǉ�������̂ł��B�Y�t�t�@�C���̊m�F��Ԉ���ēY�t�����t�@�C�����N���A����̂ɖ��ɗ����܂��B  

Firefox��[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)���ɃC���X�[�����Ă���X�N���v�g���C���X�g�[�����ĉ������B  
�iGreasemonkey��Violentmonkey�ł̓���͖��m�F�ł��j  
Chrome��[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)���ɃC���X�[�����Ă���X�N���v�g���C���X�g�[�����ĉ������B  

��**����Userscript��v0.4.4�������܂��ĊJ�����I�����܂����B**

��Firefox��KOSHIAN�i���j�A�h�I�����g�p���Ă�����ł́A���̃X�N���v�g�̑���ɂقړ��@�\�ŃN���b�v�{�[�h���̉摜�t�@�C���̓Y�t�@�\���ǉ����ꂽ[**KOSHIAN �ԐM�t�H�[���g�� ��**](https://github.com/akoya-tomo/koshian_form_futaba_kai/)�A�h�I���̎g�p�𐄏����܂��B  

�����̂ӂ��Ή{���x���c�[����[������](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki)�B  

## �g����
* �ӂ��΂̃��X��ʂ̕ԐM�t�H�[���̓Y�t�t�@�C����I������Ǝ����Ńv���r���[���\������܂��B  
�i�ő�\���T�C�Y�F250px�~250px�j  
![�X�N���[���V���b�g](images/screenshot01.png "�X�N���[���V���b�g")   
* �m�N���A�v�{�^���������ƓY�t�t�@�C������������A�v���r���[�������܂��B  
* [KOSHIAN �ԐM�t�H�[���g��](https://addons.mozilla.org/ja/firefox/addon/koshian-%E8%BF%94%E4%BF%A1%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E6%8B%A1%E5%BC%B5/)�g�p���Ƀ��X���M��Y�t�t�@�C�����c��Ƃ��̓N���A�{�^���ŏ����ł���̂ŕ֗��ł��B  
  �i[KOSHIAN �ԐM�t�H�[���g�� ��](https://github.com/akoya-tomo/koshian_form_futaba_kai/)�͑��M��Y�t�t�@�C�����N���A����悤�ɏC������Ă��܂��j
* �Y�t�t�@�C���̃h���b�v�G���A�̐ݒ�ɑΉ����܂����B  
  �ʏ�͓Y�t�t�@�C���̃{�^���iFirefox�́u�Q��...�v�EChrome�́u�t�@�C����I���v�j�Ƃ��̉��̃t�@�C�����̕\�������h���b�v�\�Ȕ͈͂ł��B�����������ăh���b�v���ɂ����Ƃ��͌�q�̐ݒ�Ńh���b�v�G���A���g�傷�邱�Ƃ��\�ł��B  
![�X�N���[���V���b�g](images/screenshot02.png "�X�N���[���V���b�g")   
* WebM��mp4�̃v���r���[�\���Ŏ����Đ��ƃ��[�v�Đ����ݒ�\�ł��B  
* �v���r���[�̂ɉ��ɓY�t�t�@�C���̏c���T�C�Y�E�t�@�C���T�C�Y�E�t�@�C���^�C�v���\������܂��B  

## �C���X�g�[��

[GitHub](https://github.com/akoya-tomo/futaba_form_image_previewer/raw/master/futaba_form_image_previewer.user.js)  

## �ݒ�
�@�\�̓���̓X�N���v�g�`���̑啶���ϐ����G�f�B�^�ŕҏW����ΕύX���邱�Ƃ��ł��܂��B  

* DROP\_AREA\_SIZE : �t�@�C�����I�����̃h���b�v�G���A�̍����i�P��:px�j�i0�Ŕ�\���j
  - �Y�t�t�@�C���̃{�^���̉��ɕ�250px�ō��������̐ݒ�l�̑傫���̃h���b�v�G���A���\������܂��B���̕����ɂ��t�@�C�����h���b�v���邱�Ƃ��\�ɂȂ�܂��B
* PREVIEW\_MAX\_SIZE : �v���r���[�ő�T�C�Y�i�P��:px�j�i�ő�250�j  
  - ���̃v���r���[�ő�T�C�Y���c�≡���傫���摜�⓮��͂��̐ݒ�l�܂ŏk������ăv���r���[�\������܂��B  
* WEBM\_AUTOPLAY : WebM��mp4�̃v���r���[�������Đ�����itrue = �����Đ����� : false = �����Đ����Ȃ��j  
* WEBM\_LOOP : WebM��mp4�̃v���r���[�����[�v�Đ�����itrue = ���[�v�Đ����� : false = ���[�v�Đ����Ȃ��j  
  - ���[�v�Đ��͎����Đ����L�����̂ݐݒ肪�L���ɂȂ�܂��B  
* DROP\_AREA\_STYLE : �h���b�v�G���A�̃X�^�C��
  - �h���b�v�G���A�̃X�^�C����CSS�ŋL�q���ĕύX���邱�Ƃ��ł��܂��B

## ���ӎ���
* �o�[�W�����\�L�̒ʂ�J���r���Ȃ̂Ŋ��ɂ���Ă͕s������̉\��������܂��B  
* Firefox�Ńt�@�C����Y�t������ԂŃy�[�W�������[�h������ƁA���̌�t�@�C�����N���A���Ă������[�h����ƃt�@�C�����Y�t���ꂽ��Ԃɖ߂邱�Ƃ�����܂��B  
* [KOSHIAN �ԐM�t�H�[�����Œ�](https://addons.mozilla.org/ja/firefox/addon/koshian-float-form/)�g�p���Ƀt�@�C���Y�t����Ɛݒ�ɂ���Ă̓t�H�[�J�X���O��ĕԐM�t�H�[�������邱�Ƃ�����܂��B�ēx�t�H�[�����J���΃t�@�C���͓Y�t���ꂽ��Ԃł��B  
  �i[KOSHIAN �ԐM�t�H�[�����Œ� ��](https://github.com/akoya-tomo/koshian_float_form_kai/)�͕ԐM�t�H�[�������Ȃ��悤�ɏC������Ă��܂��j  
* �v���r���[�̏�Ƀt�@�C�����h���b�v����ƃh���b�v�����t�@�C�����V�����Y�t�t�@�C���ƂȂ�܂��B�i�h���b�v�G���A�Ɠ��������j
* �h���b�v�G���A�̐ݒ�̑Ή��̉e���œY�t�t�@�C���{�^���̕\�����}�E�X�I�[�o�[�Ŕ������܂���B  
* WebM��mp4�̃v���r���[�͎蓮�ōĐ��𐧌䂷�邱�Ƃ͂ł��܂���B�܂������ł̎����Đ��ƂȂ�܂��B  

## �X�V����
* v0.4.4 2020-06-10
  - Tampermonkey�̍\���G���[���C��
  - �R�[�h����
* v0.4.3 2018-07-26
  - �y�[�W�ǂݍ��ݎ��Ƀt�@�C�������ɑI������Ă��Ă��v���r���[�ɕ\������Ȃ��s����C��
  - Firefox�ɂ����ēY�t�t�@�C�����N���A������Ń����[�h����ƁA�t�@�C�����Y�t���ꂽ��Ԃɖ߂錻�ۂ�}��
  - �ӂ��N����v0.4.2�����삵�Ȃ��s����C��
* v0.4.2 2018-07-25
  - [KOSHIAN �ԐM�t�H�[���g�� ��](https://github.com/akoya-tomo/koshian_form_futaba_kai/) v0.2.0rc1�ȍ~�ɑΉ�
* v0.4.1 2018-06-15
  - �h���b�v�G���A�ݒ莞�Ƀv���r���[�̏c���䂪����邱�Ƃ�����s����C��
  - �h���b�v�G���A�̃X�^�C���ύX�y�уX�^�C���̐ݒ��ǉ�
  - GM_addStyle()�ɂ�薳�ʂ�style���쐬�����̂��C��
* v0.4.0 2018-06-04
  - mp4�ɑΉ�
* v0.3.1 2018-03-24
  - KOSHIAN �t�H�[���g���A�h�I���ƕ��p����ƌ듮�삷��s��C��
* v0.3.0 2017-12-28
  - �Y�t�t�@�C���̃h���b�v�G���A�̐ݒ�ɑΉ�  
  - WebM�v���r���[�̎����Đ��ƃ��[�v�Đ��ɑΉ�  
  - �Y�t�t�@�C���̏c���T�C�Y�E�t�@�C���T�C�Y�E�t�@�C���^�C�v��\��
* v0.2.0 2017-12-24
  - WebM�̃v���r���[�ɑΉ�  
* v0.1.1 2017-12-24
  - WebM���\��Ȃ��Ȃ��Ă����̂��C��  
* v0.1.0 2017-12-24
  - �J���Ń����[�X  

