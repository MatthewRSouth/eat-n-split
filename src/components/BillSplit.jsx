import { useState } from 'react';

export default function BillSplit({ selectedFriend, onSplitBill }) {
    const [billValue, setBillValue] = useState('');
    const [yourExpense, setYourExpense] = useState('');
    const [payingBill, setPayingBill] = useState('you');

    const friendExpense = billValue
        ? Number(billValue) - Number(yourExpense)
        : '';

    function handleSubmit(e) {
        e.preventDefault();
        const friend = {
            id: selectedFriend.id,
            bill: billValue,
            yourExpense: Number(yourExpense),
            friendExpense: Number(friendExpense),
            balance: Number(yourExpense) - Number(friendExpense),
            payBill: payingBill,
        };
        onSplitBill(friend);
    }
    return (
        <>
            {selectedFriend !== null ? (
                <form className="form-split-bill" onSubmit={handleSubmit}>
                    <h2>split a bill with {selectedFriend.name}</h2>
                    <label htmlFor="bill">💰Bill Value</label>
                    <input
                        type="number"
                        value={billValue}
                        onChange={(e) => setBillValue(Number(e.target.value))}
                    />
                    <label htmlFor="expense">🏌️‍♀️Your Expense</label>
                    <input
                        type="number"
                        value={yourExpense}
                        onChange={(e) => setYourExpense(Number(e.target.value))}
                    />
                    <label htmlFor="bill">
                        👯‍♂️{selectedFriend.name}'s Expense
                    </label>
                    <input type="number" value={friendExpense} disabled />
                    <label htmlFor="billpay">🤑 Who is paying the bill?</label>
                    <select
                        name="billpay"
                        id="billpay"
                        value={payingBill}
                        onChange={(e) => setPayingBill(e.target.value)}
                    >
                        <option value="you">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                    <button className="button">Split bill</button>
                </form>
            ) : null}
        </>
    );
}
