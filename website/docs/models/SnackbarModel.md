---
id: snackbarmodel
title: SnackbarModel
---

Note: this document is automatically generated from mobx-state-tree objects in
our source code. See
[Core concepts and intro to pluggable elements](/docs/developer_guide/) for more
info

### Source file

[packages/core/ui/SnackbarModel.ts](https://github.com/GMOD/jbrowse-components/blob/main/packages/core/ui/SnackbarModel.ts)

### SnackbarModel - Getters

#### getter: snackbarMessages

```js
// type
IObservableArray<SnackbarMessage>
```

### SnackbarModel - Actions

#### action: notify

```js
// type signature
notify: (message: string, level?: NotificationLevel, action?: SnackAction) => void
```

#### action: pushSnackbarMessage

```js
// type signature
pushSnackbarMessage: (message: string, level?: NotificationLevel, action?: SnackAction) => number
```

#### action: popSnackbarMessage

```js
// type signature
popSnackbarMessage: () => SnackbarMessage
```

#### action: removeSnackbarMessage

```js
// type signature
removeSnackbarMessage: (message: string) => void
```
