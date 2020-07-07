import {GoogleSpreadsheet} from "google-spreadsheet";
import {fromBase64} from "../../utils/base64";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
	try {
		await doc.useServiceAccountAuth({
			client_email: process.env.SHEET_CLIENT_EMAIL,
			private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
		});
		await doc.loadInfo();

		const sheet = doc.sheetsByIndex[2];
		await sheet.loadCells("A2:B2");

		const promoCell = sheet.getCell(1, 0);
		const textCell = sheet.getCell(1, 1);

		res.end(JSON.stringify({
			showCoupon: promoCell.value === "VERDADEIRO",
			message: textCell.value
		}));

	} catch (error) {
		res.end(JSON.stringify({
			showCoupon: false,
			message: ""
		}));
	}
};
