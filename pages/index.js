import React from "react";
import Link from "next/link";
import useSWR from "swr";

import PageTitle from "../components/PageTitle";
import styles from "./styles.module.css";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Home = () => {
	const { data, error } = useSWR("/api/get-promo", fetcher);

	return (
		<div>
			<PageTitle title="Seja bem vindo" />
			<p className={styles.description}>
				O restaurante X sempre busca por atender melhor seus clientes. <br />
				Por isso, estamos sempre abetos a ouvir a sua opinião.
			</p>

			<div className={styles.button}>
				<Link href="/opiniao">
					<a className={styles.button__link}>Dar opinião ou sugestão</a>
				</Link>
			</div>

			{ !data && <p>Carregando...</p> }
			{ !error && data && data.showCoupon && (

				<p className={styles.message}>
					{ data.message }
				</p>
			)}

		</div>
	);
};

export default Home;
