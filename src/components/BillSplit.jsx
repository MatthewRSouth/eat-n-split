export default function BillSplit({ selectedFriend }) {
    return (
        <>
            {selectedFriend !== null ? (
                <form className="form-split-bill">
                    <h2>split a bill with {selectedFriend.name}</h2>
                    <label htmlFor="bill">💰Bill Value</label>
                    <input type="number" />
                    <label htmlFor="expense">🏌️‍♀️Your Expense</label>
                    <input type="number" />
                    <label htmlFor="bill">
                        👯‍♂️{selectedFriend.name}'s Expense
                    </label>
                    <input type="number" />
                    <label htmlFor="billpay">🤑 Who is paying the bill?</label>
                    <select name="billpay" id="billpay">
                        <option value="you">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                    <button className="button">Split bill</button>
                </form>
            ) : null}
        </>
    );
}
