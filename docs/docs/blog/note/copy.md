# 剪贴板操作

::: tip
关于浏览器负责的方方面面
:::

## 复制功能

clipboard API

可复制文字

```js
async function copyPageUrl(str) {
  try {
    await navigator.clipboard.writeText(str);
    console.log('Str copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}
```

可复制图片

```js
async function copyPicture(str) {
  try {
    const imgURL = '/images/generic/file.png';
    const data = await fetch(imgURL);
    const blob = await data.blob();
    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);
    console.log('Image copied.');
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

Document.execCommand() 方法

最传统的操作剪贴板方法

通过代码选中执行选中，并复制

```js
function copy() {
  let copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}
```

## 粘贴功能

clipboard API

和复制同理返回一个promise

```js
async function getClipboardContents() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted content: ', text);
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
}
```

Document.execCommand() 方法

```js
function paste() {
  let copyText = document.querySelector("#output");
  copyText.focus();
  document.execCommand("paste");
}
```

## 参考

- <https://web.dev/async-clipboard/>
