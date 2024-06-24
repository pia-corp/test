<img src="images/assets/logo.png" width="320" height="132">

[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)
[![FILE UPLOAD](https://github.com/pia-corp/test/actions/workflows/upload.yml/badge.svg)](https://github.com/pia-corp/test/actions/workflows/upload.yml)
[![Deploy](https://github.com/pia-corp/test/actions/workflows/deploy.yml/badge.svg?branch=main&event=workflow_dispatch)](https://github.com/pia-corp/test/actions/workflows/deploy.yml)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge)

# ファイルの取得

1. リポジトリをクローンしてください。プロジェクトのローカルコピーが作成されます。作業を進める前に、必ず新しく`develop/※※※※`ブランチを作成してください。
2. developブランチから別のブランチを切ることは問題ありません、mainへプルリクエストを出す場合はdevelopブランチからのみ受け付けます。

```bash
git clone https://github.com/pia-corp/faloom.jp.git
```

## ブランチ名ルール
以下のブランチ名だけが許可されてます。
develop/
feature/

※ mainへプルリクエストを出す場合はdevelopブランチからのみ受け付けます。

### コードチェック

ローカル環境でテストする場合は以下のscriptで確認ができます。
チェック内容は[CODECHECK.md](https://github.com/pia-corp/test/blob/main/doc/markup_rule.md)を確認してください。

```bash
npm run linter
```

### サイトの健全性

Googleの`Lighthouse`を使い**読み込み時間**、**インタラクティブ性**、**コンテンツの視聴的安全性**について評価します。
評価はブレが生じるため3回のテストを実施した中央値で判断しています。
Push前にテストし一定の評価以上となるようにしてください。

🔴：修正必須、🟠：必要に応じて修正、🟢：問題なし です。

# ディレクトリ構造

HTML、JavaScript、CSSなどは　`public`フォルダに作成してください。

```sh
└── project/
    ├── .github/
    ├── .next/
    ├── doc/
    ├── out/
    ├── pages/
    ├── public/
    │   ├── index.html
    │   ├── sitemap.xml
    │   ├── manifest.webmanifest
    │   └── contact/
    │       └── index.html
    ├── styles/
    ├── .gitignore
    ├── package.json
    └── README.md
```

## サーバ側

```sh
└── pc/
    ├── index.html
    ├── sitemap.xml
    └── manifest.webmanifest
    └── news/
        └── ※※※※.html
```

- 必要に応じてディレクトリやファイルを追加してください。
- newsフォルダはマージ後に自動ビルドされます。このフォルダにはファイルを置かないでください。

# Code Sample

## Google Tag Manager

```javascript
1. このコードは、次のようにページの <head> 内のなるべく上のほうに貼り付けてください。
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXXX');</script>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WD2QTHHH');</script>

2. 開始タグ <body> の直後にこのコードを次のように貼り付けてください。
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWVZTTSB"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

## microCMS

マイクロCMS のお知らせ一覧用サンプルコードです。必要に応じて改変してください。

[公式のサンプルコード](https://document.microcms.io/tutorial/javascript/javascript-getting-started)

### サンプル1

```javascript
<script src="https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js"></script>
<script>
  const { createClient } = microcms;

  const client = createClient({
    serviceDomain: 'service-domain', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: 'api-key',
  })
  client.get({ endpoint: 'hello'}).then((res) => {
    document.querySelector('#text').textContent = res.text
  })
</script>
```

### サンプル2

```javascript
const API_KEY = 'XXXXX'; // APIキー
const ENDPOINT = 'https://XXXXX.microcms.io/api/v1/news'; // microCMSのエンドポイント
const TARGET_SELECTOR = '.news_list'; // 表示先の要素のセレクター
const MAX_COUNT = 3; // 表示するニュースの最大数

// 日付をフォーマットする関数
function formatDate(date) {
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

// ニュースデータからHTMLを生成する関数
function createNewsHtml(news) {
  const newsDate = formatDate(new Date(news.publishedAt));
  const newsTitle = news.title;
  const newsImage = news.image;
  const newsUrl = news.url;
  const isExternal = news.external;

  let newsHtml = '';

  if (newsUrl) {
    if (isExternal) {
      newsHtml = `
        <p>${newsDate}</p>
        <a href="${newsUrl}" title="${newsTitle}" target="_blank">${newsTitle}</a>
      `;
    } else {
      newsHtml = `
        <p>${newsDate}</p>
        <a href="${newsUrl}" title="${newsTitle}">${newsTitle}</a>
      `;
    }
  } else {
    newsHtml = `
      <p>${newsDate}</p>
      <p>${newsTitle}</p>
    `;
  }

  return newsHtml;
}

// ニュースを取得して表示する関数
function fetchAndDisplayNews() {
  fetch(ENDPOINT, {
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const newsData = json.contents;
      const targetElement = document.querySelector(TARGET_SELECTOR);
      const count = Math.min(MAX_COUNT, newsData.length);

      for (let i = 0; i < count; i++) {
        const newsHtml = createNewsHtml(newsData[i]);
        targetElement.insertAdjacentHTML('beforeend', newsHtml);
      }
    })
    .catch((error) => {
      console.error('Error fetching news:', error);
    });
}

// ニュースの取得と表示
fetchAndDisplayNews();
```

### ブランドサイト用

| 項目     | 値                                     |
| -------- | -------------------------------------- |
| apiKey   |                                        |
| endpoint | https://faloom.microcms.io/api/v1/news |

### カスタム変数

| 変数名      | 型      | 説明                                        | サンプル                   |
| ----------- | ------- | ------------------------------------------- | -------------------------- |
| id          | String  | 作成したコンテンツの ID。                   | ag7iz3olfn                 |
| createdAt   | UTC     | 初回にコンテンツを作成した日時。            | 2024-03-01T01:48:10.626Z   |
| updatedAt   | UTC     | コンテンツを更新した日時。                  | 2024-03-01T02:02:50.176Z   |
| publishedAt | UTC     | コンテンツを公開した日時。                  | 2024-03-01T01:48:10.626Z   |
| revisedAt   | UTC     | 公開状態のコンテンツが更新された日時。      | 2024-03-01T02:02:50.176Z   |
| title       | String  | タイトル                                    | ニュースタイトル文字       |
| url         | String  | リンク先の URL                              | https://www.pia-corp.co.jp |
| image       | String  | https://document.microcms.io/image-api/size | https://xxxxxx/sample.png  |
| external    | boolean | 外部サイトかどうか                          | true / false               |

※実装時はコメントやログ出力を削除しサンプルは必要に応じて改変してください。

## お問い合わせページについて

SFTPログイン後、pc/contactディレクトリ配下のindex.html
Smartyテンプレート使用。テンプレートタグを記述したindex.htmlを用意しています。

### smarty変数

| tag | 型 | 値 |  |
| --- | --- | --- | --- |
| view_input | number | 0 or 1 | フォーム入力画面を表示 |
| view_confirm | number | 0 or 1 | フォーム確認画面を表示 |
| is_mail_send_completed | number | 0 or 1 | フォームの送信完了画面を表示 |

### 送信完了画面に下記のコードを追加してください。

```jsx
{literal}<script>"use strict";history.pushState(null, null, location.href);window.addEventListener('popstate', (e) => {history.go(1);});</script>{/literal}
```

### contactディレクトリのjavascript

smartyタグ内でjavasrciptを使う場合は{literal}で囲む必要があります。

### microCMSドキュメント

https://document.microcms.io/

## 構造化データマークアップ

マークアップは JSON-LD 形式で記述してください。

[構造化データ マークアップ](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=ja)

[リッチリザルト テスト](https://search.google.com/test/rich-results?utm_source=support.google.com/webmasters/&utm_medium=referral&utm_campaign=7445569)
