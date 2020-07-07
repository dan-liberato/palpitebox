import moment from "moment";
import {GoogleSpreadsheet} from "google-spreadsheet";
import {fromBase64} from "../../utils/base64";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const getCoupon = () => {
	const code = parseInt(moment().format("YYMMDDHHmmssSSS")).toString(16).toUpperCase();
	return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
}

export default async (req, res) => {
	try {
		await doc.useServiceAccountAuth({
			client_email: process.env.SHEET_CLIENT_EMAIL,
			private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
		});
		await doc.loadInfo();

		const sheet = doc.sheetsByIndex[1];
		const data = JSON.parse(req.body);

		const sheetConfig = doc.sheetsByIndex[2];
		await sheetConfig.loadCells("A2:B2");

		const promoCell = sheetConfig.getCell(1, 0);
		const textCell = sheetConfig.getCell(1, 1);

		let Cupom = "";
		let Promo = "";

		if (promoCell.value === "VERDADEIRO") {
			Cupom = getCoupon();
			Promo = textCell.value;
		}

		await sheet.addRow({
			Nome: data.Nome,
			Email: data.Email,
			Whatsapp: data.Whatsapp,
			Nota: parseInt(data.Nota),
			Cupom,
			Promo,
			"Data Preenchimento": moment().format("DD/MM/YYYY, HH:mm:ss")
		});

		res.end(JSON.stringify({
			showCoupon: Cupom !== "",
			Cupom,
			Promo
		}));

	} catch (error) {
		res.end("error" + error);
	}

	res.end(req.body);
}
