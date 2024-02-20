let aCell = {
  Nucleus: "The nucleus, otherwise known as the “brain’ of the cell, contains the cell’s DNA. It’s known as the brain because it controls cellular activities such as growth, metabolism, reproduction, etc., and it also regulates gene expression.",

  Mitochondria: "Mitochondria, well known as the “powerhouse of the cell” for generating most of the ATP (adenosine triphosphate) for the cell. ATP is used as a source of chemical energy and is involved in cellular respiration. Cellular respiration converts nutrients into ATP through oxidative phosphorylation, thus it is called the powerhouse.",

  "Endoplasmic Reticulum": "The endoplasmic reticulum (ER), a network of membranes found throughout the cell. It’s main purpose is to play a crucial part in protein and lipid synthesis, and transport materials within the cell. There are rough ER and smooth ER. Rough ER has ribosomes attached to its surface and is involved in protein synthesis, while smooth ER has no ribosomes and is involved in lipid synthesis and detoxification.",

  "Golgi Apparatus": "The golgi apparatus’ function is to be involved in modification, sorting, and packaging of proteins and lipids to deliver to the other parts of the cell. It consists of cisternae, which are flattened, membrane-bound sacs, which is prominent in cells involved with secretion (i.e. glandular cells).",

  Cytoplasm: "The cytoplasm, a gel-like substance which fills the cell’s interiors. There lies many different organelles, cytoskeleton, dissolved molecules which are needed for cellular processes, etc. It serves as a medium for metabolic reactions, and also provides structure and support for the cell.",

  "Cell Membrane": "The cell or plasma membrane is a selectively permeable barrier that surrounds the cell that separates the cell’s insides from the outside environment. It’s like a bouncer that allows or rejects the passage or entry of substances in and out of the cell, giving it a crucial part in maintaining homeostasis.",

  Lysosome: "The lysosomes, or the “garbage disposal of the cell”, are membrane-bound organelles that contain enzymes that break down different macromolecules, like proteins, lipids, carbohydrates, nucleic acids, etc.They are involved in autophagy, phagocytosis, programmed cell death (aka apoptosis), etc.",

  Centrosome: "The centrioles are cylindrical structures made of microtubules found near the nucleus of the animal cell. They play a crucial part in the cell’s division by organizing spindle fibers that separate chromosomes during mitosis and meiosis, and they are also involved in the formation of cilia and flagella in some types of cells.",

  Ribosome: "The ribosomes, the cellular structures for protein synthesis. They’re composed of RNA and protein molecules, and can be found in the cytoplasm or attached to the ER. Their function is to translate genetic information encoded in mRNA to specific amino acid sequences, these then form protein.",        

}

let pCell = {
  Nucleus: "The nucleus, otherwise known as the “brain’ of the cell, contains the cell’s DNA. It’s known as the brain because it controls cellular activities such as growth, metabolism, reproduction, etc., and it also regulates gene expression.",

  Mitochondria: "Mitochondria, well known as the “powerhouse of the cell” for generating most of the ATP (adenosine triphosphate) for the cell. ATP is used as a source of chemical energy and is involved in cellular respiration. Cellular respiration converts nutrients into ATP through oxidative phosphorylation, thus it is called the powerhouse.",

  "Endoplasmic Reticulum": "The endoplasmic reticulum (ER), a network of membranes found throughout the cell. It’s main purpose is to play a crucial part in protein and lipid synthesis, and transport materials within the cell. There are rough ER and smooth ER. Rough ER has ribosomes attached to its surface and is involved in protein synthesis, while smooth ER has no ribosomes and is involved in lipid synthesis and detoxification.",

  "Golgi Apparatus": "The golgi apparatus’ function is to be involved in modification, sorting, and packaging of proteins and lipids to deliver to the other parts of the cell. It consists of cisternae, which are flattened, membrane-bound sacs, which is prominent in cells involved with secretion (i.e. glandular cells).",

  Cytoplasm: "The cytoplasm, a gel-like substance which fills the cell’s interiors. There lies many different organelles, cytoskeleton, dissolved molecules which are needed for cellular processes, etc. It serves as a medium for metabolic reactions, and also provides structure and support for the cell.",

  "Cell Membrane": "The cell or plasma membrane is a selectively permeable barrier that surrounds the cell that separates the cell’s insides from the outside environment. It’s like a bouncer that allows or rejects the passage or entry of substances in and out of the cell, giving it a crucial part in maintaining homeostasis.",

  "Cell Wall": "The cell wall acts as the first barrier of defense for plants. This also provides the plant's rigidity, strength and support. It is made of a semi-permeable making some molecules able to pass through it.",

  Peroxisome: "The peroxisome is said to be an oxidative organelle, this is due to it being a hydrogen peroxide generator and finder, it uses this for lipid metabolism, to break down long chains of fatty acids into smaller piences using beta-oxidation, and it also regulates reactive oxygen species, neutralizing them by reacting them with hydrogen peroxide and forming water.",

  Ribosome: "The ribosomes, the cellular structures for protein synthesis. They’re composed of RNA and protein molecules, and can be found in the cytoplasm or attached to the ER. Their function is to translate genetic information encoded in mRNA to specific amino acid sequences, these then form protein.",        

  Vacuole: "Vacuoles are membrane-bound organelles found in all plant cells. They have many different functions, depending on the type of cell. Some of these functions include storing nutrients, waste products, pigments, and regulating cell turgor pressure and maintenance of cellular homeostasis. In plant cells, the central vacuole is particularly large and plays a crucial role in maintaining cell structure and storing water.",

  Chloroplast: "The chloroplast, an organelle only found in plants and certain algae, this is the site where photosynthesis happens. It houses the lumen, stroma, thykaloid, etc. Because of this, they are responsible for the biosynthesis of active compounds such as amino acids, phytohormones, nucleotides, vitamins, lipids, and secondary metabolites."
}

document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');

    areas.forEach(area => {
        area.addEventListener('mouseover', function() {
            const part = this.getAttribute('data-part');
            if (window.location.pathname == "/animal_cell.html"){
            document.getElementById('partDescription').textContent = `You're hovering over the ${part}. ` + aCell[part];
            area.classList.add('area-highlight');
            }
            else {
            document.getElementById('partDescription').textContent = `You're hovering over the ${part}. ` + pCell[part];
            area.classList.add('area-highlight');
            }
          
        });

        area.addEventListener('mouseout', function() {
            document.getElementById('partDescription').textContent = 'Hover over a part of the cell to see its description.';
            this.classList.remove('area-highlight');
        });
    });
});

