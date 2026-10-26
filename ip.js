// מחזיר את כתובת ה-IP של הגולש (Vercel Serverless Function)
module.exports = function handler(req, res) {
  var xff = req.headers['x-forwarded-for'] || '';
  var ip = String(xff).split(',')[0].trim() || req.headers['x-real-ip'] || '';
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.statusCode = 200;
  res.end(JSON.stringify({ ip: ip }));
};
