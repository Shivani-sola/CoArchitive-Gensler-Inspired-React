# Enquiry form → spreadsheet + email

The contact form posts to a Google Apps Script web app. The script appends one
row per enquiry to a Google Sheet and emails the details to the office inbox.

Nothing here costs money, and it all lives in the CoArchitive Google account —
no third-party form service, no server to maintain.

Until `VITE_ENQUIRY_ENDPOINT` is set, the form falls back to opening the
visitor's own mail client with the enquiry pre-filled, so a submission is never
silently discarded.

---

## 1. Make the spreadsheet

1. Go to <https://sheets.new> and name it **CoArchitive — Website Enquiries**.
2. Put these headers in row 1, starting at A1:

   | A | B | C | D | E | F |
   |---|---|---|---|---|---|
   | Received | Name | Email | Organisation | About | Message |

## 2. Add the script

In that spreadsheet: **Extensions → Apps Script**. Delete whatever is in the
editor and paste this in full:

```javascript
// Receives enquiries from the CoArchitive website.
// Appends a row to this spreadsheet, then emails the details on.

var NOTIFY = 'coarchitive@gmail.com';   // who gets the email

function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);

    // a filled honeypot means a bot: accept silently, record nothing
    if (d.company_website) return ok();

    SpreadsheetApp.getActiveSpreadsheet()
      .getSheets()[0]
      .appendRow([
        new Date(),
        d.name || '',
        d.email || '',
        d.org || '',
        d.topic || '',
        d.message || ''
      ]);

    MailApp.sendEmail({
      to: NOTIFY,
      replyTo: d.email || NOTIFY,       // hit Reply to answer the enquirer
      subject: 'Website enquiry — ' + (d.name || 'no name'),
      body:
        'Name: '         + (d.name    || '-') + '\n' +
        'Email: '        + (d.email   || '-') + '\n' +
        'Organisation: ' + (d.org     || '-') + '\n' +
        'About: '        + (d.topic   || '-') + '\n\n' +
        (d.message || '')
    });

    return ok();
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Change `NOTIFY` if enquiries should go somewhere other than the main inbox.
Several addresses work too: `'one@x.com,two@x.com'`.

## 3. Publish it

1. **Deploy → New deployment**
2. Gear icon → **Web app**
3. **Execute as:** Me
4. **Who has access:** **Anyone** — required, or the website cannot reach it.
   This does not expose the spreadsheet; the script only accepts writes.
5. **Deploy**, then **Authorize access** and allow the permissions it asks for
   (it needs to write the sheet and send mail as you).
6. Copy the **Web app URL**. It looks like
   `https://script.google.com/macros/s/AKfy.../exec`

## 4. Tell the website about it

In Vercel: **Project → Settings → Environment Variables**

| Field | Value |
|---|---|
| Key | `VITE_ENQUIRY_ENDPOINT` |
| Value | the `/exec` URL from step 3 |
| Environments | Production, Preview, Development |

Then **redeploy** — Vite bakes `VITE_*` variables in at build time, so an
existing deployment will not pick it up. Deployments → latest → ⋯ → Redeploy.

## 5. Check it

Submit a real enquiry on the live site. Within a few seconds a row should
appear in the sheet and an email in the inbox.

If nothing arrives:

- **Executions** in the Apps Script editor shows every call and its error.
- Re-check that access is **Anyone**, not "Anyone with Google account".
- After *any* script edit you must **Deploy → Manage deployments → Edit →
  New version**, otherwise the old code keeps running.

---

## Notes

- **Limits.** A free Gmail account sends 100 script emails a day — far above
  enquiry volume. The sheet is the record of truth regardless; email is only the
  notification.
- **Spam.** A hidden honeypot field catches naive bots. If spam ever gets
  through, add a CAPTCHA rather than removing the honeypot.
- **Privacy.** Enquiries contain personal data. Keep the sheet restricted to
  people who need it, and mention on the contact page how long you keep it if
  you need to satisfy a privacy policy.
