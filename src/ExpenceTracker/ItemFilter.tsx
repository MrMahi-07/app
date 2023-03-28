import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { categories } from "./category";

interface Props {
	onFilter: (item: string) => void;
}

function ItemFilter({ onFilter }: Props) {
	return (
		<FormControl display={"flex"} my={5}>
			<FormLabel my={"auto"}>Filter</FormLabel>
			<Select
				placeholder="Select Category"
				onChange={(e) => onFilter(e.target.value)}
			>
				{categories.map((category) => (
					<option value={category} key={category}>
						{category}
					</option>
				))}
			</Select>
		</FormControl>
	);
}

export default ItemFilter;
