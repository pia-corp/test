<p align="center">
  <a href="https://faloom.jp">
    <img src="docs/assets/faloom.svg" height="256">
  </a>
  <h1 align="center">
    <a href="https://faloom.jp">faloom</a>
  </h1>
</p>

# ファイルの取得

## クローン

リポジトリを`git clone https://github.com/pia-corp/****.git`（HTTPS を使用）でクローンしてください。

```bash
git clone https://github.com/pia-corp/faloom.jp.git
```

## ブランチ

クローン後は必ず develop/ブランチを切って作業を実施してください。

## プルリク

作業完了後はプルリクを出してください。

# ディレクトリ構造

## 開発用

プロジェクトのトップレベルのファイルとディレクトリです。
パッケージ管理を使う場合は src ディレクトリにソースコードを入れてください。

```sh
└── project/
    ├── .gitignore
    ├── bitbucket-pipelines.yml
    ├── package.json
    ├── README.md
    ├── app/
    │   ├── index.html
    │   ├── sitemap.xml
    │   ├── manifest.webmanifest
    │   └── contact/
    │       └── index.html
    ├── doc/
    ├── node_modules/
    └── src/
```

1. **`.gitignore`**: このファイルは、バージョン履歴を追跡/維持してはならないファイルを git に通知します。

2. **`bitbucket-pipelines.yml`**:

3. **`package.json`**: プロジェクトの設定情報（プロジェクト名、バージョン、依存ライブラリなど）を記述。

4. **`README.md`**: プロジェクトの概要を説明。

5. **`app/`**: HTML、JavaScript、CSS ファイルなどのソースコードを格納。

6. **`node_modules/`**: npm でインストールしたライブラリを格納。

7. **`src/`**: このディレクトリには、コンパイルやトランスパイル前のソースコードが含まれています。

## サーバ側

```sh
└── pc/
    ├── index.html
    ├── sitemap.xml
    ├── manifest.webmanifest
    └── contact/
        └── index.html
```

1. **`index.html`**:

2. **`sitemap.xml`**: XML サイトマップ

3. **`manifest.webmanifest`**:

4. **`contact/index.html`**:

- pc ディレクトリ内が公開範囲です。必要に応じてディレクトリやファイルを作成してください。
- contact ディレクトリ配下にディレクトリを作るのは禁止です。お問い合わせページで使用する外部ファイルは contact ディレクトリの外に作成してください。
  ex. images/contact/ など

# お問い合わせページ

Smarty テンプレート使用。テンプレートタグを記述した index.html を用意しています。

## smarty 変数

### 画面

| variable                          | type   | 概要                                                        |
| --------------------------------- | ------ | ----------------------------------------------------------- |
| $viewArray.view_mode              | string | view_input = 入力画面 and 完了画面, view_confirm = 確認画面 |
| $viewArray.is_mail_send_completed | number | フォームの送信完了画面を表示                                |

### エラー

| variable                                         | type   | 概要                                                                           |
| ------------------------------------------------ | ------ | ------------------------------------------------------------------------------ |
| $viewArray.exists_mail_send_error                | string | 少なくとも 1 つ以上のエラー発生時のサーバメッセージ                            |
| $viewArray.form_dataArray.inquiry_type           | number | 0 = 商品について, 1 = 卸売り・販売について, 2 = 取材など, 3 = 広報, 4 = その他 |
| $viewArray.input_check_errorArray.inquiry_type   | string | 問い合わせ項目エラー発生時のサーバメッセージ                                   |
| $viewArray.input_check_errorArray.name           | string | 氏名エラー発生時のサーバメッセージ                                             |
| $viewArray.input_check_errorArray.telephone      | string | 電話番号エラー発生時のサーバメッセージ                                         |
| $viewArray.input_check_errorArray.email          | string | メールエラー発生時のサーバメッセージ                                           |
| $viewArray.input_check_errorArray.message        | string | メッセージエラー発生時のサーバメッセージ                                       |
| $viewArray.input_check_errorArray.privacy_policy | string | 個人情報保護方針エラー発生時のサーバメッセージ                                 |

## HTML タグ

### 入力画面

| tag   | name 値                   | value                                    | 概要                     |
| ----- | ------------------------- | ---------------------------------------- | ------------------------ |
| input | form_data[name]           | $viewArray.form_dataArray.name           | 名前                     |
| input | form_data[company]        | $viewArray.form_dataArray.company        | 会社名                   |
| input | form_data[telephone]      | $viewArray.form_dataArray.telephone      | 電話番号                 |
| input | form_data[email]          | $viewArray.form_dataArray.email          | メールアドレス           |
| input | form_data[message]        | $viewArray.form_dataArray.message        | 問い合わせ内容           |
| input | form_data[privacy_policy] | $viewArray.form_dataArray.privacy_policy | 個人情報保護方針への同意 |

※input の value に入れる変数は修正画面で入力した内容を表示する。

### 確認画面

| tag  | variable                                  | 概要                   |
| ---- | ----------------------------------------- | ---------------------- |
| 任意 | $viewArray.confirm_dataArray.inquiry_type | 選択した問い合わせ項目 |
| 任意 | $viewArray.confirm_dataArray.name         | 入力した名前           |
| 任意 | $viewArray.confirm_dataArray.company      | 入力した会社名         |
| 任意 | $viewArray.confirm_dataArray.telephone    | 入力した電話番号       |
| 任意 | $viewArray.confirm_dataArray.email        | 入力したメールアドレス |
| 任意 | $viewArray.confirm_dataArray.message      | 入力した問い合わせ内容 |

## javascript

smarty タグ内で javasrcipt を使う場合は **{literal}** で囲む必要があります。

```jsx
{literal}
<script>
</script>
{/literal}
```

# Code Sample

## Google Tag Manager

```javascript
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WD2QTHHH');</script>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWVZTTSB"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

## 送信完了画面

多重送信対策のコード。※暫定対策中

```jsx
{literal}<script>"use strict";history.pushState(null, null, location.href);window.addEventListener('popstate', (e) => {history.go(1);});</script>{/literal}
```

## microCMS

マイクロ CMS のお知らせ一覧用サンプルコードです。必要に応じて改変してください。

```javascript
const API_KEY = "XXXXX"; // APIキー
const ENDPOINT = "https://XXXXX.microcms.io/api/v1/news"; // microCMSのエンドポイント
const TARGET_SELECTOR = ".news_list"; // 表示先の要素のセレクター
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

  let newsHtml = "";

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
      "X-MICROCMS-API-KEY": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      const newsData = json.contents;
      const targetElement = document.querySelector(TARGET_SELECTOR);
      const count = Math.min(MAX_COUNT, newsData.length);

      for (let i = 0; i < count; i++) {
        const newsHtml = createNewsHtml(newsData[i]);
        targetElement.insertAdjacentHTML("beforeend", newsHtml);
      }
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
    });
}

// ニュースの取得と表示
fetchAndDisplayNews();
```

### ブランドサイト用

| 項目     | 値                                      |
| -------- | --------------------------------------- |
| apiKey   |     |
| endpoint | https://faloom.microcms.io/api/v1/news |

### カスタム変数

| 型          | 説明    | sample                                      |
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

### microCMSドキュメント

https://document.microcms.io/

# その他

- SFTP でアップロード後、サーバに反映されるのは最長 1 分間かかる場合もあります。
- php コードや php ファイルの使用は許可されていません。

## 画像拡張子

- jpg
- gif
- png
- svg
- webp

ベクター形式で出力できる場合は svg で書き出し。そうでなければ webp 等の形式にしてください。

🏞️ svg で出力する場合、特に理由がなければ webp を使用してください。
画像の縦横サイズは最適化し、容量圧縮してください。

## ファビコン

- favicon.ico
- icon.svg
- apple-touch-icon.png
- icon-192.png
- icon-512.png

## 構造化データマークアップ

マークアップは JSON-LD 形式で記述。

[構造化データ マークアップ](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=ja)

[リッチリザルト テスト](https://search.google.com/test/rich-results?utm_source=support.google.com/webmasters/&utm_medium=referral&utm_campaign=7445569)
