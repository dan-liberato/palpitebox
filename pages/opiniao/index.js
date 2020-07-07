import React, { useState } from "react";

import PageTitle from "../../components/PageTitle";
import styles from "./styles.module.css";

const Search = () => {
	const [form, setForm] = useState({
		Nome: "",
		Email: "",
		Whatsapp: "",
		Nota: 0
	});
	const [success, setSuccess] = useState(false);
	const [retorno, setRetorno] = useState({});
	const notas = [0, 1, 2, 3, 4, 5];

	const save = async () => {
		try {
			const response = await fetch("/api/save", {
				method: "POST",
				body: JSON.stringify(form)
			});

			const data = await response.json();
			setSuccess(true);
			setRetorno(data);
		} catch (error) {
			console.error = (error) => {  // eslint-disable-line no-console
				throw new Error(error.message);
			}
		}
	}

	const onChange = (event) => {
		const value = event.target.value;
		const key = event.target.name;

		setForm(old => ({
			...old,
			[key]: value,
		}));
	}

	return (
		<div className={styles.container}>
			<PageTitle title="Pesquisa" />
			<h1 className={styles.title}>Críticas e sugestões</h1>

			<p className={styles.description}>
				O restaurante X sempre busca por atender melhor seus clientes. <br />
				Por isso, estamos sempre abertos a ouvir a sua opinião.
			</p>

			{!success &&
				<div className={styles.form}>
					<label className={styles.form__label} htmlFor="name">Seu nome:</label>
					<input
						type="text"
						className={styles.form__input}
						placeholder="Nome"
						name="Nome"
						value={form.Nome}
						onChange={onChange}
					/>

					<label className={styles.form__label} htmlFor="email">Seu e-mail:</label>
					<input
						type="email"
						className={styles.form__input}
						placeholder="E-mail"
						name="Email"
						value={form.Email}
						onChange={onChange}
					/>

					<label className={styles.form__label} htmlFor="whatsapp">Whatsapp:</label>
					<input
						type="text"
						className={styles.form__input}
						placeholder="Celular"
						name="Whatsapp"
						value={form.Whatsapp}
						onChange={onChange}
					/>

					<label className={styles.form__label} htmlFor="Nota">Nota:</label>
					<div className={styles.note}>

						{notas.map( (nota, index) => {
							return (
								<label className={styles.note__label} key={index.toString()}>
									{nota} <br />
									<input
										type="radio"
										name="Nota"
										value={nota}
										onChange={onChange}
									/>
								</label>
							);
						})}

					</div>

					<button className={styles.form__button} onClick={save}>Enviar</button>
				</div>
			}

			{success &&
				<div>
					<p className={styles.banner__info}>Obrigado por contribuir com sua sugestão ou crítica.</p>
					{
						retorno.showCoupon &&
							<div className={styles.coupon}>
								Seu cupom: <br />
								<span className={styles.coupon__code}>{retorno.Cupom}</span>
							</div>
					}
					{
						retorno.showCoupon &&
							<div className={styles.promo}>
								<span className={styles.promo__text}>{retorno.Promo}</span>
								<br />
								<span className={styles.promo__obs}>
									Obs.: Tire um print ou foto desta tela e apresente ao caixa.
								</span>
							</div>
					}
				</div>
			}
		</div>
	);
};

export default Search;
