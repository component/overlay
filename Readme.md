# Overlay

  Page overlay component.

## Installation

```
$ component install component/overlay
```

## API

### overlay([options|element])

  Returns a new `Overlay`.

  Options:

  - `closable`: whether or not a user may click the overlay to close [__false__]
  - `target`: target element to overlay [body]

### Overlay#show()

  Show the overlay.

### Overlay#hide()

  Hide the overlay.

## Events

  - `show` when the overlay is shown
  - `hide` when the overlay is hidden
  - `close` when the overlay is removed (follows hide normally)


## License

  MIT
