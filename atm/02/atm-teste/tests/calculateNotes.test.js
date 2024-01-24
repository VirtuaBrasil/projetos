const { calculateNotes } = require('../controllers/transactionController');

describe('calculateNotes', () => {
    let mockReq, mockRes;

    beforeEach(() => {
        mockReq = {};
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
    });

    it('deve retornar a combinação correta de notas para R$ 30', () => {
        mockReq.body = { amount: 30 };
        calculateNotes(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ '20': 1, '10': 1 });
    });

    it('deve retornar a combinação correta de notas para R$ 80', () => {
        mockReq.body = { amount: 80 };
        calculateNotes(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ '50': 1, '20': 1, '10': 1 });
    });

    it('deve retornar null para valores que não podem ser sacados', () => {
        mockReq.body = { amount: 5 };
        calculateNotes(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(400);
        expect(mockRes.send).toHaveBeenCalledWith('Não é possível sacar o valor solicitado com as notas disponíveis');
    });

    it('deve retornar a combinação correta para valores altos', () => {
        mockReq.body = { amount: 380 };
        calculateNotes(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.json).toHaveBeenCalledWith({ '100': 3, '50': 1, '20': 1, '10': 1 });
    });
});
