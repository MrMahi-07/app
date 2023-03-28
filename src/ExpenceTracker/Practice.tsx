import { useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import ItemCart, { List } from "./ItemCart";
import ItemFilter from "./ItemFilter";
import FormExpe from "./FormExpe";

function Practice() {
	const [transactions, setTransactions] = useState<List[]>([]);

	const handleDelete = (id: number) => {
		setTransactions(
			transactions.filter((transaction) => transaction.id != id)
		);
	};

	const [filterItem, setFilterItem] = useState("");

	const VisibleTrans = filterItem
		? transactions.filter(
				(transaction) => transaction.category === filterItem
		  )
		: transactions;

	return (
		<Container maxW={600} my={6}>
			<Heading p="6" textAlign={"center"}>
				Expense Calculator
			</Heading>
			<FormExpe
				onSubmit={(data) => {
					setTransactions([
						{ ...data, id: transactions.length + 1 },
						...transactions,
					]);
				}}
			></FormExpe>
			<ItemFilter
				onFilter={(item: string) => setFilterItem(item)}
			></ItemFilter>
			<ItemCart
				expenses={VisibleTrans}
				onDelete={handleDelete}
			></ItemCart>
		</Container>
	);
}

export default Practice;
