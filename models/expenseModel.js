import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    expense : {
        type : Number,
        required : [true, "Please provide the expense amount."],
        min : [0, "Expense amount must be greater than or equal to zero."],
    },
    description : {
        type : String,
        required : [true, "Please give the description."],
        trim : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true 
    }
}, {timestamps : true, versionKey : false})

const Expense = mongoose.model.expenses || mongoose.model("Expense", expenseSchema)
export default Expense;