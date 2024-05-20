import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
    budget: {
        type: Number,
        required: [true, "Please provide the budget amout."],
        min: [0, "Budget cannot be negative."]
    },
    description: {
        type: String,
        required: [true, "Please give the description."],
        trim: true
    },
    date: {
        type: Date,
        default: Date.now 
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
}, {
    timestamps: true,
    versionKey: false
});

// Ensuring the model is not re-compiled if it's already in the models collection
const Budget = mongoose.models.Budgets || mongoose.model("Budgets", budgetSchema);

export default Budget;
