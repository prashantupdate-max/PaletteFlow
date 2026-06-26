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
"#264653",
"#287271",
"#2A9D8F",
"#8AB17D",
"#E9C46A"
],

[
"#FF6B6B",
"#FFD93D",
"#6BCB77",
"#4D96FF",
"#843BFF"
],

[
"#1A1A2E",
"#16213E",
"#0F3460",
"#E94560",
"#FFFFFF"
],

[
"#F8F9FA",
"#DEE2E6",
"#ADB5BD",
"#495057",
"#212529"
],

[
"#F94144",
"#F3722C",
"#F8961E",
"#F9C74F",
"#90BE6D"
],

[
"#007F5F",
"#2B9348",
"#55A630",
"#80B918",
"#DDDF00"
],

[
"#03071E",
"#370617",
"#6A040F",
"#9D0208",
"#D00000"
],

[
"#00A6FB",
"#0582CA",
"#006494",
"#003554",
"#051923"
],

[
"#F4F1DE",
"#E07A5F",
"#3D405B",
"#81B29A",
"#F2CC8F"
],

[
"#22223B",
"#4A4E69",
"#9A8C98",
"#C9ADA7",
"#F2E9E4"
],

[
"#0081A7",
"#00AFB9",
"#FDFCDC",
"#FED9B7",
"#F07167"
],

[
"#EF476F",
"#FFD166",
"#06D6A0",
"#118AB2",
"#073B4C"
],

[
"#D8F3DC",
"#B7E4C7",
"#95D5B2",
"#74C69D",
"#52B788"
],

[
"#FF595E",
"#FFCA3A",
"#8AC926",
"#1982C4",
"#6A4C93"
],

[
"#F72585",
"#7209B7",
"#3A0CA3",
"#4361EE",
"#4CC9F0"
],

[
"#E63946",
"#F1FAEE",
"#A8DADC",
"#457B9D",
"#1D3557"
],

[
"#2D3142",
"#4F5D75",
"#BFC0C0",
"#FFFFFF",
"#EF8354"
],

[
"#F7B267",
"#F79D65",
"#F4845F",
"#F27059",
"#F25C54"
],

[
"#05668D",
"#028090",
"#00A896",
"#02C39A",
"#F0F3BD"
],

[
"#5F0F40",
"#9A031E",
"#FB8B24",
"#E36414",
"#0F4C5C"
],

[
"#D9ED92",
"#B5E48C",
"#99D98C",
"#76C893",
"#52B69A"
],

[
"#D8E2DC",
"#FFE5D9",
"#FFCAD4",
"#F4ACB7",
"#9D8189"
],

[
"#0B090A",
"#161A1D",
"#660708",
"#A4161A",
"#E5383B"
],

[
"#D4A373",
"#FAEDCD",
"#FEFAE0",
"#E9EDC9",
"#CCD5AE"
],

[
"#3C1642",
"#086375",
"#1DD3B0",
"#AFFC41",
"#B2FF9E"
],

[
"#0A1128",
"#001F54",
"#034078",
"#1282A2",
"#FEFCFB"
],

[
"#1B4332",
"#2D6A4F",
"#40916C",
"#74C69D",
"#D8F3DC"
],

[
"#8D0801",
"#BF0603",
"#E85D04",
"#FAA307",
"#FFBA08"
],

[
"#CDB4DB",
"#FFC8DD",
"#FFAFCC",
"#BDE0FE",
"#A2D2FF"
],

[
"#03045E",
"#023E8A",
"#0077B6",
"#0096C7",
"#48CAE4"
],

[
"#606C38",
"#283618",
"#FEFAE0",
"#DDA15E",
"#BC6C25"
],

[
"#540D6E",
"#EE4266",
"#FFD23F",
"#3BCEAC",
"#0EAD69"
],

[
"#2EC4B6",
"#CBF3F0",
"#FFBF69",
"#FF9F1C",
"#E71D36"
],

[
"#6D597A",
"#B56576",
"#E56B6F",
"#EAAC8B",
"#FFE5D9"
],

[
"#003049",
"#D62828",
"#F77F00",
"#FCBF49",
"#EAE2B7"
],

[
"#283D3B",
"#197278",
"#EDDDD4",
"#C44536",
"#772E25"
],

[
"#114B5F",
"#1A936F",
"#88D498",
"#C6DABF",
"#F3E9D2"
],

[
"#2F4858",
"#33658A",
"#86BBD8",
"#F6AE2D",
"#F26419"
],

[
"#FFB5A7",
"#FCD5CE",
"#F8EDEB",
"#F9DCC4",
"#FEC89A"
],

[
"#03045E",
"#0077B6",
"#00B4D8",
"#90E0EF",
"#CAF0F8"
],

[
"#006D77",
"#83C5BE",
"#EDF6F9",
"#FFDDD2",
"#E29578"
],

[
"#8E9AAF",
"#CBC0D3",
"#EFD3D7",
"#FEEAFA",
"#DEE2FF"
],

[
"#001219",
"#005F73",
"#0A9396",
"#94D2BD",
"#E9D8A6"
],

[
"#6A994E",
"#A7C957",
"#F2E8CF",
"#BC4749",
"#386641"
],

[
"#F94144",
"#F3722C",
"#F8961E",
"#F9844A",
"#F9C74F"
],

[
"#355070",
"#6D597A",
"#B56576",
"#E56B6F",
"#EAAC8B"
],

[
"#7400B8",
"#6930C3",
"#5E60CE",
"#5390D9",
"#4EA8DE"
],

[
"#D8F3DC",
"#B7E4C7",
"#95D5B2",
"#74C69D",
"#52B788"
],

[
"#2B2D42",
"#8D99AE",
"#EDF2F4",
"#EF233C",
"#D90429"
],

[
"#05668D",
"#028090",
"#00A896",
"#02C39A",
"#F0F3BD"
],

[
"#003049",
"#D62828",
"#F77F00",
"#FCBF49",
"#EAE2B7"
],

[
"#F72585",
"#B5179E",
"#7209B7",
"#560BAD",
"#480CA8"
],

[
"#264653",
"#2A9D8F",
"#E9C46A",
"#F4A261",
"#E76F51"
],

[
"#F4F1DE",
"#E07A5F",
"#3D405B",
"#81B29A",
"#F2CC8F"
],

[
"#22223B",
"#4A4E69",
"#9A8C98",
"#C9ADA7",
"#F2E9E4"
],

[
"#2EC4B6",
"#CBF3F0",
"#FFBF69",
"#FF9F1C",
"#E71D36"
],

[
"#114B5F",
"#1A936F",
"#88D498",
"#C6DABF",
"#F3E9D2"
],

[
"#3A0CA3",
"#4361EE",
"#4CC9F0",
"#B5179E",
"#F72585"
],

[
"#0B132B",
"#1C2541",
"#3A506B",
"#5BC0BE",
"#FFFFFF"
],

[
"#D4A373",
"#FAEDCD",
"#FEFAE0",
"#E9EDC9",
"#CCD5AE"
],

[
"#E63946",
"#F1FAEE",
"#A8DADC",
"#457B9D",
"#1D3557"
],

[
"#2D3142",
"#4F5D75",
"#BFC0C0",
"#FFFFFF",
"#EF8354"
],

[
"#5F0F40",
"#9A031E",
"#FB8B24",
"#E36414",
"#0F4C5C"
],

[
"#CDB4DB",
"#FFC8DD",
"#FFAFCC",
"#BDE0FE",
"#A2D2FF"
],

[
"#283618",
"#606C38",
"#DDA15E",
"#BC6C25",
"#FEFAE0"
],

[
"#3C1642",
"#086375",
"#1DD3B0",
"#AFFC41",
"#B2FF9E"
],

[
"#2F4858",
"#33658A",
"#86BBD8",
"#F6AE2D",
"#F26419"
],

[
"#540D6E",
"#EE4266",
"#FFD23F",
"#3BCEAC",
"#0EAD69"
],

[
"#283D3B",
"#197278",
"#EDDDD4",
"#C44536",
"#772E25"
],

[
"#14213D",
"#FCA311",
"#E5E5E5",
"#FFFFFF",
"#000000"
],

[
"#8ECAE6",
"#219EBC",
"#023047",
"#FFB703",
"#FB8500"
],

[
"#780000",
"#C1121F",
"#FDF0D5",
"#669BBC",
"#003049"
],

[
"#1A1A2E",
"#16213E",
"#0F3460",
"#533483",
"#E94560"
],

[
"#390099",
"#9E0059",
"#FF0054",
"#FF5400",
"#FFBD00"
],

[
"#606C38",
"#283618",
"#FEFAE0",
"#DDA15E",
"#BC6C25"
],

[
"#114B5F",
"#028090",
"#E4FDE1",
"#456990",
"#F45B69"
],

[
"#FF595E",
"#FFCA3A",
"#8AC926",
"#1982C4",
"#6A4C93"
],

[
"#6D597A",
"#B56576",
"#E56B6F",
"#EAAC8B",
"#FFE5D9"
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