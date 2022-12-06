/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const conversionMatrix = [
                {
                    unit:"Length",
                    fromUnit:"Meter",
                    toUnit:"Feet",
                    multiplier:3.281,
                    convert:function (num){
                        return Number(num * this.multiplier).toFixed(3)
                    },
                    convertBack:function (num){
                        return Number(num / this.multiplier).toFixed(3)
                    }
                    
                },
                {
                    unit:"Volume",
                    fromUnit:"Liter",
                    toUnit:"Gallon",
                    multiplier:0.264,
                    convert:function (num){
                        return Number(num * this.multiplier).toFixed(3)
                    },
                    convertBack:function (num){
                        return Number(num / this.multiplier).toFixed(3)
                    }
                    
                },
                {
                    unit:"Mass",
                    fromUnit:"Kilogram",
                    toUnit:"Pound",
                    multiplier:2.204,
                    convert:function (num){
                        return Number(num * this.multiplier).toFixed(3)
                    },
                    convertBack:function (num){
                        return Number(num / this.multiplier).toFixed(3)
                    }
                    
                }
            ]
const inputNumberField = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const resultCard = document.getElementById("results-card")

convertAndRender(inputNumberField)
convertBtn.addEventListener("click",()=>{
    convertAndRender(inputNumberField)
})

function convertAndRender(inputField){
    let number = Number(inputField.value).toFixed(2);
    let results = ""
    for(let i=0;i<conversionMatrix.length;i++){
        
        results+= `
                <div class="finalResult-card">
                <h3 class="finalResult-header">${conversionMatrix[i].unit} (${conversionMatrix[i]   .fromUnit}/${conversionMatrix[i].toUnit})
                </h3>
                <p class="finalResult-para">${number} ${conversionMatrix[i].fromUnit} = ${conversionMatrix[i].convert(number)} ${conversionMatrix[i].toUnit} | ${number} ${conversionMatrix[i].toUnit} = ${conversionMatrix[i].convertBack(number)} ${conversionMatrix[i].fromUnit} </p>
                </div>
        `
        console.log()
    }
    resultCard.innerHTML = results
    
}