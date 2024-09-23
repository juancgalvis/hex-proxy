# Usage

## Start proxy

```shell
npm start
```

Proxy will be started at `http://localhost:15502`

You can change the default port defining the `PORT` env.

# Use proxy

In another shell, you can point to the proxy like

```shell
HEX_MIRROR=http://localhost:15502 mix deps.get
```