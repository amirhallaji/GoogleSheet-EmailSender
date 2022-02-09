function sendEmail() {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName('Overall') // The name of your sheet which is at the bottom of the page.
  const headers = ws.getRange('A2:H49').getDisplayValues() // The range of the cells you want to read data from.


  for (var data in headers) {

    const name = headers[data][0];
    const email = headers[data][2];
    const ex1 = headers[data][3];
    const ex2 = headers[data][4];
    const ex3 = headers[data][5];
    const ex4 = headers[data][6];
    const project = headers[data][7];

    const htmlTemplate = HtmlService.createTemplateFromFile('Template'); // The name of your HTML file you add to gs file.

    htmlTemplate.name = name;
    htmlTemplate.email = email;
    htmlTemplate.ex1 = ex1;
    htmlTemplate.ex2 = ex2;
    htmlTemplate.ex3 = ex3;
    htmlTemplate.ex4 = ex4;
    htmlTemplate.project = project;

    const htmlForEmail = htmlTemplate.evaluate().getContent();

    var toEmail = email;

    MailApp.sendEmail({
      to: toEmail,
      // cc: ccs, // In case you want to use CC.
      subject: "نمرات حل تمرین هوش محاسباتی پاییز ۱۴۰۰",
      htmlBody: htmlForEmail
    });

  }
}