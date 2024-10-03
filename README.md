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
