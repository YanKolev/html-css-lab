# html-css-lab

Differences between inline, block-level and inline-block boxes

Block-level boxes:
Elements formatted visually as blocks
100% of parent's width
Vertically, one after another
Box-model apply as showed

Inline boxes:
Occupies only content's space
Causes no line- breaks
Box model is different: heights and widths do not apply
Padding and margins only horizontal(left and right)

Inline-block:
Looks like inline from the outside, behaves like block-level on the inside.
Occupies only content's space
Causes no line-breaks

Positionioning:

Normal flow:
Default position,
Element is in flow
Elements are simply laid out according to their order in html code
positioning: relative

Absolute positioning:
Element is removed from the normal flow- out of flow
No impact on surrounding elements, might overlap them
We use top, bottom, left or right to offset the element from its relatively positioned container
position:absolute

Layouts:

Intro into floats and float layout.
Floats
Element s removed from normal flow: "out of flow"
Text and inlne elements will wrap around the floated element
The container element will NOT adjust its height to the element (leading to Collapsing heights)

Clearing floats- the easiest way it will be to add an additional element to the element and clear it from there.

Flexbox:
Flexbox is set of related CSS properties for building 1-dimensional layouts.

The main idea behind flexbox is that empty space inside a container element can be automatically divided by child elements.

Flexbox makes it easy to automatically align items to one another inside a parent container, both horizontally and vertically

Flexbox solves common problems such as vertical centering and creating equal-height columns.

Flexbos is perfect for replacing floats-> cleaner html and css code.

Terminology:
-how to create a flex container- display flex (it creates a flex container)
-whichever elements are inside are labeled as the flex items.
-directions are 2 -> main axis and cross axis

-Flex container main attributes:
1-gap, to create space between items, without using margin
2-justify-content:flex-start->to align items along main axis(horizontally by default)
3-align-items -> To align items along cross axis(vertically by default)
4- flex-direction -> To define which is the main axis
5- flex-wrap -> To allow items to wrap into a new line if they are too large
6-align-content -> Only applies when there are multiple lines

-Flex items main attributes:
1- align-self -> To overwrite align-items for individual flex items
2- flex-grow -> To allow an element to grow(0 means no, 1+ means yes)
3- flex-shrink -> To allow an element to shink (0 means no, 1+ means yes)
4- flex-basis ->To define item's width, instead of the width property
5- flex ->Recommended shorthand for flex-grow-shring-basis
6- order ->Controls order of items: -1 makes item first, 1 makes item last

CSS GRID

Css Grid is a set of CSS properties for building 2-dimensional layouts.

Main idea behind IT is that we can divide a container element into rows and columns that can be filled with its child elements.

In-two-dimensional contexts, CSS GRID allow us to write less lested HTML and easier-to-read CSS

CSS
CSS Grid is not meant to replace flexbox! Instead, they work perfectly together. Need 1D layout? Use flexbox. Need 2D layout? Use CSS GRID.
ITs not a replacement for flexbox, but they work togetther rather nicely.

Differences between the properties- Grid Container vs Grid Items

Grid Container:

1-grid-template-rows: <track size>
grid-template-columns: <track size>
We use them to establish the grid row and column tracks. One length unit for each track. Any unit can be used, new fr fills unused space.

2-row-gap:0 <length>
column-gap:0<length>
gap: 0<length>
Use it to create empty space between tracks

3-justify-items:stretch/start/center/end
align-items:stretch/start/center/end
To align items inside rows, columns (horizontally/vertically)

4-justify-content:start/start/center/end
align-content:start/start/center/end
To align entire grid inside grid container. Only applies if container is larger than the grid.

Grid Items:

1-grid-column: <start line> / <end line> | span <number>
grid-row: <start line> / <end line> | span <number>
To place a grid item into a speciffic cell, based on line numbers.
Span keyword can be used to span an item across more cells.

2-justify-self:stretch/start/center/end
align-self: stretch/start/center/end
To overwrite justify-items/align-items for single items
