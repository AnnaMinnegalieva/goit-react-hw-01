import styles from "./TransactionHistory.module.css"; 

const TransactionHistory = ({ items }) => {
    return (
<table className={styles.table}>
    <thead>
        <tr className={styles.list}>
            <th className={styles.listItem}>Type</th>
            <th className={styles.listItem}>Amount</th>
            <th className={styles.listItem}>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.data}>
                <td className={styles.dataItem}>{type}</td>
                <td className={styles.dataItem}>{amount}</td>
                <td className={styles.dataItem}>{currency}</td>
            </tr>
        ))}
    </tbody>
</table>
);
};

export default TransactionHistory;