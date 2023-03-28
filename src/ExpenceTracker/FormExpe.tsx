import {
	FormLabel,
	FormControl,
	Select,
	Button,
	Input,
	FormHelperText,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { categories } from "./category";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Description field is required." }),
	amount: z.number().min(1),
	category: z.enum(categories, {
		errorMap: () => ({ message: "Category field is required." }),
	}),
});

type FormData = z.infer<typeof schema>;

interface Props {
	onSubmit: (data: FormData) => void;
}

function FormExpe({ onSubmit }: Props) {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});
	console.log(register);

	return (
		<form
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<FormControl mb={4}>
				<FormLabel>Description</FormLabel>
				<Input
					{...register("description")}
					placeholder="Enter Description"
				/>
				{errors.description && (
					<FormHelperText color={"tomato"}>
						{errors.description.message}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Amount</FormLabel>
				<Input
					{...register("amount", { valueAsNumber: true })}
					placeholder="Enter Amount"
					type={"number"}
				/>
				{errors.amount && (
					<FormHelperText color={"tomato"}>
						{errors.amount.message}
					</FormHelperText>
				)}{" "}
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Category</FormLabel>
				<Select {...register("category")} placeholder="Select Category">
					{categories.map((category) => (
						<option value={category} key={category}>
							{category}
						</option>
					))}
				</Select>
				{errors.category && (
					<FormHelperText color={"tomato"}>
						{errors.category.message}
					</FormHelperText>
				)}{" "}
			</FormControl>
			<Button colorScheme="blue" my={3} type="submit">
				Submit
			</Button>
		</form>
	);
}

export default FormExpe;
