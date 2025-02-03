const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['income', 'expense'],
      required: true,
    },
    category: {
      type: String,
      enum: ['salary', 'education', 'health', 'food', 'transportation', 'entertainment', 'utilities', 'others'],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Finance', financeSchema);
