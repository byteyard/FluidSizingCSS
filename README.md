# <img src="https://github.com/user-attachments/assets/99cd64e9-e0c5-46c1-a650-c74286371fe2" alt="ByteYard Icon Blue 3D Shadow" width="24"/> FluidSizingCSS

## Rethink Responsive Design with Pure CSS Fluid Sizing

FluidSizingCSS is a pioneering solution for responsive design that transforms how interfaces adapt between mobile and desktop. This package offers the world's first pure CSS implementation of fluid sizing locks, eliminating the need for SCSS or external tools. Designed for developers and loved by designers, it enables perfect fluid scaling using only native CSS, making your site more adaptable, lighter, and faster.

## Installation

Install FluidSizingCSS via npm:

```bash
npm install fluidsizingcss
```

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
