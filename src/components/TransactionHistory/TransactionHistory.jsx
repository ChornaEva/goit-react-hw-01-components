import PropTypes from "prop-types";
import {
  TransactionTable,
  TableHead,
  TableColumn,
  TableRow,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableColumn>{type}</TableColumn>
            <TableColumn>{amount}</TableColumn>
            <TableColumn>{currency}</TableColumn>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
export default TransactionHistory;
