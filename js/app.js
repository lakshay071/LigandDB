const ligands = [
    {
        name: "ATP",
        formula: "C10H16N5O13P3",
        image: "atp.png",
        description: "Primary energy currency of the cell."
    },
    {
        
        name: "Pyruvate",
        formula: "C3H3O3⁻",
        image: "pyruvate.png",
        description: "Key metabolic intermediate linking glycolysis and the Krebs cycle."


    },
    {
        name: "Glucose",
        formula: "C6H12O6",
        image: "Glucose.png",
        description: "Main energy source used in cellular respiration."
    },
    {
        name: "Dopamine",
        formula: "C8H11NO2",
        image: "dopamine.png",
        description: "Neurotransmitter involved in motivation and reward."
    },
    {
        name: "Serotonin",
        formula: "C10H12N2O",
        image: "serotonin.png",
        description: "Regulates mood, sleep, and appetite."
    },
    {
        name: "Acetylcholine",
        formula: "C7H16NO2",
        image: "acetylcholine.png",
        description: "Neurotransmitter essential for muscle activation."
    },
    {
        name: "Adrenaline",
        formula: "C9H13NO3",
        image: "adrenaline.png",
        description: "Hormone involved in fight-or-flight response."
    },
    {
        name: "Histamine",
        formula: "C5H9N3",
        image: "histamine.png",
        description: "Mediator of immune responses and neurotransmission."
    },
    {
        name: "GTP",
        formula: "C10H16N5O14P3",
        image: "gtp.png",
        description: "Energy source in protein synthesis and signaling."
    },
    {
        name: "FADH₂",
        formula: "C27H33N9O15P2",
        image: "fadh2.png",
        description: "Electron carrier in the Krebs cycle."
    },
    {
        name: "Urea",
        formula: "CH4N2O",
        image: "urea.png",
        description: "Nitrogenous waste product of metabolism."
    },
    {
        name: "Cholesterol",
        formula: "C27H46O",
        image: "cholesterol.png",
        description: "Structural component of cell membranes."
    },
    {
        name: "Cortisol",
        formula: "C21H30O5",
        image: "cortisol.png",
        description: "Steroid hormone regulating stress response."
    },
    {
        name: "Aspirin",
        formula: "C9H8O4",
        image: "aspirin.png",
        description: "Analgesic and anti-inflammatory drug."
    },
    {
        name: "Ibuprofen",
        formula: "C13H18O2",
        image: "ibuprofen.png",
        description: "NSAID used for pain and inflammation relief."
    }
];

const grid = document.getElementById("ligandGrid");
const search = document.getElementById("search");

function render(data) {
    grid.innerHTML = "";
    data.forEach(l => {
        grid.innerHTML += `
        <div class="card">
            <img src="images/${l.image}">
            <h2>${l.name}</h2>
            <p><b>Formula:</b> ${l.formula}</p>
            <p>${l.description}</p>
        </div>
        `;
    });
}

search.addEventListener("keyup", () => {
    const value = search.value.toLowerCase();
    const filtered = ligands.filter(l =>
        l.name.toLowerCase().includes(value)
    );
    render(filtered);
});

render(ligands);
