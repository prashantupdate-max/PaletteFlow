/* ==========================
   ELEMENTS
========================== */

const generateBtn =

document.getElementById(
    "generateBtn"
);

const toast =

document.getElementById(
    "toast"
);

const blocks = [

document.getElementById(
    "block1"
),

document.getElementById(
    "block2"
),

document.getElementById(
    "block3"
),

document.getElementById(
    "block4"
),

document.getElementById(
    "block5"
)

];

const hexes = [

document.getElementById(
    "hex1"
),

document.getElementById(
    "hex2"
),

document.getElementById(
    "hex3"
),

document.getElementById(
    "hex4"
),

document.getElementById(
    "hex5"
)

];

/* ==========================
   PALETTE DATABASE
========================== */

const palettes = [

[
"#E59F71",
"#BA5A31",
"#0C0C0C",
"#69DC9E",
"#FFFFFF"
],

[
"#2B2D42",
"#8D99AE",
"#EDF2F4",
"#EF233C",
"#D90429"
],

[
"#264653",
"#2A9D8F",
"#E9C46A",
"#F4A261",
"#E76F51"
],

[
"#0B132B",
"#1C2541",
"#3A506B",
"#5BC0BE",
"#FFFFFF"
],

[
"#03045E",
"#0077B6",
"#00B4D8",
"#90E0EF",
"#CAF0F8"
],

[
"#22223B",
"#4A4E69",
"#9A8C98",
"#C9ADA7",
"#F2E9E4"
],

[
"#001219",
"#005F73",
"#0A9396",
"#94D2BD",
"#E9D8A6"
],

[
"#780000",
"#C1121F",
"#FDF0D5",
"#669BBC",
"#003049"
],

[
"#3D5A80",
"#98C1D9",
"#E0FBFC",
"#EE6C4D",
"#293241"
],

[
"#2D6A4F",
"#40916C",
"#74C69D",
"#B7E4C7",
"#D8F3DC"
]
];

/* ==========================
   MORE PALETTES
========================== */

palettes.push(

[
"#7400B8",
"#6930C3",
"#5E60CE",
"#5390D9",
"#4EA8DE"
],

[
"#FFBE0B",
"#FB5607",
"#FF006E",
"#8338EC",
"#3A86FF"
],

[
"#2E294E",
"#541388",
"#F1E9DA",
"#FFD400",
"#D90368"
],

[
"#0D1B2A",
"#1B263B",
"#415A77",
"#778DA9",
"#E0E1DD"
],

[
"#F72585",
"#B5179E",
"#7209B7",
"#560BAD",
"#480CA8"
],

[
"#06D6A0",
"#1B9AAA",
"#EF476F",
"#FFC43D",
"#F8FFE5"
],

[
"#606C38",
"#283618",
"#FEFAE0",
"#DDA15E",
"#BC6C25"
],

[
"#8ECAE6",
"#219EBC",
"#023047",
"#FFB703",
"#FB8500"
],

[
"#FFADAD",
"#FFD6A5",
"#FDFFB6",
"#CAFFBF",
"#9BF6FF"
],

[
"#14213D",
"#FCA311",
"#E5E5E5",
"#FFFFFF",
"#000000"
],

[
"#6A040F",
"#9D0208",
"#D00000",
"#DC2F02",
"#F48C06"
],

[
"#003566",
"#001D3D",
"#FFC300",
"#FFD60A",
"#FFFFFF"
],

[
"#390099",
"#9E0059",
"#FF0054",
"#FF5400",
"#FFBD00"
],

[
"#114B5F",
"#028090",
"#E4FDE1",
"#456990",
"#F45B69"
],

[
"#2B9348",
"#55A630",
"#80B918",
"#AACC00",
"#D4D700"
]

);

/* ==========================
   PREVIOUS INDEX
========================== */

let previousIndex = -1;

/* ==========================
   RANDOM PALETTE
========================== */

function getRandomPalette(){

    let index;

    do{

        index = Math.floor(

            Math.random()

            *

            palettes.length

        );

    }

    while(

        index === previousIndex

    );

    previousIndex = index;

    return palettes[index];
}

/* ==========================
   APPLY PALETTE
========================== */

function applyPalette(
    palette
){

    for(

        let i = 0;

        i < 5;

        i++

    ){

        blocks[i]
        .style.background =

        palette[i];

        hexes[i]
        .textContent =

        palette[i];
    }

}

/* ==========================
   GENERATE NEW PALETTE
========================== */

function generatePalette(){

    const palette =

    getRandomPalette();

    applyPalette(
        palette
    );

}

/* ==========================
   BUTTON EVENT
========================== */

generateBtn
.addEventListener(

    "click",

    generatePalette

);

/* ==========================
   INITIAL LOAD
========================== */

window
.addEventListener(

    "load",

    () => {

        generatePalette();

    }

);

/* ==========================
   TOAST
========================== */

function showToast(
    message
){

    toast.textContent =
    message;

    toast.classList.add(
        "show"
    );

    setTimeout(

        () => {

            toast.classList.remove(
                "show"
            );

        },

        2000

    );
}

/* ==========================
   COPY HEX
========================== */

for(

    let i = 0;

    i < blocks.length;

    i++

){

    blocks[i]
    .addEventListener(

        "click",

        () => {

            const hex =

            hexes[i]
            .textContent;

            navigator.clipboard
            .writeText(
                hex
            );

            showToast(

                `${hex} Copied`
            );

        }

    );

}

/* ==========================
   SPACEBAR SHORTCUT
========================== */

document
.addEventListener(

    "keydown",

    (event) => {

        if(

            event.code
            ===
            "Space"

        ){

            event.preventDefault();

            generatePalette();

            showToast(

                "New Palette Generated 🎨"
            );

        }

    }

);

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(

"🎨 PaletteFlow Ready"

);

console.log(

"✨ Click Colors To Copy"

);

console.log(

"🚀 Press Space To Generate"

);