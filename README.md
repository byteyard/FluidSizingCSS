# FluidSizingCSS

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
@layer base {
    :root {
        --s-min: 400; /* Screen Size Min for General Fluid Sizing */
        --s-max: 1400; /* Screen Size Max for General Fluid Sizing */
        --rem: 16; /* Pixel per REM for General Fluid Sizing */
    }
}
```

**Note:** All values must be unitless to ensure compatibility with CSS mathematical operations.

## Available Fluid Properties

FluidSizingCSS provides a comprehensive range of fluid properties, designed to enhance responsiveness and adaptability across devices. Below are the key fluid properties available:

### Text

- **font-size:** `--fs`, `--fs-min`, `--fs-max`
- **line-height:** `--lh`, `--lh-min`, `--lh-max`
- **letter-spacing:** `--ls`, `--ls-min`, `--ls-max`
- **word-spacing:** `--ws`, `--ws-min`, `--ws-max`
- **text-indent:** `--ti`, `--ti-min`, `--ti-max`
- **text-decoration-thickness:** `--tdt`, `--tdt-min`, `--tdt-max`
- **text-underline-offset:** `--tuo`, `--tuo-min`, `--tuo-max`

### Block

- **block-size (height):** `--bs`, `--bs-min`, `--bs-max`
- **min-block-size (min-height):** `--minbs`, `--minbs-min`, `--minbs-max`
- **max-block-size (max-height):** `--maxbs`, `--maxbs-min`, `--maxbs-max`

### Inline

- **inline-size (width):** `--is`, `--is-min`, `--is-max`
- **min-inline-size (min-width):** `--minis`, `--minis-min`, `--minis-max`
- **max-inline-size (max-width):** `--maxis`, `--maxis-min`, `--maxis-max`

### Margin

- **margin:** `--m`, `--m-min`, `--m-max`
- **margin-block (margin-top + margin-bottom):** `--mb`, `--mb-min`, `--mb-max`
- **margin-block-start (margin-top):** `--mbs`, `--mbs-min`, `--mbs-max`
- **margin-block-end (margin-bottom):** `--mbe`, `--mbe-min`, `--mbe-max`
- **margin-inline (margin-left + margin-right):** `--mi`, `--mi-min`, `--mi-max`
- **margin-inline-start (margin-left):** `--mis`, `--mis-min`, `--mis-max`
- **margin-inline-end (margin-right):** `--mie`, `--mie-min`, `--mie-max`

### Padding

- **padding:** `--p`, `--p-min`, `--p-max`
- **padding-block (padding-top + padding-bottom):** `--pb`, `--pb-min`, `--pb-max`
- **padding-block-start (padding-top):** `--pbs`, `--pbs-min`, `--pbs-max`
- **padding-block-end (padding-bottom):** `--pbe`, `--pbe-min`, `--pbe-max`
- **padding-inline (padding-left + padding-right):** `--pi`, `--pi-min`, `--pi-max`
- **padding-inline-start (padding-left):** `--pis`, `--pis-min`, `--pis-max`
- **padding-inline-end (padding-right):** `--pie`, `--pie-min`, `--pie-max`

### Border Width

- **border-width:** `--bw`, `--bw-min`, `--bw-max`
- **border-block-width (border-top-width + border-bottom-width):** `--bbw`, `--bbw-min`, `--bbw-max`
- **border-block-start-width (border-top-width):** `--bbsw`, `--bbsw-min`, `--bbsw-max`
- **border-block-end-width (border-bottom-width):** `--bbew`, `--bbew-min`, `--bbew-max`
- **border-inline-width (border-left-width + border-right-width):** `--biw`, `--biw-min`, `--biw-max`
- **border-inline-start-width (border-left-width):** `--bisw`, `--bisw-min`, `--bisw-max`
- **border-inline-end-width (border-right-width):** `--biew`, `--biew-min`, `--biew-max`

### Border Radius

- **border-radius:** `--br`, `--br-min`, `--br-max`
- **border-start-start-radius (border-top-left-radius):** `--bssr`, `--bssr-min`, `--bssr-max`
- **border-start-end-radius (border-top-right-radius):** `--bser`, `--bser-min`, `--bser-max`
- **border-end-end-radius (border-bottom-right-radius):** `--beer`, `--beer-min`, `--beer-max`
- **border-end-start-radius (border-bottom-left-radius):** `--besr`, `--besr-min`, `--besr-max`

### Outline

- **outline-width:** `--ow`, `--ow-min`, `--ow-max`
- **outline-offset:** `--oo`, `--oo-min`, `--oo-max`

### Inset

- **inset:** `--i`, `--i-min`, `--i-max`
- **inset-block (top + bottom):** `--ib`, `--ib-min`, `--ib-max`
- **inset-block-start (top):** `--ibs`, `--ibs-min`, `--ibs-max`
- **inset-block-end (bottom):** `--ibe`, `--ibe-min`, `--ibe-max`
- **inset-inline (left + right):** `--ii`, `--ii-min`, `--ii-max`
- **inset-inline-start (left):** `--iis`, `--iis-min`, `--iis-max`
- **inset-inline-end (right):** `--iie`, `--iie-min`, `--iie-max`

### Grid, Flex, and Columns

- **grid-auto-columns:** `--gac`, `--gac-min`, `--gac-max`
- **grid-auto-rows:** `--gar`, `--gar-min`, `--gar-max`
- **gap:** `--g`, `--g-min`, `--g-max`
- **column-gap:** `--cg`, `--cg-min`, `--cg-max`
- **row-gap:** `--rg`, `--rg-min`, `--rg-max`
- **column-width:** `--cw`, `--cw-min`, `--cw-max`
- **column-rule-width:** `--crw`, `--crw-min`, `--crw-max`
- **flex-basis:** `--fb`, `--fb-min`, `--fb-max`

### Background

- **background-position-x:** `--bpx`, `--bpx-min`, `--bpx-max`
- **background-position-y:** `--bpy`, `--bpy-min`, `--bpy-max`

### Scroll

- **scroll-margin:** `--sm`, `--sm-min`, `--sm-max`
- **scroll-margin-block (scroll-margin-top + scroll-margin-bottom):** `--smb`, `--smb-min`, `--smb-max`
- **scroll-margin-block-start (scroll-margin-top):** `--smbs`, `--smbs-min`, `--smbs-max`
- **scroll-margin-block-end (scroll-margin-bottom):** `--smbe`, `--smbe-min`, `--smbe-max`
- **scroll-margin-inline (scroll-margin-left + scroll-margin-right):** `--smi`, `--smi-min`, `--smi-max`
- **scroll-margin-inline-start (scroll-margin-left):** `--smis`, `--smis-min`, `--smis-max`
- **scroll-margin-inline-end (scroll-margin-right):** `--smie`, `--smie-min`, `--smie-max`
- **scroll-padding:** `--sp`, `--sp-min`, `--sp-max`
- **scroll-padding-block (scroll-padding-top + scroll-padding-bottom):** `--spb`, `--spb-min`, `--spb-max`
- **scroll-padding-block-start (scroll-padding-top):** `--spbs`, `--spbs-min`, `--spbs-max`
- **scroll-padding-block-end (scroll-padding-bottom):** `--spbe`, `--spbe-min`, `--spbe-max`
- **scroll-padding-inline (scroll-padding-left + scroll-padding-right):** `--spi`, `--spi-min`, `--spi-max`
- **scroll-padding-inline-start (scroll-padding-left):** `--spis`, `--spis-min`, `--spis-max`
- **scroll-padding-inline-end (scroll-padding-right):** `--spie`, `--spie-min`, `--spie-max`

## License

FluidSizingCSS is licensed under the MIT License.
