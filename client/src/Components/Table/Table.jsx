import styles from './table.module.css'
const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>S.no &#8593;</td>
          <td>Date &#8595;</td>
          <td>On</td>
          <td>Category</td>
          <td>Type</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1.</td>
          <td>10/12/1999</td>
          <td>Khana</td>
          <td>Something</td>
          <td>Need</td>
        </tr>
        <tr>
          <td colSpan={5} rowSpan={4} className={styles.nodata}>No Expense to show</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
