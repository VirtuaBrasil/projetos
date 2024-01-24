const User = require('../models/User');

exports.calculateNotes = async (req, res) => {
    const { email, amount } = req.body;
    const user = await User.findOne({ email: email });

    if (!user || user.balance < amount) {
        return res.status(400).json({ error: 'Saldo insuficiente ou usuário não encontrado' });
    }

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Valor inválido para saque' });
    }

    const notesAvailable = [100, 50, 20, 10];
    let remainingAmount = amount;
    let notes = {};

    for (let note of notesAvailable) {
        let count = Math.floor(remainingAmount / note);
        if (count > 0) {
            notes[note] = count;
            remainingAmount -= note * count;
        }
    }

    if (remainingAmount > 0) {
        return res.status(400).json({ error: 'Não é possível sacar o valor solicitado com as notas disponíveis' });
    }

    user.balance -= amount;
    await user.save();

    res.status(200).json({ notes, newBalance: user.balance });
};
