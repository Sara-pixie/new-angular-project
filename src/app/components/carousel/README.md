# Angular 16 Material Carousel

Carousel code stolen from [this](https://github.com/ralftar/ng-mat-carousel/tree/master) GitHub repository (on 8.11.2023 done for up to Angular 11) and reinpropriated for Angular 16.<br>
See their [demo page](https://ralftar.github.io/ng-mat-carousel/) to play with attributes.

## Usage
### `MatCarouselComponent`
```typescript
@Component({
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCarouselComponent]
})
```
```html
<mat-carousel>
  ...
</mat-carousel>
```
#### Attributes
| Input                 |  Type              | Description                                                                | Default value       |
| --------------------- | ------------------ | -------------------------------------------------------------------------- | :-----------------: |
| `timings`             | `string`           | Timings for slide animation.                                               | `'250ms ease-in'`   |
| `autoplay`            | `boolean`          | Enable automatic sliding.                                                  | `true`              |
| `interval`            | `number`           | Autoplay's interval in milliseconds.                                       | `5000`              |
| `loop`                | `boolean`          | Enable loop through arrows.                                                | `true`              |
| `hideArrows`          | `boolean`          | Hide navigation arrows.                                                    | `false`             |
| `hideIndicators`      | `boolean`          | Hide navigation indicators.                                                | `false`             |
| `color`               | `ThemePalette`     | Color palette from Material.                                               | `'accent'`          |
| `maxWidth`            | `string`           | Maximum width.                                                             | `'auto'`            |
| `maintainAspectRatio` | `boolean`          | If true, use `proportion` to determine height, else `slideHeight` is used. | `true`              |
| `proportion`          | `number`           | Height proportion compared to width.                                       | `25`                |
| `slideHeight`         | `string`           | Explicit slide height. Used when maintainAspectRatio is false.             | `'100%'`            |
| `slides`              | `number`           | Maximum amount of displayed slides.                                        |                     |
| `useKeyboard`         | `boolean`          | Enable keyboard navigation.                                                | `true`              |
| `useMouseWheel`       | `boolean`          | Enable navigation through mouse wheeling.                                  | `false`             |
| `orientation`         | `Orientation`      | Orientation of the sliding panel.                                          | `'ltr'`             |
| `svgIconOverrides`    | `SvgIconOverrides` | Override default carousel icons with registered SVG icons.                 |                     |
| `ariaLabel`           | `string`           | Carousel accessible name                                                   | `'Sliding carousel'`|
| `lazyLoad`            | `booelan`          | Lazy load content                                                          | `false`             |

#### Size Considerations and Recommendations
By default, `maintainAspectRatio` is true, which means height is controlled through `proportion`.

If you want to have a carousel with constant height (regardless of width), you must set `maintainAspectRatio` to false.

By default, `slideHeight` is set to `100%`, which will not work if the parent element height isn't defined (i.e. relative heights do not work if the parent height is `auto`). In that case you could pass a valid css string for `slideHeight`. You can use any valid css height string like `100px` or `25vh`.

Play around with the [demo](https://ralftar.github.io/ng-mat-carousel) to see how you can use this carousel with or without explicit parent height.

**With parent elements that have height:auto**
* use `proportion` if you want a carousel that resizes responsively (this is the default configuration).
* use `maintainAspectRatio="false"` and a non-percentage `slideHeight` if you want a fixed height carousel.
* **DO NOT** use relative (%) values for `slideHeight`; the carousel will not render.

**With parent elements that have a set height**
* use `maintainAspectRatio="false"` if you want a fixed height carousel that fills the parent element (`slideHeight` is `100%` by default).
* **DO NOT** use `maintainAspectRatio="false"` **and** `slideHeight` (unless `slideHeight="100%"`); the carousel will not render correctly because the buttons and indicators will be positioned with respect to the parent.
* **DO NOT** use `proportion`; this will lead to gaps or unwanted overflow.

### `MatCarouselSlideComponent`
```typescript
@Component({
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCarouselComponent, MatCarouselSlideComponent]
})
```
```html
<mat-carousel>
  <mat-carousel-slide>
    ...
  </mat-carousel-slide>
</mat-carousel>
```
#### Attributes
| Input          | Type      | Description                   | Default value |
| -------------- | --------- | ----------------------------- | :-----------: |
| `image`        | `string`  | Image displayed in the slide. |               |
| `overlayColor` | `string`  | Color of the slide's overlay. | `'#00000040'` |
| `hideOverlay`  | `boolean` | Toggle overlay on/off.        | `false`       |
| `ariaLabel`    | `string`  | Image accessible name         | `'Slide'`     |
| `load`         | `boolean` | Override lazyLoad             | `true`        |
