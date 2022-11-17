import type { NextApiRequest, NextApiResponse } from 'next';
import {google} from "googleapis";
import { SheetForm } from "../../components/rsvp";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = req.body as SheetForm

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })

    const sheets = google.sheets({
        auth,
        version: 'v4'
    });
    
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:D1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [body.name, body.attend, body.guests, body.message]
            ]
        }
    });

    return res.status(201).json({
        data: response.data
    })
}