# angular-sample

## 概要

[Angular](https://angular.jp)フレームワークを使ったサンプル

## 事前準備

- Node.js の導入
- Google Chromeの導入(デバッグ/テスト用)

## 構成要素

- [Angular](https://angular.jp)
- [NG-Zorro](https://ng.ant.design/docs/introduce/en)
  - UIコンポーネントライブラリ

## 導入

```bash
# インストール
$ npm install

# 開発サーバ起動(ホットリロード)
$ npm run start
```

## ディレクトリ構成

|ディレクトリ| |格納されるファイル|
|:----|:----|:----|
|src/app/|pages/|アプリケーションの画面|
| |pages/shared/|複数の画面で使われる部品|
| |models/|ドメインモデル|
| |lib/|アプリケーション自身と外部の何らかの連携で利用する部品|
| |utils/|アプリケーション固有**ではない**部品|
|src/assets/| |画像ファイルなど|

※[参考文献](https://speakerdeck.com/okunokentaro/frontend-conference-2019)

## 各種コマンド

### 起動コマンド

```bash
# 開発サーバ起動(ホットリロード)
$ npm run start
```

### 静的解析

```bash
# 実行
$ npm run lint

# 強制的に修正
$ npm run fix
```

### テスト

```bash
# 単体テスト(ホットリロード)
$ npm run test

# e2eテスト
$ npm run e2e
```

### ビルド

```bash
# 実運用環境で利用する.js/.css/.htmlを生成する
$ npm run build
```

### 生成ファイルのリセット

```bash
# distフォルダを削除
$ npm run clean
```

### 実装の雛形を追加

#### Angular

```bash
# componentを追加する
$ npx ng generate component component-name --module app.module

※その他以下が利用可能
  npm run ng generate directive|pipe|service|class|guard|interface|enum|module

# 静的解析でNGが出るため修正する
$ npm run fix

# 自動で修正できないNGを修正
- OnInit及び空のコンストラクタを削除する
- OnInitはimplementsおよびimport文も消す
```

#### NG-ZORRO

```bash
# 例: ng g ng-zorro-antd:form-normal-login login
$ npx ng g ng-zorro-antd:[schematic] <name> [options] --module app.module

- Angular同様NGを修正する
```

※[公式ドキュメント](https://ng.ant.design/components/overview/en)から`Copy Generated Command`アイコンをクリックすることで取得できる
