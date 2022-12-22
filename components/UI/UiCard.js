import styles from "./Card.module.scss";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Card, Row, Text } from "@nextui-org/react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CartContext from "../../Context/CartContext";
import { useContext } from "react";

export default function UiCard({ products }) {
	const { addItemToCart } = useContext(CartContext);

		const dosfunciones = (products) => {
			toast(<Row><img src={products.image} style={{width:"65px", height:"65px", marginRight:"20px"}} /><Text h3>{products.name} </Text></Row> , {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
			addItemToCart(products);
		}

	return (
		<>
		<ToastContainer/>
		<Card shadow css={{ width: "300px", height: "400px" }}>
			<Card.Image
				src={products.image}
				objectFit="cover"
				width="100%"
				height="240px"
				alt={products.name}
			/>
			<Card.Body height="100px" css={{ overflow: "hidden" }}>
				<Text h4>{products.name}</Text>
				<Text>{products.description}</Text>
			</Card.Body>
			<Card.Divider />
			<Card.Footer height="60px">
				<Row
					justify="space-between"
					align="center"
					style={{ backgroundColor: "transparent" }}
				>
					<Text css={{ marginRight: "10px" }}>${products.price}</Text>
					<button
						className={styles.button}
						onClick={(() => dosfunciones(products))}
						style={{
							backgroundColor: "transparent",
							cursor: "pointer",
							border: "none",
						}}
					>
						<AddCircleRoundedIcon color="action" />
					</button>
				</Row>
			</Card.Footer>
		</Card>
		</>		
		
	);
}
