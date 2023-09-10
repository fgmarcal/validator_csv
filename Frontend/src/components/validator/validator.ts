
export class Validator{


    validatePrice = (sellingPrice:string, costPrice:string, newPrice: string)=>{
        const refactoredSelling = Number(sellingPrice);
        const refactoredCost = Number(costPrice);
        const refactoredNewPrice = Number(newPrice)
        return refactoredNewPrice > refactoredSelling && (refactoredSelling / refactoredCost > 1.1 || refactoredSelling / refactoredCost < 0.9) ?
        true : false 
    }

    clearData = (arr:string[][])=>{
        const newArr = arr.map((el) => el.pop());
        return newArr.flat()
    }

    
        
}