# sandpack-example

## Run Project

```sh
yarn
yarn server
```

In another tab, we run a static server so the inner iframe can retrieve the required files from sandpack:

```sh
cd sandpack
http-server -p 3001 # you can use any other static server you prefer
```

Open localhost:8000 in your browser.

