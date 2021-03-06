##### 学生会\_地球祭 2021

# QR スタンプラリー

## 概要

QR コードを使用したスタンプラリーのシステム開発

## データ保持について

既存のカメラで QR コードを読み取って下さい
iphone なら Safari を推奨しています。

## 注意

- データが消える
  - クッキー保持なのでサイトのキャッシュが残らないとデータが保持されませんのでご注意下さい。
  - 確認済み
    - safari
- 2 号館 1 階じゃない
  - 2 号館 1 階と 1 号館 1 階を入れ違えてしまいましたので 2 号館 1 階は 1 号館 1 階と思って下さい。
- アプリ内のカメラが使えない
  - 既存のカメラで読み取ってもらえれば構いません。その時にクッキーが消えないようご注意下さい。
- 他対策方法
  - pwa に対応しておりますのでホームに追加して使ってみて下さい、そのさいアプリを終了する(起動中アプリ内から消す)とクッキーが消える可能性がありますのでご注意下さい。

## 景品

スタンプ 1 つ目でお菓子が貰えます
スタンプを全て集めるとモンエナが貰えます

## スタンプ

景品を渡す際はどこにどのスタンプがあるか確かめて下さい。

## 場所

| 階   | １号館             | ２号館             | ３号館             |
| ---- | ------------------ | ------------------ | ------------------ |
| １階 | Building-2_1-floor | Building-1_1-floor | Building-2_6-floor |
| ２階 | Building-1_2-floor |                    | Building-3_2-floor |
| ３階 | Building-1_3-floor | Building-2_3-floor | Building-3_3-floor |
| ４階 | Building-1_4-floor |                    |                    |

## 使い方

.env

```
VUE_APP_ANALYTICS_ID=
```

`/vue/stamps.js` ここに stamp の詳細を入れておく変更可

QR 生成

/qr/hash

```
example >
http://localhost:8080/qr/hogegegegoehgoeghoe
```

## 役割 (Twitter ID)

### システム構築・運用管理

[@yumekiti1204](https://twitter.com/yumekiti1204)

### デザイン

[@ruka\_\_311](https://twitter.com/ruka__311)

### ポスター

[@smz_aoi](https://twitter.com/smz_aoi)
