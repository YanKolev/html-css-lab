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
