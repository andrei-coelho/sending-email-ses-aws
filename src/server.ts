import AWS from 'aws-sdk' 
import { join } from 'path';

AWS.config.loadFromPath(join(__dirname, '../config.production.json'))

let v = "andrei!";

let params = {
    Destination: { 
      ToAddresses: [
        'andreifcoelho@gmail.com',
      ]
    },
    Message: { 
      Body: {
        Html: {
         Charset: "UTF-8",
         Data: `<html lang="pt-br">
         <head>
             <meta charset="UTF-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Email teste</title>
         </head>
         <body>
             <h1>Ficou bom?</h1>
             <p>Estou testando umas tags para ver como fica</p>
         </body>
         </html>`
        },
       },
       Subject: {
        Charset: 'UTF-8',
        Data: 'Último teste usando o servidor com HTML'
       }
      },
    Source: 'atendimento@sindcelmatecnologia.com.br',
  };

  var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
