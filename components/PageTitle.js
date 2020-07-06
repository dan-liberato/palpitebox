import React from "react"
import Head from "next/head"

const PageTitle = ({title}) => {
	return (
		<Head>
			<title>{title} - PalpiteBox</title>
			<link rel="shortcut icon" href="/favicon.png" />
			<meta property="og:title" content={title} key="title" />
		</Head>
	)
}

export default PageTitle