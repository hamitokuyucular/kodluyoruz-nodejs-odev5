/*
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require("node:http")

const server = http.createServer((req, res) =>{

  const url = req.url

  if (url === "/") {
    res.writeHead(200, {"Content-Type" : "text/html; charset= utf-8"});
    res.write("<h2>ANA SAYFAYA HOŞGELDİNİZ</h2>");
  } else if (url === "/about") {
    res.writeHead(200, {"Content-Type" : "text/html; charset= utf-8"});
    res.write("<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, {"Content-Type" : "text/html; charset= utf-8"});
    res.write("<h2>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h2>");
  } else {
    res.writeHead(404, {"Content-Type" : "text/html; charset= utf-8"});
    res.write("<h2>404 NOT FOUND</h2>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu, ${port} portunda başlatıldı.`);
});

