# gpea-hongkong-mjml_email_template

This project is for hosting the GPEA Marketing Cloud Email template. It's better to edit the MJML file instead of directly edit the HTML.

## Setup

1. Instal Packages
```
yarn install

```

2. Replace all the URL `https://www.greenpeace.org/taiwan/` with your market homepage URL

3. Generate the HTML
```
./node_modules/.bin/mjml GPEA_MC_Blocks.mjml > GPEA_MC_Blocks.html
```

## about ios gmail app darkmode

1. GPEA_GreenImpacts 中處理了綠色背景/深藍色背景、白字區塊

2. MJML 無法在 body 上寫 class ，故生成 HTML 之後需要手動在 body 加上 class="body"
這是配合 mj-style 設定只套用到 gmail 的 hack

3. ref: https://www.hteumeuleu.com/2021/fixing-gmail-dark-mode-css-blend-modes/
