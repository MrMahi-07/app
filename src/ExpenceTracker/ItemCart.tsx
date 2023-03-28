import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
} from "@chakra-ui/react";
import { number } from "zod";

export interface List {
	id: number;
	description: string;
	amount: number;
	category: string;
}
interface Props {
	expenses: List[];
	onDelete: (id: number) => void;
}

function ItemCart({ expenses, onDelete }: Props) {
	if (expenses.length == 0) return null;
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>All Expenses List</TableCaption>
				<Thead>
					<Tr>
						<Th>Description</Th>
						<Th>Amount</Th>
						<Th>Category</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{expenses.map((expense) => (
						<Tr key={expense.id}>
							<Td>{expense.description}</Td>
							<Td>${expense.amount}</Td>
							<Td>{expense.category}</Td>
							<Td>
								<Button
									colorScheme="red"
									variant="outline"
									size={"sm"}
									onClick={() => onDelete(expense.id)}
								>
									Delete
								</Button>
							</Td>
						</Tr>
					))}
				</Tbody>
				<Tfoot>
					<Tr>
						<Th>Total</Th>
						<Th>
							$
							{expenses.reduce(
								(acc, currVal) => currVal.amount + acc,
								0
							)}
						</Th>
						<Th></Th>
					</Tr>
				</Tfoot>
			</Table>
		</TableContainer>
	);
}

export default ItemCart;
