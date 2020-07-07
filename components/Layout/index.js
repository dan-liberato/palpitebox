import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./styles.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.app}>
			<Header />

			<div className={styles.container}>
				{children}
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
