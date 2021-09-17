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
