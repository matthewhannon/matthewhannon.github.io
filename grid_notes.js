grid-gap: 20px;


//on items
grid-column: span 2;
grid-row: span 2;

grid-column-start: span 2; //span 2 from where it currently is
grid-column-end: auto;

grid-column-start: 2;
grid-column-end: 5;
    //this would start at 2 and end on 5
        grid-column: 2/5; //this is the shorthand! (or can even add more... grid-column: span 2/5, or grid-column 2/ span 5;)
        grid-column: 1 / -1; //this would start from beginning and go to end

grid-row: 3/8;



// 00000000000000000000000000000000


grid-gap: 20px;

/* anything that doesn't fit will be pushed out along the column */
grid-auto-flow: column;

/* any implicit that haven't been defined will have 200px columns */
grid-auto-columns: 200px;

//  auto will be as big as it needs to be for that column
grid-template-columns: auto 1fr;

//most used pieces of grid?
auto-fit, auto-fill, and minmax()


// grid-template-columsn : repeat(auto-fill, minimax(150px, 1fr))

//probably more common use is auto-fit
grid-template-column: repeat(auto-fit, minmax(150px, 1fr))


//fit-content (like using auto, but you get a max width)
grid-template-columns: fit-content(100px) 150px 150px 150px;



//naming areas
grid-template-rows: 150px 150px 100px;
grid-template-areas: "sidebar-1 content sidebar-2";
    //can keep adding naming rows by just adding another set of quotes with sizes""
    "sidebar-1 content sidebar-2" (no commas needed)
    "sidebar-1 content sidebar-2"
    "sidebar-1 content sidebar-2"
    "footer footer ." (. would leave a blank spot)

//using the named areas
.footer {
    grid-area: footer;
}

//can also use with grid-column;
.item3 {
    grid-column: sidebar-1-start/ sidebar-2-end;
    grid-row-end: sidebar-1-end;
}

//could use naming areas for media quieres too