class ExpenseLog {
   // date:string;
    category: string;
    cost: number;
    constructor(category: string, cost: number) {
        //this.date =date
        this.category = category;
        this.cost = cost;
    }
}



class Food {
    foodList: ExpenseLog[];//List<amout> =[ amt1, amt2]
    
    listOfCat:Record<string,number>;
    constructor(expense:ExpenseLog[]) {
        //console.log(typeof foodList)
        this.foodList = expense;
        this.listOfCat = {};
        this.createListofCat();
        //this.total_amount = this.calculateTotalamount();
    }
    createListofCat(){
        for(var i =0;i<this.foodList.length;i++){
            let categ = this.foodList[i].category;
            let cosst = this.foodList[i].cost
            if(this.listOfCat[categ]){
                this.listOfCat[categ] = this.listOfCat[categ] + cosst;
            }
            else{
                this.listOfCat[categ] = cosst
            }
        }
    }
    displayExpense()
    {
        const budgetList:Record<string,any>[] = [];
        let categoryNames = Object.keys(this.listOfCat);
        for(var i = 0; i< categoryNames.length;i++){
            let budgetRecord:Record<string,any> = {}
            budgetRecord["category"] = categoryNames[i];
            budgetRecord["total"] = this.listOfCat[categoryNames[i]]
            budgetList.push(budgetRecord)
        }
        return budgetList;
    }
}
//new List("online", 1000)
let expense1 = [
new ExpenseLog("hotel", 1000),
new ExpenseLog("online", 1000),
new ExpenseLog("grocery", 1000),
new ExpenseLog("hotel", 1000),
new ExpenseLog("grocery", 1000),
new ExpenseLog("hotel", 1000)
]
let food1 = new Food(expense1)
console.log(food1.displayExpense())
