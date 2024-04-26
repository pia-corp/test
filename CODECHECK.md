# コードチェック項目

## 属性がひとつの要素の中で重複していたら警告します。

❌ 間違ったコード例
```bash
<div data-attr="value" data-Attr="db"></div>
```

✅ 正しいコード例
```bash
<div data-attr="value" data-Attr2="db"></div>
```

## 属性値がダブルクォーテーションで囲われていない場合に警告をします。

❌ 間違ったコード例
```bash
<div data-attr=value></div>
<div data-attr='value'></div>
```

✅ 正しいコード例
```bash
<div data-attr="value"></div>
```

## 属性名が小文字に統一されていないと警告します。

❌ 間違ったコード例
```bash
<div DATA-ATTR></div>
<div Data-Attr></div>
```

✅ 正しいコード例
```bash
<div data-attr></div>
```

## タグ名が小文字に統一されていないと警告します。

❌ 間違ったコード例
```bash
<DIV><p>lorem</p></DIV>
<IMG src="path/to">
```

✅ 正しいコード例
```bash
<div></div>
<svg><textPath></textPath></svg>
```

## 非推奨（deprecated）もしくは廃止（obsolete）の属性があると警告します。

❌ 間違ったコード例
```bash
<img src="path/to" alt="any picture" align="top" />
```

✅ 正しいコード例
```bash
<img src="path/to" alt="any picture" style="vertical-align: center" />
```

## 非推奨（deprecated）もしくは廃止（obsolete）または非標準（non-standard）な要素があると警告します。

❌ 間違ったコード例
```bash
<font color="red">lorem</font>
```

✅ 正しいコード例
```bash
<span class="red">lorem</span>
```

## DOCTYPEが含まれていないと警告します。また、古い廃止されたDOCTYPEを記述していた場合にも警告します。

❌ 間違ったコード例
```bash
<html>
  <head>
    <title>Any Page</title>
  </head>
  <body>
    <h1>Any Page</h1>
    <p>Anonymous</p>
  </body>
</html>
```

✅ 正しいコード例
```bash
<!doctype html>
<html>
  <head>
    <title>Any Page</title>
  </head>
  <body>
    <h1>Any Page</h1>
    <p>Anonymous</p>
  </body>
</html>
```

## 終了タグがない場合は警告します。タグが自己完結型であり終了タグを必要としない場合や、タグが空要素である場合は警告をしません。

❌ 間違ったコード例
```bash
<div>
  <span>There is not an end tag.
</div>
```

✅ 正しいコード例
```bash
<div>
  <span>There is an end tag.</span>
</div>
```

## id属性の値がドキュメント内で重複していたら警告します。

❌ 間違ったコード例
```bash
<html>
  <body>
    <div id="a">
      <p id="a">lorem</p>
    </div>

    <div id="a"></div>
    <img id="a" src="path/to" />
  </body>
</html>
```

✅ 正しいコード例
```bash
<html>
  <body>
    <div id="a">
      <p id="b">lorem</p>
    </div>

    <div id="c"></div>
    <img id="d" src="path/to" />
  </body>
</html>
```

## <dl>内の名前の重複禁止

❌ 間違ったコード例
```bash
<dl>
  <dt>名前1</dt>
  <dd>内容1</dd>
  <dt>名前1</dt>
  <dd>内容2</dd>
  <div>
    <dt>名前1</dt>
    <dd>内容3</dd>
  </div>
</dl>
```

✅ 正しいコード例
```bash
<dl>
  <dt>名前1</dt>
  <dd>内容1</dd>
  <dt>名前2</dt>
  <dd>内容2</dd>
  <div>
    <dt>名前3</dt>
    <dd>内容3</dd>
  </div>
</dl>
```

## 対応する開始タグなしに終了タグが現れた場合に警告します。これはHTML標準における内部的なパースエラーに該当します。

❌ 間違ったコード例
```bash
<div>
  段落</br>と改行</p>
</div>
```

✅ 正しいコード例
```bash
<div>
  <p>段落<br />と改行</p>
</div>
```

## for、form、aria-* などに指定されたIDまたはIDのリストが、もしくはハイパーリンクに指定されたフラグメントが、同じドキュメント内に存在するIDを参照しているかどうかを確認します。

❌ 間違ったコード例
```bash
<label for="foo">Text Field</label><input id="bar" type="text" />

<a href="#baz">Fragment link</label>
<section id="qux">...</section>
```

✅ 正しいコード例
```bash
<label for="foo">Text Field</label><input id="foo" type="text" />

<a href="#baz">Fragment link</label>
<section id="baz">...</section>
```
