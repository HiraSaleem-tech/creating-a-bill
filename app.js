let calculate = () => {
    let InjParacetamol = document.querySelector('input[name="Inj.Paracetamol"]').value;
    let InjDormicom =document.querySelector('input[name="Inj.Dormicom"]').value;
    let InjDiclofenac =document.querySelector('input[name="Inj.Diclofenac"]').value;
    let BedCharges =document.querySelector('input[name="Bed Charges"]').value;

    let ParacetamolPrice = 150;
    let DormicomPrice = 300;
    let DiclofenacPrice = 450;
    let BedPrice = 5000;

    let total =
    InjParacetamol * ParacetamolPrice + InjDormicom * DormicomPrice + InjDiclofenac * DiclofenacPrice + BedCharges * BedPrice;

    document.querySelector("#total").innerHTML = total; 
};
    document.querySelector("button").addEventListener ("click", calculate);
    
    
