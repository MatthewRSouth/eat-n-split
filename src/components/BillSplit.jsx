export default function BillSplit() {
    return (
        <form className="form-split-bill">
            <h2>split a bill with friendName</h2>
            <label htmlFor="bill">💰Bill Value</label>
            <input type="number" />
            <label htmlFor="expense">🏌️‍♀️Your Expense</label>
            <input type="number" />
            <label htmlFor="bill">👯‍♂️friendName Expense</label>
            <input type="number" />
            <label htmlFor="billpay">🤑 Who is paying the bill?</label>
            <select name="billpay" id="billpay">
                <option value="you">You</option>
                <option value="friend">friendName</option>
            </select>
        </form>
    );
}
