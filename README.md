# <img src="https://github.com/user-attachments/assets/99cd64e9-e0c5-46c1-a650-c74286371fe2" alt="ByteYard Icon Blue 3D Shadow" width="24"/> FluidSizingCSS

## Rethink Responsive Design with Pure CSS Fluid Sizing

FluidSizingCSS is a pioneering solution for responsive design that transforms how interfaces adapt between mobile and desktop. This package offers the world's first pure CSS implementation of fluid sizing locks, eliminating the need for SCSS or external tools. Designed for developers and loved by designers, it enables perfect fluid scaling using only native CSS, making your site more adaptable, lighter, and faster.

<iframe height="300" style="width: 100%;" scrolling="no" title="FluidSizingCSS Demo" src="https://codepen.io/arinker/embed/poXLzBG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/arinker/pen/poXLzBG">
  FluidSizingCSS Demo</a> by Arno Rinker (<a href="https://codepen.io/arinker">@arinker</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

## Table of Contents

1. [Introduction](#fluid-sizing-css)
2. [Installation](#installation)
   - [Via npm](#via-npm)
   - [Optional: Smaller CSS Files](#optional-smaller-css-files)
   - [Via CDN](#via-cdn)
3. [File Sizes](#file-sizes)
4. [How It Works](#how-it-works)
   - [Example Usage](#example-usage)
   - [Global Settings](#global-settings)
5. [Complete List of Fluid Properties](#complete-list-of-fluid-properties)
   - [Common Fluid Properties](#common-fluid-properties)
     - [Text Formatting](#text-formatting)
     - [Margin](#margin)
     - [Padding](#padding)
     - [Border Width](#border-width)
     - [Border Radius](#border-radius)
     - [Outline](#outline)
     - [Inset](#inset)
     - [Grid, Flex, and Columns](#grid-flex-and-columns)
     - [Background](#background)
     - [Scroll](#scroll)
   - [Logical Fluid Properties](#logical-fluid-properties)
     - [Block](#block)
     - [Inline](#inline)
     - [Margin](#margin-1)
     - [Padding](#padding-1)
     - [Border Width](#border-width-1)
     - [Border Radius](#border-radius-1)
     - [Inset](#inset-1)
     - [Scroll](#scroll-1)
   - [Physical Fluid Properties](#physical-fluid-properties)
     - [Height](#height)
     - [Width](#width)
     - [Margin](#margin-2)
     - [Padding](#padding-2)
     - [Border Width](#border-width-2)
     - [Border Radius](#border-radius-2)
     - [Inset](#inset-2)
     - [Scroll](#scroll-2)
6. [License](#license)

---

## Installation

### Via npm

1. **Install FluidSizingCSS**:

   ```bash
   npm install fluidsizingcss
   ```

2. **Import the CSS file** into your project based on the framework you’re using:

   - **HTML/Vanilla JavaScript**: Add to your HTML `<head>`:

     ```html
     <link rel="stylesheet" href="node_modules/fluidsizingcss/fluidsizingcss.css">
     ```

   - **React**: Import in your JavaScript/TypeScript file:

     ```javascript
     import 'fluidsizingcss/fluidsizingcss.css';
     ```

   - **Vue.js**: Import in your entry file:

     ```javascript
     import 'fluidsizingcss/fluidsizingcss.css';
     ```

   - **Angular**: Add to the `styles` array in `angular.json`:

     ```json
     "styles": [
       "node_modules/fluidsizingcss/fluidsizingcss.css",
       "src/styles.css"
     ]
     ```

   - **SASS/SCSS**: Import in your main SASS/SCSS file:

     ```scss
     @import 'node_modules/fluidsizingcss/fluidsizingcss.css';
     ```

### Optional: Smaller CSS Files

To improve performance, you can choose specialized versions of FluidSizingCSS:

- **Logical Properties Only** (e.g., `block-size`, `inline-size`):

  ```javascript
  import 'fluidsizingcss/fluidsizingcss-logical.css';
  ```

- **Physical Properties Only** (e.g., `height`, `width`):

  ```javascript
  import 'fluidsizingcss/fluidsizingcss-physical.css';
  ```

### Via CDN

Alternatively, include FluidSizingCSS directly in your HTML:

- **Full Version**:

  ```html
  <link rel="stylesheet" href="https://unpkg.com/fluidsizingcss@latest/dist/css/fluidsizingcss.min.css">
  ```

  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fluidsizingcss@latest/dist/css/fluidsizingcss.min.css">
  ```

- **Logical Properties Only**:

  ```html
  <link rel="stylesheet" href="https://unpkg.com/fluidsizingcss@latest/dist/css/fluidsizingcss-logical.min.css">
  ```

  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fluidsizingcss@latest/dist/css/fluidsizingcss-logical.min.css">
  ```

- **Physical Properties Only**:

  ```html
  <link rel="stylesheet" href="https://unpkg.com/fluidsizingcss@latest/dist/css/fluidsizingcss-physical.min.css">
  ```

  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fluidsizingcss@latest/dist/css/fluidsizingcss-physical.min.css">
  ```

---

### File Sizes

The following table provides an overview of the different versions of FluidSizingCSS files, including their standard CSS size, minified size, and the size after Brotli compression. This information helps you understand the trade-offs between file size and performance optimization in your project.

| File Name                     | Size       |                 |                        |
|-------------------------------|------------|-----------------|------------------------|
|                               | CSS        | Minified        | Brotli compressed      |
| `fluidsizingcss.css`          | 49.22 KB   | 38.03 KB        | 2.69 KB                |
| `fluidsizingcss-logical.css`  | 33.56 KB   | 25.8 KB         | 1.91 KB                |
| `fluidsizingcss-physical.css` | 28.12 KB   | 21.35 KB        | 1.93 KB                |

---

## How It Works

FluidSizingCSS leverages CSS custom properties, `calc()`, and `clamp()` to implement fluid sizing techniques. This method enables smooth adaptation of typography and design elements across different devices, avoiding the abrupt changes typically associated with traditional breakpoints. 

### Example Usage

To define fluid sizing for a heading, include the following in your CSS:

> [!CAUTION]
> All values must be unitless to ensure compatibility with CSS mathematical operations.

```css
:root {
    --s-min: 400; /* Lower Lock: Min Screen Size */
    --s-max: 1400; /* Upper Lock: Max Screen Size */
}

h1 {
    font-size: var(--fs);
    --fs-min: 60; /* Minimum Font Size */
    --fs-max: 240; /* Maximum Font Size */
    line-height: var(--lh);
    --lh-min: 60; /* Minimum Line-Height */
    --lh-max: 240; /* Maximum Line-Height */
}
```

### Global Settings

Set global minimum and maximum screen sizes and base font size at the `:root` level:

```css
@layer fluid, base;

@layer base {
    :root {
        --s-min: 400; /* Screen Size Min for General Fluid Sizing */
        --s-max: 1400; /* Screen Size Max for General Fluid Sizing */
        --rem: 16; /* Pixel per REM for General Fluid Sizing */
    }
}
```

---

## Complete List of Fluid Properties

FluidSizingCSS provides a comprehensive set of fluid properties, allowing you to create responsive and adaptive designs across different screen sizes. These properties are categorized into 
* Common Fluid Properties,
* Logical Fluid Properties and
* Physical Fluid Properties.

### Common Fluid Properties

These are general properties like margins, padding, and text formatting that apply universally, ensuring consistent fluid responsiveness across your design.

#### Text Formatting

- **font-size:** `--fs`
- **line-height:** `--lh`
- **letter-spacing:** `--ls`
- **word-spacing:** `--ws`
- **text-indent:** `--ti`
- **text-decoration-thickness:** `--tdt`
- **text-underline-offset:** `--tuo`

#### Margin

- **margin:** `--m`

#### Padding

- **padding:** `--p`

#### Border Width

- **border-width:** `--bw`

#### Border Radius

- **border-radius:** `--br`

#### Outline

- **outline-width:** `--ow`
- **outline-offset:** `--oo`

#### Inset

- **inset:** `--i`

#### Grid, Flex, and Columns

- **grid-auto-columns:** `--gac`
- **grid-auto-rows:** `--gar`
- **gap:** `--g`
- **column-gap:** `--cg`
- **row-gap:** `--rg`
- **column-width:** `--cw`
- **column-rule-width:** `--crw`
- **flex-basis:** `--fb`

#### Background

- **background-position-x:** `--bpx`
- **background-position-y:** `--bpy`

#### Scroll

- **scroll-margin:** `--sm`
- **scroll-padding:** `--sp`

### Logical Fluid Properties

These properties adjust layout dimensions and spacing using logical directions (e.g., block, inline) relative to writing modes, enhancing adaptability across different content flows.

#### Block

- **block-size:** `--bs`
- **min-block-size:** `--minbs`
- **max-block-size:** `--maxbs`

#### Inline

- **inline-size:** `--is`
- **min-inline-size:** `--minis`
- **max-inline-size:** `--maxis`

#### Margin

- **margin-block:** `--mb`
- **margin-block-start:** `--mbs`
- **margin-block-end:** `--mbe`
- **margin-inline:** `--mi`
- **margin-inline-start:** `--mis`
- **margin-inline-end:** `--mie`

#### Padding

- **padding-block:** `--pb`
- **padding-block-start:** `--pbs`
- **padding-block-end:** `--pbe`
- **padding-inline:** `--pi`
- **padding-inline-start:** `--pis`
- **padding-inline-end:** `--pie`

#### Border Width

- **border-block-width:** `--bbw`
- **border-block-start-width:** `--bbsw`
- **border-block-end-width:** `--bbew`
- **border-inline-width:** `--biw`
- **border-inline-start-width:** `--bisw`
- **border-inline-end-width:** `--biew`

#### Border Radius

- **border-start-start-radius:** `--bssr`
- **border-start-end-radius:** `--bser`
- **border-end-end-radius:** `--beer`
- **border-end-start-radius:** `--besr`

#### Inset

- **inset-block:** `--ib`
- **inset-block-start:** `--ibs`
- **inset-block-end:** `--ibe`
- **inset-inline:** `--ii`
- **inset-inline-start:** `--iis`
- **inset-inline-end:** `--iie`

#### Scroll

- **scroll-margin-block:** `--smb`
- **scroll-margin-block-start:** `--smbs`
- **scroll-margin-block-end:** `--smbe`
- **scroll-margin-inline:** `--smi`
- **scroll-margin-inline-start:** `--smis`
- **scroll-margin-inline-end:** `--smie`
- **scroll-padding-block:** `--spb`
- **scroll-padding-block-start:** `--spbs`
- **scroll-padding-block-end:** `--spbe`
- **scroll-padding-inline:** `--spi`
- **scroll-padding-inline-start:** `--spis`
- **scroll-padding-inline-end:** `--spie`

### Physical Fluid Properties

These properties control physical dimensions (e.g., height, width) and positions (e.g., top, left) based on the viewport, allowing precise fluid scaling of elements.

#### Height

- **height:** `--h`
- **min-height:** `--minh`
- **max-height:** `--maxh`

#### Width

- **width:** `--w`
- **min-width:** `--minw`
- **max-width:** `--maxw`

#### Margin

- **margin-top:** `--mt`
- **margin-bottom:** `--mgb`
- **margin-left:** `--ml`
- **margin-right:** `--mr`

#### Padding

- **padding-top:** `--pt`
- **padding-bottom:** `--pb`
- **padding-left:** `--pl`
- **padding-right:** `--pr`

#### Border Width

- **border-top-width:** `--btw`
- **border-bottom-width:** `--bbwth`
- **border-left-width:** `--blw`
- **border-right-width:** `--bbrw`

#### Border Radius

- **border-top-left-radius:** `--btlr`
- **border-top-right-radius:** `--btrr`
- **border-bottom-right-radius:** `--bbrr`
- **border-bottom-left-radius:** `--bblr`

#### Inset

- **top:** `--top`
- **bottom:** `--bot`
- **left:** `--lft`
- **right:** `--rgt`

#### Scroll

- **scroll-margin-top:** `--smt`
- **scroll-margin-bottom:** `--smb`
- **scroll-margin-left:** `--sml`
- **scroll-margin-right:** `--smr`
- **scroll-padding-top:** `--spt`
- **scroll-padding-bottom:** `--spbt`
- **scroll-padding-left:** `--spl`
- **scroll-padding-right:** `--spr`

## License

FluidSizingCSS is licensed under the MIT License.
